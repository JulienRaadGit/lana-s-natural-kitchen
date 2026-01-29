const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            About Me
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
            Passion for Pure Flavors
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-10" />
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            With a deep respect for seasonal produce and traditional techniques, I create dishes 
            that honor the natural beauty of ingredients. Every plate tells a story of craftsmanship, 
            care, and an unwavering commitment to quality.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From intimate dinner parties to styled editorial shoots, my work celebrates the 
            intersection of culinary art and visual storytelling. I believe food should nourish 
            both body and soul—and look absolutely stunning while doing so.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "500+", label: "Dishes Created" },
            { number: "50+", label: "Happy Clients" },
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
