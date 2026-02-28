"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function MohonBantuan() {
  const [form, setForm] = useState({
    jenisBantuan: "",
    fakulti: "",
    semester: "",
    statusKewangan: "",
    justifikasi: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!auth.currentUser) {
      setError("Sila login terlebih dahulu untuk menghantar permohonan.");
      return;
    }

    try {
      setError("");
      setMessage("");

      const applicationData = {
        ...form,
        userId: auth.currentUser.uid,
        userEmail: auth.currentUser.email,
        userRole: "pelajar",
        status: "pending",
        createdAt: serverTimestamp(),
      };

      console.log("Menghantar data:", applicationData);
      
      await addDoc(collection(db, "applications"), applicationData);

      setMessage("Permohonan berjaya dihantar! Anda akan dialihkan ke status permohonan.");
      
      // Reset form
      setForm({
        jenisBantuan: "",
        fakulti: "",
        semester: "",
        statusKewangan: "",
        justifikasi: "",
      });

      // Redirect after 2 seconds
      setTimeout(() => {
        router.push('/status');
      }, 2000);
      
    } catch (error) {
      console.error("Error detail:", error);
      setError("Gagal menghantar permohonan. Sila pastikan anda telah login dan cuba lagi.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">
          Permohonan Bantuan Pelajar
        </h1>

        {message && (
          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-6">
            {message}
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
            <select
              name="jenisBantuan"
              value={form.jenisBantuan}
              onChange={handleChange}
              className="w-full rounded border-gray-300"
              required
            >
              <option value="">Pilih jenis bantuan</option>
              <option value="makanan_asas">Bantuan makanan asas</option>
              <option value="food_pack">Food pack mingguan</option>
              <option value="kecemasan">Bantuan kecemasan</option>
            </select>

            <input
              name="fakulti"
              value={form.fakulti}
              onChange={handleChange}
              placeholder="Fakulti"
              className="w-full rounded border-gray-300"
              required
            />

            <select
              name="semester"
              value={form.semester}
              onChange={handleChange}
              className="w-full rounded border-gray-300"
              required
            >
              <option value="">Pilih semester</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
            </select>

            <select
              name="statusKewangan"
              value={form.statusKewangan}
              onChange={handleChange}
              className="w-full rounded border-gray-300"
              required
            >
              <option value="">Status kewangan</option>
              <option value="b40">B40</option>
              <option value="tiada_bantuan">Tiada bantuan tetap</option>
              <option value="kehilangan_pendapatan">Kehilangan pendapatan</option>
            </select>

            <textarea
              name="justifikasi"
              value={form.justifikasi}
              onChange={handleChange}
              rows={5}
              placeholder="Justifikasi permohonan"
              className="w-full rounded border-gray-300"
              required
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700">
              Hantar Permohonan
            </button>
          </form>
        </div>
      </div>
    );
  }