import { Button } from "@/components/ui/button";
import { WAITLIST_URL } from "@/config/constants";

const MovementSection = () => {
  return (
    <section className="px-8 py-20 bg-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Headline */}
        <h2 className="text-3xl lg:text-4xl font-bold text-hero-text">
          This Is More Than a Platform, It's a{" "}
          <span className="relative">
            <span className="text-hero-pink">Movement</span>
            <svg
              className="absolute -bottom-1 left-0 w-full h-2"
              viewBox="0 0 150 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6C40 3 80 2 148 4"
                stroke="hsl(var(--hero-pink))"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        {/* Description */}
        <div className="space-y-6 text-hero-subtext text-lg leading-relaxed">
          <p>
            Sama Social is where ambitious students gather, share, and grow. We're not just building a website—we're building a future where no opportunity goes unnoticed, and no student's potential goes untapped.
          </p>
          <p>
            Be part of a student movement that will impact 1M+ youth across India. Your early participation makes a difference.
          </p>
        </div>

        {/* CTA Button */}
        <Button variant="hero" size="lg" className="text-base" asChild>
          <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
            ✨ Join community
          </a>
        </Button>
      </div>
    </section>
  );
};

export default MovementSection;
