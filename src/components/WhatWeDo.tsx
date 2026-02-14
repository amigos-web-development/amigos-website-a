import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import salesImg from "@/assets/sales_distribution.jpg";
import calibrationImg from "@/assets/calibration_support.jpg";
import surveyingImg from "@/assets/land_surveying.jpg";
import labImg from "@/assets/laboratory_services.jpg";
import rentalImg from "@/assets/instrument_rental.jpg";
import trainingImg from "@/assets/training_support.jpg";

const services = [
  {
    image: salesImg,
    title: "Sales & Distribution",
    description: "Authorized supplier of global-standard engineering, laboratory, analytical, geological, and environmental instruments.",
  },
  {
    image: calibrationImg,
    title: "Calibration & Technical Support",
    description: "Installation, calibration, preventive maintenance, and certified repair services delivered by skilled technicians.",
  },
  {
    image: surveyingImg,
    title: "Land Surveying & Digital Mapping Services",
    description: "Comprehensive surveying solutions including topographic, boundary, bathymetric, drone mapping, and GIS data processing for infrastructure and development.",
  },
  {
    image: labImg,
    title: "Laboratory Services",
    description: "Reliable elemental analysis, water quality testing, and geochemical screening with accurate reporting.",
  },
  {
    image: rentalImg,
    title: "Instrument Rental Services",
    description: "Flexible rental options for surveying, laboratory, and scientific instruments to support short-term or project-based needs.",
  },
  {
    image: trainingImg,
    title: "Training & Application Support",
    description: "Operation training and technical guidance to ensure users achieve the highest performance from their equipment and laboratory solutions.",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="card-service bg-card group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
        <button className="flex items-center gap-2 text-accent font-medium text-sm transition-all duration-300">
          <span className={`transition-all duration-300 ${hovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 absolute"}`}>
            Learn More
          </span>
          <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${hovered ? "translate-x-0" : ""}`} />
        </button>
      </div>
    </motion.div>
  );
};

const WhatWeDo = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What We Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Amigos International provides complete professional solutions across six core service areas:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
