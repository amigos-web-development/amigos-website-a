import { useEffect, useRef, useCallback } from "react";
import partner1 from "@/assets/partner_1.png";
import partner2 from "@/assets/partner_2.png";
import partner3 from "@/assets/partner_3.png";
import partner4 from "@/assets/partner_4.png";
import partner5 from "@/assets/partner_5.jpg";
import partner6 from "@/assets/partner_6.jpg";
import partner7 from "@/assets/partner_7.jpg";
import partner8 from "@/assets/partner_8.jpg";
import partner9 from "@/assets/partner_9.jpg";

const logos = [
{ src: partner1, alt: "Spectrum Technology Group" },
{ src: partner2, alt: "IDS Ingegneria Dei Sistemi" },
{ src: partner3, alt: "Olympus" },
{ src: partner4, alt: "Myzox" },
{ src: partner5, alt: "Hanna Instruments" },
{ src: partner6, alt: "Humboldt" },
{ src: partner7, alt: "Adam Equipment" },
{ src: partner8, alt: "GeoMax" },
{ src: partner9, alt: "Hi-Target" }];


const Partners = () => {
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

  const items = [...logos, ...logos];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
          Our Partners
        </h2>
        <p className="text-muted-foreground text-center mt-3 max-w-2xl mx-auto">
          We collaborate with world-leading manufacturers to deliver the highest quality instruments.
        </p>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-12 items-center overflow-hidden px-4 py-[8px]"
        style={{ scrollBehavior: "auto" }}>

        {items.map((logo, i) =>
        <div
          key={i}
          className="flex-shrink-0 w-[180px] h-[100px] flex items-center justify-center bg-slate-100 dark:bg-slate-700 rounded-lg p-4 border-border px-[4px] py-[4px] border-0 shadow-lg">

            <img
            src={logo.src}
            alt={logo.alt}
            className="max-w-full max-h-full object-contain" />

          </div>
        )}
      </div>
    </section>);

};

export default Partners;