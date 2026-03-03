"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db, storage } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface DonationForm {
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
    buktiFile: File | null;
  };
  penerangan: string;
}

export default function BuatSumbangan() {
  const [form, setForm] = useState<DonationForm>({
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
      buktiFile: null
    },
    penerangan: ""
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm(prev => ({
      ...prev,
      wang: {
        ...prev.wang,
        buktiFile: file
      }
    }));
  };

  const uploadFile = async (file: File): Promise<string> => {
    const storageRef = ref(storage, `donation-proofs/${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      let buktiURL = "";
      
      // Upload file if it's a money donation and file is provided
      if (form.jenisSumbangan === "wang" && form.wang.buktiFile) {
        buktiURL = await uploadFile(form.wang.buktiFile);
      }

      const donationData = {
        userId: auth.currentUser?.uid || "anonymous",
        userEmail: auth.currentUser?.email || "anonymous@kongsirezeki.com",
        userName: auth.currentUser?.displayName || "Anonymous User",
        jenisSumbangan: form.jenisSumbangan,
        penerangan: form.penerangan,
        status: "pending",
        isAnonymous: !auth.currentUser,
        createdAt: serverTimestamp(),
        ...(form.jenisSumbangan === "makanan" && {
          makanan: form.makanan
        }),
        ...(form.jenisSumbangan === "wang" && {
          wang: {
            ...form.wang,
            buktiURL: buktiURL || ""
          }
        })
      };

      // Add donation record
      const donationDoc = await addDoc(collection(db, "donations"), donationData);

      // If it's a food donation, also add to Stock collection
      if (form.jenisSumbangan === "makanan") {
        const stockData = {
          donationId: donationDoc.id,
          jenisMakanan: form.makanan.jenis,
          kuantiti: form.makanan.kuantiti,
          unit: form.makanan.unit,
          tarikhLuput: form.makanan.tarikhLuput,
          penerangan: form.makanan.penerangan,
          status: "available", // Available for distribution
          penyumbang: auth.currentUser?.displayName || "Anonymous User",
          penyumbangEmail: auth.currentUser?.email || "anonymous@kongsirezeki.com",
          tarikhMasuk: new Date().toISOString().split('T')[0],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        };

        await addDoc(collection(db, "stock"), stockData);
      }

      // Show success popup and auto-close after 5 seconds
      setShowSuccessPopup(true);
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 5000);
      
      // Reset form
      setForm({
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
          buktiFile: null
        },
        penerangan: ""
      });

    } catch (error) {
      console.error("Error submitting donation:", error);
      setError("Gagal menghantar sumbangan. Sila cuba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-3">
            Buat Sumbangan
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Sumbangan anda akan membantu pelajar yang memerlukan. Sila isi maklumat di bawah dengan lengkap.
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
            {/* Jenis Sumbangan */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <label className="block text-lg font-semibold text-gray-800 mb-4">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                    <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                  </svg>
                  Jenis Sumbangan
                </span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className={`relative cursor-pointer rounded-lg border-2 p-4 text-center transition-all ${
                  form.jenisSumbangan === "makanan" 
                    ? "border-green-500 bg-green-50" 
                    : "border-gray-200 hover:border-gray-300"
                }`}>
                  <input
                    type="radio"
                    name="jenisSumbangan"
                    value="makanan"
                    checked={form.jenisSumbangan === "makanan"}
                    onChange={handleChange}
                    className="sr-only"
                    required
                  />
                  <div className="text-2xl mb-2">🍱</div>
                  <div className="font-medium text-gray-800">Makanan</div>
                  <div className="text-sm text-gray-600 mt-1">Makanan kering atau basah</div>
                </label>
                
                <label className={`relative cursor-pointer rounded-lg border-2 p-4 text-center transition-all ${
                  form.jenisSumbangan === "wang" 
                    ? "border-blue-500 bg-blue-50" 
                    : "border-gray-200 hover:border-gray-300"
                }`}>
                  <input
                    type="radio"
                    name="jenisSumbangan"
                    value="wang"
                    checked={form.jenisSumbangan === "wang"}
                    onChange={handleChange}
                    className="sr-only"
                    required
                  />
                  <div className="text-2xl mb-2">💰</div>
                  <div className="font-medium text-gray-800">Wang</div>
                  <div className="text-sm text-gray-600 mt-1">Sumbangan tunai atau online</div>
                </label>
              </div>
            </div>

            {/* Food Details */}
            {form.jenisSumbangan === "makanan" && (
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z" clipRule="evenodd" />
                  </svg>
                  Maklumat Makanan
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jenis Makanan <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="makanan.jenis"
                      value={form.makanan.jenis}
                      onChange={handleChange}
                      placeholder="Contoh: Beras, Mie, Biskut"
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kuantiti <span className="text-red-500">*</span>
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="number"
                        name="makanan.kuantiti"
                        value={form.makanan.kuantiti}
                        onChange={handleChange}
                        min="1"
                        placeholder="0"
                        className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors"
                        required
                      />
                      <select
                        name="makanan.unit"
                        value={form.makanan.unit}
                        onChange={handleChange}
                        className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors"
                      >
                        <option value="kg">kg</option>
                        <option value="pcs">pcs</option>
                        <option value="box">box</option>
                        <option value="botol">botol</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tarikh Luput <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="makanan.tarikhLuput"
                    value={form.makanan.tarikhLuput}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Penerangan Makanan
                  </label>
                  <textarea
                    name="makanan.penerangan"
                    value={form.makanan.penerangan}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Contoh: Makanan kering, masih dalam pembungkusan asal, halal"
                    className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>
            )}

            {/* Money Details */}
            {form.jenisSumbangan === "wang" && (
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  Maklumat Wang
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jumlah (RM) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3 text-gray-500">RM</span>
                      <input
                        type="number"
                        name="wang.jumlah"
                        value={form.wang.jumlah}
                        onChange={handleChange}
                        min="1"
                        step="0.01"
                        placeholder="0.00"
                        className="w-full border-2 border-gray-200 rounded-lg pl-12 pr-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kaedah Pembayaran <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="wang.kaedah"
                      value={form.wang.kaedah}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Pilih kaedah</option>
                      <option value="online">Pemindahan Online</option>
                      <option value="tunai">Tunai</option>
                      <option value="cek">Cek</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">        
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Muat Naik Bukti (PDF/JPG/PNG)
                      </label>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileChange}
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                      {form.wang.buktiFile && (
                        <p className="mt-2 text-sm text-green-600 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {form.wang.buktiFile.name} dipilih
                        </p>
                      )}
                    </div>
                  </div>
                </div>
            )}

            {/* Additional Description */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <label className="block text-lg font-semibold text-gray-800 mb-3">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Penerangan Tambahan
                </span>
              </label>
              <textarea
                name="penerangan"
                value={form.penerangan}
                onChange={handleChange}
                rows={4}
                placeholder="Sebarang maklumat tambahan mengenai sumbangan anda"
                className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors resize-none"
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
                    Menghantar...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                    Hantar Sumbangan
                  </span>
                )}
              </button>
              
              <button
                type="button"
                onClick={() => router.back()}
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
                  Sumbangan Berjaya!
                </h3>
                
                <p className="text-sm text-gray-600 mb-4">
                  {auth.currentUser 
                    ? "Terima kasih atas sokongan anda."
                    : "Terima kasih atas sokongan anda sebagai penderma tanpa nama."
                  }
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
