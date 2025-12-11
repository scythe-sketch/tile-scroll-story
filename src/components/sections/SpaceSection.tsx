import { ScrollReveal } from "@/components/ScrollReveal";
import { ParallaxSection } from "@/components/ParallaxSection";
import { Sun, Users, Sofa, Car, Wifi, Plug } from "lucide-react";
import tileSpace5 from "@/assets/tile-space-5.jpg";
import tileSpace6 from "@/assets/tile-space-6.jpg";
import tileSpace7 from "@/assets/tile-space-7.jpg";
const stats = [{
  icon: Sofa,
  value: "1,200",
  label: "sq ft open space"
}, {
  icon: Sun,
  value: "High",
  label: "ceilings & natural light"
}, {
  icon: Car,
  value: "Free",
  label: "onsite parking"
}, {
  icon: Wifi,
  value: "Fast",
  label: "free WiFi"
}];
const features = ["Floor-to-ceiling windows", "Plug points throughout", "Solo & group seating", "Outdoor terrace", "Padel & tennis views", "Pilates studio next door"];
export const SpaceSection = () => {
  return <section id="space" className="relative">
      {/* Parallax Header */}
      <ParallaxSection backgroundImage={tileSpace5} overlayOpacity={0.5} className="py-32 md:py-48">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-sm font-medium text-primary-foreground/80 uppercase tracking-widest">
              Our Space
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-4 mb-6 font-bold">
              Designed for Connection
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              A bright, spacious café with high ceilings, natural light, dedicated seating, and a calm creative atmosphere — perfect for solo work, group projects, or meetings.
            </p>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Stats Grid */}
      <div className="bg-secondary py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => <ScrollReveal key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
                    <stat.icon size={28} />
                  </div>
                  <div className="font-display text-2xl md:text-3xl text-foreground font-bold">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>)}
          </div>
        </div>
      </div>

      {/* Features + Gallery */}
      <div className="bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h3 className="font-display text-3xl md:text-4xl text-foreground font-bold">Inside TILE Café at Grip Sports Club</h3>
                <p className="text-muted-foreground text-lg">Work, play, and refuel in Dubai’s most energising corner. Watch padel and tennis matches through our floor-to-ceiling windows, soak in the atmosphere of the Pilates studio next door, and enjoy TILE’s fresh, specialty-ingredient menu crafted for focus and feel-good moments.</p>
                <div className="grid grid-cols-2 gap-3">
                  {features.map(feature => <div key={feature} className="flex items-center gap-2 text-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>)}
                </div>
                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl">
                    <Wifi size={18} className="text-primary" />
                    <span className="text-sm font-medium">Free WiFi</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl">
                    <Plug size={18} className="text-primary" />
                    <span className="text-sm font-medium">Outlets Everywhere</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <img alt="TILE café space" className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-medium" loading="lazy" src="/lovable-uploads/3fdbafca-3c0b-416b-9bda-e966cbb633c4.jpg" />
            </ScrollReveal>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal direction="left">
              <img alt="TILE café seating" className="w-full h-64 md:h-80 object-cover rounded-3xl shadow-medium" loading="lazy" src="/lovable-uploads/5b12e866-3658-42fa-bdec-7582ba986201.jpg" />
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="h-64 md:h-80 bg-primary rounded-3xl flex items-center justify-center p-8">
                <div className="text-center text-primary-foreground">
                  <p className="font-display text-2xl md:text-3xl font-bold mb-2">"Welcome to your green zone."</p>
                  <p className="text-primary-foreground/80">Fresh dishes, specialty coffee, energising views — no noise, just good vibes and good fuel.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>;
};