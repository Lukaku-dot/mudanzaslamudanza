import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface ZonaPageProps {
  zona: string;
  descripcion: string;
  slug: string;
  faqs?: { q: string; a: string }[];
}

const servicios = [
  "Mudanzas residenciales",
  "Mudanzas comerciales",
  "Guardamuebles",
  "Embalaje profesional",
  "Izajes por balcon",
  "Mudanzas al interior"
];

const zonas = [
  { nombre: "Palermo", slug: "palermo" },
  { nombre: "Belgrano", slug: "belgrano" },
  { nombre: "Caballito", slug: "caballito" },
  { nombre: "Recoleta", slug: "recoleta" },
  { nombre: "Flores", slug: "flores" },
  { nombre: "Villa Urquiza", slug: "villa-urquiza" },
  { nombre: "San Isidro", slug: "san-isidro" },
  { nombre: "Mataderos", slug: "mataderos" },
];

const ZonaPage = ({ zona, descripcion, slug, faqs = [] }: ZonaPageProps) => {
  const title = `Mudanzas en ${zona} | La Mudanza +30 anos de experiencia`;
  const desc = `Empresa de mudanzas en ${zona}. ${descripcion} Presupuesto sin cargo. Llamanos al 11-2553-5500.`;
  const url = `https://www.mudarme.com.ar/mudanzas-${slug}`;

  const defaultFaqs = [
    {
      q: `Cuanto cuesta una mudanza en ${zona}?`,
      a: `El costo de una mudanza en ${zona} depende del volumen de muebles, la distancia y los servicios adicionales como embalaje. En La Mudanza te hacemos un presupuesto sin cargo y sin compromiso. Contactanos por WhatsApp o telefono.`
    },
    {
      q: `Con cuanta anticipacion debo reservar mi mudanza en ${zona}?`,
      a: `Recomendamos reservar con al menos una semana de anticipacion, especialmente a fin de mes cuando la demanda es mayor. En La Mudanza nos adaptamos a tus tiempos y podemos coordinar mudanzas urgentes en ${zona}.`
    },
    {
      q: `Hacen mudanzas en edificios sin ascensor en ${zona}?`,
      a: `Si, tenemos amplia experiencia en mudanzas en edificios sin ascensor en ${zona}. Contamos con personal capacitado y el equipamiento necesario para cualquier tipo de acceso.`
    },
    {
      q: `Ofrecen servicio de embalaje en ${zona}?`,
      a: `Si, en La Mudanza ofrecemos servicio de embalaje profesional en ${zona}. Usamos materiales especializados para proteger vajilla, cristaleria, cuadros y todo tipo de objetos delicados.`
    },
  ];

  const allFaqs = faqs.length > 0 ? faqs : defaultFaqs;

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
    "mainEntity": allFaqs.map(f => ({
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

        <section className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Empresa de mudanzas en {zona}</h2>
          <p className="text-gray-600 text-lg mb-4 text-center">
            En La Mudanza somos especialistas en mudanzas en {zona} con mas de 30 anos de experiencia en Capital Federal y Gran Buenos Aires. 
            Nuestro equipo profesional se encarga de cada detalle para que tu mudanza sea rapida, segura y sin estres.
          </p>
          <p className="text-gray-600 text-lg text-center">
            Ya sea que te mudes dentro de {zona} o desde otro barrio, contamos con camiones de distintos tamanos, 
            personal capacitado y todos los materiales de embalaje necesarios. Presupuesto sin cargo y sin compromiso.
          </p>
        </section>

        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nuestros servicios en {zona}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicios.map(s => (
                <div key={s} className="bg-white border rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">{s}</h3>
                  <p className="text-gray-600">Servicio profesional de {s.toLowerCase()} en {zona} con mas de 30 anos de experiencia. Personal capacitado y equipamiento de primera calidad.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Por que elegirnos en {zona}</h2>
            <p className="text-gray-600 mb-8">Somos la empresa de mudanzas de confianza en {zona} y toda la Ciudad de Buenos Aires.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 border rounded-lg">
                <p className="text-4xl font-bold text-orange-500">30</p>
                <p className="font-bold mt-2">Anos de experiencia</p>
                <p className="text-gray-600 text-sm mt-1">Empresa familiar con trayectoria comprobada en {zona}</p>
              </div>
              <div className="p-6 border rounded-lg">
                <p className="text-4xl font-bold text-orange-500">5.0</p>
                <p className="font-bold mt-2">Calificacion Google</p>
                <p className="text-gray-600 text-sm mt-1">Mas de 150 resenas de clientes satisfechos</p>
              </div>
              <div className="p-6 border rounded-lg">
                <p className="text-4xl font-bold text-orange-500">5000</p>
                <p className="font-bold mt-2">Clientes satisfechos</p>
                <p className="text-gray-600 text-sm mt-1">Miles de mudanzas realizadas en {zona} y CABA</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Preguntas frecuentes sobre mudanzas en {zona}</h2>
            <div className="space-y-4">
              {allFaqs.map((faq, i) => (
                <div key={i} className="bg-white border rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Tambien hacemos mudanzas en</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {zonas.filter(z => z.slug !== slug).map(z => (
              <a key={z.slug} href={`/mudanzas-${z.slug}`} className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">
                {z.nombre}
              </a>
            ))}
          </div>
        </section>

        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Pedi tu presupuesto sin cargo</h2>
            <p className="text-gray-300 mb-8">Mudanzas en {zona} con la empresa mas confiable de CABA. Respondemos en menos de 24 horas.</p>
            <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">
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
