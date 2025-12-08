import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Coffee, UtensilsCrossed } from "lucide-react";
import coffeeDrinks from "@/assets/coffee-drinks.jpg";
import foodPlates from "@/assets/food-plates.jpg";

const menuTabs = [
  { id: "food", label: "Food", icon: UtensilsCrossed },
  { id: "drinks", label: "Drinks", icon: Coffee },
];

const menuItems = {
  food: [
    { name: "Avocado Toast", description: "Sourdough, poached eggs, microgreens", price: "AED 48" },
    { name: "The TILE Club", description: "Triple-decker with turkey, bacon, swiss", price: "AED 52" },
    { name: "Mediterranean Bowl", description: "Falafel, hummus, tabbouleh, warm pita", price: "AED 45" },
    { name: "Grilled Cheese Deluxe", description: "Three cheeses, truffle oil, tomato soup", price: "AED 42" },
    { name: "Açaí Bowl", description: "Granola, fresh berries, coconut flakes", price: "AED 38" },
    { name: "Breakfast Plate", description: "Eggs your way, turkey bacon, toast", price: "AED 55" },
  ],
  drinks: [
    { name: "Signature Matcha", description: "Ceremonial grade, oat milk foam", price: "AED 28" },
    { name: "Pour Over", description: "Single origin, rotating selection", price: "AED 22" },
    { name: "Caramel Latte", description: "Double shot, house-made caramel", price: "AED 26" },
    { name: "Cold Brew", description: "18-hour steep, vanilla notes", price: "AED 24" },
    { name: "Chai Latte", description: "Spiced blend, steamed milk", price: "AED 24" },
    { name: "Fresh Juices", description: "Orange, apple, or seasonal blend", price: "AED 20" },
  ],
};

export const MenuSection = () => {
  const [activeTab, setActiveTab] = useState<"food" | "drinks">("food");

  return (
    <section id="menu" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Our Menu
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
              Fuel Your Play
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From hearty brunch plates to specialty coffee — everything you
              need for a perfect game session.
            </p>
          </ScrollReveal>
        </div>

        {/* Tab Switcher */}
        <ScrollReveal>
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-secondary p-1.5 rounded-full">
              {menuTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "food" | "drinks")}
                  className={`relative px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <tab.icon size={18} />
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={activeTab === "food" ? foodPlates : coffeeDrinks}
                alt={activeTab === "food" ? "Delicious food at TILE" : "Specialty drinks at TILE"}
                className="w-full h-[500px] object-cover rounded-3xl shadow-medium"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>

          {/* Menu Items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {menuItems[activeTab].map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-5 bg-card rounded-2xl hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-primary font-medium">{item.price}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
