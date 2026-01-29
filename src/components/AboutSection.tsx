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
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Titulaire d'un CFC de cuisinière obtenu au Restaurant "Le Vélodrome" (Label Fait Maison) 
            à UCI Aigle, je suis une créatrice culinaire passionnée par les saveurs authentiques 
            et les produits de qualité. Perfectionniste et autodidacte, je mets tout mon cœur 
            dans chaque plat que je prépare.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Mes voyages au Brésil, en Égypte, en Thaïlande et en Angleterre ont enrichi ma 
            palette culinaire et m'inspirent au quotidien. En dehors des cuisines, je cultive 
            ma créativité à travers le piano et la guitare, et j'ai même entamé une formation 
            de pilote privé – preuve que j'aime viser les sommets.
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
