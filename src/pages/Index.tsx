import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SpaceSection } from "@/components/sections/SpaceSection";
import { GamesSection } from "@/components/sections/GamesSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { CoworkingSection } from "@/components/sections/CoworkingSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SpaceSection />
      <GamesSection />
      <MenuSection />
      <EventsSection />
      <CoworkingSection />
      <InstagramSection />
      <Footer />
    </main>
  );
};

export default Index;
