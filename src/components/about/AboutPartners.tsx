import { motion } from "framer-motion";
import aboutPartner1 from "@/assets/about_partner_1.png";
import aboutPartner2 from "@/assets/about_partner_2.png";
import aboutPartner3 from "@/assets/about_partner_3.png";
import aboutPartner4 from "@/assets/about_partner_4.png";
import aboutPartner5 from "@/assets/about_partner_5.png";
import aboutPartner6 from "@/assets/about_partner_6.webp";
import aboutPartner7 from "@/assets/about_partner_7.png";
import aboutPartner8 from "@/assets/about_partner_8.png";

const partners = [
  { src: aboutPartner1, alt: "Spectrum Technology Group" },
  { src: aboutPartner2, alt: "IDS Ingegneria Dei Sistemi" },
  { src: aboutPartner3, alt: "Olympus" },
  { src: aboutPartner4, alt: "Myzox" },
  { src: aboutPartner5, alt: "Hi-Target" },
  { src: aboutPartner6, alt: "GeoMax" },
  { src: aboutPartner7, alt: "Humboldt" },
  { src: aboutPartner8, alt: "ACE Instruments" },
];

const AboutPartners = () => {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto px-4" style={{ maxWidth: "80%" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Partners &amp; Brands
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with world-leading manufacturers to deliver the highest quality instruments.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="flex items-center justify-center bg-slate-100 dark:bg-slate-700/50 rounded-lg p-6 h-28 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPartners;
