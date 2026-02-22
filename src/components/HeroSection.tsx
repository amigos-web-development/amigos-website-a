import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg1 from "@/assets/hero_background_1.jpg";
import heroBg2 from "@/assets/hero_background_2.jpg";
import heroBg3 from "@/assets/hero_background_3.jpg";
import geomax from "@/assets/geomax_automatic_level.png";
import myzaxLaser from "@/assets/myzax_laser_distance.png";
import laserTech from "@/assets/laser_technology_rangefinder_hypsometer.png";
import myzoxTripod from "@/assets/myzox_aluminium_tripod.png";

const slides = [
  { bg: heroBg1, description: "We are deeply committed to customer satisfaction and long-term technical support." },
  { bg: heroBg2, description: "We are deeply committed to customer satisfaction and long-term technical support." },
  { bg: heroBg3, description: "We are deeply committed to customer satisfaction and long-term technical support." },
];

const featuredProducts = [
  { image: geomax, label: "GEOMAX Automatic Level" },
  { image: myzaxLaser, label: "Myzax Laser Distance" },
  { image: laserTech, label: "Laser Technology Rangefinder Hypsometer" },
  { image: myzoxTripod, label: "Myzox Aluminium Tripod" },
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
      <div className="relative z-10 h-full flex flex-col justify-end pb-16">
        <div className="container mx-auto px-4" style={{ maxWidth: "80%" }}>
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl bg-slate-200/30 dark:bg-slate-800/40 p-12 rounded-xl"
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

          {/* Featured Products Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {featuredProducts.map((product) => (
              <div
                key={product.label}
                className="relative group bg-slate-200/30 dark:bg-slate-800/40 rounded-xl p-4 flex flex-col items-center overflow-hidden cursor-pointer"
              >
                <img
                  src={product.image}
                  alt={product.label}
                  className="h-28 object-contain mb-3 transition-transform duration-300 group-hover:scale-105"
                />
                <p className="text-slate-200 text-sm font-medium text-center leading-tight">
                  {product.label}
                </p>
                {/* Hover overlay */}
                <div className="absolute inset-0 rounded-xl bg-[linear-gradient(135deg,_#1d4ed8cc,_#dc2626cc,_#f97316cc)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href="#"
                    className="px-5 py-2 bg-white text-slate-800 font-semibold rounded-lg text-sm shadow-lg"
                  >
                    View Products
                  </a>
                </div>
              </div>
            ))}
          </div>
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
