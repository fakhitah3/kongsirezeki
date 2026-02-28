"use client";

import { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface Application {
  id: string;
  jenisBantuan: string;
  fakulti: string;
  semester: string;
  statusKewangan: string;
  justifikasi: string;
  status: string;
  userId: string;
  userEmail: string;
  createdAt: any;
}

export default function PengurusanPermohonan() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);

  useEffect(() => {
    const q = query(
      collection(db, "applications")
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

  const updateApplicationStatus = async (applicationId: string, newStatus: string) => {
    setUpdating(applicationId);
    try {
      await updateDoc(doc(db, "applications", applicationId), {
        status: newStatus,
        updatedAt: new Date()
      });
    } catch (error) {
      console.error("Error updating application:", error);
      alert("Gagal mengemaskini status permohonan");
    } finally {
      setUpdating(null);
    }
  };

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
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">Pengurusan Permohonan</h1>
          <p className="text-gray-600">Memuatkan...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Pengurusan Permohonan</h1>

        {applications.length === 0 ? (
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <p className="text-gray-600">Tiada permohonan dijumpai.</p>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tarikh
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Pelajar
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Jenis Bantuan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fakulti
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tindakan
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applications.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {app.createdAt?.toDate()?.toLocaleDateString("ms-MY")}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {app.userEmail?.split("@")[0]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {app.userEmail}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {getJenisBantuanText(app.jenisBantuan)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {app.fakulti}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                            app.status
                          )}`}
                        >
                          {getStatusText(app.status)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {app.status === "pending" && (
                          <div className="flex space-x-2">
                            <button
                              onClick={() => updateApplicationStatus(app.id, "approved")}
                              disabled={updating === app.id}
                              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs disabled:opacity-50"
                            >
                              {updating === app.id ? "..." : "Luluskan"}
                            </button>
                            <button
                              onClick={() => updateApplicationStatus(app.id, "rejected")}
                              disabled={updating === app.id}
                              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs disabled:opacity-50"
                            >
                              {updating === app.id ? "..." : "Tolak"}
                            </button>
                          </div>
                        )}
                        {app.status !== "pending" && (
                          <span className="text-gray-500 text-xs">Selesai diproses</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
