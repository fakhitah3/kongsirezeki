"use client";

import { useState, useEffect } from "react";
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface Application {
  id: string;
  jenisBantuan: string;
  fakulti: string;
  semester: string;
  statusKewangan: string;
  justifikasi: string;
  status: string;
  createdAt: any;
}

export default function StatusPermohonan() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth.currentUser) return;

    const q = query(
      collection(db, "applications"),
      where("userId", "==", auth.currentUser.uid)
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-50 text-yellow-700 border-yellow-200";
      case "approved":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "rejected":
        return "bg-red-50 text-red-700 border-red-200";
      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "Menunggu";
      case "approved":
        return "Diluluskan";
      case "rejected":
        return "Ditolak";
      default:
        return status;
    }
  };

  const getJenisBantuanText = (jenis: string) => {
    switch (jenis) {
      case "makanan_asas":
        return "Bantuan makanan asas";
      case "food_pack":
        return "Food pack mingguan";
      case "kecemasan":
        return "Bantuan kecemasan";
      default:
        return jenis;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">Status Permohonan</h1>
          <p className="text-gray-600">Memuatkan...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Status Permohonan</h1>

        {applications.length === 0 ? (
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <p className="text-gray-500">
              Anda belum membuat sebarang permohonan lagi.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((app) => (
              <div
                key={app.id}
                className="bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {getJenisBantuanText(app.jenisBantuan)}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Fakulti: {app.fakulti} | Semester: {app.semester}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(
                      app.status
                    )}`}
                  >
                    {getStatusText(app.status)}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-xl">
                  <div>
                    <p className="text-xs text-gray-400 uppercase">Status Kewangan</p>
                    <p className="text-gray-800 font-medium">{app.statusKewangan}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase">Dihantar pada</p>
                    <p className="text-gray-800 font-medium">
                      {app.createdAt?.toDate()?.toLocaleDateString("ms-MY")}
                    </p>
                  </div>
                </div>

                {app.justifikasi && (
<div className="mt-5">
  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
    
    <p className="text-xs text-gray-400 uppercase mb-2">
      Justifikasi
    </p>

    <p className="text-gray-700 leading-relaxed">
      {app.justifikasi}
    </p>

  </div>
</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
