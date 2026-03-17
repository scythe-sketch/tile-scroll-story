import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Egg, Salad, Sandwich, UtensilsCrossed, Popcorn,
  Coffee, Sparkles, IceCreamCone, Cake, CupSoda,
  Milk, Leaf, Blend, GlassWater
} from "lucide-react";

type MenuTab = string;

interface MenuItem {
  name: string;
  description?: string;
}

interface MenuCategory {
  id: string;
  label: string;
  icon: React.ElementType;
  items: MenuItem[];
  note?: string;
}

const menuCategories: MenuCategory[] = [
  {
    id: "breakfast",
    label: "all day breakfast",
    icon: Egg,
    items: [
      { name: "banana cinnamon oats", description: "warm oats with banana and cinnamon" },
      { name: "chia bowl with fruits & nuts", description: "chia pudding with fresh toppings" },
      { name: "pancakes with fruits", description: "fluffy pancakes with fresh fruits" },
      { name: "strawberry nutella crêpe", description: "sweet crêpe with strawberry and nutella" },
      { name: "spinach & ricotta crêpe", description: "savoury crêpe with creamy filling" },
      { name: "mushroom cream crêpe", description: "rich mushroom and cream filling" },
      { name: "avocado on toast", description: "smashed avocado on toasted bread" },
      { name: "tofu scramble on toast", description: "plant-based scrambled tofu on toast" },
      { name: "wild mushrooms on toast", description: "sautéed mushrooms on toast" },
      { name: "açaí bowl with fruits & nuts", description: "refreshing açaí with toppings" },
      { name: "strawberry oreo mini pancakes", description: "mini pancakes with oreo and strawberry" },
      { name: "butter croissant", description: "fresh, flaky classic" },
    ],
  },
  {
    id: "salads",
    label: "salads",
    icon: Salad,
    items: [
      { name: "beetroot & strawberry salad", description: "fresh beetroot with sweet strawberry" },
      { name: "quinoa edamame salad", description: "protein-rich quinoa and edamame" },
      { name: "pasta salad", description: "light pasta with fresh vegetables" },
      { name: "greek salad", description: "feta, olives, and fresh vegetables" },
      { name: "caesar salad", description: "crisp lettuce with creamy dressing" },
      { name: "mixed bean salad", description: "hearty mixed beans and herbs" },
      { name: "sweet potato salad", description: "roasted sweet potato and greens" },
      { name: "super food salad", description: "nutrient-packed healthy mix" },
    ],
  },
  {
    id: "sandwiches",
    label: "sandwiches & wraps",
    icon: Sandwich,
    items: [
      { name: "pesto caprese panini", description: "mozzarella, tomato, and pesto" },
      { name: "cheese grilled panini", description: "melted cheese in toasted bread" },
      { name: "the bombay special", description: "spiced indian-style sandwich" },
      { name: "grilled veggies panini", description: "roasted vegetables in panini" },
      { name: "avocado halloumi wrap", description: "creamy avocado with grilled halloumi" },
      { name: "garden veggie wrap", description: "fresh vegetables in soft wrap" },
      { name: "teriyaki paneer wrap", description: "paneer with sweet teriyaki glaze" },
    ],
    note: "all wraps served with potato wedges",
  },
  {
    id: "mains",
    label: "mains",
    icon: UtensilsCrossed,
    items: [
      { name: "margherita pizza" },
      { name: "penne arrabiata" },
      { name: "spaghetti aglio e olio" },
      { name: "pesto pasta" },
    ],
  },
  {
    id: "starters",
    label: "starters & sides",
    icon: Popcorn,
    items: [
      { name: "spicy salted edamame" },
      { name: "nachos" },
      { name: "roasted potato wedges" },
      { name: "french fries" },
      { name: "garlic mozzarella bread" },
      { name: "butter popcorn" },
      { name: "cheese popcorn" },
    ],
  },
  {
    id: "coffee",
    label: "coffee",
    icon: Coffee,
    items: [
      { name: "espresso" },
      { name: "americano" },
      { name: "macchiato" },
      { name: "cortado" },
      { name: "cappuccino" },
      { name: "café latte" },
      { name: "spanish latte" },
      { name: "café mocha" },
      { name: "flat white" },
      { name: "v60" },
      { name: "hot chocolate" },
    ],
  },
  {
    id: "matcha",
    label: "matcha & speciality",
    icon: Sparkles,
    items: [
      { name: "matcha latte" },
      { name: "cloud matcha" },
      { name: "iced matcha latte" },
      { name: "mango matcha iced latte" },
      { name: "strawberry matcha iced latte" },
    ],
  },
  {
    id: "iced-coffee",
    label: "iced coffee",
    icon: IceCreamCone,
    items: [
      { name: "iced americano" },
      { name: "iced cappuccino" },
      { name: "iced mocha" },
      { name: "iced latte" },
      { name: "iced spanish latte" },
      { name: "coconut iced americano" },
      { name: "iced vanilla latte" },
    ],
  },
  {
    id: "desserts",
    label: "desserts",
    icon: Cake,
    items: [
      { name: "double chocolate cookie", description: "soft cookie with chocolate chunks" },
      { name: "chocolate fudge cup", description: "rich chocolate dessert" },
      { name: "banana walnut choco slice", description: "moist banana chocolate cake" },
      { name: "marble cake slice", description: "vanilla and chocolate swirl" },
      { name: "chocolate cake", description: "classic rich chocolate cake" },
      { name: "classic tiramisu", description: "italian coffee dessert" },
      { name: "oreo cheesecake" },
      { name: "very berry cheesecake" },
      { name: "lotus cheesecake" },
      { name: "affogato", description: "espresso over vanilla ice cream" },
      { name: "vanilla ice cream" },
      { name: "double chocolate ice cream" },
    ],
  },
  {
    id: "shakes",
    label: "milkshakes & protein",
    icon: Milk,
    items: [
      { name: "coffee date vanilla protein", description: "protein shake with coffee and dates" },
      { name: "strawberry vanilla protein", description: "fruity protein blend" },
      { name: "banana peanut butter protein", description: "creamy and rich" },
      { name: "double chocolate shake" },
      { name: "fresh strawberry shake" },
      { name: "banana cream shake" },
    ],
  },
  {
    id: "teas",
    label: "teas",
    icon: Leaf,
    items: [
      { name: "masala chai" },
      { name: "saffron chai" },
      { name: "ginger cinnamon honey" },
      { name: "avantcha moroccan mint" },
      { name: "avantcha jasmine" },
      { name: "avantcha green" },
      { name: "avantcha chamomile" },
      { name: "avantcha peach paradise" },
      { name: "avantcha singapore surprise" },
      { name: "avantcha royal earl grey" },
    ],
  },
  {
    id: "smoothies",
    label: "smoothies & frappes",
    icon: Blend,
    items: [
      { name: "blue tilebreaker" },
      { name: "berry mania" },
      { name: "tropical fruits" },
      { name: "charcoal magic" },
      { name: "detox green" },
      { name: "matcha glow" },
      { name: "icy matcha frappe" },
      { name: "iced mocha frappe" },
      { name: "caramel coffee frappe" },
      { name: "matcha vanilla frappe" },
      { name: "tile cold coffee" },
    ],
  },
  {
    id: "refreshers",
    label: "refreshers & juices",
    icon: GlassWater,
    items: [
      { name: "house brewed iced tea" },
      { name: "classic mojito" },
      { name: "strawberry mojito" },
      { name: "matcha mint mojito" },
      { name: "lemon & mint juice" },
      { name: "orange juice" },
      { name: "watermelon juice" },
      { name: "carrot juice" },
      { name: "fresh coconut water" },
    ],
  },
];

