import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Wifi, Plug, Sun, Car } from "lucide-react";
import coworkingSpace from "@/assets/coworking-space.jpg";

const features = [
  { icon: Wifi, label: "Fast WiFi" },
  { icon: Plug, label: "Outlets Everywhere" },
  { icon: Sun, label: "Natural Light" },
  { icon: Car, label: "Free Parking" },
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
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
                  Your New Favorite Workspace
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Mornings at TILE are for focus. Enjoy the calm atmosphere, great
                  coffee, and inspiring environment. Stay productive while
                  surrounded by creativity.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-4 bg-card rounded-xl"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                      <feature.icon size={20} />
                    </div>
                    <span className="font-medium text-foreground">
                      {feature.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              <Button
                variant="sage"
                size="lg"
                onClick={() =>
                  window.open("https://wa.me/971000000000", "_blank")
                }
              >
                Book a Desk
              </Button>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <img
                src={coworkingSpace}
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
                  <div className="font-display text-3xl font-medium text-primary">
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
