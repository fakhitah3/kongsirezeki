export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Inisiatif Food Bank Kampus
        </h2>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Platform kebajikan berasaskan kampus bagi memastikan keterjaminan
          makanan pelajar melalui bantuan, sumbangan dan penglibatan komuniti.
        </p>
        <div className="mt-8">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Sumbang Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}