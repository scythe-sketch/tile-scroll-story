import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: React.ReactNode;
  backgroundImage?: string;
  overlayOpacity?: number;
  speed?: number;
  className?: string;
}

export const ParallaxSection = ({
  children,
  backgroundImage,
  overlayOpacity = 0.4,
  speed = 0.5,
  className = "",
}: ParallaxSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 30}%`]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <>
          <motion.div
            style={{ y }}
            className="absolute inset-0 -top-[20%] -bottom-[20%]"
          >
            <img
              src={backgroundImage}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <div
            className="absolute inset-0 bg-foreground"
            style={{ opacity: overlayOpacity }}
          />
        </>
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
};
