import { Shield, Globe, Award, Users } from "lucide-react";
import mineralsImage from "@/assets/minerals-detail.jpg";

const highlights = [
  {
    icon: Shield,
    title: "Integrity",
    description: "Committed to ethical practices and sustainable mining",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Connecting African resources with worldwide markets",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Industry-leading standards in mineral processing",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Building lasting relationships with international investors",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Section */}
          <div className="relative animate-slide-in">
            <div className="relative rounded-lg overflow-hidden shadow-[var(--shadow-elegant)]">
              <img
                src={mineralsImage}
                alt="Minerals and gemstones"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-gradient opacity-20 rounded-lg -z-10"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">About Loys Minerals</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Loys Gems and Minerals is a comprehensive mining enterprise specializing in the extraction, 
                processing, beneficiation, and global trading of high-quality minerals. We bridge the gap 
                between Africa's rich mineral resources and international markets.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed pt-4">
              Through strategic partnerships with international companies, we're driving sustainable 
              development in African mining, creating value for all stakeholders while maintaining 
              the highest environmental and social standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
