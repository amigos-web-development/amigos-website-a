import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Eye, Target, Package, Wrench, Handshake, Leaf } from "lucide-react";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about_hero.jpg";
import valueWorkHard from "@/assets/value_work_hard.jpg";
import valueQuality from "@/assets/value_quality.jpg";
import valueIntegrity from "@/assets/value_integrity.jpg";
import valueHonesty from "@/assets/value_honesty.jpg";
import valueRespect from "@/assets/value_respect.jpg";
import valueNoDiscrimination from "@/assets/value_no_discrimination.jpg";
import valueTeamwork from "@/assets/value_teamwork.jpg";
import valuePersistence from "@/assets/value_persistence.jpg";

const missions = [
  {
    icon: Package,
    text: "To supply premium-quality instruments from trusted global partners.",
  },
  {
    icon: Wrench,
    text: "To provide reliable installation, calibration, maintenance, and technical support.",
  },
  {
    icon: Handshake,
    text: "To build long-term, transparent partnerships with customers and suppliers.",
  },
  {
    icon: Leaf,
    text: "To support Myanmar's sustainable engineering, scientific, and environmental development.",
  },
];

const values = [
  { image: valueWorkHard, label: "Work Hard" },
  { image: valueQuality, label: "Quality Output" },
  { image: valueIntegrity, label: "Integrity" },
  { image: valueHonesty, label: "Honesty" },
  { image: valueRespect, label: "Respect" },
  { image: valueNoDiscrimination, label: "No Discrimination" },
  { image: valueTeamwork, label: "Team Work" },
  { image: valuePersistence, label: "Persistence" },
];

const AboutUs = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background">
      <TopNavBar isDark={isDark} toggleDark={() => setIsDark(!isDark)} />

      {/* Hero Banner */}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-40">
          <MainNavBar />
        </div>
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img src={aboutHero} alt="About Amigos International" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient-overlay" />
          <div className="relative z-10 h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">About Us</h1>
              <p className="text-lg text-slate-200 max-w-2xl mx-auto">
                Myanmar's trusted provider of engineering and scientific solutions since 2010
              </p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Company Culture */}
      <section className="py-20 bg-background">
        <div className="mx-auto px-4" style={{ maxWidth: "80%" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-700 via-red-600 to-orange-500 bg-clip-text text-transparent">
                Company Culture
              </span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              At Amigos International Co., Ltd., our organizational culture is founded on integrity. We are committed to
              communicating honestly and transparently about our products and services, even when challenges arise. This
              culture of truthfulness and strong work ethic is deeply embedded throughout our organization — from senior
              management to operational teams.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our commitment to integrity ensures that our customers and partners can place full confidence in our
              products, services, and long-term support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-secondary/30">
        <div className="mx-auto px-4" style={{ maxWidth: "80%" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-700 via-red-600 to-orange-500 bg-clip-text text-transparent">
                Our Vision
              </span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full" />
            <p className="text-xl text-foreground font-medium leading-relaxed">
              To become Myanmar's most trusted provider of engineering, laboratory, analytical and scientific solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="mx-auto px-4" style={{ maxWidth: "80%" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-700 via-red-600 to-orange-500 bg-clip-text text-transparent">
                Our Mission
              </span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {missions.map((mission, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <mission.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-foreground text-lg leading-relaxed">{mission.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
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
                Our Values
              </span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group rounded-xl overflow-hidden bg-card border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={value.image}
                    alt={value.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg">{value.label}</h3>
                </div>
                <div className="p-4">
                  <button className="group/btn flex items-center gap-2 text-sm font-semibold bg-[linear-gradient(135deg,_#222,_#444,_#555)] hover:bg-[linear-gradient(135deg,_#1d4ed8,_#dc2626,_#f97316)] text-white px-4 py-2 rounded-lg transition-all duration-300 w-full justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
