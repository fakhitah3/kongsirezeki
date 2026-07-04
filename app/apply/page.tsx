"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import MohonBantuan from "../components/MohonBantuan";

export default function ApplyPage() {
  const router = useRouter();
  const [isProfileIncomplete, setIsProfileIncomplete] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if the user has missing information
    const missingInformation = [
      !localStorage.getItem("phoneNumber"),
      !localStorage.getItem("faculty"),
      !localStorage.getItem("semester")
    ];
    setIsProfileIncomplete(missingInformation.some(Boolean));
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return null;
  }

  if (isProfileIncomplete) {
    return (
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">
          Profil anda belum lengkap
        </h3>

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
