import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            Contact
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Travaillons Ensemble
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pour un repas privé, un événement ou une collaboration – je serais ravie d'échanger avec vous
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: "Email",
                info: "jaggi.lana@gmail.com",
                href: "mailto:jaggi.lana@gmail.com",
              },
              {
                icon: Phone,
                title: "Téléphone",
                info: "076 506 30 45",
                href: "tel:+41765063045",
              },
              {
                icon: MapPin,
                title: "Localisation",
                info: "Vérossaz, Suisse",
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

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
