import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import StoriesSection from "@/components/StoriesSection";
import OpportunityEngineSection from "@/components/OpportunityEngineSection";
import MovementSection from "@/components/MovementSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <HeroSection />
        <ProblemSolutionSection />
        <FeaturesSection />
        <StoriesSection />
        <OpportunityEngineSection />
        <MovementSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
