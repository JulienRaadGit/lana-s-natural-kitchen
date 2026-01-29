import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            Get In Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Let's Create Together
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether it's a private dinner, food styling, or collaboration—I'd love to hear from you
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: "Email",
                info: "hello@lanajaggi.com",
                href: "mailto:hello@lanajaggi.com",
              },
              {
                icon: Phone,
                title: "Phone",
                info: "+1 (555) 123-4567",
                href: "tel:+15551234567",
              },
              {
                icon: MapPin,
                title: "Location",
                info: "New York, NY",
                href: "#",
              },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="flex flex-col items-center p-8 bg-background rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <contact.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-medium text-foreground mb-2">{contact.title}</h3>
                <p className="text-muted-foreground text-center">{contact.info}</p>
              </a>
            ))}
          </div>

          {/* Simple Contact Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-10 py-4 font-medium hover:bg-primary/90 transition-all duration-300 rounded-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
