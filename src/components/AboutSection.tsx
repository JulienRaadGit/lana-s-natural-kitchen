const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            À Propos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
            Cuisinière Passionnée
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-10" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Je suis une jeune cuisinière titulaire d'un CFC, formée au Restaurant Le Vélodrome à Aigle, établissement labellisé Fait Maison. Attentive au moindre détail, j'accorde une grande importance à l'esthétique des assiettes et au travail soigné. J'aime travailler les produits de A à Z, en respectant leur nature et leur qualité.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Curieuse et motivée, je possède une réelle soif d'apprendre afin d'évoluer constamment et de perfectionner mes compétences. J'ai également participé au Concours vaudois des Meilleurs apprentis cuisiniers 2024, une expérience particulièrement enrichissante qui m'a permis de gagner en confiance en mon travail et en mes capacités.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Passionnée par le voyage depuis toujours, je souhaite continuer à parcourir différents pays afin de découvrir de nouvelles cultures culinaires, d'explorer d'autres techniques et façons de travailler, et d'enrichir ma vision de la gastronomie. Ces expériences sont pour moi une source d'inspiration essentielle, me permettant d'évoluer aussi bien sur le plan professionnel que personnel.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          {[
            { number: "3+", label: "Ans d'Expérience" },
            { number: "4ème", label: "Meilleur Apprenti VD" },
            { number: "4", label: "Langues Parlées" },
            { number: "∞", label: "Passion" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
