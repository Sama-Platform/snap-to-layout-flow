import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const StoriesSection = () => {
  const stories = [
    {
      location: "From Lucknow",
      description: "A student joins a Silicon Valley startup internship"
    },
    {
      location: "From Guwahati",
      description: "A young woman wins an international coding hackathon"
    },
    {
      location: "From Patna",
      description: "A student earns a government fellowship that changes their life"
    },
    {
      location: "From Indore",
      description: "A dreamer secures a scholarship abroad"
    }
  ];

  return (
    <section className="px-8 py-20 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-hero-text">
            From Small Town{" "}
            <span className="relative">
              <span className="text-hero-pink">Dreams</span>
              <svg
                className="absolute -bottom-1 left-0 w-full h-2"
                viewBox="0 0 120 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C30 3 60 2 118 4"
                  stroke="hsl(var(--hero-pink))"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {" "}to Big City Breakthroughs
          </h2>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {stories.map((story, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="space-y-4">
                <CardTitle className="text-hero-pink text-xl">
                  {story.location}
                </CardTitle>
                <CardDescription className="text-hero-text text-base leading-relaxed">
                  {story.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
