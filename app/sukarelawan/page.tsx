"use client";

export default function SukarelawanInfo() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Jadi Sukarelawan Kongsi Rezeki
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Sertai kami dalam misi membantu pelajar dan mengurangkan pembaziran makanan. 
            Setiap sumbangan masa dan tenaga anda amat dihargai.
          </p>
        </div>

        {/* Why Volunteer */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Mengapa Jadi Sukarelawan?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Bantu Komuniti</h3>
              <p className="text-gray-600">
                Langsungkan impian anda untuk membantu pelajar yang memerlukan bantuan makanan dan keperluan asas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Tambah Pengalaman</h3>
              <p className="text-gray-600">
                Dapatkan pengalaman berharga dalam pengurusan, logistik, dan kerja sosial yang dapat meningkatkan resume anda.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Jaringan Baharu</h3>
              <p className="text-gray-600">
                Berkenalan dengan sukarelawan lain yang berkongsi visi yang sama untuk membantu masyarakat.
              </p>
            </div>
          </div>
        </section>

        {/* Volunteer Roles */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Peranan Sukarelawan
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold mb-3 text-blue-700">Pengumpulan Makanan</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Mengumpul sumbangan makanan dari penderma</li>
                <li>• Memastikan kualiti dan kesegaran makanan</li>
                <li>• Menguruskan logistik pengangkutan</li>
                <li>• Merekod inventori makanan</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-lg font-semibold mb-3 text-green-700">Pengagihan Bantuan</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Menyediakan bungkusan bantuan</li>
                <li>• Menguruskan slot pengambilan</li>
                <li>• Membantu pelajar semasa pengambilan</li>
                <li>• Memastikan pengagihan adil</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
              <h3 className="text-lg font-semibold mb-3 text-purple-700">Pengurusan Kempen</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Merancang dan melaksanakan kempen</li>
                <li>• Promosi dan pemasaran</li>
                <li>• Menguruskan media sosial</li>
                <li>• Menganjurkan acara pengumpulan</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
              <h3 className="text-lg font-semibold mb-3 text-orange-700">Admin & Sokongan</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Pengurusan data dan rekod</li>
                <li>• Sokongan teknikal</li>
                <li>• Komunikasi dengan pelajar</li>
                <li>• Penyediaan laporan</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Syarat Kelayakan
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-gray-900">Umum:</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Berumur 18 tahun ke atas</li>
                  <li>• Bersemangat untuk membantu</li>
                  <li>• Bertanggungjawab dan dipercayai</li>
                  <li>• Boleh bekerja dalam pasukan</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-gray-900">Kelebihan:</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Pengalaman dalam kerja sosial</li>
                  <li>• Kemahiran komunikasi</li>
                  <li>• Lesen memandu (untuk logistik)</li>
                  <li>• Fleksibel masa</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Faedah Menjadi Sukarelawan
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-700 mb-2">Sijil</div>
                <p className="text-gray-600">Sijil penghargaan dan penyertaan</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-700 mb-2">Pengalaman</div>
                <p className="text-gray-600">Tambah pengalaman kerja berharga</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-700 mb-2">Impak</div>
                <p className="text-gray-600">Jadikan perbezaan dalam komuniti</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Sedia untuk Membantu?
            </h2>
            <p className="text-gray-600 mb-6">
              Sertai kami sebagai sukarelawan dan jadikan perbezaan dalam hidup pelajar.
            </p>
            <div className="space-y-4">
              <button 
                onClick={() => window.location.href = '/register'}
                className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors block w-full"
              >
                Daftar sebagai Sukarelawan
              </button>
              <p className="text-sm text-gray-500">
                Atau hubungi kami di: volunteer@kongsirezeki.com
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
