const steps = [
  "Daftar akaun pelajar",
  "Lengkapkan borang permohonan bantuan",
  "Muat naik dokumen sokongan",
  "Proses semakan dan kelulusan",
];

export default function HowToApply() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">
          Cara Memohon Bantuan
        </h3>

        <ol className="list-decimal list-inside space-y-3 text-gray-700">
          {steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}