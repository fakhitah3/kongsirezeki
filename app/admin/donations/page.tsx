"use client";

import { useState, useEffect } from "react";
import { collection, query, orderBy, getDocs, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Donation {
  id: string;
  jenisSumbangan: string;
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
    buktiURL?: string;
  };
  penerangan: string;
  userName: string;
  userEmail: string;
  isAnonymous: boolean;
  createdAt: any;
}

interface Stats {
  totalDonations: number;
  moneyDonations: number;
  foodDonations: number;
  totalMoneyAmount: number;
  totalFoodItems: number;
  anonymousDonations: number;
  registeredDonations: number;
}

export default function AdminDonations() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [stats, setStats] = useState<Stats>({
    totalDonations: 0,
    moneyDonations: 0,
    foodDonations: 0,
    totalMoneyAmount: 0,
    totalFoodItems: 0,
    anonymousDonations: 0,
    registeredDonations: 0,
  });
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const donationsQuery = query(
          collection(db, "donations"),
          orderBy("createdAt", "desc")
        );
        const donationsSnapshot = await getDocs(donationsQuery);
        const donationsData = donationsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Donation));

        setDonations(donationsData);

        // Calculate statistics
        const moneyDonations = donationsData.filter(d => d.jenisSumbangan === "wang");
        const foodDonations = donationsData.filter(d => d.jenisSumbangan === "makanan");
        const anonymousDonations = donationsData.filter(d => d.isAnonymous);

        const totalMoneyAmount = moneyDonations.reduce((sum, d) => sum + (d.wang?.jumlah || 0), 0);
        const totalFoodItems = foodDonations.reduce((sum, d) => sum + (d.makanan?.kuantiti || 0), 0);

        setStats({
          totalDonations: donationsData.length,
          moneyDonations: moneyDonations.length,
          foodDonations: foodDonations.length,
          totalMoneyAmount,
          totalFoodItems,
          anonymousDonations: anonymousDonations.length,
          registeredDonations: donationsData.length - anonymousDonations.length,
        });
      } catch (error) {
        console.error("Error fetching donations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  const filteredDonations = donations.filter(donation => {
    if (filter === "all") return true;
    if (filter === "wang") return donation.jenisSumbangan === "wang";
    if (filter === "makanan") return donation.jenisSumbangan === "makanan";
    if (filter === "anonymous") return donation.isAnonymous;
    if (filter === "registered") return !donation.isAnonymous;
    return true;
  });

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "-";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('ms-MY', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-3">
            Pengurusan Sumbangan
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Paparan semua sumbangan yang diterima dari penyumbang berdaftar dan tanpa nama.
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white shadow-xl rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-blue-700">{stats.totalDonations}</div>
                    <div className="text-sm text-gray-600">Jumlah Sumbangan</div>
                  </div>
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000-2h2a1 1 0 000 2v2a1 1 0 001.414 1.414L10.586 7.707a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" />
                  </svg>
                </div>
              </div>

              <div className="bg-white shadow-xl rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-green-700">{stats.moneyDonations}</div>
                    <div className="text-sm text-gray-600">Sumbangan Wang</div>
                  </div>
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  </svg>
                </div>
              </div>

              <div className="bg-white shadow-xl rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-purple-700">{stats.foodDonations}</div>
                    <div className="text-sm text-gray-600">Sumbangan Makanan</div>
                  </div>
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0 1 1 0 002 0zm-3 2a1 1 0 10-2 0 1 1 0 002 0zm-3 3a1 1 0 10-2 0 1 1 0 002 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="bg-white shadow-xl rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold text-red-700">
                    RM{typeof stats.totalMoneyAmount === 'number' ? stats.totalMoneyAmount.toFixed(2) : '0.00'}
                  </div>
                    <div className="text-sm text-gray-600">Jumlah Wang</div>
                  </div>
                  <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="bg-white shadow-xl rounded-2xl p-6 mb-8">
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setFilter("all")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === "all"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Semua ({stats.totalDonations})
                </button>
                <button
                  onClick={() => setFilter("wang")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === "wang"
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Wang ({stats.moneyDonations})
                </button>
                <button
                  onClick={() => setFilter("makanan")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === "makanan"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Makanan ({stats.foodDonations})
                </button>
                <button
                  onClick={() => setFilter("anonymous")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === "anonymous"
                      ? "bg-red-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Tanpa Nama ({stats.anonymousDonations})
                </button>
                <button
                  onClick={() => setFilter("registered")}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === "registered"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Berdaftar ({stats.registeredDonations})
                </button>
              </div>
            </div>

            {/* Donations Table */}
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tarikh
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Jenis
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Penyumbang
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Butiran
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredDonations.map((donation) => (
                      <tr key={donation.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatDate(donation.createdAt)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            donation.jenisSumbangan === "wang"
                              ? "bg-green-100 text-green-800"
                              : "bg-purple-100 text-purple-800"
                          }`}>
                            {donation.jenisSumbangan === "wang" ? "Wang" : "Makanan"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div>
                            <div className="font-medium">{donation.userName}</div>
                            <div className="text-gray-500">{donation.userEmail}</div>
                            {donation.isAnonymous && (
                              <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800 mt-1">
                                Tanpa Nama
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {donation.jenisSumbangan === "wang" ? (
                            <div>
                              <div className="font-medium">RM{donation.wang?.jumlah}</div>
                              <div className="text-gray-500">{donation.wang?.kaedah}</div>
                            </div>
                          ) : (
                            <div>
                              <div className="font-medium">{donation.makanan?.jenis}</div>
                              <div className="text-gray-500">
                                {donation.makanan?.kuantiti} {donation.makanan?.unit}
                              </div>
                            </div>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                            Diterima
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
