import { Phone, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-mudanza.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Camión de mudanza de Mudarme en Buenos Aires"
          className="w-full h-full object-cover rounded-b-3xl"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-2xl">
          <p className="text-primary font-semibold uppercase tracking-[0.3em] text-sm mb-4 animate-fade-in">
            Mudanzas profesionales
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl leading-tight mb-6 animate-slide-up">
            Mudanzas Profesionales y Guardamuebles con{" "}
            <span className="text-gradient-brand">+30 años de trayectoria</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Más de 30 años de experiencia trasladando hogares y empresas con cuidado, eficiencia y puntualidad en Capital Federal y todo Buenos Aires. Presupuesto sin compromiso y sin cargo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://wa.me/541125535500?text=Hola%2C%20quiero%20cotizar%20una%20mudanza"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-brand text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg shadow-brand hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5" />
              Cotizar por WhatsApp
            </a>
            <a
              href="tel:+541146375500"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              4637-5500
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap gap-8 text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div>
              <span className="text-3xl font-display text-primary">+5000</span>
              <p className="text-sm mt-1">Mudanzas realizadas</p>
            </div>
            <div>
              <span className="text-3xl font-display text-primary">20+</span>
              <p className="text-sm mt-1">Años de experiencia</p>
            </div>
            <div>
              <span className="text-3xl font-display text-primary">⭐ 5.0</span>
              <p className="text-sm mt-1">Calificación Google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
