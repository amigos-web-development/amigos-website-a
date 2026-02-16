import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import person1 from "@/assets/testimonial_1.jpg";
import person2 from "@/assets/testimonial_2.jpg";
import person3 from "@/assets/testimonial_3.jpg";
import person4 from "@/assets/testimonial_4.jpg";

const testimonials = [
  {
    quote:
      "Amigos International has been our go-to partner for land surveying instruments. Their technical support and calibration services are unmatched. We've been working with them for over 5 years and they consistently deliver.",
    photo: person1,
    name: "U Kyaw Zin Oo",
    position: "Chief Surveyor",
    company: "Myanmar Construction & Engineering Co., Ltd.",
  },
  {
    quote:
      "The laboratory instruments supplied by Amigos are of exceptional quality. Their team provided thorough installation training and continues to support us with preventive maintenance. Highly recommended for any scientific institution.",
    photo: person2,
    name: "Daw Aye Myat Mon",
    position: "Laboratory Director",
    company: "National Analytical Laboratories Myanmar",
  },
  {
    quote:
      "We rely on Amigos for construction materials testing equipment across multiple project sites. Their rental program and responsive after-sales support have saved us significant time and costs on critical projects.",
    photo: person3,
    name: "U Thant Zin Aung",
    position: "Project Manager",
    company: "Golden Land Infrastructure Development",
  },
  {
    quote:
      "From weather monitoring stations to water quality testing instruments, Amigos has equipped our field teams with reliable technology. Their nationwide service coverage means we get support wherever our projects take us.",
    photo: person4,
    name: "Dr. Hla Myo Tun",
    position: "Environmental Specialist",
    company: "Green Earth Environmental Consulting",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = testimonials.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const getIndex = (offset: number) => (current + offset + total) % total;
  const prevIdx = getIndex(-1);
  const nextIdx = getIndex(1);

  const cardVariants = {
    center: { x: "0%", scale: 1, opacity: 1, zIndex: 20 },
    left: { x: "-85%", scale: 0.85, opacity: 0.5, zIndex: 10 },
    right: { x: "85%", scale: 0.85, opacity: 0.5, zIndex: 10 },
    hidden: { x: "0%", scale: 0.7, opacity: 0, zIndex: 0 },
  };

  const renderCard = (idx: number, variant: "center" | "left" | "right") => {
    const t = testimonials[idx];
    return (
      <motion.div
        key={`${variant}-${idx}`}
        initial="hidden"
        animate={variant}
        variants={cardVariants}
        transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
        className="absolute w-[60%] left-[20%]"
      >
        <div className="bg-slate-100 dark:bg-slate-700 rounded-xl p-8 md:p-10 shadow-lg border border-border">
          <Quote className="w-8 h-8 text-accent mb-4 opacity-60" />
          <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-8 italic">"{t.quote}"</p>
          <div className="flex items-center gap-4">
            <img src={t.photo} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-accent/30" />
            <div>
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.position}</p>
              <p className="text-sm text-accent font-medium">{t.company}</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      className="py-20 bg-secondary/20 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">What Our Clients Say</h2>
        <p className="text-muted-foreground text-center mt-3 max-w-2xl mx-auto">
          Trusted by leading organizations across Myanmar for precision instruments and reliable support.
        </p>
      </div>

      <div className="relative w-full mx-24" style={{ height: 380 }}>
        <AnimatePresence mode="popLayout">
          {renderCard(prevIdx, "left")}
          {renderCard(current, "center")}
          {renderCard(nextIdx, "right")}
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
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

export default Testimonials;
