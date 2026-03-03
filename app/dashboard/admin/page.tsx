"use client";

import { useState, useEffect } from "react";
import { collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";

interface Stats {
  totalApplications: number;
  pendingApplications: number;
  approvedApplications: number;
  rejectedApplications: number;
  totalStock: number;
  availableStock: number;
  distributedStock: number;
  expiredStock: number;
  totalDonations: number;
  totalDonors: number;
  anonymousDonations: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalApplications: 0,
    pendingApplications: 0,
    approvedApplications: 0,
    rejectedApplications: 0,
    totalStock: 0,
    availableStock: 0,
    distributedStock: 0,
    expiredStock: 0,
    totalDonations: 0,
    totalDonors: 0,
    anonymousDonations: 0,
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Applications stats
        const applicationsQuery = query(
          collection(db, "applications"),
          orderBy("createdAt", "desc")
        );
        const applicationsSnapshot = await getDocs(applicationsQuery);
        const applications = applicationsSnapshot.docs;
        
        const pending = applications.filter(doc => doc.data().status === "pending").length;
        const approved = applications.filter(doc => doc.data().status === "approved").length;
        const rejected = applications.filter(doc => doc.data().status === "rejected").length;

        // Stock stats
        const stockQuery = query(
          collection(db, "stocks"),
          orderBy("createdAt", "desc")
        );
        const stockSnapshot = await getDocs(stockQuery);
        const stock = stockSnapshot.docs;
        
        const available = stock.filter(doc => doc.data().status === "available").length;
        const distributed = stock.filter(doc => doc.data().status === "distributed").length;
        const expired = stock.filter(doc => doc.data().status === "expired").length;

        // Donations stats
        const donationsQuery = query(
          collection(db, "donations"),
          orderBy("createdAt", "desc")
        );
        const donationsSnapshot = await getDocs(donationsQuery);
        const donations = donationsSnapshot.docs;
        
        const anonymous = donations.filter(doc => doc.data().isAnonymous).length;
        const uniqueDonors = new Set(
          donations.map(doc => doc.data().userEmail)
        ).size;

        setStats({
          totalApplications: applications.length,
          pendingApplications: pending,
          approvedApplications: approved,
          rejectedApplications: rejected,
          totalStock: stock.length,
          availableStock: available,
          distributedStock: distributed,
          expiredStock: expired,
          totalDonations: donations.length,
          totalDonors: uniqueDonors,
          anonymousDonations: anonymous,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-3">
            Dashboard Admin
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Paparan statistik dan pengurusan sistem KongsiRezeki.
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Statistik Permohonan */}
            <div className="bg-white shadow-xl rounded-2xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000-2h2a1 1 0 000 2v2a1 1 0 001.414 1.414L10.586 7.707a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" />
                </svg>
                Statistik Permohonan
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-700">{stats.totalApplications}</div>
                  <div className="text-sm text-gray-600">Jumlah Permohonan</div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-700">{stats.pendingApplications}</div>
                  <div className="text-sm text-gray-600">Menunggu Kelulusan</div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-purple-700">{stats.approvedApplications}</div>
                  <div className="text-sm text-gray-600">Telah Diluluskan</div>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-red-700">{stats.rejectedApplications}</div>
                  <div className="text-sm text-gray-600">Ditolak</div>
                </div>
              </div>
            </div>

            {/* Stok Sembada */}
            <div className="bg-white shadow-xl rounded-2xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 2a1 1 0 000-2h2a1 1 0 000 2v2a1 1 0 001.414 1.414L10.586 7.707a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" />
                </svg>
                Stok Sembada
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-700">{stats.availableStock}</div>
                  <div className="text-sm text-gray-600">Tersedia</div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-700">{stats.distributedStock}</div>
                  <div className="text-sm text-gray-600">Telah Diedarkan</div>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-red-700">{stats.expiredStock}</div>
                  <div className="text-sm text-gray-600">Tamat Tempoh</div>
                </div>
              </div>
            </div>

            {/* KPI Program */}
            <div className="bg-white shadow-xl rounded-2xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L9 10.586 7.707 9.293a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" />
                </svg>
                KPI Program
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                  <div>
                    <div className="text-lg font-semibold text-gray-800">Stok Rendah</div>
                    <div className="text-sm text-gray-600 mt-1">Jumlah stok yang mencukupi tempoh</div>
                  </div>
                  <div className="text-2xl font-bold text-green-600">85%</div>
                </div>
                
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                  <div>
                    <div className="text-lg font-semibold text-gray-800">Kadar Kelulusan</div>
                    <div className="text-sm text-gray-600 mt-1">Peratus permohonan diluluskan</div>
                  </div>
                  <div className="text-2xl font-bold text-blue-700">92%</div>
                </div>
                
                <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                  <div>
                    <div className="text-lg font-semibold text-gray-800">Masa Pemprosesan</div>
                    <div className="text-sm text-gray-600 mt-1">Masa purata untuk proses permohonan</div>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">2.5 hari</div>
                </div>
              </div>
            </div>

            {/* Alert Risiko */}
            <div className="bg-white shadow-xl rounded-2xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099A3 3 0 00-4.243 4.243 0 0-4.243 4.243L4.75 7.076a3 3 0 014.835 1.835L8.257 3.099a3 3 0 001.414 1.414l2 2a1 1 0 001.414 0z" />
                </svg>
                Alert Risiko
              </h2>
              
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-8 h-8 mr-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-7-4a1 1 0 00-1.414 1.414L9 10.586 7.707a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-semibold text-red-800">Stok Rendah</div>
                      <div className="text-sm text-red-600 mt-1">15 item akan tamat tempoh dalam 7 hari</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-8 h-8 mr-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-7-4a1 1 0 00-1.414 1.414L9 10.586 7.707a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <div className="font-semibold text-yellow-800">Backlog Permohonan</div>
                      <div className="text-sm text-yellow-600 mt-1">25 permohonan menunggu tindakan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
