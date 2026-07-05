"use client";

import { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy, doc, updateDoc, getDoc, getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface Application {
  id: string;
  jenisBantuan: string;
  justifikasi: string;
  status: string;
  userEmail: string;
  createdAt: any;
  userName?: string;
}

export default function PengurusanPermohonan() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("");
  const [filterJenis, setFilterJenis] = useState<string>("");
  const [filterTindakan, setFilterTindakan] = useState<string>("");

  useEffect(() => {
    const q = query(
      collection(db, "applications"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const apps: Application[] = [];
      for (const docSnapshot of snapshot.docs) {
        const appData = { id: docSnapshot.id, ...docSnapshot.data() } as Application;
        
        // Fetch user name from users collection based on email
        if (appData.userEmail) {
          try {
            // Query users by email field
            const usersQuery = query(collection(db, "users"));
            const usersSnapshot = await getDocs(usersQuery);
            const userDoc = usersSnapshot.docs.find((d: any) => d.data().email === appData.userEmail);
            if (userDoc) {
              appData.userName = userDoc.data().name;
            }
          } catch (error) {
            console.error("Error fetching user name:", error);
          }
        }
        
        apps.push(appData);
      }
      setApplications(apps);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateApplicationStatus = async (applicationId: string, newStatus: string) => {
    setUpdating(applicationId);
    try {
      const application = applications.find(app => app.id === applicationId);
      if (!application) return;

      const oldStatus = application.status;
      
      await updateDoc(doc(db, "applications", applicationId), {
        status: newStatus,
        updatedAt: new Date()
      });

      // Create notification if status changed from pending to approved or rejected
      if (oldStatus === "pending" && (newStatus === "approved" || newStatus === "rejected")) {
        // Find user ID from users collection
        const usersQuery = query(collection(db, "users"));
        const usersSnapshot = await getDocs(usersQuery);
        const userDoc = usersSnapshot.docs.find((d: any) => d.data().email === application.userEmail);
        
        if (userDoc) {
          const userId = userDoc.id;
          const title = newStatus === "approved" ? "Permohonan Diluluskan" : "Permohonan Ditolak";
          const message = newStatus === "approved" 
            ? `Permohonan ${application.jenisBantuan} anda telah diluluskan. Sila pilih slot pengambilan.`
            : `Permohonan ${application.jenisBantuan} anda telah ditolak.`;
          
          await addDoc(collection(db, "notifications"), {
            userId,
            title,
            message,
            type: newStatus,
            read: false,
            applicationId,
            createdAt: serverTimestamp()
          });
        }
      }
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

        {/* Filters */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
              >
                <option value="">Semua</option>
                <option value="pending">Menunggu</option>
                <option value="approved">Diluluskan</option>
                <option value="rejected">Ditolak</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Bantuan</label>
              <select
                value={filterJenis}
                onChange={(e) => setFilterJenis(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
              >
                <option value="">Semua</option>
                <option value="makanan_asas">Bantuan makanan asas</option>
                <option value="food_pack">Food pack mingguan</option>
                <option value="kecemasan">Bantuan kecemasan</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tindakan</label>
              <select
                value={filterTindakan}
                onChange={(e) => setFilterTindakan(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:border-blue-500 focus:outline-none"
              >
                <option value="">Semua</option>
                <option value="pending">Belum diproses</option>
                <option value="processed">Sudah diproses</option>
              </select>
            </div>
          </div>
        </div>

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
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tindakan
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applications
                    .filter((app) => {
                      if (filterStatus && app.status !== filterStatus) return false;
                      if (filterJenis && app.jenisBantuan !== filterJenis) return false;
                      if (filterTindakan === "pending" && app.status !== "pending") return false;
                      if (filterTindakan === "processed" && app.status === "pending") return false;
                      return true;
                    })
                    .map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {app.createdAt?.toDate()?.toLocaleDateString("ms-MY")}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {app.userName || app.userEmail?.split("@")[0]}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {app.userEmail}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {getJenisBantuanText(app.jenisBantuan)}
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
