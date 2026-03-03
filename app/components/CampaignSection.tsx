"use client";

import { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

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

export default function SenaraiKempen() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    jenisKempen: "all",
    status: "all"
  });

  useEffect(() => {
    const q = query(
      collection(db, "campaigns"),
      orderBy("createdAt", "desc")
    );
    
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

  const getDaysRemaining = (tarikhAkhir: string) => {
    const end = new Date(tarikhAkhir);
    const today = new Date();
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const jenisMatch = filter.jenisKempen === "all" || campaign.jenisKempen === filter.jenisKempen;
    const statusMatch = filter.status === "all" || campaign.status === filter.status;
    const isActive = campaign.status !== "tidak_aktif";
    return jenisMatch && statusMatch && isActive;
  });

  const activeCampaigns = filteredCampaigns.filter(c => c.status === "aktif").length;
  const totalTarget = filteredCampaigns.reduce((sum, c) => sum + c.sasaran, 0);
  const totalCollected = filteredCampaigns.reduce((sum, c) => sum + c.terkumpul, 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">Senarai Kempen</h1>
          <p className="text-gray-600">Memuatkan...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Senarai Kempen</h1>

    
        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCampaigns.map((campaign) => {
            const daysRemaining = getDaysRemaining(campaign.tarikhAkhir);
            const progressPercentage = getProgressPercentage(campaign.terkumpul, campaign.sasaran);
            
            return (
              <div key={campaign.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{campaign.tajuk}</h3>
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                          campaign.status
                        )}`}
                      >
                        {getStatusText(campaign.status)}
                      </span>
                    </div>
                  </div>

                  {/* Campaign Type */}
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {campaign.jenisKempen === "makanan" && "Makanan"}
                      {campaign.jenisKempen === "wang" && "Wang"}
                      {campaign.jenisKempen === "kedua-duanya" && "Makanan & Wang"}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {campaign.penerangan}
                  </p>

                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-700 mb-2">
                      <span>Kemajuan</span>
                      <span className="font-medium">
                        {campaign.terkumpul.toLocaleString()} / {campaign.sasaran.toLocaleString()}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                    <div className="text-right text-sm text-gray-600 mt-1">
                      {progressPercentage.toFixed(1)}% complete
                    </div>
                  </div>

                  {/* Date Info */}
                  <div className="text-sm text-gray-600 mb-4">
                    <p>📅 {campaign.tarikhMula} - {campaign.tarikhAkhir}</p>
                    {campaign.status === "aktif" && (
                      <p className={`font-medium ${daysRemaining <= 7 ? "text-red-600" : "text-green-600"}`}>
                        ⏰ {daysRemaining > 0 ? `${daysRemaining} hari lagi` : "Tamat"}
                      </p>
                    )}
                  </div>

                  {/* Donate Button */}
                  {campaign.status === "aktif" && daysRemaining > 0 && (
                    <button
                      onClick={() => window.location.href = '/donate'}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                    >
                      Sumbang Sekarang
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredCampaigns.length === 0 && (
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <p className="text-gray-600">Tiada kempen dijumpai.</p>
          </div>
        )}
      </div>
    </div>
  );
}
