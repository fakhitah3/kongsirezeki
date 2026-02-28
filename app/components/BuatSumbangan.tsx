"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";

interface DonationForm {
  jenisPenyumbang: string;
  jenisSumbangan: string;
  makanan: {
    jenis: string;
    kuantiti: number;
    unit: string;
    tarikhLuput: string;
    penerangan: string;
  };
  wang: {
    jumlah: number;
    kaedah: string;
    bukti: string;
  };
  penerangan: string;
}

export default function BuatSumbangan() {
  const [form, setForm] = useState<DonationForm>({
    jenisPenyumbang: "",
    jenisSumbangan: "",
    makanan: {
      jenis: "",
      kuantiti: 0,
      unit: "kg",
      tarikhLuput: "",
      penerangan: ""
    },
    wang: {
      jumlah: 0,
      kaedah: "",
      bukti: ""
    },
    penerangan: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setForm(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof DonationForm] as any),
          [child]: value
        }
      }));
    } else {
      setForm(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!auth.currentUser) {
      setError("Sila log masuk terlebih dahulu.");
      return;
    }

    setLoading(true);
    setMessage("");
    setError("");

    try {
      const donationData = {
        userId: auth.currentUser.uid,
        userEmail: auth.currentUser.email,
        jenisPenyumbang: form.jenisPenyumbang,
        jenisSumbangan: form.jenisSumbangan,
        penerangan: form.penerangan,
        status: "pending",
        createdAt: serverTimestamp(),
        ...(form.jenisSumbangan === "makanan" && {
          makanan: form.makanan
        }),
        ...(form.jenisSumbangan === "wang" && {
          wang: form.wang
        })
      };

      await addDoc(collection(db, "donations"), donationData);

      setMessage("Sumbangan berjaya dihantar! Terima kasih atas sokongan anda.");
      
      // Reset form
      setForm({
        jenisPenyumbang: "",
        jenisSumbangan: "",
        makanan: {
          jenis: "",
          kuantiti: 0,
          unit: "kg",
          tarikhLuput: "",
          penerangan: ""
        },
        wang: {
          jumlah: 0,
          kaedah: "",
          bukti: ""
        },
        penerangan: ""
      });

      setTimeout(() => {
        router.push("/donation-records");
      }, 2000);

    } catch (error) {
      console.error("Error submitting donation:", error);
      setError("Gagal menghantar sumbangan. Sila cuba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">
          Buat Sumbangan
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
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Jenis Penyumbang
            </label>
            <select
              name="jenisPenyumbang"
              value={form.jenisPenyumbang}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            >
              <option value="">Pilih jenis penyumbang</option>
              <option value="pelajar">Pelajar</option>
              <option value="pensyarah">Pensyarah</option>
              <option value="staf_universiti">Staf Universiti</option>
              <option value="alumni">Alumni</option>
              <option value="ngo">NGO</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Jenis Sumbangan
            </label>
            <div className="space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="jenisSumbangan"
                  value="makanan"
                  checked={form.jenisSumbangan === "makanan"}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                Makanan
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="jenisSumbangan"
                  value="wang"
                  checked={form.jenisSumbangan === "wang"}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                Wang
              </label>
            </div>
          </div>

          {form.jenisSumbangan === "makanan" && (
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">Maklumat Makanan</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jenis Makanan
                  </label>
                  <input
                    type="text"
                    name="makanan.jenis"
                    value={form.makanan.jenis}
                    onChange={handleChange}
                    placeholder="Contoh: Beras, Mie, Biskut"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kuantiti
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      name="makanan.kuantiti"
                      value={form.makanan.kuantiti}
                      onChange={handleChange}
                      min="1"
                      className="flex-1 border border-gray-300 rounded px-3 py-2"
                      required
                    />
                    <select
                      name="makanan.unit"
                      value={form.makanan.unit}
                      onChange={handleChange}
                      className="border border-gray-300 rounded px-3 py-2"
                    >
                      <option value="kg">kg</option>
                      <option value="pcs">pcs</option>
                      <option value="box">box</option>
                      <option value="botol">botol</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tarikh Luput
                </label>
                <input
                  type="date"
                  name="makanan.tarikhLuput"
                  value={form.makanan.tarikhLuput}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Penerangan Makanan
                </label>
                <textarea
                  name="makanan.penerangan"
                  value={form.makanan.penerangan}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Contoh: Makanan kering, masih dalam pembungkusan asal"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
            </div>
          )}

          {form.jenisSumbangan === "wang" && (
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">Maklumat Wang</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jumlah (RM)
                  </label>
                  <input
                    type="number"
                    name="wang.jumlah"
                    value={form.wang.jumlah}
                    onChange={handleChange}
                    min="1"
                    step="0.01"
                    placeholder="0.00"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kaedah Pembayaran
                  </label>
                  <select
                    name="wang.kaedah"
                    value={form.wang.kaedah}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required
                  >
                    <option value="">Pilih kaedah</option>
                    <option value="online">Pemindahan Online</option>
                    <option value="tunai">Tunai</option>
                    <option value="cek">Cek</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bukti Pembayaran
                </label>
                <textarea
                  name="wang.bukti"
                  value={form.wang.bukti}
                  onChange={handleChange}
                  rows={3}
                  placeholder="No resit, tarikh, dan butiran transaksi"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Penerangan Tambahan
            </label>
            <textarea
              name="penerangan"
              value={form.penerangan}
              onChange={handleChange}
              rows={4}
              placeholder="Sebarang maklumat tambahan mengenai sumbangan anda"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Menghantar..." : "Hantar Sumbangan"}
          </button>
        </form>
      </div>
    </div>
  );
}
