"use client";

import { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface Donation {
  id: string;
  userId: string;
  userEmail: string;
  jenisPenyumbang: string;
  jenisSumbangan: string;
  penerangan: string;
  status: string;
  createdAt: any;
  makanan?: {
    jenis: string;
    kuantiti: number;
    unit: string;
    tarikhLuput: string;
    penerangan: string;
  };
  wang?: {
    jumlah: number;
    kaedah: string;
    bukti: string;
  };
}

export default function RekodSumbangan() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState({
    jenisSumbangan: "all",
    status: "all"
  });

  useEffect(() => {
    const q = query(
      collection(db, "donations"),
      orderBy("createdAt", "desc")
    );
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const donationList: Donation[] = [];
      snapshot.forEach((doc) => {
        donationList.push({ id: doc.id, ...doc.data() } as Donation);
      });
      setDonations(donationList);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const getJenisPenyumbangText = (jenis: string) => {
    switch (jenis) {
      case "pelajar": return "Pelajar";
      case "pensyarah": return "Pensyarah";
      case "staf_universiti": return "Staf Universiti";
      case "alumni": return "Alumni";
      case "ngo": return "NGO";
      default: return jenis;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "approved":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "rejected":
        return "bg-red-100 text-red-800 border-red-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending": return "Menunggu";
      case "approved": return "Diluluskan";
      case "rejected": return "Ditolak";
      default: return status;
    }
  };

  const filteredDonations = donations.filter(donation => {
    const jenisMatch = filter.jenisSumbangan === "all" || donation.jenisSumbangan === filter.jenisSumbangan;
    const statusMatch = filter.status === "all" || donation.status === filter.status;
    return jenisMatch && statusMatch;
  });

  const totalDonations = filteredDonations.length;
  const totalFoodDonations = filteredDonations.filter(d => d.jenisSumbangan === "makanan").length;
  const totalMoneyDonations = filteredDonations.filter(d => d.jenisSumbangan === "wang").length;
  const totalAmount = filteredDonations
    .filter(d => d.wang?.jumlah)
    .reduce((sum, d) => sum + (Number(d.wang?.jumlah) || 0), 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-700 mb-6">Rekod Sumbangan</h1>
          <p className="text-gray-600">Memuatkan...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Rekod Sumbangan</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Jumlah Sumbangan</h3>
            <p className="text-3xl font-bold text-blue-600">{totalDonations}</p>
            <p className="text-sm text-gray-600">Keseluruhan</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Sumbangan Makanan</h3>
            <p className="text-3xl font-bold text-green-600">{totalFoodDonations}</p>
            <p className="text-sm text-gray-600">Item makanan</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Sumbangan Wang</h3>
            <p className="text-3xl font-bold text-purple-600">{totalMoneyDonations}</p>
            <p className="text-sm text-gray-600">Transaksi wang</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Jumlah Wang</h3>
            <p className="text-3xl font-bold text-orange-600">RM {totalAmount.toFixed(2)}</p>
            <p className="text-sm text-gray-600">Total terkumpul</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Jenis Sumbangan</label>
              <select
                value={filter.jenisSumbangan}
                onChange={(e) => setFilter({...filter, jenisSumbangan: e.target.value})}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="all">Semua Jenis</option>
                <option value="makanan">Makanan</option>
                <option value="wang">Wang</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                value={filter.status}
                onChange={(e) => setFilter({...filter, status: e.target.value})}
                className="w-full border border-gray-300 rounded px-3 py-2"
              >
                <option value="all">Semua Status</option>
                <option value="pending">Menunggu</option>
                <option value="approved">Diluluskan</option>
                <option value="rejected">Ditolak</option>
              </select>
            </div>
          </div>
        </div>

        {/* Donations Table */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tarikh
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Penyumbang
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Jenis
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Butiran
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredDonations.map((donation) => (
                  <tr key={donation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {donation.createdAt?.toDate()?.toLocaleDateString("ms-MY")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div>
                        <p className="font-medium">{getJenisPenyumbangText(donation.jenisPenyumbang)}</p>
                        <p className="text-xs text-gray-500">{donation.userEmail}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <span className="font-medium">
                        {donation.jenisSumbangan === "makanan" ? "Makanan" : "Wang"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {donation.jenisSumbangan === "makanan" ? (
                        <div>
                          <p><strong>{donation.makanan?.jenis}</strong></p>
                          <p className="text-xs text-gray-600">
                            {donation.makanan?.kuantiti} {donation.makanan?.unit}
                          </p>
                          {donation.makanan?.tarikhLuput && (
                            <p className="text-xs text-red-600">
                              Luput: {donation.makanan.tarikhLuput}
                            </p>
                          )}
                        </div>
                      ) : (
                        <div>
                          <p><strong>RM {Number(donation.wang?.jumlah || 0).toFixed(2)}</strong></p>
                          <p className="text-xs text-gray-600">{donation.wang?.kaedah}</p>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                          donation.status
                        )}`}
                      >
                        {getStatusText(donation.status)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredDonations.length === 0 && (
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <p className="text-gray-600">Tiada rekod sumbangan dijumpai.</p>
          </div>
        )}
      </div>
    </div>
  );
}
