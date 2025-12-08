import { ScrollReveal } from "@/components/ScrollReveal";
import gamesTable from "@/assets/games-table.jpg";
import coffeeDrinks from "@/assets/coffee-drinks.jpg";
import gameNight from "@/assets/game-night.jpg";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <span className="text-sm font-medium text-primary uppercase tracking-widest">
                Welcome to
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                Dubai's First Board-Game Café
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  TILE is built around community, comfort, and creativity. A
                  place where strangers become friends over shared strategies,
                  where the aroma of specialty coffee mingles with laughter.
                </p>
                <p>
                  Whether you're here to work, play, connect, or simply unwind —
                  you've found your missing piece.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Image Gallery */}
          <div className="relative">
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative">
                <img
                  src={gamesTable}
                  alt="Board games and coffee at TILE"
                  className="w-full h-80 object-cover rounded-3xl shadow-medium"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex gap-4 mt-4">
                <img
                  src={coffeeDrinks}
                  alt="Specialty drinks at TILE"
                  className="w-1/2 h-48 object-cover rounded-2xl shadow-soft hover-lift"
                  loading="lazy"
                />
                <img
                  src={gameNight}
                  alt="Game night at TILE"
                  className="w-1/2 h-48 object-cover rounded-2xl shadow-soft hover-lift"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