export const MenuSection = () => {
  const [activeTab, setActiveTab] = useState(menuCategories[0].id);
  const activeCategory = menuCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="menu" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              our menu
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6 font-bold lowercase">
              fuel your play
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto lowercase">
              good ingredients, good coffee, good fuel. simple things done well.
            </p>
          </ScrollReveal>
        </div>

        {/* Tab Switcher */}
        <ScrollReveal>
          <div className="flex justify-center mb-14">
            <div className="inline-flex flex-wrap justify-center gap-1.5 bg-secondary/40 p-1.5 rounded-2xl max-w-4xl">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`relative px-3 md:px-4 py-2 rounded-xl font-medium text-xs transition-all duration-300 flex items-center gap-1.5 lowercase ${
                    activeTab === cat.id
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeTab === cat.id && (
                    <motion.div
                      layoutId="activeMenuTab"
                      className="absolute inset-0 bg-primary rounded-xl"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <cat.icon size={14} />
                    <span className="hidden md:inline">{cat.label}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10 lowercase">
              {activeCategory.label}
            </h3>

            <div className="space-y-1">
              {activeCategory.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.03 }}
                  className="group py-3 px-4 rounded-xl hover:bg-card transition-colors duration-200"
                >
                  <h4 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors lowercase">
                    {item.name}
                  </h4>
                  {item.description && (
                    <p className="text-muted-foreground text-sm mt-0.5 lowercase">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            {activeCategory.note && (
              <p className="text-muted-foreground text-sm text-center mt-6 italic lowercase">
                {activeCategory.note}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
