"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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
        name,
        phoneNumber,
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
      
    } catch (err: any) {
      let errorMessage = "Pendaftaran gagal. Sila cuba lagi.";
      
      if (err.code === 'auth/email-already-in-use') {
        errorMessage = "Email ini sudah digunakan. Sila gunakan email lain atau log masuk.";
      } else if (err.code === 'auth/invalid-email') {
        errorMessage = "Format email tidak sah. Sila semak semula email anda.";
      } else if (err.code === 'auth/weak-password') {
        errorMessage = "Kata laluan terlalu lemah. Sila gunakan sekurang-kurangnya 6 aksara.";
      } else if (err.code === 'auth/network-request-failed') {
        errorMessage = "Masalah sambungan internet. Sila semak sambungan anda dan cuba lagi.";
      } else if (err.code === 'auth/too-many-requests') {
        errorMessage = "Terlalu banyak percubaan. Sila tunggu beberapa minit dan cuba lagi.";
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
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
        placeholder="Nama Penuh"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-3"
        placeholder="Nombor Telefon"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-3"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-2 w-full mb-3"
        type="password"
        placeholder="Kata Laluan"
        value={password}
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