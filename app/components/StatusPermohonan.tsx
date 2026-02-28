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
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "approved":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
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
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Status Permohonan</h1>

        {applications.length === 0 ? (
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <p className="text-gray-600">Tiada permohonan dijumpai.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((app) => (
              <div key={app.id} className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {getJenisBantuanText(app.jenisBantuan)}
                    </h3>
                    <p className="text-sm text-gray-600">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-gray-700">Status Kewangan:</p>
                    <p className="text-gray-600">{app.statusKewangan}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Dihantar pada:</p>
                    <p className="text-gray-600">
                      {app.createdAt?.toDate()?.toLocaleDateString("ms-MY")}
                    </p>
                  </div>
                </div>

                {app.justifikasi && (
                  <div className="mt-4">
                    <p className="font-medium text-gray-700">Justifikasi:</p>
                    <p className="text-gray-600 bg-gray-50 p-3 rounded">
                      {app.justifikasi}
                    </p>
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
