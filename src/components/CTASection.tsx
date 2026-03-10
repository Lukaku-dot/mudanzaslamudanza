import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-brand opacity-10" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="font-display text-3xl md:text-5xl mb-6">
          ¿Listo para tu próxima{" "}
          <span className="text-gradient-brand">mudanza</span>?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Contactanos hoy y recibí un presupuesto sin cargo en minutos. 
          Tu nueva etapa empieza con nosotros.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/541125535500?text=Hola%2C%20quiero%20cotizar%20una%20mudanza"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-brand text-primary-foreground px-10 py-4 rounded-lg font-bold text-lg shadow-brand hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-3"
          >
            <MessageCircle className="w-5 h-5" />
            Cotizar por WhatsApp
          </a>
          <a
            href="#contacto"
            className="border-2 border-primary text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Completar formulario
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
