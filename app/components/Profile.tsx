"use client";

import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";

interface UserProfile {
  name?: string;
  email?: string;
  role?: string;
  phone?: string;
  address?: string;
  faculty?: string;
  semester?: string;
  jenisPenyumbang?: string;
  createdAt?: any;
}

export default function Profile() {
  const [profile, setProfile] = useState<UserProfile>({});
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<UserProfile>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
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
    if (!auth.currentUser) return;

    setSaving(true);
    setMessage("");

    try {
      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        ...formData,
        updatedAt: new Date()
      });

      setProfile(formData);
      setEditMode(false);
      setMessage("Profil berjaya dikemaskini!");
      
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Gagal mengemaskini profil. Sila cuba lagi.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setFormData(profile);
    setEditMode(false);
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">Profil</h1>
          <p className="text-gray-600">Memuatkan...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-700">Profil</h1>
          {!editMode && (
            <button
              onClick={() => setEditMode(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Edit Profil
            </button>
          )}
        </div>

        {message && (
          <div className={`mb-6 px-4 py-3 rounded ${
            message.includes("berjaya") 
              ? "bg-blue-100 border border-blue-400 text-blue-700"
              : "bg-red-100 border border-red-400 text-red-700"
          }`}>
            {message}
          </div>
        )}

        <div className="bg-white shadow-lg rounded-lg p-6">
          {editMode ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name || ""}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email || auth.currentUser?.email || ""}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
                    disabled
                  />
                  </div>
                </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">No Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone || ""}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Peranan</label>
                  <select
                    name="role"
                    value={formData.role || ""}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
                    disabled
                  >
                    <option value="pelajar">Pelajar</option>
                    <option value="penyumbang">Penyumbang</option>
                    <option value="sukarelawan">Sukarelawan</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>

              {formData.role === "penyumbang" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Penyumbang</label>
                  <select
                    name="jenisPenyumbang"
                    value={formData.jenisPenyumbang || ""}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  >
                    <option value="">Pilih jenis penyumbang</option>
                    <option value="pelajar">Pelajar</option>
                    <option value="pensyarah">Pensyarah</option>
                    <option value="staf_universiti">Staf Universiti</option>
                    <option value="alumni">Alumni</option>
                    <option value="ngo">NGO</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Alamat</label>
                <textarea
                  name="address"
                  value={formData.address || ""}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fakulti</label>
                  <input
                    type="text"
                    name="faculty"
                    value={formData.faculty || ""}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Semester</label>
                  <select
                    name="semester"
                    value={formData.semester || ""}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  >
                    <option value="">Pilih semester</option>
                    <option value="1">Semester 1</option>
                    <option value="2">Semester 2</option>
                    <option value="3">Semester 3</option>
                    <option value="4">Semester 4</option>
                    <option value="5">Semester 5</option>
                    <option value="6">Semester 6</option>
                  </select>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                >
                  {saving ? "Menyimpan..." : "Simpan"}
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400"
                >
                  Batal
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-700">Nama</p>
                  <p className="text-gray-900">{profile.name || "Tidak diisi"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Email</p>
                  <p className="text-gray-900">{profile.email || auth.currentUser?.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-700">No Telefon</p>
                  <p className="text-gray-900">{profile.phone || "Tidak diisi"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Peranan</p>
                  <p className="text-gray-900">{getRoleText(profile.role)}</p>
                </div>
              </div>

              {profile.role === "penyumbang" && (
                <div>
                  <p className="text-sm font-medium text-gray-700">Jenis Penyumbang</p>
                  <p className="text-gray-900">
                    {profile.jenisPenyumbang === "pelajar" && "Pelajar"}
                    {profile.jenisPenyumbang === "pensyarah" && "Pensyarah"}
                    {profile.jenisPenyumbang === "staf_universiti" && "Staf Universiti"}
                    {profile.jenisPenyumbang === "alumni" && "Alumni"}
                    {profile.jenisPenyumbang === "ngo" && "NGO"}
                    {!profile.jenisPenyumbang && "Tidak diisi"}
                  </p>
                </div>
              )}

              <div>
                <p className="text-sm font-medium text-gray-700">Alamat</p>
                <p className="text-gray-900 whitespace-pre-wrap">{profile.address || "Tidak diisi"}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-700">Fakulti</p>
                  <p className="text-gray-900">{profile.faculty || "Tidak diisi"}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Semester</p>
                  <p className="text-gray-900">{profile.semester ? `Semester ${profile.semester}` : "Tidak diisi"}</p>
                </div>
              </div>

              {profile.createdAt && (
                <div>
                  <p className="text-sm font-medium text-gray-700">Ahli Sejak</p>
                  <p className="text-gray-900">
                    {profile.createdAt.toDate()?.toLocaleDateString("ms-MY")}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
