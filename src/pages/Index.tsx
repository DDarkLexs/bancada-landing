import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { TrustedEntitiesSection } from "@/components/landing/TrustedEntitiesSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import { CookieConsent } from "@/components/landing/CookieConsent";
import { VideoGuide } from "@/components/landing/VideoGuide";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* <CookieConsent /> */}
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <PricingSection />
        <TrustedEntitiesSection />
        <VideoGuide />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
