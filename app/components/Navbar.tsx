"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase";
import { getUserRole } from "@/lib/useUserRole";

export default function Navbar() {
  const router = useRouter();
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserRole = async () => {
      const role = await getUserRole();
      setUserRole(role);
      setLoading(false);
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        checkUserRole();
      } else {
        setUserRole(null);
        setLoading(false);
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
          <li className="hover:text-blue-700 cursor-pointer">Tentang Kami</li>
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
        { label: "Pilih Slot Pengambilan", path: "/slots" },
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
        <li 
          className="text-red-600 font-semibold cursor-pointer hover:text-red-700"
          onClick={handleLogout}
        >
          Log Keluar
        </li>
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

        <ul className="flex space-x-6 text-sm font-medium text-gray-700">
          {renderNavItems()}
        </ul>
      </div>
    </nav>
  );
}