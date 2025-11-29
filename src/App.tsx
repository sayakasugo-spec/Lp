import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { UseCasesSection } from "./components/UseCasesSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { DownloadSection } from "./components/DownloadSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <UseCasesSection />
      <FeaturesSection />
      <HowItWorksSection />
      <DownloadSection />
      <Footer />
    </div>
  );
}