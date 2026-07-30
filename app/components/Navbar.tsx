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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let unsubPersonal: (() => void) | null = null;
    let unsubAdmin: (() => void) | null = null;

    const unsubscribe = auth.onAuthStateChanged((user) => {
      // Clean up previous listeners
      unsubPersonal?.();
      unsubAdmin?.();

      if (user) {
        getUserRole().then((role) => {
          setUserRole(role);
          setLoading(false);

          let personalCount = 0;
          let adminCount = 0;

          unsubPersonal = onSnapshot(
            query(collection(db, "notifications"), where("userId", "==", user.uid), where("read", "==", false)),
            (snap) => { personalCount = snap.size; setNotificationCount(personalCount + adminCount); }
          );

          if (role === "admin") {
            unsubAdmin = onSnapshot(
              query(collection(db, "notifications"), where("role", "==", "admin"), where("read", "==", false)),
              (snap) => { adminCount = snap.size; setNotificationCount(personalCount + adminCount); }
            );
          }
        });
      } else {
        setUserRole(null);
        setLoading(false);
        setNotificationCount(0);
      }
    });

    return () => {
      unsubscribe();
      unsubPersonal?.();
      unsubAdmin?.();
    };
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
      ]
    };

    const currentRole = userRole === "student" || userRole === "Pelajar" ? "pelajar" : userRole;
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
  
  const navItemClass = "hover:text-blue-700 cursor-pointer py-2";

  const renderMobileNavItems = () => {
    if (loading) return null;
    if (!userRole) {
      return (
        <>
          <li className={navItemClass} onClick={() => { router.push('/'); setMenuOpen(false); }}>Utama</li>
          <li className={navItemClass} onClick={() => { router.push('/about'); setMenuOpen(false); }}>Tentang Kami</li>
          <li className={navItemClass} onClick={() => { router.push('/apply'); setMenuOpen(false); }}>Mohon Bantuan</li>
          <li className={navItemClass} onClick={() => { router.push('/donate'); setMenuOpen(false); }}>Sumbang Sekarang</li>
          <li className={navItemClass} onClick={() => { router.push('/sukarelawan'); setMenuOpen(false); }}>Sukarelawan</li>
          <li className="text-blue-700 font-semibold cursor-pointer py-2" onClick={() => { router.push('/login'); setMenuOpen(false); }}>Login</li>
        </>
      );
    }
    const roleMenus = {
      pelajar: [
        { label: "Utama", path: "/dashboard/student" },
        { label: "Mohon Bantuan", path: "/apply" },
        { label: "Status Permohonan", path: "/status" },
        { label: "Rekod Bantuan", path: "/records" },
        { label: "Profil", path: "/profile" },
      ],
      penyumbang: [
        { label: "Utama", path: "/dashboard/donor" },
        { label: "Buat Sumbangan", path: "/donate" },
        { label: "Senarai Kempen", path: "/campaigns" },
        { label: "Rekod Sumbangan", path: "/donation-records" },
        { label: "Profil", path: "/profile" },
      ],
      sukarelawan: [
        { label: "Utama", path: "/dashboard/volunteer" },
        { label: "Senarai Tugasan", path: "/tasks" },
        { label: "Update Status Tugasan", path: "/task-status" },
        { label: "Profil", path: "/profile" },
      ],
      admin: [
        { label: "Dashboard", path: "/dashboard/admin" },
        { label: "Pengurusan Pelajar", path: "/admin/students" },
        { label: "Pengurusan Permohonan", path: "/admin/applications" },
        { label: "Pengurusan Stok", path: "/admin/stock" },
        { label: "Pengurusan Kempen", path: "/admin/campaigns" },
        { label: "Pengurusan Sumbangan", path: "/admin/donations" },
        { label: "Pengurusan Slot", path: "/admin/slots" },
      ],
    };
    const currentRole = userRole === "student" || userRole === "Pelajar" ? "pelajar" : userRole;
    const menuItems = roleMenus[currentRole as keyof typeof roleMenus] || [];
    return (
      <>
        {menuItems.map((item, i) => (
          <li key={i} className={navItemClass} onClick={() => { router.push(item.path); setMenuOpen(false); }}>
            {item.label}
          </li>
        ))}
        <li className="border-t border-gray-100 pt-2 mt-1">
          <button onClick={() => { router.push('/notifications'); setMenuOpen(false); }} className="flex items-center gap-2 text-gray-700 hover:text-blue-700 py-1">
            Notifikasi {notificationCount > 0 && <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{notificationCount > 9 ? '9+' : notificationCount}</span>}
          </button>
        </li>
        <li>
          <button onClick={handleLogout} className="text-red-600 font-semibold hover:text-red-700 py-1">Log Keluar</button>
        </li>
      </>
    );
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.push('/')}>
          <img src="/logo.png" alt="Kongsi Rezeki Logo" className="h-10 w-10" />
          <div className="leading-tight">
            <span className="text-xs font-semibold text-gray-500 block">KONGSI</span>
            <span className="text-lg font-extrabold text-blue-700 block -mt-1">REZEKI</span>
          </div>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-5 text-sm font-medium text-gray-700 items-center">
          {renderNavItems()}
          {userRole && (
            <>
              <li className="relative cursor-pointer hover:text-blue-700" onClick={() => router.push('/notifications')}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {notificationCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notificationCount > 9 ? '9+' : notificationCount}
                  </span>
                )}
              </li>
              <li className="text-red-600 font-semibold cursor-pointer hover:text-red-700" onClick={handleLogout} title="Log Keluar">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </li>
            </>
          )}
        </ul>

        {/* Mobile: icons + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          {userRole && (
            <button className="relative text-gray-700" onClick={() => router.push('/notifications')}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {notificationCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notificationCount > 9 ? '9+' : notificationCount}
                </span>
              )}
            </button>
          )}
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 hover:text-blue-700 focus:outline-none">
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-6 pb-4">
          <ul className="flex flex-col text-sm font-medium text-gray-700 space-y-1 pt-2">
            {renderMobileNavItems()}
          </ul>
        </div>
      )}
    </nav>
  );
}