import HeroSection from "@/components/landing/HeroSection";
import RealitySection from "@/components/landing/RealitySection";
import AudienceSection from "@/components/landing/AudienceSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import PricingSection from "@/components/landing/PricingSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <RealitySection />
      <AudienceSection />
      <AuthoritySection />
      <PricingSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
