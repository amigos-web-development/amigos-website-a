import { FileText, PhoneCall, Mail } from "lucide-react";

const ctaItems = [
{
  icon: FileText,
  title: "Request Quotation",
  description: "Get a detailed quote tailored to your project requirements and budget.",
  buttonText: "Get a Quote"
},
{
  icon: PhoneCall,
  title: "Talk to Sales",
  description: "Speak directly with our sales team for expert guidance and recommendations.",
  buttonText: "Contact Sales"
},
{
  icon: Mail,
  title: "Send Inquiry",
  description: "Have a question? Send us an inquiry and we'll respond within 24 hours.",
  buttonText: "Send Message"
}];


const CTASection = () => {
  return (
    <section className="py-20 category-gradient">
      <div className="container mx-auto px-4" style={{ maxWidth: "80%" }}>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">How Can We Help You?</h2>
        <p className="text-slate-100 mb-12 max-w-2xl mx-auto">
          Choose the best way to connect with us and let our team assist you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3">
          {ctaItems.map((item) =>
          <div
            key={item.title}
            className="bg-slate-100/40 dark:bg-slate-700/40 border border-white/20 p-8 text-center hover:bg-slate-200/20 dark:hover:bg-slate-600/50 transition-all duration-300 group cursor-pointer">

              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-foreground mb-6 leading-relaxed">{item.description}</p>
              <a
              href="#"
              className="inline-block px-6 py-3 bg-slate-800 dark:bg-slate-600 text-slate-200 dark:text-slate-100 font-semibold rounded-lg hover:bg-slate-700 dark:hover:bg-slate-500 transition-all duration-300">

                {item.buttonText}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default CTASection;