import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
  faqJsonLd?: Array<{ question: string; answer: string }>;
}

const BASE_URL = "https://mudarme.com.ar";
const DEFAULT_TITLE = "La Mudanza | Mudanzas y Guardamuebles CABA y GBA";
const DEFAULT_DESC =
  "La Mudanza: mudanzas residenciales, comerciales y guardamuebles en CABA y GBA. +30 años de experiencia. ¡Pedí tu presupuesto sin cargo!";
const DEFAULT_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/62eb195d-361e-4fec-80ec-c5c7a88a203a/id-preview-6bb742bd--eeef54c9-bb4f-4e9f-88bc-e599415e775b.lovable.app-1773163321402.png";

const SEOHead = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  canonical = BASE_URL,
  ogImage = DEFAULT_IMAGE,
  jsonLd,
  faqJsonLd,
}: SEOHeadProps) => {
  const faqSchema = faqJsonLd
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqJsonLd.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="La Mudanza" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
    </Helmet>
  );
};

export default SEOHead;
