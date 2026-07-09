"use client";

import { useState, useEffect } from "react";
import { auth, db } from "@/lib/firebase";
import {
  collection, query, where, getDocs, orderBy, limit,
  doc, getDoc, onSnapshot
} from "firebase/firestore";
import { useRouter } from "next/navigation";

interface Application {
  id: string;
  jenisBantuan: string;
  status: string;
  createdAt: any;
}

interface Slot {
  id: string;
  date: string;
  time: string;
  location: string;
}

interface Notification {
  id: string;
  type: string;
  message: string;
  createdAt: any;
  read: boolean;
}

export default function StudentDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");
  const [applications, setApplications] = useState<Application[]>([]);
  const [nextSlot, setNextSlot] = useState<Slot | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) { router.push('/login'); return; }

    const fetchAll = async () => {
      try {
        // User name
        const userSnap = await getDoc(doc(db, "users", user.uid));
        if (userSnap.exists()) setUserName(userSnap.data().name || user.email || "");

        // Applications (field is userEmail)
        const appsSnap = await getDocs(query(
          collection(db, "applications"),
          where("userEmail", "==", user.email),
          orderBy("createdAt", "desc"),
          limit(20)
        ));
        const apps = appsSnap.docs.map(d => ({ id: d.id, ...d.data() })) as Application[];
        setApplications(apps);

        // Next slot — query bookings by userId, then fetch the slot doc
        const bookingsSnap = await getDocs(query(
          collection(db, "bookings"),
          where("userId", "==", user.uid),
          where("status", "==", "approved"),
          limit(1)
        ));
        if (!bookingsSnap.empty) {
          const booking = bookingsSnap.docs[0].data();
          const slotSnap = await getDoc(doc(db, "slots", booking.slotId));
          if (slotSnap.exists()) {
            setNextSlot({ id: slotSnap.id, ...slotSnap.data() } as Slot);
          }
        }

        // Notifications by userId
        const notifSnap = await getDocs(query(
          collection(db, "notifications"),
          where("userId", "==", user.uid),
          where("read", "==", false),
          orderBy("createdAt", "desc"),
          limit(5)
        ));
        setNotifications(notifSnap.docs.map(d => ({ id: d.id, ...d.data() })) as Notification[]);

      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAll();
  }, [router]);

  const statusCounts = {
    pending: applications.filter(a => a.status === "pending").length,
    approved: applications.filter(a => a.status === "approved").length,
    rejected: applications.filter(a => a.status === "rejected").length,
    completed: applications.filter(a => a.status === "completed").length,
  };

  const getJenisBantuanText = (jenis: string) => {
    switch (jenis) {
      case "makanan_asas": return "Bantuan makanan asas";
      case "food_pack": return "Food pack mingguan";
      case "kecemasan": return "Bantuan kecemasan";
      default: return jenis;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-700";
      case "approved": return "bg-blue-100 text-blue-700";
      case "rejected": return "bg-red-100 text-red-700";
      case "completed": return "bg-green-100 text-green-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending": return "Menunggu";
      case "approved": return "Diluluskan";
      case "rejected": return "Ditolak";
      case "completed": return "Selesai";
      default: return status;
    }
  };

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dashboard Pelajar</h1>
          <p className="text-gray-600 mt-1">Selamat datang, <span className="font-medium">{userName}</span></p>
        </div>

        {/* Status Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Menunggu", count: statusCounts.pending, color: "yellow" },
            { label: "Diluluskan", count: statusCounts.approved, color: "blue" },
            { label: "Ditolak", count: statusCounts.rejected, color: "red" },
            { label: "Selesai", count: statusCounts.completed, color: "green" },
          ].map(({ label, count, color }) => (
            <div key={label} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
              <p className="text-sm text-gray-500">{label}</p>
              <p className={`text-3xl font-bold mt-1 text-${color}-600`}>{count}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Recent Applications */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-5 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-base font-semibold text-gray-800">Permohonan Terkini</h2>
              <button onClick={() => router.push('/status')} className="text-sm text-blue-600 hover:underline">Lihat semua</button>
            </div>
            <div className="p-5">
              {applications.length === 0 ? (
                <p className="text-gray-400 text-center py-6">Tiada permohonan lagi</p>
              ) : (
                <div className="space-y-3">
                  {applications.slice(0, 4).map(app => (
                    <div key={app.id} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                      <div>
                        <p className="text-sm font-medium text-gray-800">{getJenisBantuanText(app.jenisBantuan)}</p>
                        <p className="text-xs text-gray-400">{app.createdAt?.toDate?.()?.toLocaleDateString("ms-MY")}</p>
                      </div>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${getStatusBadge(app.status)}`}>
                        {getStatusText(app.status)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Next Slot */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-5 border-b border-gray-100">
              <h2 className="text-base font-semibold text-gray-800">Slot Pengambilan</h2>
            </div>
            <div className="p-5">
              {nextSlot ? (
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Tarikh</span>
                    <span className="text-sm font-medium text-gray-800">{nextSlot.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Masa</span>
                    <span className="text-sm font-medium text-gray-800">{nextSlot.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Lokasi</span>
                    <span className="text-sm font-medium text-gray-800">{nextSlot.location}</span>
                  </div>
                  <button
                    onClick={() => router.push('/slots')}
                    className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                  >
                    Urus Slot
                  </button>
                </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-gray-400 mb-4">Tiada slot pengambilan dijadualkan</p>
                  <button
                    onClick={() => router.push('/slots')}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
                  >
                    Pilih Slot
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-base font-semibold text-gray-800">Notifikasi</h2>
          </div>
          <div className="p-5">
            {notifications.length === 0 ? (
              <p className="text-gray-400 text-center py-6">Tiada notifikasi baru</p>
            ) : (
              <div className="space-y-3">
                {notifications.map(n => (
                  <div key={n.id} className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm text-gray-800">{n.message}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{n.createdAt?.toDate?.()?.toLocaleDateString("ms-MY")}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button onClick={() => router.push('/apply')} className="bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition-colors text-left">
            <p className="font-semibold">Mohon Bantuan</p>
            <p className="text-sm mt-1 opacity-80">Hantar permohonan baharu</p>
          </button>
          <button onClick={() => router.push('/status')} className="bg-gray-700 text-white p-4 rounded-xl hover:bg-gray-800 transition-colors text-left">
            <p className="font-semibold">Semak Status</p>
            <p className="text-sm mt-1 opacity-80">Lihat status permohonan</p>
          </button>
          <button onClick={() => router.push('/profile')} className="bg-purple-600 text-white p-4 rounded-xl hover:bg-purple-700 transition-colors text-left">
            <p className="font-semibold">Kemas Kini Profil</p>
            <p className="text-sm mt-1 opacity-80">Edit maklumat peribadi</p>
          </button>
        </div>
      </div>
    </div>
  );
}
