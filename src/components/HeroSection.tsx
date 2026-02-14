import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg1 from "@/assets/hero_background_1.jpg";
import heroBg2 from "@/assets/hero_background_2.jpg";
import heroBg3 from "@/assets/hero_background_3.jpg";

const slides = [
  { bg: heroBg1, description: "We are deeply committed to customer satisfaction and long-term technical support." },
  { bg: heroBg2, description: "We are deeply committed to customer satisfaction and long-term technical support." },
  { bg: heroBg3, description: "We are deeply committed to customer satisfaction and long-term technical support." },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].bg}
            alt=""
            className="w-full h-full object-cover animate-hero-zoom"
          />
          <div className="absolute inset-0 hero-gradient-overlay" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl style={{ maxWidth: "80%" }}"
          >
            <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              {slides[current].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg"
              >
                Contact Sales
              </a>
              <a
                href="#"
                className="px-6 py-3 border-2 border-primary-foreground/50 text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
              >
                View Products
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`slide-indicator ${i === current ? "slide-indicator-active" : "slide-indicator-inactive"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
