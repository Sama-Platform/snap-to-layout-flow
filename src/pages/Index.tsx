import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import StoriesSection from "@/components/StoriesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <HeroSection />
        <ProblemSolutionSection />
        <FeaturesSection />
        <StoriesSection />
      </div>
    </div>
  );
};

export default Index;
