import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Coffee, UtensilsCrossed, Cake } from "lucide-react";
import coffeeDrinks from "@/assets/coffee-drinks.jpg";
import foodPlates from "@/assets/food-plates.jpg";
import foodGamesTable from "@/assets/food-games-table.jpg";
const menuTabs = [{
  id: "breakfast",
  label: "All-Day Breakfast",
  icon: UtensilsCrossed
}, {
  id: "mains",
  label: "Mains & Salads",
  icon: UtensilsCrossed
}, {
  id: "drinks",
  label: "Drinks",
  icon: Coffee
}, {
  id: "desserts",
  label: "Desserts",
  icon: Cake
}];
const menuItems = {
  breakfast: [{
    name: "Banana Cinnamon Oats",
    description: "Warm oats with fresh banana and cinnamon"
  }, {
    name: "Chia Bowl",
    description: "Vegan chia pudding with fresh toppings"
  }, {
    name: "Dulce Peanut Oats",
    description: "Sweet oats with peanut butter drizzle"
  }, {
    name: "Pancakes with Fruits",
    description: "Fluffy pancakes topped with seasonal fruits"
  }, {
    name: "Crepe with Fruits",
    description: "Light crepes with fresh fruit filling"
  }, {
    name: "Avocado on Toast",
    description: "Smashed avocado on artisan bread"
  }, {
    name: "Tofu Scramble on Toast",
    description: "Seasoned tofu scramble, vegan option"
  }, {
    name: "Açai Bowl",
    description: "Açai blend with fruits and nuts"
  }],
  mains: [{
    name: "Triple Grilled Cheese Panini",
    description: "Three cheese blend, perfectly grilled"
  }, {
    name: "The Bombay Special",
    description: "Spiced sandwich, Mumbai street food inspired"
  }, {
    name: "Grilled Veggies Sandwich",
    description: "Fresh grilled vegetables on artisan bread"
  }, {
    name: "Beetroot & Strawberry Salad",
    description: "Fresh beets with strawberries"
  }, {
    name: "Quinoa Edamame Salad",
    description: "Protein-rich quinoa with edamame"
  }, {
    name: "Pasta Salad",
    description: "Cold pasta with fresh vegetables"
  }, {
    name: "Greek Salad",
    description: "Classic Greek with feta and olives"
  }, {
    name: "Caesar Salad",
    description: "Romaine, croutons, parmesan, caesar dressing"
  }],
  drinks: [{
    name: "Iced Americano",
    description: "Bold espresso over ice"
  }, {
    name: "Iced Frappe",
    description: "Blended iced coffee drink"
  }, {
    name: "Iced Mocha Frappe",
    description: "Chocolate and coffee blended"
  }, {
    name: "Iced Spanish Latte",
    description: "Sweetened condensed milk latte"
  }, {
    name: "Iced Matcha Latte",
    description: "Ceremonial grade matcha, oat milk"
  }, {
    name: "Pour Over",
    description: "Single origin, rotating selection"
  }],
  desserts: [{
    name: "Double Chocolate Cookie",
    description: "Rich, chewy chocolate cookie"
  }, {
    name: "Oatmeal Raisin Cookie",
    description: "Classic oat and raisin"
  }, {
    name: "Double Chocolate Fudge Brownie",
    description: "Dense, fudgy brownie"
  }, {
    name: "Chocolate Fudge Cups",
    description: "Individual chocolate fudge portions"
  }, {
    name: "Banana Walnut Choco Loaf",
    description: "Moist banana bread with chocolate and walnuts"
  }]
};
type MenuTab = keyof typeof menuItems;
export const MenuSection = () => {
  const [activeTab, setActiveTab] = useState<MenuTab>("breakfast");
  return <section id="menu" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Our Menu
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6 font-bold">
              Fuel Your Play
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From hearty breakfast plates to specialty coffee and sweet treats — everything you need for a perfect game session.
            </p>
          </ScrollReveal>
        </div>

        {/* Tab Switcher */}
        <ScrollReveal>
          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap justify-center gap-2 bg-secondary p-1.5 rounded-full">
              {menuTabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id as MenuTab)} className={`relative px-4 md:px-6 py-2 md:py-3 rounded-full font-medium text-xs md:text-sm transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                  {activeTab === tab.id && <motion.div layoutId="activeTab" className="absolute inset-0 bg-primary rounded-full" transition={{
                type: "spring",
                stiffness: 400,
                damping: 30
              }} />}
                  <span className="relative z-10 flex items-center gap-2">
                    <tab.icon size={16} />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                  </span>
                </button>)}
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{
            opacity: 0,
            x: -30
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: 30
          }} transition={{
            duration: 0.4
          }}>
              <img src={foodGamesTable} alt={`${activeTab} at TILE`} className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-medium" loading="lazy" />
              <div className="mt-6 p-6 bg-card rounded-2xl">
                <p className="text-sm text-muted-foreground">Fresh ingredients. Honest flavours. Made to keep you going.<span className="font-medium text-primary">Cover charge:</span> AED 30 redeemable on food & drink per person
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Menu Items */}
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -20
          }} transition={{
            duration: 0.4
          }} className="space-y-3">
              {menuItems[activeTab].map((item, index) => <motion.div key={item.name} initial={{
              opacity: 0,
              x: 20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: index * 0.05
            }} className="group p-4 bg-card rounded-2xl hover:shadow-soft transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>)}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>;
};