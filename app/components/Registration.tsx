"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("pelajar");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    try {
      setError("");
      setMessage("");
      
      const userCred = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", userCred.user.uid), {
        email,
        role,
        createdAt: serverTimestamp(),
      });

      setMessage("Pendaftaran berjaya! Anda akan dialihkan ke dashboard...");
      
      // Redirect to appropriate dashboard based on role
      setTimeout(() => {
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
          default:
            router.push("/");
        }
      }, 2000);
      
    } catch (err) {
      setError("Pendaftaran gagal. Sila cuba lagi.");
    }
  };

  return (
    <div className="max-w-md mx-auto py-20">
      <h1 className="text-2xl font-bold mb-6">Daftar Akaun</h1>

      {message && (
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4">
          {message}
        </div>
      )}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <input
        className="border p-2 w-full mb-3"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-3"
        type="password"
        placeholder="Kata Laluan"
        onChange={(e) => setPassword(e.target.value)}
      />

    <select
    className="border p-2 w-full mb-6"
    onChange={(e) => setRole(e.target.value)}
    >
        <option value="pelajar">Pelajar</option>
        <option value="penyumbang">Penyumbang</option>
        <option value="sukarelawan">Sukarelawan</option>
    </select>
      <button
        onClick={handleRegister}
        className="bg-blue-700 text-white px-4 py-2 rounded"
      >
        Daftar
      </button>
      
      <p className="mt-4 text-center text-gray-600">
        Jika sudah ada akaun?{" "}
        <span 
          className="text-blue-700 cursor-pointer hover:underline"
          onClick={() => router.push('/login')}
        >
          Log masuk
        </span>
      </p>
    </div>
  );
}