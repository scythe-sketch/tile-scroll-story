import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Wifi, Plug, Sun, Car, Clock, Coffee } from "lucide-react";
import tileSpace3 from "@/assets/tile-space-3.jpg";

const features = [
  { icon: Wifi, label: "High-Speed WiFi" },
  { icon: Plug, label: "Outlets Everywhere" },
  { icon: Sun, label: "Natural Light" },
  { icon: Car, label: "Free Parking" },
  { icon: Coffee, label: "Great Coffee" },
];

export const CoworkingSection = () => {
  return (
    <section id="coworking" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-widest">
                  Work From TILE
                </span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6 font-bold">
                  Your New Favorite Workspace
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Mornings at TILE are for focus. Enjoy the calm atmosphere, great coffee, and inspiring environment. Stay productive while surrounded by creativity — with views of padel and tennis matches through our glass walls.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-4 bg-card rounded-xl"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                      <feature.icon size={20} />
                    </div>
                    <span className="font-medium text-foreground text-sm">
                      {feature.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-4">
                <Button
                  variant="sage"
                  size="lg"
                  onClick={() =>
                    window.open("https://wa.me/971525789699", "_blank")
                  }
                >
                  Book a Desk
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <img
                src={tileSpace3}
                alt="Coworking at TILE"
                className="w-full h-[500px] object-cover rounded-3xl shadow-medium"
                loading="lazy"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-medium"
              >
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-primary">
                    08:00
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Open for early birds
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
