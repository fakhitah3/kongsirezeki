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
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      setError("");
      setLoading(true);
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
            Log Masuk
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Selamat datang kembali! Sila masukkan butiran log masuk anda.
          </p>
        </div>

        {/* Messages */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg mb-6 flex items-center">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L9 10.586 7.707 9.293a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}

        {/* Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-8">
            {/* Email */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <label className="block text-lg font-semibold text-gray-800 mb-3">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9a2 2 0 013.997 2.622l8.003-5.884a2 2 0 01-.997.116L10 13a2 2 0 01-.997-.116l-8.003 5.884a2 2 0 01.997-2.622z" />
                  </svg>
                  Alamat Emel
                </span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Contoh: nama@email.com"
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                required
              />
            </div>

            {/* Password */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <label className="block text-lg font-semibold text-gray-800 mb-3">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 00-5 5H2a5 5 0 00-5 5v5a5 5 0 005 5h14a5 5 0 005-5v-5a5 5 0 00-5-5H9z" clipRule="evenodd" />
                  </svg>
                  Kata Laluan
                </span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan kata laluan"
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:border-purple-500 focus:outline-none transition-colors"
                required
              />
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
                    Log Masuk...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L9 10.586 7.707 9.293a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
                    </svg>
                    Log Masuk
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Links */}
        <div className="mt-8 text-center space-y-4">
          <div className="text-gray-600">
            <span 
              className="text-blue-700 cursor-pointer hover:underline font-medium"
              onClick={() => router.push('/reset-password')}
            >
              Lupa kata laluan?
            </span>
          </div>
          
          <div className="text-gray-600">
            Belum mempunyai akaun?{" "}
            <span 
              className="text-blue-700 cursor-pointer hover:underline font-medium"
              onClick={() => router.push('/register')}
            >
              Daftar sekarang
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}