"use client";

import { useState, useEffect } from "react";
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
  const [minDate, setMinDate] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Set min date only on client side to avoid hydration mismatch
    setMinDate(new Date().toISOString().split('T')[0]);
  }, []);

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

  const handleClearForm = () => {
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
    setError("");
    setMessage("");
  };

  const uploadFile = async (file: File): Promise<string> => {
    // Only run on client side
    if (typeof window === 'undefined') {
      throw new Error('File upload can only be performed on the client side');
    }
    
    const timestamp = Date.now();
    const storageRef = ref(storage, `donation-proofs/${timestamp}_${file.name}`);
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
        const today = new Date().toISOString().split('T')[0];
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
          tarikhMasuk: today,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        };

        await addDoc(collection(db, "stocks"), stockData);
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 py-10 px-4">
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
                  <div className="font-medium text-gray-800">Wang</div>
                  <div className="text-sm text-gray-600 mt-1">Sumbangan tunai atau online</div>
                </label>
              </div>
            </div>

            {/* Food Details */}
            {form.jenisSumbangan === "makanan" && (
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                  Maklumat Makanan
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Jenis Makanan <span className="text-green-500">*</span>
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
                      Kuantiti <span className="text-green-500">*</span>
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
                    Tarikh Luput <span className="text-green-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="makanan.tarikhLuput"
                    value={form.makanan.tarikhLuput}
                    onChange={handleChange}
                    min={minDate}
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
            
            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
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
                    Hantar Sumbangan
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
