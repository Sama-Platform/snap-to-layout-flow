import { X, Check } from "lucide-react";

const ProblemSolutionSection = () => {
  const problems = [
    "Hundreds of websites",
    "Endless WhatsApp groups", 
    "Word-of-mouth networks"
  ];

  const solutions = [
    "One central platform",
    "AI-powered matching",
    "Never miss out again"
  ];

  return (
    <section className="px-8 py-20 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-hero-text mb-4">
            Opportunities Aren't Scarce.
            <br />
            They Are{" "}
            <span className="relative">
              <span className="text-scattered-blue">Scattered</span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8C50 4 100 2 198 6"
                  stroke="hsl(var(--hero-pink))"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h2>
        </div>

        {/* Problem vs Solution Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problem Card */}
          <div className="bg-problem-bg border border-problem-border rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-hero-pink mb-6">The Problem</h3>
            
            <p className="text-hero-text mb-8 text-lg">
              Thousands of opportunities exist—scholarships, jobs, fellowships.
              <br />
              But they're lost across:
            </p>

            <div className="space-y-4 mb-8">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-error-red/10 flex items-center justify-center">
                    <X className="w-4 h-4 text-error-red" />
                  </div>
                  <span className="text-hero-text font-medium">{problem}</span>
                </div>
              ))}
            </div>

            <p className="text-hero-subtext text-base">
              Students miss out. Companies fail to reach the right talent.
            </p>
          </div>

          {/* Solution Card */}
          <div className="bg-solution-bg border border-solution-border rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-hero-pink mb-6">The Solution</h3>
            
            <p className="text-hero-text mb-8 text-lg">
              That's where Sama Social comes in. We bring everything into one clear path for you.
            </p>

            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-success-green/10 flex items-center justify-center">
                    <Check className="w-4 h-4 text-success-green" />
                  </div>
                  <span className="text-hero-text font-medium">{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;