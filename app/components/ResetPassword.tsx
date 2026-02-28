"use client";

import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleResetPassword = async () => {
    try {
      setError("");
      setMessage("");
      
      await sendPasswordResetEmail(auth, email);
      setMessage("Pautan reset kata laluan telah dihantar ke email anda. Sila semak peti masuk.");
      
      setTimeout(() => {
        router.push('/login');
      }, 3000);
      
    } catch (err) {
      setError("Email tidak ditemui atau terdapat ralat. Sila cuba lagi.");
    }
  };

  return (
    <div className="max-w-md mx-auto py-20">
      <h1 className="text-2xl font-bold mb-6">Reset Kata Laluan</h1>

      {message && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {message}
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <p className="text-gray-600 mb-6">
        Masukkan email anda dan kami akan hantar pautan untuk reset kata laluan.
      </p>

      <input
        className="border p-2 w-full mb-6"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={handleResetPassword}
        className="bg-blue-700 text-white px-4 py-2 rounded w-full mb-4"
      >
        Hantar Pautan Reset
      </button>
      
      <p className="text-center text-gray-600">
        <span 
          className="text-blue-700 cursor-pointer hover:underline"
          onClick={() => router.push('/login')}
        >
          Kembali ke Log Masuk
        </span>
      </p>
    </div>
  );
}
