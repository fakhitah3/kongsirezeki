"use client";

import { useState, useEffect } from "react";
import { collection, query, orderBy, getDocs, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

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
  monthlyTrend: {
    month: string;
    applications: number;
    approved: number;
    distributed: number;
  }[];
  impactByFaculty: {
    faculty: string;
    students: number;
    foodReceived: number;
    moneyReceived: number;
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
    monthlyTrend: [],
    impactByFaculty: [],
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
        
        // Calculate faculty impact
        const facultyMap = new Map();
        applications.forEach(app => {
          const faculty = app.fakulti || "Tidak Diketahui";
          if (!facultyMap.has(faculty)) {
            facultyMap.set(faculty, {
              faculty,
              students: 0,
              foodReceived: 0,
              moneyReceived: 0
            });
          }
          const facultyData = facultyMap.get(faculty);
          facultyData.students++;
        });

        // Calculate monthly trend (last 6 months)
        const monthlyTrend = [];
        const now = new Date();
        for (let i = 5; i >= 0; i--) {
          const monthDate = new Date(now.getFullYear(), now.getMonth() - i, 1);
          const monthName = monthDate.toLocaleDateString('ms-MY', { month: 'long', year: 'numeric' });
          
          const monthApps = applications.filter(app => {
            const appDate = app.createdAt?.toDate ? app.createdAt.toDate() : new Date(app.createdAt);
            return appDate.getMonth() === monthDate.getMonth() && 
                   appDate.getFullYear() === monthDate.getFullYear();
          });
          
          const monthApproved = monthApps.filter(app => app.status === "approved").length;
          
          monthlyTrend.push({
            month: monthName,
            applications: monthApps.length,
            approved: monthApproved,
            distributed: Math.floor(monthApproved * 0.8) // Estimated distribution
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
          averageProcessingTime: 2.5, // Mock data - would calculate from timestamps
          successRate,
          monthlyTrend,
          impactByFaculty: Array.from(facultyMap.values())
        });
      } catch (error) {
        console.error("Error fetching report data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReportData();
  }, []);

  const exportToCSV = () => {
    const csvContent = [
      ["Statistik Bantuan KongsiRezeki"],
      ["Tarikh", new Date().toLocaleDateString('ms-MY')],
      ["", ""],
      ["Statistik Utama"],
      ["Jumlah Permohonan", stats.totalApplications],
      ["Diluluskan", stats.approvedApplications],
      ["Ditolak", stats.rejectedApplications],
      ["Menunggu", stats.pendingApplications],
      ["Kadar Kejayaan (%)", stats.successRate.toFixed(2)],
      ["", ""],
      ["Impak & Outcome"],
      ["Pelajar Dibantu", stats.totalStudentsHelped],
      ["Makanan Diedarkan", stats.totalFoodDistributed],
      ["Nilai Wang Diedarkan (RM)", stats.totalMoneyDistributed],
      ["Masa Prosesan Purata (Hari)", stats.averageProcessingTime],
      ["", ""],
      ["Trend Bulanan"],
      ...stats.monthlyTrend.map(t => [t.month, t.applications, t.approved, t.distributed]),
      ["", ""],
      ["Impak Mengikut Fakulti"],
      ...stats.impactByFaculty.map(f => [f.faculty, f.students, f.foodReceived, f.moneyReceived])
    ].map(row => row.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `laporan-kongsirezeki-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToPDF = () => {
    // This would require a PDF library like jsPDF
    // For now, we'll create a simple text export
    const reportText = `
LAPORAN STATISTIK BANTUAN KONGSIREZEKI
Tarikh: ${new Date().toLocaleDateString('ms-MY')}

STATISTIK UTAMA
==================
Jumlah Permohonan: ${stats.totalApplications}
Diluluskan: ${stats.approvedApplications}
Ditolak: ${stats.rejectedApplications}
Menunggu: ${stats.pendingApplications}
Kadar Kejayaan: ${stats.successRate.toFixed(2)}%

IMPAK & OUTCOME
==================
Pelajar Dibantu: ${stats.totalStudentsHelped}
Makanan Diedarkan: ${stats.totalFoodDistributed}
Nilai Wang Diedarkan: RM${stats.totalMoneyDistributed}
Masa Prosesan Purata: ${stats.averageProcessingTime} hari

TREND BULANAN
===============
${stats.monthlyTrend.map(t => `${t.month}: ${t.applications} permohonan, ${t.approved} diluluskan`).join('\n')}

IMPAK MENGIKUT FAKULTI
=========================
${stats.impactByFaculty.map(f => `${f.faculty}: ${f.students} pelajar`).join('\n')}
    `;

    const blob = new Blob([reportText], { type: 'text/plain;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `laporan-kongsirezeki-${new Date().toISOString().split('T')[0]}.txt`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700 mb-3">
            Laporan
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Statistik bantuan, outcome & impak program KongsiRezeki.
          </p>
        </div>

        {/* Export Buttons */}
        <div className="bg-white shadow-xl rounded-2xl p-6 mb-8">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={exportToCSV}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 00-1.414 1.414L9 10.586 7.707a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
              </svg>
              Export CSV
            </button>
            <button
              onClick={exportToPDF}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-5L9 2a1 1 0 00-1 1H4z" clipRule="evenodd" />
              </svg>
              Export PDF/Text
            </button>
          </div>
        </div>

        {/* Statistics Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Statistik Bantuan */}
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000-2h2a1 1 0 000 2v2a1 1 0 001.414 1.414L10.586 7.707a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" />
              </svg>
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
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414 1.414L9 10.586 7.707 9.293a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
              </svg>
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
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L9 10.586 7.707 9.293a1 1 0 101.414 1.414l2 2a1 1 0 001.414 0z" clipRule="evenodd" />
              </svg>
              Trend 6 Bulan
            </h2>
            
            <div className="space-y-3">
              {stats.monthlyTrend.map((trend, index) => (
                <div key={index} className="border-l-4 border-purple-600 pl-4">
                  <div className="font-medium text-gray-800">{trend.month}</div>
                  <div className="text-sm text-gray-600">
                    {trend.applications} permohonan • {trend.approved} diluluskan • {trend.distributed} diedarkan
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact by Faculty */}
        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
            </svg>
            Impak Mengikut Fakulti
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.impactByFaculty.map((faculty, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <div className="font-semibold text-gray-800 mb-2">{faculty.faculty}</div>
                <div className="text-sm text-gray-600">
                  <div>Pelajar: {faculty.students}</div>
                  <div>Makanan: {faculty.foodReceived}</div>
                  <div>Wang: RM{faculty.moneyReceived}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
