import { ScrollReveal } from "@/components/ScrollReveal";
import { ParallaxSection } from "@/components/ParallaxSection";
import { Sun, Users, Sofa, Trees } from "lucide-react";
import heroCafe from "@/assets/hero-cafe.jpg";
import coworkingSpace from "@/assets/coworking-space.jpg";
import gameShelves from "@/assets/game-shelves.jpg";

const stats = [
  { icon: Sofa, value: "1,200", label: "sq ft of open space" },
  { icon: Sun, value: "High", label: "ceilings & natural light" },
  { icon: Users, value: "Communal", label: "tables & solo desks" },
  { icon: Trees, value: "Outdoor", label: "seating available" },
];

export const SpaceSection = () => {
  return (
    <section id="space" className="relative">
      {/* Parallax Header */}
      <ParallaxSection
        backgroundImage={coworkingSpace}
        overlayOpacity={0.5}
        className="py-32 md:py-48"
      >
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-sm font-medium text-primary-foreground/80 uppercase tracking-widest">
              Our Space
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-4 mb-6">
              Designed for Connection
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              An inviting atmosphere where natural light floods in, high
              ceilings create openness, and every corner invites you to stay
              awhile.
            </p>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Stats Grid */}
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
                    <stat.icon size={28} />
                  </div>
                  <div className="font-display text-2xl md:text-3xl text-foreground font-medium">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal direction="left">
              <img
                src={heroCafe}
                alt="TILE Café seating area"
                className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-medium"
                loading="lazy"
              />
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <img
                src={gameShelves}
                alt="Board game collection at TILE"
                className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-medium"
                loading="lazy"
              />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
