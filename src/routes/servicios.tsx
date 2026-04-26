import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Boxes, Truck, Warehouse, Settings2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — AMF Solutions" },
      {
        name: "description",
        content:
          "Suministro de materiales, logística, distribución, gestión de inventarios y soluciones personalizadas para la industria.",
      },
      { property: "og:title", content: "Servicios — AMF Solutions" },
      {
        property: "og:description",
        content: "Soluciones integrales de suministro industrial y logística.",
      },
    ],
  }),
  component: ServiciosPage,
});

const services = [
  {
    icon: Boxes,
    title: "Suministro de Materiales Industriales",
    desc: "Catálogo amplio de materiales y consumibles industriales: rodamientos, tornillería, eléctrico, hidráulico, herramienta y más.",
    bullets: ["Materiales certificados", "Marcas líderes", "Disponibilidad inmediata"],
  },
  {
    icon: Truck,
    title: "Logística y Distribución",
    desc: "Operación logística que combina rutas optimizadas y seguimiento en tiempo real para entregar a tiempo, siempre.",
    bullets: ["Cobertura nacional", "Tracking en tiempo real", "Entregas express"],
  },
  {
    icon: Warehouse,
    title: "Gestión de Inventarios",
    desc: "Administramos tu inventario crítico para evitar paros productivos y optimizar capital de trabajo.",
    bullets: ["Stock mínimo garantizado", "Reportes mensuales", "Reabasto automático"],
  },
  {
    icon: Settings2,
    title: "Soluciones Personalizadas",
    desc: "Diseñamos esquemas de abastecimiento a medida para empresas con necesidades específicas o de alto volumen.",
    bullets: ["Análisis de consumo", "Contratos a medida", "Asesoría experta"],
  },
];

function ServiciosPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Nuestros Servicios"
        title="Soluciones Industriales Integrales"
        subtitle="Cubrimos todo el ciclo de abastecimiento: desde la búsqueda del material correcto hasta su entrega final."
      />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-gradient-accent opacity-10 transition-smooth group-hover:opacity-20" />
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-navy text-white">
                <s.icon size={26} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-navy">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-elegant transition-smooth hover:opacity-90"
          >
            Solicita una propuesta <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
