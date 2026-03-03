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
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async () => {
    try {
      setError("");
      setMessage("");
      setLoading(true);
      
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-3">
            Daftar Akaun
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sertai KongsiRezeki hari ini! Isi maklumat pendaftaran anda dengan lengkap.
          </p>
        </div>

        {/* Messages */}
        {message && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-6 flex items-center">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
            </svg>
            {message}
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg mb-6 flex items-center">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}

        {/* Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <label className="block text-lg font-semibold text-gray-800 mb-4">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 006 0zm-7 9a3 3 0 100-6 3 3 0 006 0zm3.707-8.293a1 1 0 00-1.414 1.414L9 10.586 7.707 9.293a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
                  </svg>
                  Maklumat Peribadi
                </span>
              </label>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Penuh <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Ahmad bin Abu"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombor Telefon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Contoh: 012-3456789"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Account Information */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <label className="block text-lg font-semibold text-gray-800 mb-4">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 00-5 5H2a5 5 0 00-5 5v5a5 5 0 005 5h14a5 5 0 005-5v-5a5 5 0 00-5-5H9z" clipRule="evenodd" />
                  </svg>
                  Maklumat Akaun
                </span>
              </label>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alamat Emel <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Contoh: nama@email.com"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kata Laluan <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min 6 aksara"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Role Selection */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <label className="block text-lg font-semibold text-gray-800 mb-3">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293a1 1 0 00-1.414 1.414L9 10.586 7.707 9.293a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
                  </svg>
                  Peranan
                </span>
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:border-red-500 focus:outline-none transition-colors"
                required
              >
                <option value="">Pilih peranan</option>
                <option value="pelajar">Pelajar</option>
                <option value="penyumbang">Penyumbang</option>
                <option value="sukarelawan">Sukarelawan</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Mendaftar...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L9 10.586 7.707 9.293a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
                    </svg>
                    Daftar
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Login Link */}
        <div className="mt-8 text-center">
          <div className="text-gray-600">
            Sudah mempunyai akaun?{" "}
            <span 
              className="text-blue-700 cursor-pointer hover:underline font-medium"
              onClick={() => router.push('/login')}
            >
              Log masuk
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}