import { useEffect, useRef } from "react";
import { ArrowRight, Compass, HardHat, Ship, CloudSun, Mountain, Droplets, FlaskConical, TestTubeDiagonal } from "lucide-react";

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

const KeyProductCategories = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let scrollPos = 0;
    const speed = 0.5;

    const animate = () => {
      scrollPos += speed;
      if (scrollPos >= el.scrollWidth / 2) {
        scrollPos = 0;
      }
      el.scrollLeft = scrollPos;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const pause = () => cancelAnimationFrame(animationRef.current!);
    const resume = () => { animationRef.current = requestAnimationFrame(animate); };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animationRef.current!);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
  }, []);

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
    </section>
  );
};

export default KeyProductCategories;
