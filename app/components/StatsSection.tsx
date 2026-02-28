const stats = [
  { label: "Penerima Bantuan", value: "3,250+" },
  { label: "Jumlah Sumbangan (RM)", value: "480,000" },
  { label: "Kempen Dilaksanakan", value: "42" },
  { label: "Sukarelawan Aktif", value: "610" },
];

export default function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
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