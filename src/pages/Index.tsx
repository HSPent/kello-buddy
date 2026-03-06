import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import EfficiencySection from "@/components/EfficiencySection";
import OutcomesSection from "@/components/OutcomesSection";
import PricingSection from "@/components/PricingSection";
import SocialProofSection from "@/components/SocialProofSection";
import FAQSection from "@/components/FAQSection";
import EarlyBirdSection from "@/components/EarlyBirdSection";
import AboutSection from "@/components/AboutSection";
import CTAFormSection from "@/components/CTAFormSection";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <EfficiencySection />
      <OutcomesSection />
      <PricingSection />
      <SocialProofSection />
      <FAQSection />
      <EarlyBirdSection />
      <AboutSection />
      <CTAFormSection />
      <Footer />
      <FloatingContact />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;
