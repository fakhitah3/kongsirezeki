"use client";

import { useState, useEffect } from "react";
import { collection, query, where, onSnapshot, orderBy, doc, updateDoc, addDoc, serverTimestamp, getDocs } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface Application {
  id: string;
  applicationId: string;
  jenisBantuan: string;
  justifikasi: string;
  status: string;
  userEmail: string;
  createdAt: any;
  userName?: string;
}

interface BantuanDistribution {
  applicationId: string;
  userEmail: string;
  tarikhPengambilan: string;
}

export default function PengurusanBantuan() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [distributing, setDistributing] = useState<string | null>(null);
  const [distributionDate, setDistributionDate] = useState<string>("");

  useEffect(() => {
    const q = query(
      collection(db, "applications"),
      where("status", "==", "assigned"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const apps: Application[] = [];
      for (const docSnapshot of snapshot.docs) {
        const appData = { id: docSnapshot.id, ...docSnapshot.data() } as Application;
        
        // Fetch user name from users collection based on email
        if (appData.userEmail) {
          try {
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

  const handleDistributeAid = async (application: Application) => {
    if (!distributionDate) {
      alert("Sila pilih tarikh pengambilan.");
      return;
    }

    if (!auth.currentUser) return;

    setDistributing(application.id);
    try {
      // Record distribution in bantuan collection
      await addDoc(collection(db, "bantuan"), {
        applicationId: application.applicationId,
        userEmail: application.userEmail,
        tarikhPengambilan: distributionDate,
        distributedBy: auth.currentUser.email,
        distributedAt: serverTimestamp()
      });

      // Update application status to completed
      await updateDoc(doc(db, "applications", application.id), {
        status: "completed",
        completedAt: serverTimestamp()
      });

      // Find user ID to send notification
      const usersQuery = query(collection(db, "users"));
      const usersSnapshot = await getDocs(usersQuery);
      const userDoc = usersSnapshot.docs.find((d: any) => d.data().email === application.userEmail);
      
      if (userDoc) {
        const userId = userDoc.id;
        await addDoc(collection(db, "notifications"), {
          userId,
          title: "Bantuan Selesai",
          message: `Bantuan ${application.jenisBantuan} anda telah diedarkan. Tarikh pengambilan: ${distributionDate}.`,
          type: "completed",
          read: false,
          applicationId: application.applicationId,
          createdAt: serverTimestamp()
        });
      }

      setDistributionDate("");
      alert("Bantuan berjaya diedarkan.");
    } catch (error) {
      console.error("Error distributing aid:", error);
      alert("Gagal mengedarkan bantuan. Sila cuba lagi.");
    } finally {
      setDistributing(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">Pengurusan Bantuan</h1>
          <p className="text-gray-600">Memuatkan...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Pengurusan Bantuan</h1>

        {applications.length === 0 ? (
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <p className="text-gray-500">
              Tiada permohonan yang perlu diedarkan.
            </p>
          </div>
        ) : (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID Permohonan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nama Pelajar
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Jenis Bantuan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tarikh Pengambilan
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tindakan
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applications.map((application) => (
                    <tr key={application.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {application.applicationId}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {application.userName || "-"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {application.userEmail}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {getJenisBantuanText(application.jenisBantuan)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <input
                          type="date"
                          value={distributionDate}
                          onChange={(e) => setDistributionDate(e.target.value)}
                          className="border border-gray-300 rounded px-2 py-1 text-sm"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => handleDistributeAid(application)}
                          disabled={distributing === application.id}
                          className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 disabled:bg-gray-400"
                        >
                          {distributing === application.id ? "Memproses..." : "Edarkan"}
                        </button>
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
