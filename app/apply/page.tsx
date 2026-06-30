"use client";

import { useRouter } from "next/navigation";
import MohonBantuan from "../components/MohonBantuan";

const isProfileIncomplete = () => {
  // Check if the user has missing information
  const missingInformation = [
    !localStorage.getItem("phoneNumber"),
    !localStorage.getItem("faculty"),
    !localStorage.getItem("semester")
  ];

  return missingInformation.some(Boolean);
};

export default function ApplyPage() {
  const router = useRouter();

  if (isProfileIncomplete()) {
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
