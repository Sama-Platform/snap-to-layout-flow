import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";
import { WAITLIST_URL } from "@/config/constants";

const HeroSection = () => {
  const categories = [
    "Scholarships",
    "Internships", 
    "Hackathons",
    "Mentorships",
    "Training",
    "Competitions",
    "Fellowships"
  ];

  return (
    <section className="flex-1 px-8 py-12 flex items-center">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-hero-pink">One Platform,</span>
              <br />
              <span className="text-hero-text">Endless Possibilities</span>
            </h1>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-tag-bg text-tag-text rounded-full text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </div>

          <p className="text-lg text-hero-subtext max-w-md">
            All in one place, curated for students like you
          </p>

          <Button variant="hero" size="lg" className="group" asChild>
            <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
              ✨ Join community
            </a>
          </Button>
        </div>

        {/* Right Illustration */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden bg-illustration-bg p-8 transition-all duration-300 hover:shadow-[0_0_40px_rgba(94,234,212,0.5),0_0_60px_rgba(94,234,212,0.3)] hover:scale-105 cursor-pointer">
            <img
              src={heroIllustration}
              alt="Students collaborating on laptops and projects"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;