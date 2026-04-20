import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/solucoes")({
  head: () => ({
    meta: [
      { title: "Soluções B2B — Britto · Mentoria, Times e Cultura" },
      {
        name: "description",
        content:
          "Programas de psicologia B2B: mentoria executiva, desenvolvimento de times e desenho de cultura organizacional.",
      },
      { property: "og:title", content: "Soluções B2B — Britto" },
      {
        property: "og:description",
        content: "Mentoria executiva, times de alta confiança e cultura que sustenta.",
      },
    ],
  }),
  component: SolucoesPage,
});

const solutions = [
  {
    tag: "01 · Executivos",
    title: "Mentoria Executiva",
    description:
      "Acompanhamento individual de longo prazo para C-levels, diretores e fundadores que querem ampliar consciência, presença e capacidade de decisão.",
    bullets: [
      "Encontros quinzenais 1:1 (60–90 min)",
      "Diagnóstico inicial 360°",
      "Trilhas personalizadas por contexto",
      "Suporte entre sessões",
    ],
    duration: "Ciclos de 6 ou 12 meses",
  },
  {
    tag: "02 · Times",
    title: "Desenvolvimento de Times",
    description:
      "Intervenções com times executivos para destravar comunicação, conflito produtivo, confiança e responsabilidade compartilhada.",
    bullets: [
      "Diagnóstico de dinâmicas relacionais",
      "Workshops imersivos (presencial ou híbrido)",
      "Acompanhamento mensal pós-imersão",
      "Métricas qualitativas de evolução",
    ],
    duration: "Programas de 3 a 9 meses",
  },
  {
    tag: "03 · Cultura",
    title: "Desenho de Cultura",
    description:
      "Para organizações em transição — fusão, escala, sucessão — que precisam reconectar propósito, práticas e pessoas com método e profundidade.",
    bullets: [
      "Mapeamento cultural em profundidade",
      "Desenho de rituais e práticas",
      "Apoio à liderança patrocinadora",
      "Plano de implementação por ondas",
    ],
    duration: "Engajamentos de 6 a 18 meses",
  },
];

function SolucoesPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border/60 py-20 md:py-28">
        <div className="container-prose">
          <SectionEyebrow>Soluções B2B</SectionEyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-balance md:text-6xl lg:text-7xl">
            Programas desenhados para a complexidade real do seu contexto.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Não trabalhamos com pacotes fechados. Cada engajamento começa com escuta e diagnóstico —
            só depois desenhamos a intervenção.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-prose space-y-10">
          {solutions.map((s, i) => (
            <article
              key={s.title}
              className="group relative grid gap-10 rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-xl md:grid-cols-12 md:gap-16 md:p-12"
            >
              <div className="md:col-span-4">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  {s.tag}
                </p>
                <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">{s.title}</h2>
                <p className="mt-6 text-sm uppercase tracking-wider text-muted-foreground">
                  {s.duration}
                </p>
              </div>
              <div className="md:col-span-8">
                <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
                  {s.description}
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link
                    to="/contato"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-forest-deep"
                  >
                    Conversar sobre {s.title.toLowerCase()}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
              <span className="pointer-events-none absolute right-8 top-8 font-display text-7xl text-primary/5 md:text-9xl">
                0{i + 1}
              </span>
            </article>
          ))}
        </div>
      </section>

      <CTASection
        eyebrow="Próximos passos"
        title="Não sabe por onde começar? Vamos conversar."
        description="Em uma conversa inicial entendemos seu contexto e indicamos qual frente faz mais sentido para o seu momento."
      />
    </SiteLayout>
  );
}
