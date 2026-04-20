import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Sprout, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { CTASection } from "@/components/site/CTASection";
import heroImg from "@/assets/camila-hero.jpg";
import textureImg from "@/assets/texture-organic.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Britto — Psicologia B2B para lideranças que transformam" },
      {
        name: "description",
        content:
          "Programas de psicologia organizacional para desenvolver lideranças, cultura e performance com profundidade humana.",
      },
      { property: "og:title", content: "Britto — Psicologia B2B para lideranças que transformam" },
      {
        property: "og:description",
        content:
          "Consultoria de psicologia organizacional. Mentoria executiva, desenvolvimento de times e cultura.",
      },
    ],
  }),
  component: HomePage,
});

const pillars = [
  {
    icon: Compass,
    title: "Liderança consciente",
    body:
      "Mentoria executiva 1:1 que amplia repertório emocional, presença e tomada de decisão sob pressão.",
  },
  {
    icon: Users,
    title: "Times de alta confiança",
    body:
      "Intervenções que destravam comunicação, conflito produtivo e responsabilidade compartilhada.",
  },
  {
    icon: Sprout,
    title: "Cultura que sustenta",
    body:
      "Diagnóstico e desenho de práticas culturais que conectam propósito, performance e bem-estar.",
  },
];

const stats = [
  { value: "+120", label: "Lideranças atendidas" },
  { value: "+40", label: "Empresas parceiras" },
  { value: "94%", label: "Recomendariam" },
  { value: "12 anos", label: "De prática clínica e organizacional" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="container-prose grid items-center gap-12 py-16 md:grid-cols-12 md:gap-16 md:py-24 lg:py-32">
          <div className="md:col-span-7">
            <SectionEyebrow>Psicologia organizacional</SectionEyebrow>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-balance text-foreground md:text-6xl lg:text-7xl">
              Força que <em className="not-italic text-primary">transforma</em> lideranças e times.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Acompanhamos executivos e organizações em processos profundos de desenvolvimento —
              une rigor clínico, escuta cuidadosa e visão de negócio.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/contato"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-all hover:bg-forest-deep"
              >
                Agendar conversa
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/solucoes"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-4 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
              >
                Ver soluções
              </Link>
            </div>
          </div>

          <div className="relative md:col-span-5">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-secondary/60" aria-hidden />
            <figure className="photo-editorial photo-editorial--soft relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] shadow-2xl">
              <img
                src={heroImg}
                alt="Camila Britto — fundadora da Britto Psicologia"
                width={1600}
                height={2000}
                className="h-full w-full object-cover object-top"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* PILARES */}
      <section className="py-20 md:py-28">
        <div className="container-prose">
          <div className="grid gap-10 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <SectionEyebrow>Como atuamos</SectionEyebrow>
              <h2 className="mt-5 font-display text-4xl leading-[1.1] md:text-5xl">
                Três frentes integradas, um único propósito.
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-1">
                {pillars.map((p) => (
                  <article key={p.title} className="bg-card p-8 md:p-10">
                    <div className="flex items-start gap-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                        <p.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-2xl text-foreground">{p.title}</h3>
                        <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                          {p.body}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative overflow-hidden bg-secondary/40 py-24 md:py-32">
        <img
          src={textureImg}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18] mix-blend-multiply"
          loading="lazy"
        />
        <div className="container-prose relative">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Nosso manifesto</SectionEyebrow>
            <p className="mt-8 font-display text-3xl leading-[1.25] text-balance text-foreground md:text-4xl lg:text-5xl">
              Acreditamos que organizações se transformam quando pessoas se transformam — e que
              isso só acontece com <em className="not-italic text-primary">tempo, escuta e
              presença</em>.
            </p>
            <p className="mt-8 text-base text-muted-foreground">
              Não vendemos respostas rápidas. Construímos processos que sustentam mudança real.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/60 py-16 md:py-20">
        <div className="container-prose grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl text-primary md:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Vamos desenhar o próximo capítulo da sua liderança."
        description="Marque uma conversa inicial sem compromisso. Em 30 minutos entendemos seu contexto e indicamos um caminho."
      />
    </SiteLayout>
  );
}
