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
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Je suis une jeune cuisinière titulaire d'un CFC, formée au Restaurant Le Vélodrome à Aigle, établissement labellisé Fait Maison. Attentive au moindre détail, j'accorde une grande importance à l'esthétique des assiettes et au travail soigné. J'aime travailler les produits de A à Z, en respectant leur nature et leur qualité.
          </p>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            Curieuse et motivée, je possède une réelle soif d'apprendre afin d'évoluer constamment et de perfectionner mes compétences. J'ai également participé au Concours vaudois des Meilleurs apprentis cuisiniers 2024, une expérience particulièrement enrichissante qui m'a permis de gagner en confiance en mon travail et en mes capacités.
          </p>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            Passionnée par le voyage depuis toujours, je souhaite continuer à parcourir différents pays afin de découvrir de nouvelles cultures culinaires, d'explorer d'autres techniques et façons de travailler, et d'enrichir ma vision de la gastronomie. Ces expériences sont pour moi une source d'inspiration essentielle, me permettant d'évoluer aussi bien sur le plan professionnel que personnel.
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
