import { useState, useEffect } from "react";
import TopNavBar from "@/components/TopNavBar";
import MainNavBar from "@/components/MainNavBar";
import HeroSection from "@/components/HeroSection";
import KeyProductCategories from "@/components/KeyProductCategories";
import WhatWeDo from "@/components/WhatWeDo";
import AboutCompany from "@/components/AboutCompany";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="min-h-screen bg-background">
      <TopNavBar isDark={isDark} toggleDark={() => setIsDark(!isDark)} />
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-40">
          <MainNavBar />
        </div>
        <HeroSection />
      </div>
      <WhatWeDo />
      <KeyProductCategories />
      <AboutCompany />
      <Partners />
      <CTASection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
