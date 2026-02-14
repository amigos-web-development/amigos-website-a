import { useState, useRef, useEffect } from "react";
import { ChevronDown, LogIn, UserPlus, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const productCategories = [
  "Land Surveying Instrument",
  "Construction Materials Testing Instrument",
  "Bathymetric & Hydrographic Surveying Instrument",
  "Weather, Environmental & Horticulture Instrument",
  "Geological & Earth Exploration Instrument",
  "Air & Water Quality Testing Instrument",
  "Laboratory & Scientific Instrument",
  "Analytical Testing Instrument",
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
      <div className="container mx-auto flex items-center justify-between h-14 px-4" style={{ maxWidth: "80%" }}>
        {/* Left: Logo + Nav links */}
        <div className="hidden lg:flex items-center gap-1">
          <a href="/" className="flex-shrink-0 mr-4">
            <img src={logo} alt="Amigos International" className="h-9" />
          </a>
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label} ref={dropdownRef} className="relative">
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="nav-link-hover flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {productsOpen && (
                  <div className="absolute left-0 top-full mt-0.5 bg-card border border-border rounded-lg shadow-xl py-2 z-50 animate-scale-in min-w-[340px]">
                    {productCategories.map((cat) => (
                      <a
                        key={cat}
                        href="#"
                        className="block px-5 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-accent transition-colors"
                      >
                        {cat}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="nav-link-hover px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
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
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            <LogIn className="w-4 h-4" />
            Login
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium border border-border rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
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
                          key={cat}
                          href="#"
                          className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-accent"
                        >
                          {cat}
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
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium border border-border rounded-lg text-foreground"
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
