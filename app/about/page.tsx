import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            Mengenai Kongsi Rezeki Food Bank
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>Sistem Aplikasi Kongsi Rezeki Food Bank</strong> adalah sebuah inovasi digital yang dibangunkan untuk menangani isu sekuriti makanan di universiti. Kami percaya bahawa kekangan kewangan tidak sepatutnya menjadi penghalang kepada kesejahteraan dan kecemerlangan akademik pelajar.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Misi Kami
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Memastikan setiap pelajar, terutamanya golongan <strong>B40</strong>, mempunyai akses mudah kepada makanan yang mencukupi dan berkhasiat melalui ekosistem bantuan yang sistematik, telus, dan pantas.
          </p>
        </div>

        {/* Why We Exist Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Kenapa Kami Wujud?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pengurusan bantuan makanan secara manual sering menghadapi cabaran seperti:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
              </div>
              <div>
                <strong className="text-gray-800">Ketidakpastian Data:</strong>
                <span className="text-gray-600 ml-2">Kesukaran mengenal pasti pelajar yang benar-benar memerlukan.</span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
              </div>
              <div>
                <strong className="text-gray-800">Ketidakcekapan Stok:</strong>
                <span className="text-gray-600 ml-2">Pengurusan inventori yang tidak teratur dan pembaziran.</span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                <div className="w-2 h-2 bg-blue-700 rounded-full"></div>
              </div>
              <div>
                <strong className="text-gray-800">Kelewatan Komunikasi:</strong>
                <span className="text-gray-600 ml-2">Penyelarasan yang lambat antara penyumbang dan penerima.</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Innovation Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">
            Inovasi Kami
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Dibangunkan melalui pendekatan <strong>Design Thinking</strong>, aplikasi ini menghubungkan tiga pihak utama dalam satu platform:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-50">
                  <th className="text-left p-4 font-semibold text-gray-800 border border-gray-200">Peserta</th>
                  <th className="text-left p-4 font-semibold text-gray-800 border border-gray-200">Peranan Dalam Aplikasi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-blue-700 border border-gray-200">Penyumbang</td>
                  <td className="p-4 text-gray-700 border border-gray-200">Menyalurkan dana atau sumbangan makanan dengan mudah dan pantas.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-blue-700 border border-gray-200">Pengurusan</td>
                  <td className="p-4 text-gray-700 border border-gray-200">Memantau inventori, mengurus data penerima, dan menjadualkan agihan.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-blue-700 border border-gray-200">Pelajar</td>
                  <td className="p-4 text-gray-700 border border-gray-200">Memohon bantuan secara dalam talian tanpa birokrasi yang rumit.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Impak Yang Kami Sasarkan
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Kami komited untuk meningkatkan <strong>kesejahteraan fizikal dan mental</strong> pelajar serta memastikan prestasi akademik mereka kekal cemerlang melalui sokongan pemakanan yang lebih efisien dan terancang.
          </p>
        </div>

        {/* Quote Section */}
        <div className="bg-blue-700 text-white rounded-lg p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <svg className="w-12 h-12 text-blue-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl font-medium mb-4">
              "Satu Suapan, Seribu Harapan."
            </p>
            <p className="text-blue-100">
              Bersama kita memastikan tiada pelajar yang berlapar demi segulung ijazah.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
