import { useEffect, useRef, useCallback } from "react";
import { ArrowRight, ArrowLeft, Compass, HardHat, Ship, CloudSun, Mountain, Droplets, FlaskConical, TestTubeDiagonal, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { name: "Land Surveying Instrument", icon: Compass },
  { name: "Construction Materials Testing Instrument", icon: HardHat },
  { name: "Bathymetric & Hydrographic Surveying Instrument", icon: Ship },
  { name: "Weather, Environmental & Horticulture Instrument", icon: CloudSun },
  { name: "Geological & Earth Exploration Instrument", icon: Mountain },
  { name: "Air & Water Quality Testing Instrument", icon: Droplets },
  { name: "Laboratory & Scientific Instrument", icon: FlaskConical },
  { name: "Analytical Testing Instrument", icon: TestTubeDiagonal },
];

const CARD_WIDTH = 260 + 20; // card width + gap

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
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
          Key Product Categories
        </h2>
        <p className="text-muted-foreground text-center mt-3 max-w-2xl mx-auto">
          Explore our comprehensive range of professional-grade instruments across eight specialized categories.
        </p>
      </div>

      <div className="relative">
        <button
          onClick={() => scrollBy(-1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card/80 backdrop-blur border border-border shadow-md flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-hidden px-4"
          style={{ scrollBehavior: "auto" }}
        >
        {items.map((cat, i) => {
          const Icon = cat.icon;
          return (
            <a
              key={i}
              href="#"
              className="group flex-shrink-0 w-[260px] bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:border-accent/40"
            >
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                <Icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-sm font-semibold text-foreground leading-snug mb-4 min-h-[40px]">
                {cat.name}
              </h3>
              <div className="relative h-9 w-full overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-x-full">
                  <ArrowRight className="w-5 h-5 text-accent" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center gap-1.5 translate-x-full transition-transform duration-300 group-hover:translate-x-0">
                  <span className="text-sm font-medium text-accent">View Products</span>
                  <ArrowRight className="w-4 h-4 text-accent" />
                </div>
              </div>
            </a>
          );
        })}
        </div>
        <button
          onClick={() => scrollBy(1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card/80 backdrop-blur border border-border shadow-md flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default KeyProductCategories;
