"use client";

import { useState, useEffect } from "react";
import { collection, query, onSnapshot, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface Campaign {
  id: string;
  tajuk: string;
  penerangan: string;
  tarikhMula: string;
  tarikhAkhir: string;
  sasaran: number;
  terkumpul: number;
  status: string;
  jenisKempen: string;
  createdBy: string;
  createdAt: any;
  updatedAt: any;
}

export default function PengurusanKempen() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState<Campaign | null>(null);
  const [formData, setFormData] = useState({
    tajuk: "",
    penerangan: "",
    tarikhMula: "",
    tarikhAkhir: "",
    sasaran: 1000,
    jenisKempen: "makanan"
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "campaigns"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const campaignList: Campaign[] = [];
      snapshot.forEach((doc) => {
        campaignList.push({ id: doc.id, ...doc.data() } as Campaign);
      });
      setCampaigns(campaignList);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!auth.currentUser) return;

    setSaving(true);
    try {
      if (editingCampaign) {
        // Update existing campaign
        await updateDoc(doc(db, "campaigns", editingCampaign.id), {
          ...formData,
          updatedAt: serverTimestamp()
        });
      } else {
        // Add new campaign
        await addDoc(collection(db, "campaigns"), {
          ...formData,
          terkumpul: 0,
          status: "aktif",
          createdBy: auth.currentUser.uid,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
      }

      resetForm();
    } catch (error) {
      console.error("Error saving campaign:", error);
      alert("Gagal menyimpan kempen. Sila cuba lagi.");
    } finally {
      setSaving(false);
    }
  };

  const resetForm = () => {
    setFormData({
      tajuk: "",
      penerangan: "",
      tarikhMula: "",
      tarikhAkhir: "",
      sasaran: 1000,
      jenisKempen: "makanan"
    });
    setEditingCampaign(null);
    setShowForm(false);
  };

  const handleEdit = (campaign: Campaign) => {
    setFormData({
      tajuk: campaign.tajuk,
      penerangan: campaign.penerangan,
      tarikhMula: campaign.tarikhMula,
      tarikhAkhir: campaign.tarikhAkhir,
      sasaran: campaign.sasaran,
      jenisKempen: campaign.jenisKempen
    });
    setEditingCampaign(campaign);
    setShowForm(true);
  };

  const handleDelete = async (campaignId: string) => {
    if (!confirm("Adakah anda pasti ingin memadam kempen ini?")) return;

    try {
      await deleteDoc(doc(db, "campaigns", campaignId));
    } catch (error) {
      console.error("Error deleting campaign:", error);
      alert("Gagal memadam kempen. Sila cuba lagi.");
    }
  };

  const toggleCampaignStatus = async (campaignId: string, currentStatus: string) => {
    try {
      const newStatus = currentStatus === "aktif" ? "tidak_aktif" : "aktif";
      await updateDoc(doc(db, "campaigns", campaignId), {
        status: newStatus,
        updatedAt: serverTimestamp()
      });
    } catch (error) {
      console.error("Error updating campaign status:", error);
      alert("Gagal mengemaskini status kempen.");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "aktif":
        return "bg-green-100 text-green-800 border-green-300";
      case "tidak_aktif":
        return "bg-red-100 text-red-800 border-red-300";
      case "selesai":
        return "bg-blue-100 text-blue-800 border-blue-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "aktif": return "Aktif";
      case "tidak_aktif": return "Tidak Aktif";
      case "selesai": return "Selesai";
      default: return status;
    }
  };

  const getProgressPercentage = (terkumpul: number, sasaran: number) => {
    return Math.min((terkumpul / sasaran) * 100, 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">Pengurusan Kempen</h1>
          <p className="text-gray-600">Memuatkan...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-700">Pengurusan Kempen</h1>
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Tambah Kempen
          </button>
        </div>

        {showForm && (
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">
              {editingCampaign ? "Kemaskini Kempen" : "Tambah Kempen Baru"}
            </h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tajuk Kempen</label>
                <input
                  type="text"
                  value={formData.tajuk}
                  onChange={(e) => setFormData({...formData, tajuk: e.target.value})}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Contoh: Kempen Makanan Bulan Ramadan"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Kempen</label>
                <select
                  value={formData.jenisKempen}
                  onChange={(e) => setFormData({...formData, jenisKempen: e.target.value})}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                >
                  <option value="makanan">Makanan</option>
                  <option value="wang">Wang</option>
                  <option value="kedua-duanya">Makanan & Wang</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tarikh Mula</label>
                <input
                  type="date"
                  value={formData.tarikhMula}
                  onChange={(e) => setFormData({...formData, tarikhMula: e.target.value})}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tarikh Akhir</label>
                <input
                  type="date"
                  value={formData.tarikhAkhir}
                  onChange={(e) => setFormData({...formData, tarikhAkhir: e.target.value})}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sasaran</label>
                <input
                  type="number"
                  value={formData.sasaran}
                  onChange={(e) => setFormData({...formData, sasaran: parseInt(e.target.value)})}
                  min="1"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Penerangan</label>
                <textarea
                  value={formData.penerangan}
                  onChange={(e) => setFormData({...formData, penerangan: e.target.value})}
                  rows={4}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Terangkan tujuan dan matlamat kempen ini"
                  required
                />
              </div>
              <div className="md:col-span-2 flex space-x-3">
                <button
                  type="submit"
                  disabled={saving}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                >
                  {saving ? "Menyimpan..." : (editingCampaign ? "Kemas Kini" : "Tambah")}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tajuk Kempen
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Jenis
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tempoh
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Kemajuan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tindakan
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {campaigns.map((campaign) => (
                  <tr key={campaign.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{campaign.tajuk}</p>
                        <p className="text-xs text-gray-500">
                          {campaign.createdAt?.toDate()?.toLocaleDateString("ms-MY")}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {campaign.jenisKempen === "makanan" && "Makanan"}
                      {campaign.jenisKempen === "wang" && "Wang"}
                      {campaign.jenisKempen === "kedua-duanya" && "Makanan & Wang"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div>
                        <p>{campaign.tarikhMula}</p>
                        <p className="text-xs text-gray-500">hingga {campaign.tarikhAkhir}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-900">
                            {campaign.terkumpul} / {campaign.sasaran}
                          </span>
                          <span className="text-sm font-medium text-gray-900">
                            {getProgressPercentage(campaign.terkumpul, campaign.sasaran).toFixed(1)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${getProgressPercentage(campaign.terkumpul, campaign.sasaran)}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                          campaign.status
                        )}`}
                      >
                        {getStatusText(campaign.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(campaign)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => toggleCampaignStatus(campaign.id, campaign.status)}
                          className={`px-3 py-1 rounded text-xs ${
                            campaign.status === "aktif"
                              ? "bg-red-600 hover:bg-red-700 text-white"
                              : "bg-green-600 hover:bg-green-700 text-white"
                          }`}
                        >
                          {campaign.status === "aktif" ? "Tutup" : "Buka"}
                        </button>
                        <button
                          onClick={() => handleDelete(campaign.id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs"
                        >
                          Padam
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
