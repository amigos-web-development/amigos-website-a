import { useState, useRef, useEffect } from "react";
import { ChevronDown, LogIn, UserPlus, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

import { Compass, HardHat, Waves, CloudSun, Mountain, Droplets, FlaskConical, TestTubeDiagonal } from "lucide-react";

const productCategories = [
  { label: "Land Surveying Instrument", icon: Compass },
  { label: "Construction Materials Testing Instrument", icon: HardHat },
  { label: "Bathymetric & Hydrographic Surveying Instrument", icon: Waves },
  { label: "Weather, Environmental & Horticulture Instrument", icon: CloudSun },
  { label: "Geological & Earth Exploration Instrument", icon: Mountain },
  { label: "Air & Water Quality Testing Instrument", icon: Droplets },
  { label: "Laboratory & Scientific Instrument", icon: FlaskConical },
  { label: "Analytical Testing Instrument", icon: TestTubeDiagonal },
];

const navLinks = [
  { label: "Products", hasDropdown: true },
  { label: "Services", href: "#services" },
  { label: "Career", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
];

const MainNavBar = () => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setProductsOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="bg-nav-bg border-b border-nav-border sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4" style={{ maxWidth: "80%" }}>
        {/* Left: Logo + Nav links */}
        <div className="hidden lg:flex items-center gap-1">
          <a href="/" className="flex-shrink-0 mr-4">
            <img src={logo} alt="Amigos International" className="h-12" />
          </a>
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label} ref={dropdownRef} className="relative">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  {link.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {productsOpen && (
                  <div className="absolute left-0 top-full mt-2 bg-card border border-border rounded-lg shadow-xl p-4 z-50 animate-scale-in min-w-[520px]">
                    <div className="grid grid-cols-2 gap-2">
                      {productCategories.map((cat) => (
                        <a
                          key={cat.label}
                          href="#"
                          className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        >
                          <cat.icon className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
                          {cat.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
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
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-foreground rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <LogIn className="w-4 h-4" />
            Login
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium border border-border rounded-lg text-foreground bg-slate-800 dark:bg-slate-600 hover:bg-slate-700 dark:hover:bg-slate-500 text-slate-200 dark:text-slate-100 transition-colors"
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
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium border border-border rounded-lg hover:bg-accent text-foreground"
              >
                <UserPlus className="w-4 h-4" /> Register
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNavBar;
