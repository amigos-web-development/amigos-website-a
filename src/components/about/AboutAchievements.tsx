import { motion } from "framer-motion";
import { Users, Clock, MapPin, Globe, ShieldCheck } from "lucide-react";

const milestones = [
  { year: "2010", events: ["Company established", "Opened sales units — Land Surveying Instrument & Material Testing Equipment"] },
  { year: "2011", events: ["Became authorized distributor for Humboldt's and GeoMax", "Opened Services & Calibration Center"] },
  { year: "2014", events: ["Opened another sales unit — Lab & Scientific Instrument"] },
  { year: "2016", events: ["Opened another sales unit — Geology & Earth Exploration Instrument", "Moved to new head office — Yangon", "Became authorized distributor for Leica Geosystems"] },
  { year: "2018", events: ["Set up laboratory services"] },
  { year: "2022", events: ["Opened Mandalay Sales & Services Unit"] },
  { year: "2023", events: ["Expanded Analytical portfolio", "Became authorized distributor for Spectro Scientific & Analytik Jena"] },
  { year: "2025", events: ["Opened Taunggyi Sales & Services Unit"] },
];

const stats = [
  { icon: Users, value: "500+", label: "Clients Served" },
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: MapPin, value: "Nationwide", label: "Coverage" },
  { icon: Globe, value: "Global", label: "Partnerships" },
  { icon: ShieldCheck, value: "Certified", label: "Service Team" },
];

const AboutAchievements = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="mx-auto px-4" style={{ maxWidth: "80%" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-700 via-red-600 to-orange-500 bg-clip-text text-transparent">
              Achievements &amp; Milestones
            </span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto mb-16">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 -translate-x-1/2" />

          {milestones.map((milestone, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className={`relative flex items-start mb-8 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Content */}
                <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                  <div className="bg-card border border-border rounded-xl p-5 hover:shadow-lg transition-shadow duration-300">
                    <span className="inline-block text-sm font-bold text-white bg-accent px-3 py-1 rounded-full mb-3">
                      {milestone.year}
                    </span>
                    <ul className={`space-y-1 ${isLeft ? "md:text-right" : "md:text-left"} text-left`}>
                      {milestone.events.map((event, j) => (
                        <li key={j} className="text-muted-foreground text-sm leading-relaxed">
                          {event}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background -translate-x-1/2 mt-6 z-10" />

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="text-center bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutAchievements;
