import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import bearings from "@/assets/prod-bearings.jpg";
import fasteners from "@/assets/prod-fasteners.jpg";
import electrical from "@/assets/prod-electrical.jpg";
import safety from "@/assets/prod-safety.jpg";
import tools from "@/assets/prod-tools.jpg";
import hydraulic from "@/assets/prod-hydraulic.jpg";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos — AMF Solutions" },
      {
        name: "description",
        content:
          "Catálogo de productos industriales: rodamientos, tornillería, material eléctrico, seguridad, herramienta y más.",
      },
      { property: "og:title", content: "Productos — AMF Solutions" },
      {
        property: "og:description",
        content: "Amplio catálogo de materiales industriales de las mejores marcas.",
      },
    ],
  }),
  component: ProductosPage,
});

const categories = [
  { img: bearings, title: "Rodamientos y Transmisión", desc: "Rodamientos, chumaceras, retenes, bandas y poleas industriales." },
  { img: fasteners, title: "Tornillería y Sujetadores", desc: "Tornillos, tuercas, arandelas, anclas y sujetadores en acero e inoxidable." },
  { img: electrical, title: "Material Eléctrico", desc: "Cables, conductores, conectores, conduit y accesorios eléctricos industriales." },
  { img: hydraulic, title: "Hidráulico y Neumático", desc: "Válvulas, mangueras, conexiones y componentes para sistemas de fluidos." },
  { img: tools, title: "Herramienta Industrial", desc: "Herramienta manual y eléctrica de las mejores marcas para uso profesional." },
  { img: safety, title: "Equipo de Seguridad (EPP)", desc: "Cascos, guantes, lentes, chalecos y equipo de protección personal." },
];

function ProductosPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Catálogo"
        title="Productos Industriales"
        subtitle="Explora nuestras categorías y encuentra el material que tu operación necesita."
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <article
                key={c.title}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant animate-fade-up"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                  <Link
                    to="/contacto"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-accent transition-smooth hover:gap-2"
                  >
                    Cotizar →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-gradient-navy p-10 text-center text-white shadow-elegant">
            <h2 className="text-2xl font-bold sm:text-3xl">¿No encuentras lo que buscas?</h2>
            <p className="mt-3 text-white/80">
              Nuestro catálogo es mucho más amplio. Contáctanos y te ayudamos a localizarlo.
            </p>
            <Link
              to="/contacto"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-smooth hover:opacity-90"
            >
              Solicitar Catálogo
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
