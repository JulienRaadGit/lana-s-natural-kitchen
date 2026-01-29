import { useState } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const portfolioItems = [
  {
    id: 1,
    image: portfolio1,
    title: "Classic Pasta",
    category: "Italian",
  },
  {
    id: 2,
    image: portfolio2,
    title: "Chocolate Tart",
    category: "Dessert",
  },
  {
    id: 3,
    image: portfolio3,
    title: "Grilled Salmon",
    category: "Seafood",
  },
  {
    id: 4,
    image: portfolio4,
    title: "Garden Bowl",
    category: "Healthy",
  },
  {
    id: 5,
    image: portfolio5,
    title: "Artisan Bread",
    category: "Bakery",
  },
  {
    id: 6,
    image: portfolio6,
    title: "Truffle Risotto",
    category: "Italian",
  },
];

const PortfolioSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Recent Creations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of dishes that showcase my culinary philosophy: fresh, elegant, and unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-foreground/60 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  hoveredId === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <p className="text-primary-foreground/70 uppercase tracking-widest text-xs mb-2">
                  {item.category}
                </p>
                <h3 className="font-serif text-2xl text-primary-foreground">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
