import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

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

          <Button variant="hero" size="lg" className="group">
            ✨ Join the Waitlist
          </Button>
        </div>

        {/* Right Illustration */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden bg-illustration-bg p-8">
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