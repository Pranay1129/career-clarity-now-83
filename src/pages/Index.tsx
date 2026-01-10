import HeroSection from "@/components/landing/HeroSection";
import RealitySection from "@/components/landing/RealitySection";
import AudienceSection from "@/components/landing/AudienceSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import PricingSection from "@/components/landing/PricingSection";
import RegistrationFormSection from "@/components/landing/RegistrationFormSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import WhatsAppSupportSection from "@/components/landing/WhatsAppSupportSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <RealitySection />
      <AudienceSection />
      <AuthoritySection />
      <PricingSection />
      <RegistrationFormSection />
      <FinalCTASection />
      <WhatsAppSupportSection />
      <Footer />
    </main>
  );
};

export default Index;
