import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-lamudanza.jpeg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logo} alt="Mudarme - Mudanzas en CABA y Gran Buenos Aires" className="h-14 rounded-xl shadow-elevated mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Mudarme es una empresa familiar con más de 3 décadas de experiencia brindando servicios de mudanza de excelencia en Buenos Aires.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg mb-4 text-primary">Navegación</h4>
            <nav className="space-y-2">
              {["Inicio", "Servicios", "Nosotros", "Testimonios", "Contacto"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg mb-4 text-primary">Servicios</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Mudanzas residenciales</li>
              <li>Mudanzas comerciales</li>
              <li>Embalaje profesional</li>
              <li>Mudanzas al interior</li>
              <li>Guardamuebles</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-4 text-primary">Contacto</h4>
            <div className="space-y-3">
              <a href="tel:+541125535500" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4 text-primary" />
                11-2553-5500
              </a>
              <a href="tel:+541146375500" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4 text-primary" />
                4637-5500
              </a>
              <a href="mailto:Lamudanzamudanzas@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4 text-primary" />
                Lamudanzamudanzas@gmail.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                Buenos Aires, Argentina
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>© 2026 La Mudanza. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;