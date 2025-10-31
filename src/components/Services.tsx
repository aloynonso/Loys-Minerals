import { Pickaxe, Factory, TrendingUp, Package, Handshake } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Pickaxe,
    title: "Mining",
    description: "Expert mineral extraction using sustainable and efficient practices with state-of-the-art equipment.",
  },
  {
    icon: Factory,
    title: "Processing",
    description: "Advanced processing facilities transforming raw minerals into market-ready products.",
  },
  {
    icon: TrendingUp,
    title: "Beneficiation",
    description: "Enhancing mineral value through sophisticated beneficiation techniques and quality control.",
  },
  {
    icon: Package,
    title: "Trading",
    description: "Global mineral trading network connecting African resources with international markets.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    description: "Strategic collaborations with international companies to develop African mining opportunities.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive mineral solutions from extraction to global distribution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
