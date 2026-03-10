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
    name: "Martín G.",
    text: "Excelente servicio. Llegaron puntual, muy cuidadosos con los muebles y super amables. Los recomiendo al 100%.",
    rating: 5,
    date: "Hace 2 semanas",
  },
  {
    name: "Carolina S.",
    text: "La mejor empresa de mudanzas que contraté. Muy profesionales, rápidos y cuidaron cada detalle. Impecables.",
    rating: 5,
    date: "Hace 1 mes",
  },
  {
    name: "Roberto L.",
    text: "Mudanza de oficina sin ningún problema. Coordinaron todo perfectamente y no se rompió nada. Muy recomendables.",
    rating: 5,
    date: "Hace 1 mes",
  },
  {
    name: "Florencia M.",
    text: "Contraté el servicio completo con embalaje. Increíble lo prolijos que son. Precio justo por un servicio de primera.",
    rating: 5,
    date: "Hace 2 meses",
  },
  {
    name: "Diego P.",
    text: "Ya es la tercera vez que los contrato. Siempre cumplen, siempre puntuales, siempre amables. Son los mejores.",
    rating: 5,
    date: "Hace 3 meses",
  },
  {
    name: "Laura V.",
    text: "Me mudé al interior y estaba preocupada, pero todo llegó perfecto. Seguimiento constante y muy buena comunicación.",
    rating: 5,
    date: "Hace 3 meses",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleReviews = [
    reviews[current],
    reviews[(current + 1) % reviews.length],
    reviews[(current + 2) % reviews.length],
  ];

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
            <span className="ml-2 text-foreground font-semibold">4.8</span>
            <span className="text-muted-foreground ml-1">en Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
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

        {/* Dots indicator */}
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
      </div>
    </section>
  );
};

export default Testimonials;
