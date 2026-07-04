"use client";

import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";

interface UserProfile {
  name?: string;
  email?: string;
  role?: string;
  phoneNumber?: string;
  address?: string;
  faculty?: string;
  semester?: string;
  createdAt?: any;
}

export default function Profile() {
  const [profile, setProfile] = useState<UserProfile>({});
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<UserProfile>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!auth.currentUser) {
      router.push('/login');
      return;
    }

    const fetchProfile = async () => {
      try {
        const userDoc = await getDoc(doc(db, "users", auth.currentUser!.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data() as UserProfile;
          setProfile(userData);
          setFormData(userData);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setError("");
      setMessage("");

      await updateDoc(doc(db, "users", auth.currentUser!.uid), {
        ...formData,
        updatedAt: serverTimestamp()
      });

      // Save to localStorage for Apply page validation
      if (formData.phoneNumber) localStorage.setItem("phoneNumber", formData.phoneNumber);
      if (formData.faculty) localStorage.setItem("faculty", formData.faculty);
      if (formData.semester) localStorage.setItem("semester", formData.semester);

      setProfile(formData);
      setEditMode(false);
      setMessage("Profil berjaya dikemaskini!");
      
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Error updating profile:", error);
      setError("Gagal mengemaskini profil. Sila cuba lagi.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setFormData(profile);
    setEditMode(false);
    setError("");
    setMessage("");
  };

  const getRoleText = (role?: string) => {
    switch (role) {
      case "pelajar":
        return "Pelajar";
      case "penyumbang":
        return "Penyumbang";
      case "sukarelawan":
        return "Sukarelawan";
      case "admin":
        return "Admin";
      default:
        return role || "Tidak diketahui";
    }
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "-";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('ms-MY', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-10 px-4">        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-3">
            Profil Pengguna
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Uruskan maklumat peribadi dan akaun anda.
          </p>
        </div>

        {/* Messages */}
        {message && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-6 flex items-center">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414 1.414L9 10.586 7.707 9.293a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
            </svg>
            {message}
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg mb-6 flex items-center">
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293a1 1 0 00-1.414 1.414L9 10.586 7.707 9.293a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        )}

        {/* Profile Card */}
<div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-8 hover:shadow-md transition">          {/* Profile Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              Maklumat Peribadi
            </h2>
            
            {!editMode && (
              <button
                onClick={() => setEditMode(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700  transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center">
                  Edit 
                </span>
              </button>
            )}
          </div>

          {/* Form */}
          <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-8">
            {editMode ? (
              <>
                {/* Personal Information */}
<div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition">                  <label className="block text-lg font-semibold text-gray-800 mb-4">
                    Maklumat Peribadi
                  </label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Penuh <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name || ""}
                        onChange={handleChange}
                        placeholder="Contoh: Ahmad bin Abu"
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        No Telefon <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber || ""}
                        onChange={handleChange}
                        placeholder="Contoh: 012-3456789"
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Alamat
                    </label>
                    <textarea
                      name="address"
                      value={formData.address || ""}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Masukkan alamat penuh"
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Academic Information */}
                <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                  <label className="block text-lg font-semibold text-gray-800 mb-4">
                    Maklumat Akademik
                  </label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Fakulti <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="faculty"
                        value={formData.faculty || ""}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors"
                        required
                      >
                        <option value="">Pilih fakulti</option>
                        <option value="Fakulti Keusahawanan dan Perniagaan (FKP)">Fakulti Keusahawanan dan Perniagaan (FKP)</option>
                        <option value="Fakulti Teknologi Kreatif dan Warisan (FTKW)">Fakulti Teknologi Kreatif dan Warisan (FTKW)</option>
                        <option value="Fakulti Hospitaliti, Pelancongan dan Kesejahteraan (FHPK)">Fakulti Hospitaliti, Pelancongan dan Kesejahteraan (FHPK)</option>
                        <option value="Fakulti Sains Data dan Komputeran (FSDK)">Fakulti Sains Data dan Komputeran (FSDK)</option>
                        <option value="Fakulti Pengajian Bahasa dan Pembangunan Insaniah (FBI)">Fakulti Pengajian Bahasa dan Pembangunan Insaniah (FBI)</option>
                        <option value="Fakulti Senibina dan Ekistik (FSE)">Fakulti Senibina dan Ekistik (FSE)</option>
                        <option value="Fakulti Sains Bumi (FSB)">Fakulti Sains Bumi (FSB)</option>
                        <option value="Fakulti Industri Asas Tani (FIAT)">Fakulti Industri Asas Tani (FIAT)</option>
                        <option value="Fakulti Biokejuruteraan dan Teknologi (FBKT)">Fakulti Biokejuruteraan dan Teknologi (FBKT)</option>
                        <option value="Fakulti Perubatan Veterinar (FPV)">Fakulti Perubatan Veterinar (FPV)</option>
                        <option value="Pusat Asasi">Pusat Asasi</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Semester <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="semester"
                        value={formData.semester || ""}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors"
                        required
                      >
                        <option value="">Pilih semester</option>
                        <option value="1">Semester 1</option>
                        <option value="2">Semester 2</option>
                        <option value="3">Semester 3</option>
                        <option value="4">Semester 4</option>
                        <option value="5">Semester 5</option>
                        <option value="6">Semester 6</option>
                        <option value="7">Semester 7</option>
                        <option value="8">Semester 8</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Account Information */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <label className="block text-lg font-semibold text-gray-800 mb-4">
                    Maklumat Akaun
                  </label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Alamat Emel
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email || auth.currentUser?.email || ""}
                        onChange={handleChange}
                        placeholder="Contoh: nama@email.com"
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 bg-gray-100 focus:border-red-500 focus:outline-none transition-colors"
                        disabled
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Peranan
                      </label>
                      <select
                        name="role"
                        value={formData.role || ""}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 bg-gray-100 focus:border-red-500 focus:outline-none transition-colors"
                        disabled
                      >
                        <option value="">Pilih peranan</option>
                        <option value="pelajar">Pelajar</option>
                        <option value="penyumbang">Penyumbang</option>
                        <option value="sukarelawan">Sukarelawan</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                  </div>
                </div>


                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    {saving ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Menyimpan...
                      </span>
                    ) : (
                      <span>Simpan</span>
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Batal
                  </button>
                </div>
              </>
            ) : (
              /* View Mode */
              <div className="space-y-8">
                {/* Personal Information */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <label className="block text-lg font-semibold text-gray-800 mb-4">
                    <span className="flex items-center">
                      Maklumat Peribadi
                    </span>
                  </label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Nama</p>
                      <p className="text-gray-900">{profile.name || "Tidak diisi"}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">No Telefon</p>
                      <p className="text-gray-900">{profile.phoneNumber || "Tidak diisi"}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Email</p>
                      <p className="text-gray-900">{profile.email || auth.currentUser?.email}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Peranan</p>
                      <p className="text-gray-900">{getRoleText(profile.role)}</p>
                    </div>
                  </div>
                </div>

                {/* Academic Information */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <label className="block text-lg font-semibold text-gray-800 mb-4">
                    <span className="flex items-center">
                      Maklumat Akademik
                    </span>
                  </label>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Fakulti</p>
                      <p className="text-gray-900">{profile.faculty || "Tidak diisi"}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Semester</p>
                      <p className="text-gray-900">{profile.semester ? `Semester ${profile.semester}` : "Tidak diisi"}</p>
                    </div>
                  </div>
                </div>


                {/* Address */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <label className="block text-lg font-semibold text-gray-800 mb-4">
                    <span className="flex items-center">
                      Alamat
                    </span>
                  </label>
                  <p className="text-gray-900 whitespace-pre-wrap">{profile.address || "Tidak diisi"}</p>
                </div>

                {/* Account Created Date */}
                {profile.createdAt && (
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <label className="block text-lg font-semibold text-gray-800 mb-4">
                      <span className="flex items-center">
                        Tarikh Daftar
                      </span>
                    </label>
                    <p className="text-gray-900">{formatDate(profile.createdAt)}</p>
                  </div>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
