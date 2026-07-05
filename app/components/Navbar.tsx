"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { auth, db } from "@/lib/firebase";
import { getUserRole } from "@/lib/useUserRole";
import { collection, query, where, onSnapshot } from "firebase/firestore";

export default function Navbar() {
  const router = useRouter();
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    const checkUserRole = async () => {
      const role = await getUserRole();
      setUserRole(role);
      setLoading(false);
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        checkUserRole();
        
        // Fetch unread notifications
        const notificationsQuery = query(
          collection(db, "notifications"),
          where("userId", "==", user.uid),
          where("read", "==", false)
        );
        
        const unsubscribeNotifications = onSnapshot(notificationsQuery, (snapshot) => {
          setNotificationCount(snapshot.size);
        });
        
        return () => unsubscribeNotifications();
      } else {
        setUserRole(null);
        setLoading(false);
        setNotificationCount(0);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    router.push('/');
  };

  const renderNavItems = () => {
    if (loading) return null;

    if (!userRole) {
      // Not logged in - show default menu
      return (
        <>
          <li 
            className="hover:text-blue-700 cursor-pointer"
            onClick={() => router.push('/')}
          >
            Utama
          </li>
          <li 
            className="hover:text-blue-700 cursor-pointer"
            onClick={() => router.push('/about')}
          >
            Tentang Kami
          </li>
          <li 
            className="hover:text-blue-700 cursor-pointer"
            onClick={() => router.push('/apply')}
          >
            Mohon Bantuan
          </li>
          <li 
            className="hover:text-blue-700 cursor-pointer"
            onClick={() => router.push('/donate')}
          >
            Sumbang Sekarang
          </li>
          <li 
            className="hover:text-blue-700 cursor-pointer"
            onClick={() => router.push('/sukarelawan')}
          >
            Sukarelawan
          </li>
          <li 
            className="text-blue-700 font-semibold cursor-pointer"
            onClick={() => router.push('/login')}
          >
            Login
          </li>
        </>
      );
    }

    // Logged in - show role-specific menu
    const roleMenus = {
      pelajar: [
        { label: "Utama", path: "/dashboard/student" },
        { label: "Mohon Bantuan", path: "/apply" },
        { label: "Status Permohonan", path: "/status" },
        { label: "Rekod Bantuan", path: "/records" },
        { label: "Profil", path: "/profile" }
      ],
      penyumbang: [
        { label: "Utama", path: "/dashboard/donor" },
        { label: "Buat Sumbangan", path: "/donate" },
        { label: "Senarai Kempen", path: "/campaigns" },
        { label: "Rekod Sumbangan", path: "/donation-records" },
        { label: "Profil", path: "/profile" }
      ],
      sukarelawan: [
        { label: "Utama", path: "/dashboard/volunteer" },
        { label: "Senarai Tugasan", path: "/tasks" },
        { label: "Update Status Tugasan", path: "/task-status" },
        { label: "Profil", path: "/profile" }
      ],
      admin: [
        { label: "Dashboard", path: "/dashboard/admin" },
        { label: "Pengurusan Pelajar", path: "/admin/students" },
        { label: "Pengurusan Permohonan", path: "/admin/applications" },
        { label: "Pengurusan Stok", path: "/admin/stock" },
        { label: "Pengurusan Kempen", path: "/admin/campaigns" },
        { label: "Pengurusan Sumbangan", path: "/admin/donations" },
        { label: "Pengurusan Slot", path: "/admin/slots" },
        { label: "Laporan", path: "/admin/reports" }
      ]
    };

    const currentRole = userRole === "student" ? "pelajar" : userRole;
    const menuItems = roleMenus[currentRole as keyof typeof roleMenus] || [];

    return (
      <>
        {menuItems.map((item, index) => (
          <li 
            key={index}
            className="hover:text-blue-700 cursor-pointer"
            onClick={() => router.push(item.path)}
          >
            {item.label}
          </li>
        ))}
      </>
    );
  };
  
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img 
            src="/logo.png" 
            alt="Kongsi Rezeki Logo" 
            className="h-12 w-12"
          />
          <h1 className="text-xl font-bold text-blue-700">
            KONGSI REZEKI
          </h1>
        </div>

        <ul className="flex space-x-6 text-sm font-medium text-gray-700 items-center">
          {renderNavItems()}
          {userRole && (
            <>
              <li 
                className="relative cursor-pointer hover:text-blue-700"
                onClick={() => router.push('/notifications')}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {notificationCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notificationCount > 9 ? '9+' : notificationCount}
                  </span>
                )}
              </li>
              <li 
                className="text-red-600 font-semibold cursor-pointer hover:text-red-700"
                onClick={handleLogout}
                title="Log Keluar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}