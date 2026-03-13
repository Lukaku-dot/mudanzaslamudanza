import { Truck, Building2, Package, Shield, Clock, MapPin, Warehouse } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Mudanzas Residenciales",
    description: "Traslados cuidadosos de casas y departamentos en Capital Federal. Contamos con personal para carga y descarga.",
  },
  {
    icon: Building2,
    title: "Mudanzas Comerciales",
    description: "Mudamos oficinas y comercios minimizando el tiempo de inactividad. Planificación integral para tu negocio.",
  },
  {
    icon: Package,
    title: "Embalaje Profesional",
    description: "Protección total para tu vajilla y muebles con pluribol, cartón corrugado y canastos de mimbre.",
  },
  {
    icon: Shield,
    title: "Izajes",
    description: "Especialistas en movimientos por balcón con sogas para muebles que no entran por ascensor.",
  },
  {
    icon: MapPin,
    title: "Mudanzas al Interior",
    description: "Realizamos mudanzas a todo el país. Larga distancia con seguimiento en tiempo real.",
  },
  {
    icon: Warehouse,
    title: "Guardamuebles",
    description: "Contamos con depósitos privados, limpios y vigilados las 24 hs para estadías cortas o largas. Ideal para mudanzas intermedias o falta de espacio.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-[0.3em] text-sm mb-3">
            Nuestros Servicios
          </p>
          <h2 className="font-display text-3xl md:text-5xl mb-4" id="servicios-titulo">
            Todo lo que necesitás para{" "}
            <span className="text-gradient-brand">tu mudanza</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ofrecemos soluciones integrales para cada tipo de mudanza con equipos capacitados y vehículos adecuados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-brand"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-brand flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-display text-xl mb-3">{service.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
