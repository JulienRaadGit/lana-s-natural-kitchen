import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-serif text-2xl font-semibold mb-2">Lana Jaggi</p>
            <p className="text-primary-foreground/70 text-sm">
              Culinary Artist & Food Stylist
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>

          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Lana Jaggi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
