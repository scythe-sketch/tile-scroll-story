import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Salad, Sandwich, UtensilsCrossed, Popcorn,
  Coffee, Sparkles, IceCreamCone, Cake, CupSoda,
  Milk, Leaf, Blend, GlassWater
} from "lucide-react";

type MenuTab = string;

interface MenuItem {
  name: string;
  description?: string;
}

interface MenuSubSection {
  subheading?: string;
  items: MenuItem[];
}

interface MenuCategory {
  id: string;
  label: string;
  icon: React.ElementType;
  sections: MenuSubSection[];
  note?: string;
}

const menuCategories: MenuCategory[] = [
  {
    id: "breakfast",
    label: "all day breakfast",
    icon: Coffee,
    sections: [{
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
    }],
  },
  {
    id: "salads",
    label: "salads",
    icon: Salad,
    sections: [{
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
    }],
  },
  {
    id: "sandwiches",
    label: "sandwiches & wraps",
    icon: Sandwich,
    sections: [{
      items: [
        { name: "pesto caprese panini", description: "mozzarella, tomato, and pesto" },
        { name: "cheese grilled panini", description: "melted cheese in toasted bread" },
        { name: "the bombay special", description: "spiced indian-style sandwich" },
        { name: "grilled veggies panini", description: "roasted vegetables in panini" },
        { name: "avocado halloumi wrap", description: "creamy avocado with grilled halloumi" },
        { name: "garden veggie wrap", description: "fresh vegetables in soft wrap" },
        { name: "teriyaki paneer wrap", description: "paneer with sweet teriyaki glaze" },
      ],
    }],
    note: "all wraps served with potato wedges",
  },
  {
    id: "mains",
    label: "mains",
    icon: UtensilsCrossed,
    sections: [{
      items: [
        { name: "margherita pizza", description: "classic tomato and mozzarella" },
        { name: "penne arrabiata", description: "spicy tomato sauce pasta" },
        { name: "spaghetti aglio e olio", description: "garlic and olive oil spaghetti" },
        { name: "pesto pasta", description: "fresh basil pesto with pasta" },
      ],
    }],
  },
  {
    id: "starters",
    label: "starters & sides",
    icon: Popcorn,
    sections: [{
      items: [
        { name: "spicy salted edamame", description: "steamed with chilli salt" },
        { name: "nachos", description: "loaded with salsa and cheese" },
        { name: "roasted potato wedges", description: "crispy seasoned wedges" },
        { name: "french fries", description: "golden and crispy" },
        { name: "garlic mozzarella bread", description: "cheesy garlic flatbread" },
        { name: "butter popcorn", description: "classic buttery crunch" },
        { name: "cheese popcorn", description: "cheesy flavoured popcorn" },
      ],
    }],
  },
  {
    id: "matcha",
    label: "matcha",
    icon: Sparkles,
    sections: [{
      items: [
        { name: "matcha latte", description: "smooth ceremonial grade matcha" },
        { name: "cloud matcha", description: "fluffy cloud-topped matcha" },
        { name: "iced matcha latte", description: "chilled matcha over ice" },
        { name: "mango matcha iced latte", description: "tropical mango with matcha" },
        { name: "strawberry matcha iced latte", description: "sweet strawberry meets matcha" },
      ],
    }],
  },
  {
    id: "iced-specialty",
    label: "iced & specialty coffee",
    icon: IceCreamCone,
    sections: [{
      items: [
        { name: "iced americano", description: "bold espresso over ice" },
        { name: "iced cappuccino", description: "frothy cappuccino chilled" },
        { name: "iced mocha", description: "chocolate espresso on ice" },
        { name: "iced latte", description: "smooth latte over ice" },
        { name: "iced spanish latte", description: "sweetened condensed milk latte" },
        { name: "coconut iced americano", description: "coconut-infused cold espresso" },
        { name: "iced vanilla latte", description: "vanilla bean iced latte" },
      ],
    }],
  },
  {
    id: "coffee",
    label: "coffee",
    icon: Coffee,
    sections: [{
      items: [
        { name: "espresso", description: "rich single shot" },
        { name: "americano", description: "smooth and bold" },
        { name: "macchiato", description: "espresso with a dash of milk" },
        { name: "cortado", description: "equal parts espresso and milk" },
        { name: "cappuccino", description: "frothy and creamy" },
        { name: "café latte", description: "smooth steamed milk espresso" },
        { name: "spanish latte", description: "sweetened condensed milk blend" },
        { name: "café mocha", description: "chocolate meets espresso" },
        { name: "flat white", description: "velvety microfoam espresso" },
        { name: "v60", description: "hand-poured filter coffee" },
        { name: "hot chocolate", description: "rich and warming" },
      ],
    }],
  },
  {
    id: "desserts",
    label: "desserts",
    icon: Cake,
    sections: [{
      items: [
        { name: "double chocolate cookie", description: "soft cookie with chocolate chunks" },
        { name: "chocolate fudge cup", description: "rich chocolate dessert" },
        { name: "banana walnut choco slice", description: "moist banana chocolate cake" },
        { name: "marble cake slice", description: "vanilla and chocolate swirl" },
        { name: "chocolate cake", description: "classic rich chocolate cake" },
        { name: "classic tiramisu", description: "italian coffee dessert" },
        { name: "oreo cheesecake", description: "cookies and cream cheesecake" },
        { name: "very berry cheesecake", description: "mixed berry topped cheesecake" },
        { name: "lotus cheesecake", description: "biscoff caramel cheesecake" },
        { name: "affogato", description: "espresso over vanilla ice cream" },
        { name: "vanilla ice cream", description: "classic creamy scoop" },
        { name: "double chocolate ice cream", description: "indulgent chocolate scoop" },
      ],
    }],
  },
  {
    id: "shakes",
    label: "milkshakes & protein",
    icon: Milk,
    sections: [{
      items: [
        { name: "coffee date vanilla protein", description: "protein shake with coffee and dates" },
        { name: "strawberry vanilla protein", description: "fruity protein blend" },
        { name: "banana peanut butter protein", description: "creamy and rich" },
        { name: "double chocolate shake", description: "thick chocolate milkshake" },
        { name: "fresh strawberry shake", description: "blended fresh strawberries" },
        { name: "banana cream shake", description: "smooth banana and cream" },
      ],
    }],
  },
  {
    id: "teas",
    label: "teas",
    icon: Leaf,
    sections: [
      {
        items: [
          { name: "masala chai", description: "spiced indian tea blend" },
          { name: "saffron chai", description: "aromatic saffron-infused chai" },
          { name: "ginger cinnamon honey", description: "warming spiced herbal tea" },
          { name: "peach paradise", description: "sweet peach-infused tea" },
          { name: "singapore surprise", description: "tropical spiced tea blend" },
          { name: "royal earl grey", description: "classic bergamot black tea" },
        ],
      },
      {
        subheading: "avantcha collection",
        items: [
          { name: "moroccan mint", description: "refreshing north african mint" },
          { name: "jasmine", description: "fragrant jasmine green tea" },
          { name: "green", description: "pure and delicate green tea" },
          { name: "chamomile", description: "calming floral herbal tea" },
        ],
      },
    ],
  },
  {
    id: "smoothies",
    label: "smoothies & frappes",
    icon: Blend,
    sections: [{
      items: [
        { name: "blue tilebreaker", description: "blue spirulina, mango, banana, raspberry, coconut" },
        { name: "berry mania", description: "raspberry, blueberry, banana" },
        { name: "tropical fruits", description: "mango, passion fruit, pineapple" },
        { name: "charcoal magic", description: "blackcurrant, cherry, blueberry, blackberry, activated charcoal" },
        { name: "detox green", description: "broccoli, spinach, celery, mango, banana, pineapple" },
        { name: "matcha glow", description: "matcha, banana, mango, kale, coconut" },
        { name: "icy matcha frappe", description: "matcha, vanilla ice cream" },
        { name: "iced mocha frappe", description: "espresso, chocolate, ice cream" },
        { name: "caramel coffee frappe", description: "cold brew coffee, caramel, vanilla, ice cream" },
        { name: "matcha vanilla frappe", description: "matcha blended with vanilla cream" },
        { name: "tile cold coffee", description: "signature cold brew blend" },
      ],
    }],
  },
  {
    id: "refreshers",
    label: "refreshers & juices",
    icon: GlassWater,
    sections: [{
      items: [
        { name: "house brewed iced tea", description: "freshly brewed and chilled" },
        { name: "classic mojito", description: "lime, mint, and soda" },
        { name: "strawberry mojito", description: "strawberry twist on a classic" },
        { name: "matcha mint mojito", description: "matcha with fresh mint" },
        { name: "lemon & mint juice", description: "zesty and refreshing" },
        { name: "orange juice", description: "freshly squeezed orange" },
        { name: "watermelon juice", description: "sweet and hydrating" },
        { name: "carrot juice", description: "fresh cold-pressed carrot" },
        { name: "fresh coconut water", description: "natural and refreshing" },
      ],
    }],
  },
];

export const MenuSection = () => {
  const [activeTab, setActiveTab] = useState(menuCategories[0].id);
  const activeCategory = menuCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="menu" className="py-24 md:py-32 bg-gradient-section relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage-light/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
            <div className="inline-flex flex-wrap justify-center gap-1.5 bg-card/80 backdrop-blur-sm border border-border/50 p-2 rounded-2xl max-w-4xl shadow-soft">
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
                      className="absolute inset-0 bg-primary rounded-xl shadow-medium"
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

            {activeCategory.sections.map((section, sIdx) => (
              <div key={sIdx} className="mb-8">
                {section.subheading && (
                  <div className="flex items-center gap-3 mb-4 mt-6">
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                      {section.subheading}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                )}
                <div className="space-y-0.5">
                  {section.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.03 }}
                      className="group py-3 px-4 rounded-xl hover:bg-card/80 hover:shadow-soft transition-all duration-200"
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
              </div>
            ))}

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
