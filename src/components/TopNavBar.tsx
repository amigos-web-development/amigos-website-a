import { useState, useRef, useEffect } from "react";
import { Phone, Mail, Search, Globe, Moon, Sun, ShoppingCart, X } from "lucide-react";
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
    <div className="bg-slate-700 dark:slate-500 border-b border-nav-border">
      <div
        className="container mx-auto flex items-center justify-between h-11 px-4 text-sm"
        style={{ maxWidth: "80%" }}
      >
        {/* Left: Phone & Email */}
        <div className="hidden md:flex items-center gap-6 text-muted-foreground text-slate-200 dark:text-slate-300">
          <a href="tel:01-3566717" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Phone className="w-3.5 h-3.5" />
            <span>01-3566717</span>
          </a>
          <a
            href="mailto:support@amigosmyanmar.com"
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>support@amigosmyanmar.com</span>
          </a>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1">
          {/* Search */}
          <div className="relative border-lg hover:bg-slate-900 dark:hover:bg-slate-700 text-slate-200 dark:text-slate-300">
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
                <Search className="w-4 h-4 rounded-lg hover:bg-slate-900 dark:hover:bg-slate-700 text-slate-200 dark:text-slate-300" />
              </button>
            )}
          </div>

          {/* Language */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 p-2 rounded-lg hover:bg-slate-900 dark:hover:bg-slate-700 transition-colors text-slate-200 dark:text-slate-300"
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
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors ${
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
            className="p-2 transition-colors rounded-lg hover:bg-slate-900 dark:hover:bg-slate-700 text-slate-200 dark:text-slate-300"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Cart */}
          <button className="p-2 rounded-lg hover:bg-slate-900 dark:hover:bg-slate-700 transition-colors text-slate-200 dark:text-slate-300 relative">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
