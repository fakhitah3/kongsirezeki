"use client";

import { useState, useEffect } from "react";
import { collection, query, orderBy, getDocs, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import jsPDF from "jspdf";

interface ReportStats {
  totalApplications: number;
  approvedApplications: number;
  rejectedApplications: number;
  pendingApplications: number;
  totalStudentsHelped: number;
  totalFoodDistributed: number;
  totalMoneyDistributed: number;
  averageProcessingTime: number;
  successRate: number;
  makananAsasCount: number;
  foodPackCount: number;
  bantuanKecemasanCount: number;
  monthlyTrend: { month: string; applications: number }[];
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<ReportStats>({
    totalApplications: 0,
    approvedApplications: 0,
    rejectedApplications: 0,
    pendingApplications: 0,
    totalStudentsHelped: 0,
    totalFoodDistributed: 0,
    totalMoneyDistributed: 0,
    averageProcessingTime: 0,
    successRate: 0,
    makananAsasCount: 0,
    foodPackCount: 0,
    bantuanKecemasanCount: 0,
    monthlyTrend: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const applicationsSnapshot = await getDocs(
          query(collection(db, "applications"), orderBy("createdAt", "desc"))
        );
        const applications = applicationsSnapshot.docs.map(doc => doc.data());

        const stockSnapshot = await getDocs(
          query(collection(db, "stocks"), where("status", "==", "distributed"))
        );
        const distributedStock = stockSnapshot.docs.map(doc => doc.data());

        const approved = applications.filter(a => a.status === "approved").length;
        const rejected = applications.filter(a => a.status === "rejected").length;
        const pending = applications.filter(a => a.status === "pending").length;
        const successRate = applications.length > 0 ? (approved / applications.length) * 100 : 0;

        const makananAsasCount = applications.filter(a => a.jenisBantuan === "makanan_asas").length;
        const foodPackCount = applications.filter(a => a.jenisBantuan === "food_pack").length;
        const bantuanKecemasanCount = applications.filter(a => a.jenisBantuan === "kecemasan").length;

        const now = new Date();
        const monthlyTrend = Array.from({ length: 6 }, (_, i) => {
          const d = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1);
          const month = d.toLocaleDateString("ms-MY", { month: "long" });
          const count = applications.filter(a => {
            const date = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt);
            return date.getMonth() === d.getMonth() && date.getFullYear() === d.getFullYear();
          }).length;
          return { month, applications: count };
        });

        setStats({
          totalApplications: applications.length,
          approvedApplications: approved,
          rejectedApplications: rejected,
          pendingApplications: pending,
          totalStudentsHelped: approved,
          totalFoodDistributed: distributedStock.length,
          totalMoneyDistributed: distributedStock.reduce((s, i) => s + (i.estimatedValue || 0), 0),
          averageProcessingTime: 2.5,
          successRate,
          makananAsasCount,
          foodPackCount,
          bantuanKecemasanCount,
          monthlyTrend,
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReportData();
  }, []);

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.setTextColor(59, 130, 246);
    doc.text("Laporan Statistik Bantuan KongsiRezeki", 105, 20, { align: "center" });
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text(`Tarikh: ${new Date().toLocaleDateString("ms-MY")}`, 105, 30, { align: "center" });

    let y = 45;
    const section = (title: string) => {
      doc.setFontSize(14); doc.setTextColor(0); doc.text(title, 20, y); y += 10;
    };
    const line = (text: string) => {
      doc.setFontSize(11); doc.setTextColor(100); doc.text(text, 25, y); y += 7;
    };

    section("Statistik Mengikut Jenis Bantuan");
    line(`Bantuan Makanan Asas: ${stats.makananAsasCount}`);
    line(`Food Pack Mingguan: ${stats.foodPackCount}`);
    line(`Bantuan Kecemasan: ${stats.bantuanKecemasanCount}`);
    y += 5;

    section("Statistik Utama");
    line(`Jumlah Permohonan: ${stats.totalApplications}`);
    line(`Diluluskan: ${stats.approvedApplications}`);
    line(`Ditolak: ${stats.rejectedApplications}`);
    line(`Menunggu: ${stats.pendingApplications}`);
    line(`Kadar Kejayaan: ${stats.successRate.toFixed(2)}%`);
    y += 5;

    section("Impak & Outcome");
    line(`Pelajar Dibantu: ${stats.totalStudentsHelped}`);
    line(`Makanan Diedarkan: ${stats.totalFoodDistributed}`);
    line(`Nilai Wang Diedarkan: RM${stats.totalMoneyDistributed}`);
    line(`Masa Prosesan Purata: ${stats.averageProcessingTime} hari`);
    y += 5;

    section("Trend Bulanan");
    stats.monthlyTrend.forEach(t => line(`${t.month}: ${t.applications} permohonan`));

    doc.save(`laporan-kongsirezeki-${new Date().toISOString().split("T")[0]}.pdf`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-blue-700 mb-1">Dashboard Admin</h1>
            <p className="text-gray-600">Statistik bantuan, outcome &amp; impak program KongsiRezeki.</p>
          </div>
          <button
            onClick={exportToPDF}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Export PDF
          </button>
        </div>

        {/* Jenis Bantuan */}
        <div className="bg-white shadow-xl rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Statistik Mengikut Jenis Bantuan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="font-semibold text-gray-800 mb-2">Bantuan Makanan Asas</div>
              <div className="text-2xl font-bold text-blue-700">{stats.makananAsasCount}</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="font-semibold text-gray-800 mb-2">Food Pack Mingguan</div>
              <div className="text-2xl font-bold text-green-700">{stats.foodPackCount}</div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <div className="font-semibold text-gray-800 mb-2">Bantuan Kecemasan</div>
              <div className="text-2xl font-bold text-red-700">{stats.bantuanKecemasanCount}</div>
            </div>
          </div>
        </div>

        {/* 3-column stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Statistik Bantuan */}
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Statistik Bantuan</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Jumlah Permohonan</span>
                <span className="text-2xl font-bold text-blue-700">{stats.totalApplications}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Diluluskan</span>
                <span className="text-xl font-semibold text-green-700">{stats.approvedApplications}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Ditolak</span>
                <span className="text-xl font-semibold text-red-700">{stats.rejectedApplications}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Menunggu</span>
                <span className="text-xl font-semibold text-yellow-600">{stats.pendingApplications}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Kadar Kejayaan</span>
                <span className="text-xl font-semibold text-purple-700">{stats.successRate.toFixed(1)}%</span>
              </div>
            </div>
          </div>

          {/* Outcome & Impak */}
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Outcome &amp; Impak</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Pelajar Dibantu</span>
                <span className="text-2xl font-bold text-green-700">{stats.totalStudentsHelped}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Makanan Diedarkan</span>
                <span className="text-xl font-semibold text-blue-700">{stats.totalFoodDistributed}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Nilai Diedarkan</span>
                <span className="text-xl font-semibold text-purple-700">RM{stats.totalMoneyDistributed}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Masa Prosesan</span>
                <span className="text-xl font-semibold text-red-700">{stats.averageProcessingTime} hari</span>
              </div>
            </div>
          </div>

          {/* Monthly Trend Chart */}
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Trend 6 Bulan</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stats.monthlyTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="applications" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
