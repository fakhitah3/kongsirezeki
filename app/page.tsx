import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import CampaignSection from "./components/CampaignSection";
import HowToApply from "./components/HowToApply";
import HowToDonate from "./components/HowToDonate";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      <HeroSection />
      <StatsSection />
      <CampaignSection />
      <HowToApply />
      <HowToDonate />
    </main>
  );
}
