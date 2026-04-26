import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { ArrowRight, Truck, Package, ShieldCheck, Clock, Headphones, Award } from "lucide-react";
import heroImg from "@/assets/hero-warehouse.jpg";
import aboutImg from "@/assets/about.jpg";
import { Phone } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AMF Solutions — Agilidad en Materiales | Suministro Industrial" },
      {
        name: "description",
        content:
          "AMF Solutions: suministro de materiales industriales, logística y soluciones personalizadas para empresas en México.",
      },
      { property: "og:title", content: "AMF Solutions — Agilidad en Materiales" },
      {
        property: "og:description",
        content: "Suministro de materiales industriales y soluciones logísticas eficientes.",
      },
    ],
  }),
  component: HomePage,
});

const advantages = [
  { icon: Truck, title: "Entregas Rápidas", desc: "Logística ágil que cumple con tus tiempos de producción." },
  { icon: Headphones, title: "Atención Personalizada", desc: "Asesoría experta enfocada en las necesidades de tu industria." },
  { icon: Award, title: "Calidad Garantizada", desc: "Materiales certificados que cumplen los más altos estándares." },
  { icon: Package, title: "Amplio Catálogo", desc: "Miles de productos industriales disponibles bajo un solo proveedor." },
];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Almacén industrial AMF Solutions"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl text-white animate-fade-up">

            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
              Agilidad en <span className="text-orange-accent">Materiales</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85 sm:text-xl">
              Suministro industrial, logística inteligente y soluciones a la medida para impulsar
              la productividad de tu empresa.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-elegant transition-smooth hover:opacity-90"
              >
                Solicitar Cotización <ArrowRight size={16} />
              </Link>
              <Link
                to="/servicios"
                className="inline-flex items-center rounded-md border border-white/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-smooth hover:bg-white/15"
              >
                Nuestros Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background py-12">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-orange-accent">
              Sobre Nosotros
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Tu socio estratégico en suministro industrial
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              En AMF Solutions nos dedicamos a abastecer a la industria con materiales de alta
              calidad, ofreciendo eficiencia, rapidez y confianza en cada entrega. Optimizamos tu
              cadena de suministro para que te enfoques en lo que mejor sabes hacer: producir.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { n: "+5", l: "Años de experiencia" },
                { n: "500+", l: "Clientes activos" },
                { n: "24/7", l: "Atención" },
              ].map((s) => (
                <div key={s.l} className="border-l-4 border-orange-accent pl-3">
                  <div className="text-3xl font-extrabold text-navy">{s.n}</div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
            <Link
              to="/nosotros"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-navy hover:text-orange-accent transition-smooth"
            >
              Conoce más <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-accent opacity-20 blur-2xl" />
            <img
              src={aboutImg}
              alt="Operaciones AMF"
              loading="lazy"
              className="rounded-2xl shadow-elegant"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </section>

      {/* VENTAJAS */}
      <section className="bg-muted/40 py-18">
        <div className="mx-auto max-w-7xl px-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-orange-accent">
              Ventajas Competitivas
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              ¿Por qué elegir AMF Solutions?
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a, i) => (
              <div
                key={a.title}
                className="group relative rounded-2xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-navy text-white transition-smooth group-hover:bg-gradient-accent">
                  <a.icon size={26} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
        <section className="relative overflow-hidden py-16 text-white bg-gradient-to-r from-blue-900 via-slate-700 to-orange-400">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center sm:px-6 lg:px-10">
          <ShieldCheck size={80} className="text-orange-accent" />
          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            ¿Listo para optimizar tu suministro industrial?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Contáctanos hoy mismo y descubre cómo podemos transformar tu cadena de suministro.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
  to="/contacto"
  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-500/40 hover:bg-orange-400"
>
  <Clock size={18} />
  Solicitar cotización
</Link>
            <a
  href="tel:+526642137845"
  className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-400 hover:shadow-orange-500/40"
>
                <Phone size={18} />
               664 213 7845
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
