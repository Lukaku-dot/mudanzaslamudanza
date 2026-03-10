import { useState } from "react";
import { Send, Phone, MessageCircle } from "lucide-react";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    origen: "",
    destino: "",
    fecha: "",
    detalles: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = `Hola! Quiero cotizar una mudanza:%0A- Nombre: ${formData.nombre}%0A- Tel: ${formData.telefono}%0A- Origen: ${formData.origen}%0A- Destino: ${formData.destino}%0A- Fecha: ${formData.fecha}%0A- Detalles: ${formData.detalles}`;
    window.open(`https://wa.me/541125535500?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <section id="contacto" className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-lg mx-auto bg-card border border-border rounded-2xl p-12">
            <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="font-display text-3xl mb-4">¡Mensaje enviado!</h2>
            <p className="text-muted-foreground mb-6">
              Te responderemos a la brevedad. También podés llamarnos directamente.
            </p>
            <a
              href="tel:+541146375500"
              className="bg-gradient-brand text-primary-foreground px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 shadow-brand"
            >
              <Phone className="w-4 h-4" />
              4637-5500
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-primary font-semibold uppercase tracking-[0.3em] text-sm mb-3">
              Cotizá tu mudanza
            </p>
            <h2 className="font-display text-3xl md:text-5xl mb-6">
              Pedí tu presupuesto{" "}
              <span className="text-gradient-brand">sin compromiso</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Completá el formulario y te contactamos en minutos. 
              También podés comunicarte directamente por teléfono o WhatsApp.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+541125535500"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Celular</p>
                  <p className="text-muted-foreground">11-2553-5500</p>
                </div>
              </a>
              <a
                href="tel:+541146375500"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">Teléfono fijo</p>
                  <p className="text-muted-foreground">4637-5500</p>
                </div>
              </a>
              <a
                href="https://wa.me/541125535500"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-brand rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <p className="text-muted-foreground">Chateá con nosotros</p>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground/80 mb-1.5 block">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground/80 mb-1.5 block">Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Tu teléfono"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground/80 mb-1.5 block">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="tu@email.com"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground/80 mb-1.5 block">Origen</label>
                <input
                  type="text"
                  name="origen"
                  required
                  value={formData.origen}
                  onChange={handleChange}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Dirección de origen"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground/80 mb-1.5 block">Destino</label>
                <input
                  type="text"
                  name="destino"
                  required
                  value={formData.destino}
                  onChange={handleChange}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Dirección de destino"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground/80 mb-1.5 block">Fecha estimada</label>
              <input
                type="date"
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground/80 mb-1.5 block">Detalles adicionales</label>
              <textarea
                name="detalles"
                value={formData.detalles}
                onChange={handleChange}
                rows={3}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Cantidad de ambientes, objetos especiales, etc."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-brand text-primary-foreground py-4 rounded-lg font-bold text-lg shadow-brand hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Enviar cotización por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
