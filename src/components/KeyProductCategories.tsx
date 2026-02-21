import { useEffect, useRef, useCallback } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Compass,
  HardHat,
  Ship,
  CloudSun,
  Mountain,
  Droplets,
  FlaskConical,
  TestTubeDiagonal } from
"lucide-react";

import catLandSurveying from "@/assets/cat_land_surveying.jpg";
import catConstruction from "@/assets/cat_construction.jpg";
import catBathymetric from "@/assets/cat_bathymetric.jpg";
import catWeather from "@/assets/cat_weather.jpg";
import catGeological from "@/assets/cat_geological.jpg";
import catWaterQuality from "@/assets/cat_water_quality.jpg";
import catLaboratory from "@/assets/cat_laboratory.jpg";
import catAnalytical from "@/assets/cat_analytical.jpg";

const categories = [
{ name: "Land Surveying Instrument", icon: Compass, image: catLandSurveying },
{ name: "Construction Materials Testing Instrument", icon: HardHat, image: catConstruction },
{ name: "Bathymetric & Hydrographic Surveying Instrument", icon: Ship, image: catBathymetric },
{ name: "Weather, Environmental & Horticulture Instrument", icon: CloudSun, image: catWeather },
{ name: "Geological & Earth Exploration Instrument", icon: Mountain, image: catGeological },
{ name: "Air & Water Quality Testing Instrument", icon: Droplets, image: catWaterQuality },
{ name: "Laboratory & Scientific Instrument", icon: FlaskConical, image: catLaboratory },
{ name: "Analytical Testing Instrument", icon: TestTubeDiagonal, image: catAnalytical }];


const CARD_WIDTH = 260 + 20;

const KeyProductCategories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const scrollPosRef = useRef(0);

  const startAnimation = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const speed = 0.5;
    const animate = () => {
      scrollPosRef.current += speed;
      if (scrollPosRef.current >= el.scrollWidth / 2) {
        scrollPosRef.current = 0;
      }
      el.scrollLeft = scrollPosRef.current;
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
  }, []);

  const stopAnimation = useCallback(() => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
  }, []);

  useEffect(() => {
    startAnimation();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("mouseenter", stopAnimation);
    el.addEventListener("mouseleave", startAnimation);
    return () => {
      stopAnimation();
      el.removeEventListener("mouseenter", stopAnimation);
      el.removeEventListener("mouseleave", startAnimation);
    };
  }, [startAnimation, stopAnimation]);

  const scrollBy = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    stopAnimation();
    scrollPosRef.current = el.scrollLeft + dir * CARD_WIDTH * 2;
    if (scrollPosRef.current >= el.scrollWidth / 2) scrollPosRef.current -= el.scrollWidth / 2;
    if (scrollPosRef.current < 0) scrollPosRef.current += el.scrollWidth / 2;
    el.scrollTo({ left: scrollPosRef.current, behavior: "smooth" });
    setTimeout(startAnimation, 600);
  };

  const items = [...categories, ...categories];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Key Product Categories</h2>
        <p className="text-muted-foreground text-center mt-3 max-w-2xl mx-auto">
          Explore our comprehensive range of professional-grade instruments across eight specialized categories.
        </p>
      </div>

      <div className="relative">
        <button
          onClick={() => scrollBy(-1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur border border-white/30 shadow-md flex items-center justify-center text-white hover:bg-white/30 transition-colors">

          <ChevronLeft className="w-5 h-5" />
        </button>
        <div ref={scrollRef} className="flex gap-5 overflow-hidden px-4" style={{ scrollBehavior: "auto" }}>
          {items.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <a
                key={i}
                href="#"
                className="group flex-shrink-0 w-[260px] rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg relative">

                {/* Background image */}
                <div className="absolute inset-0">
                  <img src={cat.image} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />
                </div>

                {/* Content - left aligned */}
                <div className="relative z-10 p-6 flex flex-col items-start text-left min-h-[200px]">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-white leading-snug mb-4 min-h-[40px] text-base">{cat.name}</h3>
                  <div className="mt-auto flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium text-white">View Products</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </a>);

          })}
        </div>
        <button
          onClick={() => scrollBy(1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur border border-white/30 shadow-md flex items-center justify-center text-white hover:bg-white/30 transition-colors">

          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>);

};

export default KeyProductCategories;