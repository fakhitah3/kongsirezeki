"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

interface Stats {
  penerimaBantuan: number;
  sukarelawanAktif: number;
}

const KEMPEN = [
  {
    icon: "🍳",
    nama: "Dapur Siswa MADANI UMK",
    desc: "Kemudahan memasak, kelengkapan dapur, dan bekalan makanan untuk mahasiswa.",
    color: "from-blue-50 to-blue-100 border-blue-200 text-blue-700",
  },
  {
    icon: "📦",
    nama: "Gerobok Rezeki UMK",
    desc: "Bantuan keperluan asas percuma untuk mahasiswa.",
    color: "from-red-50 to-red-100 border-red-200 text-red-700",
  },
  {
    icon: "🍱",
    nama: "Menu Rahmah",
    desc: "Hidangan lengkap dengan harga RM4.90.",
    color: "from-green-50 to-green-100 border-green-200 text-green-700",
  },
];

export default function StatsSection() {
  const [stats, setStats] = useState<Stats>({ penerimaBantuan: 0, sukarelawanAktif: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [appsSnap, volSnap] = await Promise.all([
          getDocs(collection(db, "applications")),
          getDocs(query(collection(db, "users"), where("role", "==", "sukarelawan"))),
        ]);
        setStats({ penerimaBantuan: appsSnap.size, sukarelawanAktif: volSnap.size });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-12">

        {/* Top stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl mx-auto text-center">
          <div className="p-6 border rounded-xl shadow-sm">
            <p className="text-3xl font-bold text-blue-700">
              {loading ? "..." : `${stats.penerimaBantuan.toLocaleString()}+`}
            </p>
            <p className="mt-2 text-gray-600 text-sm">Penerima Bantuan</p>
          </div>
          <div className="p-6 border rounded-xl shadow-sm">
            <p className="text-3xl font-bold text-blue-700">
              {loading ? "..." : stats.sukarelawanAktif.toString()}
            </p>
            <p className="mt-2 text-gray-600 text-sm">Sukarelawan Aktif</p>
          </div>
        </div>

        {/* Kempen Dilaksanakan */}
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Kempen Dilaksanakan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {KEMPEN.map((k) => (
              <div
                key={k.nama}
                className={`rounded-2xl border bg-gradient-to-br p-6 ${k.color}`}
              >
                <div className="text-4xl mb-4">{k.icon}</div>
                <h3 className="font-bold text-lg mb-2">{k.nama}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
