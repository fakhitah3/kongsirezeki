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
  monthlyTrend: {
    month: string;
    applications: number;
  }[];
}

export default function AdminReports() {
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
  const [selectedPeriod, setSelectedPeriod] = useState("all");

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        // Fetch applications
        const applicationsQuery = query(
          collection(db, "applications"),
          orderBy("createdAt", "desc")
        );
        const applicationsSnapshot = await getDocs(applicationsQuery);
        const applications = applicationsSnapshot.docs.map(doc => doc.data());

        // Fetch stock (distributed items)
        const stockQuery = query(
          collection(db, "stocks"),
          where("status", "==", "distributed")
        );
        const stockSnapshot = await getDocs(stockQuery);
        const distributedStock = stockSnapshot.docs.map(doc => doc.data());

        // Calculate statistics
        const approved = applications.filter(app => app.status === "approved").length;
        const rejected = applications.filter(app => app.status === "rejected").length;
        const pending = applications.filter(app => app.status === "pending").length;
        
        const successRate = applications.length > 0 ? (approved / applications.length) * 100 : 0;
        
        // Calculate by jenis bantuan
        const makananAsasCount = applications.filter(app => app.jenisBantuan === "makanan_asas").length;
        const foodPackCount = applications.filter(app => app.jenisBantuan === "food_pack").length;
        const bantuanKecemasanCount = applications.filter(app => app.jenisBantuan === "kecemasan").length;

        // Calculate monthly trend (last 6 months)
        const monthlyTrend = [];
        const now = new Date();
        for (let i = 5; i >= 0; i--) {
          const monthDate = new Date(now.getFullYear(), now.getMonth() - i, 1);
          const monthName = monthDate.toLocaleDateString('ms-MY', { month: 'long' });
          
          const monthApps = applications.filter(app => {
            const appDate = app.createdAt?.toDate ? app.createdAt.toDate() : new Date(app.createdAt);
            return appDate.getMonth() === monthDate.getMonth() && 
                   appDate.getFullYear() === monthDate.getFullYear();
          });
          
          monthlyTrend.push({
            month: monthName,
            applications: monthApps.length
          });
        }

        setStats({
          totalApplications: applications.length,
          approvedApplications: approved,
          rejectedApplications: rejected,
          pendingApplications: pending,
          totalStudentsHelped: approved,
          totalFoodDistributed: distributedStock.length,
          totalMoneyDistributed: distributedStock.reduce((sum, item) => sum + (item.estimatedValue || 0), 0),
          averageProcessingTime: 2.5,
          successRate,
          makananAsasCount,
          foodPackCount,
          bantuanKecemasanCount,
          monthlyTrend,
        });
      } catch (error) {
        console.error("Error fetching report data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReportData();
  }, []);

  const exportToPDF = () => {
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(20);
    doc.setTextColor(59, 130, 246);
    doc.text("Laporan Statistik Bantuan KongsiRezeki", 105, 20, { align: "center" });
    
    // Date
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text(`Tarikh: ${new Date().toLocaleDateString('ms-MY')}`, 105, 30, { align: "center" });
    
    let yPosition = 45;
    
    // Statistik Mengikut Jenis Bantuan
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.text("Statistik Mengikut Jenis Bantuan", 20, yPosition);
    yPosition += 10;
    
    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text(`Bantuan Makanan Asas: ${stats.makananAsasCount}`, 25, yPosition);
    yPosition += 7;
    doc.text(`Food Pack Mingguan: ${stats.foodPackCount}`, 25, yPosition);
    yPosition += 7;
    doc.text(`Bantuan Kecemasan: ${stats.bantuanKecemasanCount}`, 25, yPosition);
    yPosition += 15;
    
    // Statistik Utama
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.text("Statistik Utama", 20, yPosition);
    yPosition += 10;
    
    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text(`Jumlah Permohonan: ${stats.totalApplications}`, 25, yPosition);
    yPosition += 7;
    doc.text(`Diluluskan: ${stats.approvedApplications}`, 25, yPosition);
    yPosition += 7;
    doc.text(`Ditolak: ${stats.rejectedApplications}`, 25, yPosition);
    yPosition += 7;
    doc.text(`Menunggu: ${stats.pendingApplications}`, 25, yPosition);
    yPosition += 7;
    doc.text(`Kadar Kejayaan: ${stats.successRate.toFixed(2)}%`, 25, yPosition);
    yPosition += 15;
    
    // Impak & Outcome
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.text("Impak & Outcome", 20, yPosition);
    yPosition += 10;
    
    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text(`Pelajar Dibantu: ${stats.totalStudentsHelped}`, 25, yPosition);
    yPosition += 7;
    doc.text(`Makanan Diedarkan: ${stats.totalFoodDistributed}`, 25, yPosition);
    yPosition += 7;
    doc.text(`Nilai Wang Diedarkan: RM${stats.totalMoneyDistributed}`, 25, yPosition);
    yPosition += 7;
    doc.text(`Masa Prosesan Purata: ${stats.averageProcessingTime} hari`, 25, yPosition);
    yPosition += 15;
    
    // Trend Bulanan
    doc.setFontSize(14);
    doc.setTextColor(0);
    doc.text("Trend Bulanan", 20, yPosition);
    yPosition += 10;
    
    doc.setFontSize(11);
    doc.setTextColor(100);
    stats.monthlyTrend.forEach(trend => {
      doc.text(`${trend.month}: ${trend.applications} permohonan`, 25, yPosition);
      yPosition += 7;
    });
    
    // Save PDF
    doc.save(`laporan-kongsirezeki-${new Date().toISOString().split('T')[0]}.pdf`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 py-10 px-4">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-blue-700 mb-3">
              Laporan
            </h1>
            <p className="text-gray-600 max-w-2xl">
              Statistik bantuan, outcome & impak program KongsiRezeki.
            </p>
          </div>
          <button
            onClick={exportToPDF}
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg transition-colors"
            title="Export PDF"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-5L9 2a1 1 0 00-1 1H4z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Statistik Mengikut Jenis Bantuan */}
        <div className="bg-white shadow-xl rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Statistik Mengikut Jenis Bantuan
          </h2>
          
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

        {/* Statistics Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Statistik Bantuan */}
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Statistik Bantuan
            </h2>
            
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
                <span className="text-gray-600">Kadar Kejayaan</span>
                <span className="text-xl font-semibold text-purple-700">{stats.successRate.toFixed(1)}%</span>
              </div>
            </div>
          </div>

          {/* Outcome & Impak */}
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Outcome & Impak
            </h2>
            
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

          {/* Monthly Trend */}
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              Trend 6 Bulan
            </h2>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stats.monthlyTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="applications" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
