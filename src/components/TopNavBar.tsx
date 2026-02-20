import { useState, useRef, useEffect } from "react";
import { Phone, Mail, Search, Globe, Moon, Sun, ShoppingCart, X, Facebook, Youtube, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const languages = [
  { code: "en", name: "English" },
  { code: "mm", name: "Myanmar" },
  { code: "zh", name: "Chinese" },
  { code: "th", name: "Thailand" },
];

interface TopNavBarProps {
  isDark: boolean;
  toggleDark: () => void;
}

const TopNavBar = ({ isDark, toggleDark }: TopNavBarProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const langRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="bg-slate-200 dark:bg-slate-800">
      <div
        className="container mx-auto flex items-center justify-between h-11 px-4 text-sm"
        style={{ maxWidth: "80%" }}
      >
        {/* Left: Social Icons */}
        <div className="hidden md:flex items-center gap-2 text-slate-800 dark:text-slate-200">
          <a href="#" className="p-1.5 rounded-lg hover:bg-slate-400 dark:hover:bg-slate-600 transition-colors">
            <Facebook className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="p-1.5 rounded-lg hover:bg-slate-400 dark:hover:bg-slate-600 transition-colors">
            <Youtube className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="p-1.5 rounded-lg hover:bg-slate-400 dark:hover:bg-slate-600 transition-colors">
            <Linkedin className="w-3.5 h-3.5" />
          </a>
          <a
            href="#"
            className="p-1.5 rounded-lg hover:bg-slate-400 dark:hover:bg-slate-600 transition-colors"
            title="TikTok"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78c.3 0 .59.04.86.12V9.01a6.27 6.27 0 0 0-.86-.06 6.34 6.34 0 0 0 0 12.68 6.34 6.34 0 0 0 6.34-6.34V9.06a8.16 8.16 0 0 0 4.77 1.52V7.13a4.85 4.85 0 0 1-1.01-.44z" />
            </svg>
          </a>
        </div>

        {/* Center: Phone & Email */}
        <div className="hidden md:flex items-center gap-6 text-slate-800 dark:text-slate-200">
          <a href="tel:01-3566717" className="flex items-center gap-1.5 transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>01-3566717</span>
          </a>
          <a href="mailto:support@amigosmyanmar.com" className="flex items-center gap-1.5 transition-colors">
            <Mail className="w-3.5 h-3.5" />
            <span>support@amigosmyanmar.com</span>
          </a>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1">
          {/* Search */}
          <div className="relative rounded-lg hover:bg-slate-400 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200">
            {searchOpen ? (
              <div className="flex items-center bg-secondary rounded-lg overflow-hidden animate-scale-in">
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="bg-transparent px-3 py-1.5 text-sm outline-none w-48 text-foreground placeholder:text-muted-foreground"
                />

                <button
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="p-1.5 hover:text-accent transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 hover:text-accent transition-colors text-muted-foreground"
              >
                <Search className="w-4 h-4 rounded-lg hover:bg-slate-400 dark:hover:bg-slate-600 text-slate-200 dark:text-slate-800" />
              </button>
            )}
          </div>

          {/* Language */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 p-2 rounded-lg hover:bg-slate-400 dark:hover:bg-slate-600 transition-colors text-slate-800 dark:text-slate-200"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline text-xs">{selectedLang.name}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-lg py-1 z-50 animate-scale-in min-w-[140px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-400 dark:hover:bg-slate-600 rounded-lg transition-colors ${
                      selectedLang.code === lang.code ? "text-accent font-medium" : "text-foreground"
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark/Light Toggle */}
          <button
            onClick={toggleDark}
            className="p-2 transition-colors rounded-lg hover:bg-slate-400 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Cart */}
          <button className="p-2 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-500 transition-colors text-slate-200 dark:text-slate-100 relative">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
