import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutCompany = () => {
  return (
    <section id="about" className="py-20 bg-background">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-red-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                About
              </span>
              <span className="block bg-gradient-to-r from-red-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                Amigos International
              </span>
              <span className="block bg-gradient-to-r from-red-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                Co., Ltd.
              </span>
            </h2>
            <div className="w-24 h-1 bg-accent mt-6 rounded-full" />
          </motion.div>

          {/* Column 2 - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-2 px-[40px]"
          >
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              Amigos International Co., Ltd. was established in 2010 and has grown over 14 years into one of Myanmar's
              most trusted providers of engineering and scientific solutions. We specialize in the distribution, sales,
              and professional after-sales support of high-quality instruments sourced from leading international
              manufacturers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
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
                <li key={item} className="flex items-center gap-3 text-muted-foreground text-lg">
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="group flex items-center gap-2 bg-[linear-gradient(135deg,_#222,_#444,_#555)] hover:bg-[linear-gradient(135deg,_#1d4ed8,_#dc2626,_#f97316)] font-semibold text-slate-100 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:opacity-90">
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
