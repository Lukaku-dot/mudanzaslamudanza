import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface ZonaPageProps {
  zona: string;
  descripcion: string;
  slug: string;
}

const servicios = [
  "Mudanzas residenciales",
  "Mudanzas comerciales",
  "Guardamuebles",
  "Embalaje profesional",
  "Izajes por balcon",
  "Mudanzas al interior"
];

const ZonaPage = ({ zona, descripcion, slug }: ZonaPageProps) => {
  const title = `Mudanzas en ${zona} | La Mudanza`;
  const desc = `Empresa de mudanzas en ${zona}. ${descripcion} Presupuesto sin cargo. Llamanos al 11-2553-5500.`;
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

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
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

        <section className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestros servicios en {zona}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicios.map(s => (
              <div key={s} className="border rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">{s}</h3>
                <p className="text-gray-600">Servicio profesional de {s.toLowerCase()} en {zona} con mas de 30 anos de experiencia.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Por que elegirnos en {zona}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <p className="text-4xl font-bold text-orange-500">30</p>
                <p className="text-gray-600">Anos de experiencia</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-orange-500">5.0</p>
                <p className="text-gray-600">Calificacion Google</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-orange-500">5000</p>
                <p className="text-gray-600">Clientes satisfechos</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ZonaPage;
