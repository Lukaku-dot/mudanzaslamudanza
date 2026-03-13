import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Más de 30 años de trayectoria en el rubro",
  "Personal capacitado y uniformado",
  "Flota propia de camiones equipados",
  "Seguro integral en todas las mudanzas",
  "Presupuestos sin cargo y sin compromiso",
  "Puntualidad garantizada",
];

const About = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold uppercase tracking-[0.3em] text-sm mb-3">
              Sobre Nosotros
            </p>
            <h2 className="font-display text-3xl md:text-5xl mb-6">
              Expertos en hacer de tu mudanza una{" "}
              <span className="text-gradient-brand">experiencia simple</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              En Mudarme entendemos que cambiar de hogar o trasladar tu negocio es un momento importante. 
              Por eso nos encargamos de cada detalle: desde el embalaje profesional hasta la colocación 
              de tus muebles en el nuevo destino. Nuestro compromiso es brindarte un servicio confiable, 
              seguro y a un precio justo.
            </p>

            <div className="grid gap-3">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground/90">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats card */}
          <div className="bg-card border border-border rounded-2xl p-10 shadow-elevated">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <span className="text-4xl md:text-5xl font-display text-gradient-brand">+5000</span>
                <p className="text-muted-foreground mt-2">Mudanzas</p>
              </div>
              <div className="text-center">
                <span className="text-4xl md:text-5xl font-display text-gradient-brand">30+</span>
                <p className="text-muted-foreground mt-2">Años</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground italic">
                "Nuestra misión es que tu mudanza sea una experiencia sin estrés."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
