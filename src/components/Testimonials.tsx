import { useState, useEffect } from "react";
import { Star } from "lucide-react";

interface Review {
  name: string;
  text: string;
  rating: number;
  date: string;
}

const reviews: Review[] = [
  {
    name: "Esteban Bruel",
    text: "Una maravilla todo, desde el primer contacto para presupuesto, puntualidad, y los muchachos muy bien en todo aspecto, recomendable 100%.",
    rating: 5,
    date: "Hace un año",
  },
  {
    name: "Edinstitucionales",
    text: "Muy conforme con la profesionalidad en el desempeño de la mudanza de todo el personal, destacando a cada uno de ellos, Daniel impecable organizando todo, acompañado por cada uno de los señores que ayudaron.",
    rating: 5,
    date: "Hace un año",
  },
  {
    name: "Monica Luppi",
    text: "Excelente servicio. Muy buena organización de todo el equipo. Tanto en el cuidado de los muebles, como de los ascensores, para no dejar al resto de los vecinos sin los mismos. Muy amables y dispuestos. Los recomiendo!",
    rating: 5,
    date: "Hace 3 meses",
  },
  {
    name: "Guillermo Rodrigo",
    text: "Muy atentos, tanto el chofer como los dos operarios. Un par de muebles pesados los levantaron con sogas para no rayar el piso. Precio razonable. Un detalle no menor para destacar, la puntualidad.",
    rating: 5,
    date: "Hace 2 años",
  },
  {
    name: "Patricio Euillades",
    text: "Impecable, desde la atención telefónica de Romina, cotización y cumplimiento. Super puntuales y atentos. Siempre se mantuvieron en contacto. Peones y empleados profesionales y atentos a los detalles.",
    rating: 5,
    date: "Hace 5 años",
  },
  {
    name: "Juliana Galarza",
    text: "Excelente servicio, super profesionales. Se encargan de todo. Muy buena onda y serviciales. Lo mejor: puntuales y rápidos.",
    rating: 5,
    date: "Hace 4 años",
  },
  {
    name: "German Retta",
    text: "Excelente servicio, embalaron todo con mantas y film, muy respetuosos y eficientes, desarmaron embalaron y cargaron con una gran rapidez, lo mismo en la descarga. Muchas gracias.",
    rating: 5,
    date: "2017",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (reviews.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleReviews = reviews.length >= 3
    ? [
        reviews[current],
        reviews[(current + 1) % reviews.length],
        reviews[(current + 2) % reviews.length],
      ]
    : reviews;

  return (
    <section id="testimonios" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-[0.3em] text-sm mb-3">
            Testimonios
          </p>
          <h2 className="font-display text-3xl md:text-5xl mb-4">
            Lo que dicen{" "}
            <span className="text-gradient-brand">nuestros clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Reseñas reales de Google Maps · La Mudanza Mudanzas
          </p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-primary text-primary" />
            ))}
            <span className="ml-2 text-foreground font-semibold">5.0</span>
            <span className="text-muted-foreground ml-1">en Google</span>
          </div>
        </div>

        <div className={`grid gap-6 ${visibleReviews.length === 1 ? 'max-w-xl mx-auto' : 'md:grid-cols-3'}`}>
          {visibleReviews.map((review, idx) => (
            <div
              key={`${review.name}-${idx}`}
              className="bg-card border border-border rounded-xl p-8 transition-all duration-500 animate-fade-in"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 mb-6 italic leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-muted-foreground text-sm">{review.date}</p>
                </div>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  Google
                </div>
              </div>
            </div>
          ))}
        </div>

        {reviews.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === current ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
                aria-label={`Ver reseña ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
