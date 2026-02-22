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
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img src={slides[current].bg} alt="" className="w-full h-full object-cover animate-hero-zoom" />
          <div className="absolute inset-0 hero-gradient-overlay" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4" style={{ maxWidth: "80%" }}>
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl bg-slate-200/50 dark:bg-slate-800/50 p-12 rounded-xl"
          >
            <p className="text-slate-200 leading-relaxed mb-8 max-w-2xl md:text-4xl font-heading">
              {slides[current].description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="px-6 py-3 bg-[linear-gradient(135deg,_#222,_#444,_#555)] hover:bg-[linear-gradient(135deg,_#1d4ed8,_#dc2626,_#f97316)] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
              >
                Contact Sales
              </a>
              <a
                href="#"
                className="px-6 py-3 border-2 border-slate-200/50 hover:border-0 hover:bg-[linear-gradient(135deg,_#222,_#444,_#555)] text-slate-200 font-semibold rounded-lg transition-all duration-100"
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
