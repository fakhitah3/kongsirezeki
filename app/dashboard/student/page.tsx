"use client";

import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";
import { useRouter } from "next/navigation";

interface Application {
  id: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  type: string;
}

interface ActiveAid {
  id: string;
  type: string;
  description: string;
  expiryDate: Date;
}

interface Slot {
  id: string;
  date: Date;
  time: string;
  location: string;
  status: 'booked' | 'available';
}

interface Notification {
  id: string;
  type: 'approval' | 'reminder' | 'info';
  message: string;
  createdAt: Date;
  read: boolean;
}

export default function StudentDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [applications, setApplications] = useState<Application[]>([]);
  const [activeAids, setActiveAids] = useState<ActiveAid[]>([]);
  const [nextSlot, setNextSlot] = useState<Slot | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [userEmail, setUserEmail] = useState<string>("");

  useEffect(() => {
    const fetchDashboardData = async () => {
      const user = auth.currentUser;
      if (!user) {
        router.push('/login');
        return;
      }

      setUserEmail(user.email || "");

      try {
        // Fetch applications
        const applicationsQuery = query(
          collection(db, "applications"),
          where("studentEmail", "==", user.email),
          limit(10)
        );
        const applicationsSnapshot = await getDocs(applicationsQuery);
        const applicationsData = applicationsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate()
        })) as Application[];
        setApplications(applicationsData);

        // Fetch active aids
        const activeAidsQuery = query(
          collection(db, "activeAids"),
          where("studentEmail", "==", user.email),
          where("status", "==", "active")
        );
        const activeAidsSnapshot = await getDocs(activeAidsQuery);
        const activeAidsData = activeAidsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          expiryDate: doc.data().expiryDate?.toDate()
        })) as ActiveAid[];
        setActiveAids(activeAidsData);

        // Fetch next slot
        const slotsQuery = query(
          collection(db, "slots"),
          where("studentEmail", "==", user.email),
          where("date", ">=", new Date()),
          where("status", "==", "booked"),
          limit(1)
        );
        const slotsSnapshot = await getDocs(slotsQuery);
        if (!slotsSnapshot.empty) {
          const slotData = {
            id: slotsSnapshot.docs[0].id,
            ...slotsSnapshot.docs[0].data(),
            date: slotsSnapshot.docs[0].data().date?.toDate()
          } as Slot;
          setNextSlot(slotData);
        }

        // Fetch notifications
        const notificationsQuery = query(
          collection(db, "notifications"),
          where("studentEmail", "==", user.email),
          where("read", "==", false),
          limit(5)
        );
        const notificationsSnapshot = await getDocs(notificationsQuery);
        const notificationsData = notificationsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate()
        })) as Notification[];
        setNotifications(notificationsData);

      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [router]);

  const getStatusCount = () => {
    const counts = { pending: 0, approved: 0, rejected: 0 };
    applications.forEach(app => {
      counts[app.status]++;
    });
    return counts;
  };

  const statusCounts = getStatusCount();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto"></div>
          <p className="mt-4 text-gray-600">Memuatkan dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Pelajar</h1>
          <p className="text-gray-600 mt-2">Selamat datang, {userEmail}</p>
        </div>

        {/* Status Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-full">
                <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Menunggu Kelulusan</p>
                <p className="text-2xl font-bold text-yellow-600">{statusCounts.pending}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full">
                <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Diluluskan</p>
                <p className="text-2xl font-bold text-green-600">{statusCounts.approved}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-red-100 rounded-full">
                <div className="w-6 h-6 bg-red-500 rounded-full"></div>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Ditolak</p>
                <p className="text-2xl font-bold text-red-600">{statusCounts.rejected}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active Aids */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold text-gray-900">Bantuan Aktif</h2>
            </div>
            <div className="p-6">
              {activeAids.length > 0 ? (
                <div className="space-y-4">
                  {activeAids.map((aid) => (
                    <div key={aid.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-900">{aid.type}</h3>
                          <p className="text-sm text-gray-600 mt-1">{aid.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">Tamat:</p>
                          <p className="text-sm font-medium">
                            {aid.expiryDate?.toLocaleDateString('ms-MY')}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">Tiada bantuan aktif pada masa ini</p>
              )}
            </div>
          </div>

          {/* Next Slot */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold text-gray-900">Slot Pengambilan Seterusnya</h2>
            </div>
            <div className="p-6">
              {nextSlot ? (
                <div className="border rounded-lg p-4">
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Tarikh</p>
                      <p className="font-medium">{nextSlot.date?.toLocaleDateString('ms-MY')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Masa</p>
                      <p className="font-medium">{nextSlot.time}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Lokasi</p>
                      <p className="font-medium">{nextSlot.location}</p>
                    </div>
                    <div className="pt-3">
                      <button 
                        onClick={() => router.push('/slots')}
                        className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                      >
                        Urus Slot
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">Tiada slot pengambilan dijadualkan</p>
                  <button 
                    onClick={() => router.push('/slots')}
                    className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                  >
                    Pilih Slot
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-lg shadow mt-8">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Notifikasi Penting</h2>
          </div>
          <div className="p-6">
            {notifications.length > 0 ? (
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`border rounded-lg p-4 ${
                      notification.type === 'approval' ? 'border-green-200 bg-green-50' :
                      notification.type === 'reminder' ? 'border-yellow-200 bg-yellow-50' :
                      'border-blue-200 bg-blue-50'
                    }`}
                  >
                    <div className="flex items-start">
                      <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                        notification.type === 'approval' ? 'bg-green-500' :
                        notification.type === 'reminder' ? 'bg-yellow-500' :
                        'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-gray-900">{notification.message}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          {notification.createdAt?.toLocaleDateString('ms-MY')} {notification.createdAt?.toLocaleTimeString('ms-MY')}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">Tiada notifikasi baru</p>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button 
            onClick={() => router.push('/apply')}
            className="bg-blue-700 text-white p-4 rounded-lg hover:bg-blue-800 transition-colors"
          >
            <h3 className="font-medium">Mohon Bantuan</h3>
            <p className="text-sm mt-1 opacity-90">Hantar permohonan baharu</p>
          </button>
          
          <button 
            onClick={() => router.push('/status')}
            className="bg-gray-700 text-white p-4 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <h3 className="font-medium">Semak Status</h3>
            <p className="text-sm mt-1 opacity-90">Lihat status permohonan</p>
          </button>
          
          <button 
            onClick={() => router.push('/profile')}
            className="bg-purple-700 text-white p-4 rounded-lg hover:bg-purple-800 transition-colors"
          >
            <h3 className="font-medium">Kemas Kini Profil</h3>
            <p className="text-sm mt-1 opacity-90">Edit maklumat peribadi</p>
          </button>
        </div>
      </div>
    </div>
  );
}
