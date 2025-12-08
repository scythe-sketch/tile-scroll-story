import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Users, Clock, Puzzle, Gamepad2 } from "lucide-react";
import gameShelves from "@/assets/game-shelves.jpg";

const gameCategories = [
  {
    name: "Strategy",
    icon: Puzzle,
    description: "Deep tactical games for the planners",
    games: ["Catan", "Ticket to Ride", "Wingspan", "Azul"],
  },
  {
    name: "Party",
    icon: Users,
    description: "Get the whole group laughing",
    games: ["Codenames", "Dixit", "Just One", "Wavelength"],
  },
  {
    name: "Classic",
    icon: Dice1,
    description: "Timeless favorites for all ages",
    games: ["Chess", "Backgammon", "Scrabble", "Monopoly"],
  },
  {
    name: "Quick Play",
    icon: Clock,
    description: "Perfect for a coffee break",
    games: ["Uno", "Sushi Go!", "Love Letter", "Coup"],
  },
];

const diceIcons = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

export const GamesSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="games" className="py-24 md:py-32 bg-sage-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Our Collection
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
              200+ Games. Infinite Fun.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Strategy, party games, classics, family games — handpicked for
              every mood and moment.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <img
                src={gameShelves}
                alt="Board game collection"
                className="w-full h-[500px] object-cover rounded-3xl shadow-medium"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-medium">
                <div className="flex gap-2">
                  {diceIcons.map((DiceIcon, i) => (
                    <motion.div
                      key={i}
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                    >
                      <DiceIcon className="w-8 h-8 text-primary" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Category Selector */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {gameCategories.map((category, index) => (
                  <motion.button
                    key={category.name}
                    onClick={() => setActiveCategory(index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                      activeCategory === index
                        ? "bg-primary text-primary-foreground shadow-medium"
                        : "bg-card text-foreground hover:bg-card/80"
                    }`}
                  >
                    <category.icon
                      className={`w-8 h-8 mb-3 ${
                        activeCategory === index
                          ? "text-primary-foreground"
                          : "text-primary"
                      }`}
                    />
                    <div className="font-display text-lg font-medium">
                      {category.name}
                    </div>
                    <div
                      className={`text-sm mt-1 ${
                        activeCategory === index
                          ? "text-primary-foreground/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      {category.description}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Games List */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card p-6 rounded-2xl"
                >
                  <h3 className="font-display text-lg font-medium mb-4 flex items-center gap-2">
                    <Gamepad2 className="w-5 h-5 text-primary" />
                    Featured {gameCategories[activeCategory].name} Games
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {gameCategories[activeCategory].games.map((game) => (
                      <span
                        key={game}
                        className="px-4 py-2 bg-secondary rounded-full text-sm text-secondary-foreground"
                      >
                        {game}
                      </span>
                    ))}
                    <span className="px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium">
                      +50 more
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
