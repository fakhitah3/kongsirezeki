const campaigns = [
  "Kempen Bantuan Semester Baharu",
  "Kempen Prihatin B40 Kampus",
  "Kempen Sumbangan Ramadan",
];

export default function CampaignSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">
          Kempen Aktif
        </h3>

        <ul className="space-y-4">
          {campaigns.map((item, i) => (
            <li key={i} className="bg-white p-4 rounded-lg border shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}