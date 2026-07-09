"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

interface Stats {
  penerimaBantuan: number;
}

const KEMPEN = [
  {
    nama: "Dapur Siswa MADANI UMK",
    desc: "Kemudahan memasak, kelengkapan dapur, dan bekalan makanan untuk mahasiswa.",
  },
  {
    nama: "Gerobok Rezeki UMK",
    desc: "Bantuan keperluan asas percuma untuk mahasiswa.",
  },
  {
    nama: "Menu Rahmah",
    desc: "Hidangan lengkap dengan harga RM4.90.",
  },
];

export default function StatsSection() {
  const [stats, setStats] = useState<Stats>({ penerimaBantuan: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const appsSnap = await getDocs(collection(db, "applications"));
        setStats({ penerimaBantuan: appsSnap.size });
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
        <div className="flex justify-center">
          <div className="p-6 border rounded-xl shadow-sm text-center min-w-[200px]">
            <p className="text-3xl font-bold text-blue-700">
              {loading ? "..." : `${stats.penerimaBantuan.toLocaleString()}+`}
            </p>
            <p className="mt-2 text-gray-600 text-sm">Penerima Bantuan</p>
          </div>
        </div>

        {/* Kempen Dilaksanakan */}
        <div>
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Kempen Dilaksanakan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {KEMPEN.map((k, i) => (
              <div
                key={k.nama}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="text-2xl font-bold text-blue-700 mb-3">{i + 1}.</div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{k.nama}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{k.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
