"use client";

import { useState, useEffect } from "react";
import { collection, query, where, onSnapshot, orderBy, getDoc, doc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { QRCodeSVG } from "qrcode.react";

interface Application {
  id: string;
  applicationId: string;
  jenisBantuan: string;
  justifikasi: string;
  status: string;
  userEmail: string;
  createdAt: any;
}

interface SlotDetails {
  location: string;
  date: string;
  time: string;
}

interface QRModal {
  studentName: string;
  slot: SlotDetails;
}

export default function RekodBantuan() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [qrModal, setQrModal] = useState<QRModal | null>(null);
  const [loadingQR, setLoadingQR] = useState(false);

  useEffect(() => {
    if (!auth.currentUser) return;

    const q = query(
      collection(db, "applications"),
      where("userEmail", "==", auth.currentUser.email),
      where("status", "==", "completed"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const apps: Application[] = [];
      snapshot.forEach((doc) => {
        apps.push({ id: doc.id, ...doc.data() } as Application);
      });
      setApplications(apps);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleViewQR = async (app: Application & { slotLocation?: string; slotDate?: string; slotTime?: string }) => {
    if (!auth.currentUser) return;
    setLoadingQR(true);

    try {
      const userSnap = await getDoc(doc(db, "users", auth.currentUser.uid));
      const studentName = userSnap.exists() ? userSnap.data().name || auth.currentUser.email : auth.currentUser.email;

      if (!app.slotLocation || !app.slotDate || !app.slotTime) {
        alert("Tiada maklumat slot dijumpai untuk rekod ini.");
        setLoadingQR(false);
        return;
      }

      setQrModal({
        studentName: studentName as string,
        slot: { location: app.slotLocation, date: app.slotDate, time: app.slotTime }
      });
    } catch (err) {
      console.error("Error fetching QR data:", err);
      alert("Gagal memuatkan kupon. Sila cuba lagi.");
    } finally {
      setLoadingQR(false);
    }
  };

  const getJenisBantuanText = (jenis: string) => {
    switch (jenis) {
      case "makanan_asas": return "Bantuan makanan asas";
      case "food_pack": return "Food pack mingguan";
      case "kecemasan": return "Bantuan kecemasan";
      default: return jenis;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">Rekod Bantuan</h1>
          <p className="text-gray-600">Memuatkan...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Rekod Bantuan</h1>

        {applications.length === 0 ? (
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <p className="text-gray-500">Tiada rekod bantuan yang telah selesai.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((app) => (
              <div
                key={app.id}
                className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {getJenisBantuanText(app.jenisBantuan)}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-sm font-medium border bg-green-50 text-green-700 border-green-200">
                      Selesai
                    </span>
                    <button
                      onClick={() => handleViewQR(app)}
                      disabled={loadingQR}
                      className="px-4 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
                    >
                      {loadingQR ? "Memuatkan..." : "Lihat Kupon"}
                    </button>
                  </div>
                </div>

                <div className="text-sm bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs text-gray-400 uppercase">Diluluskan pada</p>
                  <p className="text-gray-800 font-medium">
                    {app.createdAt?.toDate()?.toLocaleDateString("ms-MY")}
                  </p>
                </div>

                {app.justifikasi && (
                  <div className="mt-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                      <p className="text-xs text-gray-400 uppercase mb-2">Justifikasi</p>
                      <p className="text-gray-700 leading-relaxed">{app.justifikasi}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* QR Modal */}
      {qrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 text-center">
              <h2 className="text-xl font-bold">Kupon Pengambilan</h2>
              <p className="text-blue-100 text-sm mt-0.5">Kongsi Rezeki</p>
            </div>

            {/* Body */}
            <div className="p-6">
              {/* QR Code */}
              <div className="flex justify-center mb-4">
                <div className="bg-white p-3 rounded-xl shadow border border-gray-100">
                  <QRCodeSVG
                    value={JSON.stringify({
                      nama: qrModal.studentName,
                      lokasi: qrModal.slot.location,
                      tarikh: qrModal.slot.date,
                      masa: qrModal.slot.time,
                    })}
                    size={160}
                  />
                </div>
              </div>
              <p className="text-center text-xs text-gray-400 mb-5">Imbas kod QR ini semasa pengambilan</p>

              {/* Divider */}
              <div className="border-t-2 border-dashed border-gray-200 my-4 relative">
                <div className="absolute -left-6 -top-3 w-5 h-5 bg-gray-100 rounded-full border border-gray-200"></div>
                <div className="absolute -right-6 -top-3 w-5 h-5 bg-gray-100 rounded-full border border-gray-200"></div>
              </div>

              {/* Details */}
              <div className="bg-blue-50 rounded-xl p-4 space-y-2.5">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Nama Pelajar</span>
                  <span className="text-sm font-semibold text-gray-900">{qrModal.studentName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Lokasi</span>
                  <span className="text-sm font-semibold text-gray-900">{qrModal.slot.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Tarikh</span>
                  <span className="text-sm font-semibold text-gray-900">{qrModal.slot.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500">Masa</span>
                  <span className="text-sm font-semibold text-gray-900">{qrModal.slot.time}</span>
                </div>
              </div>

              <p className="text-center text-xs text-gray-400 mt-4">
                Sila tunjukkan kupon ini semasa pengambilan.
              </p>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 text-center">
              <button
                onClick={() => setQrModal(null)}
                className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
