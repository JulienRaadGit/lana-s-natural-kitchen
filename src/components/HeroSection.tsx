import heroImage from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Elegant gourmet dish"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-primary-foreground/80 uppercase tracking-[0.3em] text-sm mb-4 font-medium">
          Cuisinière
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 font-semibold leading-tight">
          Lana Jaggi
        </h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Créative, perfectionniste et passionnée – je sublime les produits du terroir en créations culinaires authentiques
        </p>
        <a
          href="#portfolio"
          className="inline-block bg-primary text-primary-foreground px-8 py-4 font-medium hover:bg-primary/90 transition-all duration-300 rounded-lg"
        >
          Découvrir mon travail
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
