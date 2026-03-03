"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getUserRole } from "@/lib/useUserRole";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      setError("");
      await signInWithEmailAndPassword(auth, email, password);
      
      // Get user role and redirect to appropriate dashboard
      const role = await getUserRole();
      
      switch (role) {
        case "pelajar":
          router.push("/dashboard/student");
          break;
        case "penyumbang":
          router.push("/dashboard/donor");
          break;
        case "sukarelawan":
          router.push("/dashboard/volunteer");
          break;
        case "admin":
          router.push("/dashboard/admin");
          break;
        default:
          router.push("/");
      }
    } catch (err) {
      setError("Email atau kata laluan salah. Sila cuba lagi.");
    }
  };

  return (
    <div className="max-w-md mx-auto py-20">
      <h1 className="text-2xl font-bold mb-6">Log Masuk</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <input className="border p-2 w-full mb-3" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
      <input className="border p-2 w-full mb-6" type="password" placeholder="Kata Laluan" onChange={(e)=>setPassword(e.target.value)} />

      <button onClick={handleLogin} className="bg-blue-700 text-white px-4 py-2 rounded w-full mb-4">
        Login
      </button>
      
      <p className="text-center text-gray-600">
        <span 
          className="text-blue-700 cursor-pointer hover:underline"
          onClick={() => router.push('/reset-password')}
        >
          Lupa kata laluan?
        </span>
      </p>
    </div>
  );
}