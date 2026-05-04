import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface ZonaPageProps {
  zona: string;
  descripcion: string;
  slug: string;
  contenido: string;
  faqs: { q: string; a: string }[];
}

const servicios = [
  "Mudanzas residenciales",
  "Mudanzas comerciales",
  "Guardamuebles",
  "Embalaje profesional",
  "Izajes por balcon",
  "Mudanzas al interior"
];

const todasLasZonas = [
  { nombre: "Palermo", slug: "palermo" },
  { nombre: "Belgrano", slug: "belgrano" },
  { nombre: "Caballito", slug: "caballito" },
  { nombre: "Recoleta", slug: "recoleta" },
  { nombre: "Flores", slug: "flores" },
  { nombre: "Villa Urquiza", slug: "villa-urquiza" },
  { nombre: "San Isidro", slug: "san-isidro" },
  { nombre: "Mataderos", slug: "mataderos" },
  { nombre: "Nunez", slug: "nunez" },
  { nombre: "Almagro", slug: "almagro" },
  { nombre: "San Telmo", slug: "san-telmo" },
  { nombre: "Villa Devoto", slug: "villa-devoto" },
  { nombre: "Lomas de Zamora", slug: "lomas-de-zamora" },
  { nombre: "Quilmes", slug: "quilmes" },
  { nombre: "Avellaneda", slug: "avellaneda" },
  { nombre: "Moron", slug: "moron" },
  { nombre: "Tigre", slug: "tigre" },
  { nombre: "La Matanza", slug: "la-matanza" },
];

const ZonaPage = ({ zona, descripcion, slug, contenido, faqs }: ZonaPageProps) => {
  const title = `Mudanzas en ${zona} | La Mudanza +30 anos de experiencia`;
  const desc = `${descripcion} Presupuesto sin cargo. Llamanos al 11-2553-5500.`;
  const url = `https://www.mudarme.com.ar/mudanzas-${slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "La Mudanza",
    "url": url,
    "telephone": "+541125535500",
    "description": desc,
    "areaServed": { "@type": "Place", "name": zona },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Juan B. Alberdi 2972",
      "addressLocality": "Buenos Aires",
      "addressRegion": "CABA",
      "addressCountry": "AR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": 150
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">Mudanzas profesionales</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mudanzas en {zona}</h1>
            <p className="text-gray-300 text-lg mb-8">{descripcion}</p>
            <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">
              Cotizar por WhatsApp
            </a>
            <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">
              Llamar ahora
            </a>
          </div>
        </section>

        <section className="bg-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-white">Empresa de mudanzas en {zona}</h2>
            <p className="text-gray-300 text-lg text-center">{contenido}</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Nuestros servicios en {zona}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicios.map(s => (
                <div key={s} className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2 text-white">{s}</h3>
                  <p className="text-gray-400">Realizamos {s.toLowerCase()} en {zona} con vehiculos equipados, personal capacitado y todos los materiales necesarios para un traslado seguro.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Por que elegirnos en {zona}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 border border-zinc-700 rounded-lg bg-zinc-800">
                <p className="text-4xl font-bold text-orange-500">30</p>
                <p className="font-bold mt-2 text-white">Anos de experiencia</p>
                <p className="text-gray-400 text-sm mt-1">Empresa familiar con trayectoria comprobada en {zona}</p>
              </div>
              <div className="p-6 border border-zinc-700 rounded-lg bg-zinc-800">
                <p className="text-4xl font-bold text-orange-500">5.0</p>
                <p className="font-bold mt-2 text-white">Calificacion Google</p>
                <p className="text-gray-400 text-sm mt-1">Mas de 150 resenas de clientes satisfechos</p>
              </div>
              <div className="p-6 border border-zinc-700 rounded-lg bg-zinc-800">
                <p className="text-4xl font-bold text-orange-500">5000</p>
                <p className="font-bold mt-2 text-white">Clientes satisfechos</p>
                <p className="text-gray-400 text-sm mt-1">Miles de mudanzas realizadas en {zona} y CABA</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Preguntas frecuentes sobre mudanzas en {zona}</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2 text-white">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Tambien hacemos mudanzas en</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {todasLasZonas.filter(z => z.slug !== slug).map(z => (
                <a key={z.slug} href={`/mudanzas-${z.slug}`} className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">
                  {z.nombre}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-orange-500 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Pedi tu presupuesto sin cargo</h2>
            <p className="text-white mb-8 opacity-90">Mudanzas en {zona} con la empresa mas confiable de CABA. Respondemos en menos de 24 horas.</p>
            <a href="https://wa.me/541125535500" className="bg-white text-orange-500 font-bold py-3 px-8 rounded-full inline-block mr-4">
              Cotizar por WhatsApp
            </a>
            <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">
              11-2553-5500
            </a>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ZonaPage;
