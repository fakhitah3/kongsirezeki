"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where, count, sum } from "firebase/firestore";

interface Stats {
  penerimaBantuan: number;
  jumlahSumbangan: number;
  kempenDilaksanakan: number;
  sukarelawanAktif: number;
}

export default function StatsSection() {
  const [stats, setStats] = useState<Stats>({
    penerimaBantuan: 0,
    jumlahSumbangan: 0,
    kempenDilaksanakan: 0,
    sukarelawanAktif: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch total recipients (approved applications)
        const applicationsQuery = query(
          collection(db, "applications"),
          where("status", "==", "approved")
        );
        const applicationsSnapshot = await getDocs(applicationsQuery);
        const penerimaBantuan = applicationsSnapshot.size;

        // Fetch total donations amount
        const donationsQuery = query(collection(db, "donations"));
        const donationsSnapshot = await getDocs(donationsQuery);
        let jumlahSumbangan = 0;
        donationsSnapshot.docs.forEach(doc => {
          const amount = doc.data().amount || 0;
          jumlahSumbangan += amount;
        });

        // Fetch total campaigns
        const campaignsQuery = query(collection(db, "campaigns"));
        const campaignsSnapshot = await getDocs(campaignsQuery);
        const kempenDilaksanakan = campaignsSnapshot.size;

        // Fetch active volunteers
        const volunteersQuery = query(
          collection(db, "users"),
          where("role", "==", "sukarelawan")
        );
        const volunteersSnapshot = await getDocs(volunteersQuery);
        const sukarelawanAktif = volunteersSnapshot.size;

        setStats({
          penerimaBantuan,
          jumlahSumbangan,
          kempenDilaksanakan,
          sukarelawanAktif
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
        // Set default values on error
        setStats({
          penerimaBantuan: 0,
          jumlahSumbangan: 0,
          kempenDilaksanakan: 0,
          sukarelawanAktif: 0
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statsData = [
    { 
      label: "Penerima Bantuan", 
      value: loading ? "..." : `${stats.penerimaBantuan.toLocaleString()}+` 
    },
    { 
      label: "Jumlah Sumbangan (RM)", 
      value: loading ? "..." : stats.jumlahSumbangan.toLocaleString() 
    },
    { 
      label: "Kempen Dilaksanakan", 
      value: loading ? "..." : stats.kempenDilaksanakan.toString() 
    },
    { 
      label: "Sukarelawan Aktif", 
      value: loading ? "..." : stats.sukarelawanAktif.toString() 
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {statsData.map((stat, i) => (
          <div key={i} className="p-6 border rounded-xl shadow-sm">
            <p className="text-3xl font-bold text-blue-700">
              {stat.value}
            </p>
            <p className="mt-2 text-gray-600 text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}