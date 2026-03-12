import { MapPin } from "lucide-react";

const barrios = [
  "Palermo", "Recoleta", "Belgrano", "Almagro", "Caballito", "Flores",
  "Villa Crespo", "Núñez", "Colegiales", "Villa Urquiza", "Devoto",
  "Villa del Parque", "Barracas", "La Boca", "San Telmo", "Monserrat",
  "San Nicolás", "Retiro", "Puerto Madero", "Constitución", "Boedo",
  "Parque Chacabuco", "Nueva Pompeya", "Mataderos", "Liniers",
  "Villa Luro", "Floresta", "Monte Castro", "Vélez Sarsfield",
  "Versalles", "Villa Real", "Villa Devoto", "Saavedra", "Coghlan",
  "Chacarita", "Paternal", "Villa Ortúzar", "Agronomía", "Parque Chas",
  "Villa Pueyrredón", "Villa Santa Rita", "Villa Mitre", "Parque Avellaneda",
  "Parque Patricios", "Pompeya", "Villa Soldati", "Villa Lugano", "Villa Riachuelo",
];

const zonas = [
  { name: "Zona Norte", areas: "San Isidro, Vicente López, Tigre, San Fernando, Olivos, Martínez, Acassuso, Béccar, San Martín, José León Suárez, Don Torcuato, Pacheco, Pilar, Escobar" },
  { name: "Zona Sur", areas: "Avellaneda, Lanús, Lomas de Zamora, Quilmes, Berazategui, Florencio Varela, Almirante Brown, Esteban Echeverría, Ezeiza, Presidente Perón, San Vicente, Adrogué, Banfield, Temperley, Sarandí, Wilde" },
  { name: "Zona Oeste", areas: "Morón, Ituzaingó, Merlo, Moreno, La Matanza, Caseros, Tres de Febrero, Hurlingham, San Miguel, José C. Paz, Malvinas Argentinas, General Rodríguez, Luján, Ramos Mejía, Haedo, Ciudadela" },
];

const CoverageArea = () => {
  return (
    <section id="cobertura" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold uppercase tracking-[0.3em] text-sm mb-3">
            Cobertura
          </p>
          <h2 className="font-display text-3xl md:text-5xl mb-4">
            Zonas de{" "}
            <span className="text-gradient-brand">Cobertura</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Realizamos mudanzas en todos los barrios de Capital Federal y en toda la Zona Norte, Sur y Oeste del Gran Buenos Aires.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* CABA */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl">CABA</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {barrios.map((barrio) => (
                <span
                  key={barrio}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                >
                  {barrio}
                </span>
              ))}
            </div>
          </div>

          {/* GBA */}
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl">Gran Buenos Aires</h3>
            </div>
            <div className="space-y-4">
              {zonas.map((zona) => (
                <div key={zona.name}>
                  <p className="font-semibold text-foreground mb-1">{zona.name}</p>
                  <p className="text-muted-foreground text-sm">{zona.areas}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageArea;
