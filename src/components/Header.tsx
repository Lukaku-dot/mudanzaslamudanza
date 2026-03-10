import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-lamudanza.jpeg";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-elevated" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#inicio">
          <img src={logo} alt="La Mudanza - Mudanzas profesionales" className="h-12 md:h-16 rounded" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+541125535500"
            className="bg-gradient-brand text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm shadow-brand hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Llamar ahora
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 pb-4 animate-slide-up">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+541125535500"
            className="mt-2 block text-center bg-gradient-brand text-primary-foreground px-5 py-3 rounded-lg font-semibold shadow-brand"
          >
            <Phone className="w-4 h-4 inline mr-2" />
            Llamar ahora
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
