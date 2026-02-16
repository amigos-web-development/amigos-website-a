import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutCompany = () => {
  return (
    <section id="about" className="py-20" style={{ background: "linear-gradient(135deg, hsl(220, 85%, 45%), hsl(240, 70%, 50%), hsl(25, 95%, 55%), hsl(45, 95%, 55%))" }}>
      <div className="mx-auto px-4" style={{ maxWidth: "80%" }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center justify-items-center">
          {/* Column 1 - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="px-20 inline-block flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              <span className="block">About</span>
              <span className="block">Amigos International</span>
              <span className="block">Co., Ltd.</span>
            </h2>
            <div className="w-24 h-1 bg-white/80 mt-6 rounded-full" />
          </motion.div>

          {/* Column 2 - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-2 px-20"
          >
            <p className="text-white/85 leading-relaxed mb-6">
              Amigos International Co., Ltd. was established in 2010 and has grown over 14 years into one of Myanmar's
              most trusted providers of engineering and scientific solutions. We specialize in the distribution, sales,
              and professional after-sales support of high-quality instruments sourced from leading international
              manufacturers.
            </p>
            <p className="text-white/85 leading-relaxed mb-4">
              Our product expertise spans across multiple industries, including:
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Land Surveying Instruments",
                "Construction Material Testing Equipment",
                "Laboratory & Scientific Testing Instruments",
                "Environmental & Weather Monitoring Systems",
                "Geological & Earth Exploration Instruments",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/80">
                  <span className="w-2 h-2 rounded-full bg-white/60 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="group flex items-center gap-2 bg-slate-800 dark:bg-slate-600 text-slate-300 dark:text-slate-200 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-90">
              Read More
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
