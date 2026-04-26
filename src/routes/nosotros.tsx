import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Target, Eye, Heart, CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-logistics.jpg";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — AMF Solutions" },
      {
        name: "description",
        content:
          "Conoce AMF Solutions: empresa especializada en suministro de materiales industriales con enfoque en eficiencia y calidad.",
      },
      { property: "og:title", content: "Nosotros — AMF Solutions" },
      {
        property: "og:description",
        content: "Empresa de suministro industrial enfocada en eficiencia, rapidez y calidad.",
      },
    ],
  }),
  component: NosotrosPage,
});

const values = [
  { icon: Target, title: "Misión", text: "Suministrar materiales industriales con máxima eficiencia, ayudando a nuestros clientes a optimizar su cadena de producción." },
  { icon: Eye, title: "Visión", text: "Ser el aliado estratégico líder en soluciones logísticas e industriales en México, reconocidos por nuestra agilidad y servicio." },
  { icon: Heart, title: "Valores", text: "Compromiso, integridad, calidad, innovación y orientación absoluta al cliente en cada interacción." },
];

const points = [
  "Más de una década de experiencia en el sector industrial",
  "Red logística que cubre todo el territorio nacional",
  "Equipo experto en gestión de inventarios y abastecimiento",
  "Procesos certificados que garantizan la calidad",
  "Atención personalizada y soluciones a la medida",
  "Tiempos de respuesta líderes en la industria",
];

function NosotrosPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Quiénes Somos"
        title="Conoce AMF Solutions"
        subtitle="Empresa mexicana enfocada en el suministro de materiales industriales y soluciones logísticas con resultados tangibles."
      />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-navy opacity-10 blur-2xl" />
            <img src={aboutImg} alt="Equipo AMF" loading="lazy" className="rounded-2xl shadow-elegant" width={1200} height={800} />
          </div>
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-orange-accent">
              Nuestra Historia
            </span>
            <h2 className="mt-3 text-3xl font-bold text-navy sm:text-4xl">
              Eficiencia, rapidez y calidad
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              AMF Solutions nace con la misión de transformar la manera en que las empresas
              industriales acceden a sus insumos. Combinamos tecnología, logística inteligente y
              un equipo experto para garantizar que el material correcto llegue al lugar correcto,
              en el momento correcto.
            </p>
            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-orange-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-8 shadow-soft transition-smooth hover:shadow-elegant animate-fade-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-accent text-white">
                  <v.icon size={26} />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-navy">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
