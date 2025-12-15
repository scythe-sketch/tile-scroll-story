import { ScrollReveal } from "@/components/ScrollReveal";
import { MapPin, Clock, Phone, Mail, Instagram } from "lucide-react";
import tileLogo from "@/assets/tile-logo.png";
const quickLinks = [{
  href: "#about",
  label: "About"
}, {
  href: "#menu",
  label: "Menu"
}, {
  href: "#games",
  label: "Games"
}, {
  href: "#space",
  label: "Space"
}, {
  href: "#events",
  label: "Events"
}, {
  href: "#coworking",
  label: "Coworking"
}];
export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  const googleMapsUrl =
    "https://www.google.com/maps?q=347R+6J+tile+Board+Game+Cafe+-+Al+Thanyah+Fifth+-+Jumeirah+Heights+-+Dubai&ftid=0x3e5f6d003ab61c43:0x27eb4bcc1d7fbe4a&entry=gps&shh=CAE&lucs=,94297699,94275415,94284505,94231188,94280568,47071704,94218641,94282134,94286869&g_ep=CAISEjI1LjQ5LjkuODM4ODk5MTgzMBgAIIgnKlEsOTQyOTc2OTksOTQyNzU0MTUsOTQyODQ1MDUsOTQyMzExODgsOTQyODA1NjgsNDcwNzE3MDQsOTQyMTg2NDEsOTQyODIxMzQsOTQyODY4NjlCAkFF&skid=7051fafe-10eb-447d-9a17-9a79342d1f10&g_st=ia";

  const googleMapsEmbedUrl =
    "https://www.google.com/maps?output=embed&q=347R+6J+TILE+Board+Game+Cafe,+Jumeirah+Heights,+Dubai";
  return <footer id="visit" className="bg-foreground text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Location */}
          <ScrollReveal>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin size={20} />
                <span className="font-medium uppercase tracking-wider text-sm">
                  Location
                </span>
              </div>
              <div className="space-y-2">
                <p className="font-display text-xl font-bold">Inside Grip Sports Club</p>
                <p className="text-primary-foreground/70">
                  Jumeirah Islands / JLT Border
                </p>
                <p className="text-primary-foreground/70">Dubai, UAE</p>
                <p className="text-matcha font-medium mt-3">Free Onsite Parking</p>
                <p className="text-primary-foreground/60 text-sm">
                  5–7 min walk from JLT Metro (DMCC)
                </p>
              </div>
              {/* Google Maps Embed */}
              <div className="mt-4 rounded-xl overflow-hidden h-40 relative">
                <iframe
                  src={googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="TILE Board Game Cafe Location Map"
                  className="grayscale opacity-80 transition-all duration-500"
                />
                {/* Click overlay to open the exact location in Google Maps */}
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0"
                  aria-label="Open TILE Board Game Cafe in Google Maps"
                >
                  <span className="sr-only">Open in Google Maps</span>
                </a>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-3 text-sm font-medium text-matcha hover:underline"
              >
                Open in Google Maps
              </a>
            </div>
          </ScrollReveal>

          {/* Hours */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Clock size={20} />
                <span className="font-medium uppercase tracking-wider text-sm">
                  Hours
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-primary-foreground/10">
                  <span className="text-primary-foreground/70">Daily</span>
                  <span className="font-display text-lg font-bold">08:00AM – 12:00AM</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Phone size={20} />
                <span className="font-medium uppercase tracking-wider text-sm">
                  Contact
                </span>
              </div>
              <div className="space-y-4">
                <a href="https://wa.me/971525789699" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-foreground/80 hover:text-matcha transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-matcha/20 transition-colors">
                    <Phone size={18} />
                  </div>
                  <span>+971 52 578 9699</span>
                </a>
                <a href="mailto:info@tiledubai.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-matcha transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-matcha/20 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span>info@tiledubai.com</span>
                </a>
                <a href="https://instagram.com/tiledubai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-foreground/80 hover:text-matcha transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-matcha/20 transition-colors">
                    <Instagram size={18} />
                  </div>
                  <span>@tiledubai</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal delay={0.3}>
            <div className="space-y-4">
              <span className="font-medium uppercase tracking-wider text-sm text-primary-foreground/80">
                Quick Links
              </span>
              <nav className="flex flex-col gap-2">
                {quickLinks.map(link => <button key={link.href} onClick={() => scrollToSection(link.href)} className="text-left text-primary-foreground/70 hover:text-matcha transition-colors py-1">
                    {link.label}
                  </button>)}
              </nav>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Brand Tagline */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-12">
          <ScrollReveal>
            <div className="text-center">
              <img src={tileLogo} alt="TILE" className="h-12 w-auto mx-auto mb-6 brightness-0 invert opacity-80" />
              <p className="font-display text-2xl md:text-3xl lg:text-4xl text-primary-foreground/90 font-bold">"Find Your Missing Piece at TILE."</p>
              <p className="text-primary-foreground/50 text-sm mt-4 max-w-md mx-auto">A community you can piece together. Where good energy gathers.</p>
              <div className="mt-8 flex items-center justify-center gap-4 text-primary-foreground/50 text-sm">
                <span>© 2025 tile</span>
                <span>•</span>
                <span>Dubai's Board Game Café</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>;
};