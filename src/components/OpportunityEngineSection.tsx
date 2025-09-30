import { CheckCircle2, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const OpportunityEngineSection = () => {
  const benefits = [
    {
      icon: CheckCircle2,
      iconBg: "bg-pink-100",
      iconColor: "text-hero-pink",
      title: "Exclusive Early Access",
      description: "Get first access to opportunities before they're widely available"
    },
    {
      icon: Users,
      iconBg: "bg-cyan-100",
      iconColor: "text-scattered-blue",
      title: "Be a Co-Creator & Shape the Platform",
      description: "Your feedback will directly influence how we build the platform"
    }
  ];

  return (
    <section className="px-8 py-20 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-hero-text">
            Be Part of India's First{" "}
            <span className="relative">
              <span className="text-hero-pink">Opportunity Engine</span>
              <svg
                className="absolute -bottom-1 left-0 w-full h-2"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C50 3 100 2 198 4"
                  stroke="hsl(var(--hero-pink))"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="space-y-6">
                  <div className={`w-16 h-16 ${benefit.iconBg} rounded-full flex items-center justify-center`}>
                    <IconComponent className={`w-8 h-8 ${benefit.iconColor}`} />
                  </div>
                  <CardTitle className="text-hero-text text-2xl">
                    {benefit.title}
                  </CardTitle>
                  <CardDescription className="text-hero-subtext text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OpportunityEngineSection;
