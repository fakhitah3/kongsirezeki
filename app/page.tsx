import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import CampaignSection from "./components/CampaignSection";
import AktivitKami from "./components/AktivitKami";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />
      <StatsSection />
      <AktivitKami />
    </main>
  );
}
