const methods = [
  "Sumbangan kewangan secara atas talian",
  "Sumbangan barangan makanan",
  "Penajaan kempen kebajikan",
];

export default function HowToDonate() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-6 text-blue-800">
          Cara Menyumbang
        </h3>

        <ul className="list-disc list-inside space-y-3 text-gray-700">
          {methods.map((method, i) => (
            <li key={i}>{method}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}