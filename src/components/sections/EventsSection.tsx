import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ParallaxSection } from "@/components/ParallaxSection";
import { Button } from "@/components/ui/button";
import { Calendar, Trophy, Users, Sparkles, GraduationCap, Palette } from "lucide-react";
import gameNight from "@/assets/game-night.jpg";

const events = [
  {
    icon: Calendar,
    title: "Game Nights",
    description: "Weekly gatherings for board game enthusiasts of all levels.",
    time: "Weekly",
  },
  {
    icon: Trophy,
    title: "Tournaments",
    description: "Compete in featured games and win prizes. All skill levels welcome.",
    time: "Monthly",
  },
  {
    icon: Users,
    title: "Missing Piece Meetups",
    description: "Community meet-ups, creative nights, and social gatherings.",
    time: "Regular",
  },
  {
    icon: GraduationCap,
    title: "Study Groups",
    description: "University study groups and language exchange meetups.",
    time: "Weekdays",
  },
  {
    icon: Sparkles,
    title: "Private Events",
    description: "Birthdays, team buildings, corporate socials, and celebrations.",
    time: "By Booking",
  },
  {
    icon: Palette,
    title: "Creative Nights",
    description: "Open sketching, journaling, and artistic gatherings.",
    time: "Various",
  },
];

export const EventsSection = () => {
  return (
    <section id="events" className="relative">
      <ParallaxSection
        backgroundImage={gameNight}
        overlayOpacity={0.75}
        className="py-32 md:py-40"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <ScrollReveal>
              <span className="text-sm font-medium text-primary-foreground/80 uppercase tracking-widest">
                Events & Community
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mt-4 mb-6 font-bold">
                Play Together, Grow Together
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                TILE isn't just a café — it's a community. Join us for regular events, make new friends, and become part of something special.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {events.map((event, index) => (
              <ScrollReveal key={event.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-card/95 backdrop-blur-sm p-6 rounded-2xl h-full"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                    <event.icon size={24} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {event.description}
                  </p>
                  <span className="text-primary text-sm font-medium">
                    {event.time}
                  </span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center space-y-4">
              <p className="text-primary-foreground/70 text-sm">
                Unlimited games + food & drink packages available for groups
              </p>
              <Button
                variant="hero"
                size="xl"
                onClick={() =>
                  window.open("https://instagram.com/tiledubai", "_blank")
                }
              >
                Join Our Community
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </ParallaxSection>
    </section>
  );
};
