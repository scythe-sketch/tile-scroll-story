import { ScrollReveal } from "@/components/ScrollReveal";
import { Instagram } from "lucide-react";
import tileSpace1 from "@/assets/tile-space-1.jpg";
import tileSpace2 from "@/assets/tile-space-2.jpg";
import tileSpace3 from "@/assets/tile-space-3.jpg";
import tileSpace4 from "@/assets/tile-space-4.jpg";
import tileSpace5 from "@/assets/tile-space-5.jpg";
import tileSpace6 from "@/assets/tile-space-6.jpg";
const instagramImages = [tileSpace1, tileSpace2, tileSpace3, tileSpace4, tileSpace5, tileSpace6];
interface InstagramSectionProps {
  className?: string;
}

export const InstagramSection = ({ className }: InstagramSectionProps) => {
  return <section className={`bg-matcha/20 py-20 ${className || ''}`}>
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <a href="https://www.instagram.com/tiledubai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                <Instagram size={24} className="text-white" />
              </div>
              <div className="text-left">
                <span className="text-sm text-primary-foreground">Follow us on Instagram</span>
                <p className="font-display text-xl font-bold transition-colors text-primary-foreground">
                  @tiledubai
                </p>
              </div>
            </a>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {instagramImages.map((image, index) => <ScrollReveal key={index} delay={index * 0.05}>
              <a href="https://www.instagram.com/tiledubai" target="_blank" rel="noopener noreferrer" className="block aspect-square overflow-hidden rounded-xl group">
                <img src={image} alt={`TILE café Instagram post ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              </a>
            </ScrollReveal>)}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-8">
            <a href="https://www.instagram.com/tiledubai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-primary transition-colors">
              <Instagram size={18} />
              View More on Instagram
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>;
};