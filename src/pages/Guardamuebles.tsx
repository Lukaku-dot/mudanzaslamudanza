import { MessageCircle, Shield, Clock, Warehouse } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

const faqs = [
  { question: "¿Cuánto cuesta el guardamuebles?", answer: "El precio depende del volumen y la duración. En La Mudanza te hacemos un presupuesto sin cargo. ¡Consultanos!" },
  { question: "¿Puedo acceder a mis cosas cuando quiera?", answer: "Sí, coordinamos el acceso a tu depósito de lunes a sábados de 8 a 20 hs." },
];

const Guardamuebles = () => {
  return (
    <>
      <SEOHead
        title="Guardamuebles CABA y GBA | La Mudanza"
        description="Guardamuebles vigilado 24hs en CABA y GBA. Depósitos privados, limpios y seguros para estadías cortas o largas. La Mudanza, +30 años de experiencia."
        canonical="https://mudarme.com.ar/guardamuebles"
        faqJsonLd={faqs}
      />
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-primary font-semibold uppercase tracking-[0.3em] text-sm mb-3">
              La Mudanza
            </p>
            <h1 className="font-display text-3xl md:text-5xl mb-6">
              Guardamuebles en CABA y GBA:{" "}
              <span className="text-gradient-brand">seguridad y confianza</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              En La Mudanza contamos con más de 30 años cuidando lo que más valorás. Nuestros depósitos están vigilados las 24 horas, son limpios, secos y preparados para resguardar tus muebles y pertenencias el tiempo que necesites.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Shield, title: "Vigilancia 24hs", desc: "Cámaras y seguridad permanente" },
                { icon: Clock, title: "Estadías flexibles", desc: "Desde días hasta meses o años" },
                { icon: Warehouse, title: "Depósitos privados", desc: "Limpios, secos y organizados" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-card border border-border rounded-xl p-6 text-center">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-muted-foreground text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sections */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-display text-2xl md:text-4xl mb-6">
              ¿Cuándo conviene usar un guardamuebles?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Si estás en medio de una mudanza y tu nuevo hogar todavía no está listo, si necesitás liberar espacio por una reforma, o simplemente querés guardar muebles que no usás, nuestro servicio de guardamuebles es la solución ideal. En La Mudanza nos encargamos del retiro, el traslado y el almacenamiento seguro.
            </p>

            <h2 className="font-display text-2xl md:text-4xl mb-6">
              Guardamuebles con respaldo profesional
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              No somos un depósito cualquiera. Con más de 30 años de trayectoria en el rubro de mudanzas, sabemos cómo manipular, embalar y almacenar cada pieza para que se mantenga en perfecto estado. Ofrecemos cobertura en toda CABA y Gran Buenos Aires, con retiro puerta a puerta.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-2xl md:text-4xl mb-4">
              Pedí tu presupuesto <span className="text-gradient-brand">sin cargo</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Contanos qué necesitás guardar y te armamos una propuesta a medida. Sin compromiso.
            </p>
            <a
              href="https://wa.me/541125535500?text=Hola%2C%20quiero%20consultar%20por%20el%20servicio%20de%20guardamuebles"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-brand text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg shadow-brand hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              Consultar por WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Guardamuebles;
