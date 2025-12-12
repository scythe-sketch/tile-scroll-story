import { ScrollReveal } from "@/components/ScrollReveal";
import tileSpace2 from "@/assets/tile-space-2.jpg";
import tileSpace3 from "@/assets/tile-space-3.jpg";
import tileSpace4 from "@/assets/tile-space-4.jpg";
export const AboutSection = () => {
  return <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <span className="text-sm font-medium text-primary uppercase tracking-widest">
                Welcome to TILE
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight font-bold">Where Energy
Meets Community</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>Tile is a community-driven board game café built around the idea of connection. Inspired by the grid of tiles - small pieces that form something greater - Tile brings together people, coffee, and creativity in one warm, playful space.</p>
                <p>
                  Here, every moment fits into the bigger picture: a sip of specialty coffee, a move in your favourite game, a conversation that becomes a memory.
                </p>
                <p className="text-primary font-medium">A place to work, play, connect, and unwind - piece by piece.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Image Gallery */}
          <div className="relative">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                <img src={tileSpace2} alt="TILE café interior" className="w-full h-80 object-cover rounded-3xl shadow-medium" loading="lazy" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex gap-4 mt-4">
                <img src={tileSpace3} alt="Board games at TILE" className="w-1/2 h-48 object-cover rounded-2xl shadow-soft hover-lift" loading="lazy" />
                <img src={tileSpace4} alt="Community at TILE" className="w-1/2 h-48 object-cover rounded-2xl shadow-soft hover-lift" loading="lazy" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>;
};