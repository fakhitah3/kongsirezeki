"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import MohonBantuan from "../components/MohonBantuan";

export default function ApplyPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [isProfileIncomplete, setIsProfileIncomplete] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      if (u) {
        const snap = await getDoc(doc(db, "users", u.uid));
        const data = snap.data();
        const missing = !data?.faculty || !data?.semester;
        setIsProfileIncomplete(missing);
      }
    });
    return () => unsubscribe();
  }, []);

  // Resolving auth state
  if (user === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Not logged in
  if (user === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center px-4">
        <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Log Masuk Diperlukan</h2>
          <p className="text-gray-500 mb-8">Sila log masuk terlebih dahulu untuk menghantar permohonan bantuan.</p>
          <button
            onClick={() => router.push("/login")}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Log Masuk
          </button>
          <p className="mt-4 text-sm text-gray-500">
            Belum ada akaun?{" "}
            <button onClick={() => router.push("/register")} className="text-blue-600 hover:underline font-medium">
              Daftar sekarang
            </button>
          </p>
        </div>
      </div>
    );
  }

  // Logged in but profile incomplete
  if (isProfileIncomplete) {
    return (
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Profil anda belum lengkap</h3>
        <p className="mb-6 text-gray-700">
          Sila lengkapkan maklumat No Telefon, Fakulti, dan Semester untuk mengakses halaman Mohon Bantuan.
        </p>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
          onClick={() => router.push("/profile")}
        >
          Kemaskini Profil
        </button>
      </div>
    );
  }

  return <MohonBantuan />;
}
