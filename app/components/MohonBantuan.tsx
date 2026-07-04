"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function MohonBantuan() {
  const [form, setForm] = useState({
    jenisBantuan: "",
    justifikasi: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClearForm = () => {
    setForm({
      jenisBantuan: "",
      justifikasi: "",
    });
    setError("");
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!auth.currentUser) {
      setError("Sila login terlebih dahulu untuk menghantar permohonan.");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const applicationData = {
        ...form,
        userId: auth.currentUser.uid,
        userEmail: auth.currentUser.email,
        userName: auth.currentUser.displayName || "Pelajar",
        userRole: "pelajar",
        status: "pending",
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "applications"), applicationData);

      // Show success popup and auto-close after 5 seconds
      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 5000);
      
      // Reset form
      setForm({
        jenisBantuan: "",
        justifikasi: "",
      });

    } catch (error) {
      console.error("Error detail:", error);
      setError("Gagal menghantar permohonan. Sila pastikan anda telah login dan cuba lagi.");
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
            Permohonan Bantuan Pelajar
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami di sini untuk membantu pelajar yang memerlukan. Sila isi maklumat permohonan anda dengan lengkap.
          </p>
        </div>

        {/* Messages */}
        {message && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-6 flex items-center">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {message}
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg mb-6 flex items-center">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}

        {/* Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Jenis Bantuan */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <label className="block text-lg font-semibold text-gray-800 mb-3">
                <span className="flex items-center">
                  Jenis Bantuan
                </span>
              </label>
              <select
                name="jenisBantuan"
                value={form.jenisBantuan}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
                required
              >
                <option value="">Pilih jenis bantuan</option>
                <option value="makanan_asas">Bantuan makanan asas</option>
                <option value="food_pack">Food pack mingguan</option>
                <option value="kecemasan">Bantuan kecemasan</option>
              </select>
            </div>

            {/* Justifikasi */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <label className="block text-lg font-semibold text-gray-800 mb-3">
                <span className="flex items-center">

                  Justifikasi Permohonan
                </span>
              </label>
              <textarea
                name="justifikasi"
                value={form.justifikasi}
                onChange={handleChange}
                rows={5}
                placeholder="Sila terangkan mengapa anda memerlukan bantuan ini dan keadaan kewangan anda secara terperinci..."
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 text-black focus:border-blue-500 focus:outline-none transition-colors resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={loading}
className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Menghantar...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">

                    Hantar Permohonan
                  </span>
                )}
              </button>
              
              <button
                type="button"
                onClick={handleClearForm}
                className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Batal
              </button>
            </div>
          </form>
        </div>

        {/* Success Popup */}
        {showSuccessPopup && (
          <div className="fixed top-4 right-4 z-50 animate-pulse">
            <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm border border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Permohonan Berjaya!
                </h3>
                
                <p className="text-sm text-gray-600 mb-4">
                  Permohonan anda telah diterima dan akan diproses.
                </p>
                
                <div className="text-xs text-gray-500">
                  Dialog ini akan ditutup secara automatik...
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}