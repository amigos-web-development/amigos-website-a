import { Facebook, Youtube, Linkedin, MessageCircle, Send, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer-gradient text-footer-foreground">
      <div className="mx-auto py-16 px-4" style={{ maxWidth: "80%" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Resources */}
          <div>
            <h4 className="text-footer-heading font-bold text-sm uppercase tracking-wider mb-5">Resources</h4>
            <ul className="space-y-2.5">
              {["Home", "Products", "Services", "Career", "About Us", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-footer-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Career */}
          <div>
            <h4 className="text-footer-heading font-bold text-sm uppercase tracking-wider mb-5">Career</h4>
            <ul className="space-y-2.5">
              {["View All Jobs", "Development Programs", "Trainings", "Internship Programs"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-footer-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Activity */}
          <div>
            <h4 className="text-footer-heading font-bold text-sm uppercase tracking-wider mb-5">Activity</h4>
            <ul className="space-y-2.5">
              {["Research & Development", "Event", "CSR Activity", "Staff Party", "Business Insight"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-footer-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* HO & Branches */}
          <div>
            <h4 className="text-footer-heading font-bold text-sm uppercase tracking-wider mb-5">HO & Branches</h4>
            <ul className="space-y-2.5">
              {["Yangon Head Office", "Mandalay Office", "Naypyitaw Office", "Taung Gyi Office"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm hover:text-footer-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-footer-heading font-bold text-sm uppercase tracking-wider mb-5">Connect With Us</h4>
            <div className="flex gap-3 mb-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-footer-foreground/10 flex items-center justify-center hover:bg-footer-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-footer-foreground/10 flex items-center justify-center hover:bg-footer-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-footer-foreground/10 flex items-center justify-center hover:bg-footer-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-footer-foreground/10 flex items-center justify-center hover:bg-footer-accent hover:text-accent-foreground transition-all duration-300"
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
                className="w-9 h-9 rounded-lg bg-footer-foreground/10 flex items-center justify-center hover:bg-footer-accent hover:text-accent-foreground transition-all duration-300"
                title="Messenger"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-footer-foreground/10 flex items-center justify-center hover:bg-footer-accent hover:text-accent-foreground transition-all duration-300"
                title="Viber"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-footer-foreground/10 flex items-center justify-center hover:bg-footer-accent hover:text-accent-foreground transition-all duration-300"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-footer-foreground/10 flex items-center justify-center hover:bg-footer-accent hover:text-accent-foreground transition-all duration-300"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs leading-relaxed mb-4 text-footer-foreground/80">
              We are deeply committed to customer satisfaction and long-term technical support.
            </p>
            <img src={logo} alt="Amigos International" className="h-10 brightness-1 invert-10 opacity-80" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-footer-foreground/10">
        <div className="mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-footer-foreground/60" style={{ maxWidth: "80%" }}>
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
