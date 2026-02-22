import { useState, useRef, useEffect } from "react";
import { ChevronDown, LogIn, UserPlus, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

import { Compass, HardHat, Waves, CloudSun, Mountain, Droplets, FlaskConical, TestTubeDiagonal } from "lucide-react";

const productCategories = [
  { label: "Land Surveying Instrument", icon: Compass, description: "Total stations, GNSS, levels & more" },
  { label: "Construction Materials Testing Instrument", icon: HardHat, description: "Concrete, soil, asphalt testing" },
  {
    label: "Bathymetric & Hydrographic Surveying Instrument",
    icon: Waves,
    description: "Echo sounders, sonar systems",
  },
  {
    label: "Weather, Environmental & Horticulture Instrument",
    icon: CloudSun,
    description: "Weather stations, data loggers",
  },
  {
    label: "Geological & Earth Exploration Instrument",
    icon: Mountain,
    description: "Seismic, geotechnical equipment",
  },
  { label: "Air & Water Quality Testing Instrument", icon: Droplets, description: "Analyzers, meters & samplers" },
  { label: "Laboratory & Scientific Instrument", icon: FlaskConical, description: "Lab equipment & consumables" },
  { label: "Analytical Testing Instrument", icon: TestTubeDiagonal, description: "Spectroscopy, chromatography" },
];

const navLinks = [
  { label: "Products", hasDropdown: true },
  { label: "Services", href: "#services" },
  { label: "Career", href: "#" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "#" },
];

const MainNavBar = () => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setProductsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <div ref={navRef} className="relative z-40">
        <nav className="bg-transparent">
          <div
            className="container mx-auto flex items-center justify-between h-16 px-4 py-[16px]"
            style={{ maxWidth: "80%" }}
          >
            {/* Left: Logo + Nav links */}
            <div className="hidden lg:flex items-center gap-1">
              <a href="/" className="flex-shrink-0 mr-4">
                <img src={logo} alt="Amigos International" className="h-12" />
              </a>
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} className="relative">
                    <button
                      onClick={() => setProductsOpen(!productsOpen)}
                      className="flex items-center gap-1 px-4 py-2 font-medium text-white/90 rounded-lg hover:bg-slate-200/30 dark:hover:bg-slate-800/40 transition-colors text-base"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-4 py-2 font-medium text-white/90 rounded-lg hover:bg-slate-200/30 dark:hover:bg-slate-800/40 transition-colors text-base"
                  >
                    {link.label}
                  </a>
                ),
              )}
            </div>

            {/* Right: Auth */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="#"
                className="flex items-center gap-1.5 px-4 py-2 font-medium text-white/90 rounded-lg hover:border-0 hover:bg-[linear-gradient(135deg,_#222,_#444,_#555)] transition-colors text-base"
              >
                <LogIn className="w-4 h-4" />
                Login
              </a>
              <a
                href="#"
                className="flex items-center gap-1.5 px-4 py-2 font-medium rounded-lg bg-[linear-gradient(135deg,_#222,_#444,_#555)] hover:bg-[linear-gradient(135deg,_#1d4ed8,_#dc2626,_#f97316)] text-white transition-colors text-base"
              >
                <UserPlus className="w-4 h-4" />
                Register
              </a>
            </div>

            {/* Mobile: Logo + Menu Toggle */}
            <a href="/" className="lg:hidden flex-shrink-0">
              <img src={logo} alt="Amigos International" className="h-9" />
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-foreground">
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Full-width Mega Menu */}
          {productsOpen && (
            <div className="hidden lg:block absolute left-0 right-0 bg-slate-200 dark:bg-slate-800 border-b border-border shadow-2xl z-50 animate-fade-in">
              <div className="container mx-auto px-4 py-8" style={{ maxWidth: "80%" }}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-6">
                  Product Categories
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  {productCategories.map((cat) => (
                    <a
                      key={cat.label}
                      href="#"
                      className="flex items-start gap-4 px-4 py-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors">
                        <cat.icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{cat.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{cat.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="lg:hidden bg-card border-t border-border animate-fade-in">
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.label}>
                      <button
                        onClick={() => setProductsOpen(!productsOpen)}
                        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-foreground"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                      </button>
                      {productsOpen && (
                        <div className="ml-4 mt-1 space-y-1">
                          {productCategories.map((cat) => (
                            <a
                              key={cat.label}
                              href="#"
                              className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-accent"
                            >
                              <cat.icon className="w-4 h-4 flex-shrink-0" />
                              {cat.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block px-3 py-2 text-sm font-medium text-foreground hover:text-accent"
                    >
                      {link.label}
                    </a>
                  ),
                )}
                <div className="flex gap-2 pt-2 border-t border-border">
                  <a href="#" className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-foreground">
                    <LogIn className="w-4 h-4" /> Login
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium bg-[linear-gradient(135deg,_#222,_#444,_#555)] hover:bg-[linear-gradient(135deg,_#1d4ed8,_#dc2626,_#f97316)] rounded-lg text-foreground"
                  >
                    <UserPlus className="w-4 h-4" /> Register
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Blur overlay */}
      {productsOpen && (
        <div className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm" onClick={() => setProductsOpen(false)} />
      )}
    </>
  );
};

export default MainNavBar;
