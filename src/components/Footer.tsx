import { useState, useEffect } from "react";
import { Facebook, Youtube, Linkedin, MessageCircle, Send, Phone, Sun, Moon, Monitor } from "lucide-react";
import logo from "@/assets/logo.png";

type ThemeMode = "system" | "light" | "dark";

const Footer = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme-mode") as ThemeMode) || "system";
    }
    return "system";
  });

  useEffect(() => {
    localStorage.setItem("theme-mode", themeMode);
    if (themeMode === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    } else {
      document.documentElement.classList.toggle("dark", themeMode === "dark");
    }
  }, [themeMode]);

  // Listen for system preference changes when in system mode
  useEffect(() => {
    if (themeMode !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      document.documentElement.classList.toggle("dark", e.matches);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [themeMode]);

  return (
    <footer className="bg-slate-200 dark:bg-slate-800 text-slate-800/80 dark:text-slate-200/80">
      <div className="mx-auto py-16 px-4" style={{ maxWidth: "80%" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Resources */}
          <div>
            <h4 className="text-footer-heading text-slate-800 dark:text-slate-200 font-bold text-sm uppercase tracking-wider mb-5">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {["Home", "Products", "Services", "Career", "About Us", "Contact Us"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm hover:text-slate-500 dark:hover:text-slate-400 hover:font-bold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Career */}
          <div>
            <h4 className="text-footer-heading text-slate-800 dark:text-slate-200 font-bold text-sm uppercase tracking-wider mb-5">
              Career
            </h4>
            <ul className="space-y-2.5">
              {["View All Jobs", "Development Programs", "Trainings", "Internship Programs"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm hover:text-slate-500 dark:hover:text-slate-400 hover:font-bold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Activity */}
          <div>
            <h4 className="text-footer-heading text-slate-800 dark:text-slate-200 font-bold text-sm uppercase tracking-wider mb-5">
              Activity
            </h4>
            <ul className="space-y-2.5">
              {["Research & Development", "Event", "CSR Activity", "Staff Party", "Business Insight"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm hover:text-slate-500 dark:hover:text-slate-400 hover:font-bold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* HO & Branches */}
          <div>
            <h4 className="text-footer-heading text-slate-800 dark:text-slate-200 font-bold text-sm uppercase tracking-wider mb-5">
              HO & Branches
            </h4>
            <ul className="space-y-2.5">
              {["Yangon Head Office", "Mandalay Office", "Naypyitaw Office", "Taung Gyi Office"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm hover:text-slate-500 dark:hover:text-slate-400 hover:font-bold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-footer-heading text-slate-800 dark:text-slate-200 font-bold text-sm uppercase tracking-wider mb-5">
              Connect With Us
            </h4>
            <div className="flex gap-3 mb-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-footer-foreground/10 flex items-center justify-center hover:bg-slate-400 dark:hover:bg-slate-600 hover:text-accent-foreground transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-footer-foreground/10 flex items-center justify-center hover:bg-slate-400 dark:hover:bg-slate-600 hover:text-accent-foreground transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-footer-foreground/10 flex items-center justify-center hover:bg-slate-400 dark:hover:bg-slate-600 hover:text-accent-foreground transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-footer-foreground/10 flex items-center justify-center hover:bg-slate-400 dark:hover:bg-slate-600 hover:text-accent-foreground transition-all duration-300"
                title="TikTok"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78c.3 0 .59.04.86.12V9.01a6.27 6.27 0 0 0-.86-.06 6.34 6.34 0 0 0 0 12.68 6.34 6.34 0 0 0 6.34-6.34V9.06a8.16 8.16 0 0 0 4.77 1.52V7.13a4.85 4.85 0 0 1-1.01-.44z" />
                </svg>
              </a>
            </div>
            <div className="flex gap-3 mb-5">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-footer-foreground/10 flex items-center justify-center hover:bg-slate-400 dark:hover:bg-slate-600 hover:text-accent-foreground transition-all duration-300"
                title="Messenger"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-footer-foreground/10 flex items-center justify-center hover:bg-slate-400 dark:hover:bg-slate-600 hover:text-accent-foreground transition-all duration-300"
                title="Viber"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-footer-foreground/10 flex items-center justify-center hover:bg-slate-400 dark:hover:bg-slate-600 hover:text-accent-foreground transition-all duration-300"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-footer-foreground/10 flex items-center justify-center hover:bg-slate-400 dark:hover:bg-slate-600 hover:text-accent-foreground transition-all duration-300"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
            <p className="leading-relaxed mb-4 text-footer-foreground/80 text-sm">
              We are deeply committed to customer satisfaction and long-term technical support.
            </p>
            <img src={logo} alt="Amigos International" className="h-10 brightness-1 invert-10 opacity-80" />

            {/* Theme Toggle */}
            <div className="flex items-center mt-4 p-1 gap-[2px]">
              {[
                { mode: "system" as ThemeMode, icon: Monitor, label: "System" },
                { mode: "light" as ThemeMode, icon: Sun, label: "Light" },
                { mode: "dark" as ThemeMode, icon: Moon, label: "Dark" },
              ].map(({ mode, icon: Icon, label }) => (
                <button
                  key={mode}
                  onClick={() => setThemeMode(mode)}
                  className={`p-2 text-slate-800/80 dark:text-slate-200/80 rounded-md transition-all duration-200 ${
                    themeMode === mode
                      ? "bg-slate-700 dark:bg-slate-500 shadow-sm"
                      : "text-footer-foreground/70 hover:text-footer-foreground"
                  }`}
                  title={label}
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-footer-foreground/10">
        <div
          className="mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-footer-foreground/60"
          style={{ maxWidth: "80%" }}
        >
          <p>
            © Copyright <span className="text-footer-heading font-semibold">Amigos International Co., Ltd.</span> All
            Rights Reserved.
          </p>
          <p>
            Designed by <span className="text-footer-accent font-semibold">itGateway Software Development</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
