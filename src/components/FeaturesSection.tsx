import { Target, Briefcase, Trophy, Globe } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Target,
      iconBg: "bg-pink-100",
      iconColor: "text-hero-pink",
      title: "All-In-One Access",
      description: "From global hackathons to local NGO programs, everything is here"
    },
    {
      icon: Briefcase,
      iconBg: "bg-cyan-100",
      iconColor: "text-scattered-blue",
      title: "AI-Powered Matchmaking",
      description: "Get opportunities that match your interests, skills, and goals"
    },
    {
      icon: Trophy,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
      title: "Career Pathways",
      description: "Step-by-step journeys to help you become an AI Engineer, Policy Leader, Social Entrepreneur, and more"
    },
    {
      icon: Globe,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      title: "Local + Global",
      description: "Access what's around you and what's across the world"
    }
  ];

  return (
    <section className="px-8 py-20 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${feature.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-hero-text mb-4">
                  {feature.title}
                </h3>
                <p className="text-hero-subtext leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;