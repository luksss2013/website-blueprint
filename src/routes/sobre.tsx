import { createFileRoute } from "@tanstack/react-router";
import { Award, BookOpen, HeartHandshake } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { CTASection } from "@/components/site/CTASection";
import heroCamara from "@/assets/camila-palestra-camara.jpg";
import portraitPerfil from "@/assets/camila-palestra-perfil.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Britto · Psicologia organizacional" },
      {
        name: "description",
        content:
          "Conheça o método e a história por trás da Britto: psicologia clínica aplicada ao mundo corporativo com profundidade humana.",
      },
      { property: "og:title", content: "Sobre — Britto" },
      {
        property: "og:description",
        content: "Método, fundadora e valores que guiam nosso trabalho com lideranças e times.",
      },
      { property: "og:image", content: heroCamara },
      { name: "twitter:image", content: heroCamara },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: HeartHandshake,
    title: "Escuta antes de método",
    body:
      "Cada organização é única. Diagnosticamos antes de prescrever — sem fórmulas prontas.",
  },
  {
    icon: Award,
    title: "Rigor clínico, linguagem de negócio",
    body:
      "Trazemos a profundidade da psicologia para conversas que respeitam a realidade do mercado.",
  },
  {
    icon: BookOpen,
    title: "Aprendizado contínuo",
    body:
      "Estudo permanente em neurociência, psicanálise contemporânea e práticas organizacionais.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border/60 py-20 md:py-28">
        <div className="container-prose grid gap-12 md:grid-cols-12 md:items-center md:gap-16">
          <div className="md:col-span-7">
            <SectionEyebrow>Sobre a Britto</SectionEyebrow>
            <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-balance md:text-6xl lg:text-7xl">
              Psicologia que escuta a complexidade humana das organizações.
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              A Britto nasceu da convicção de que o mundo corporativo precisa de mais profundidade
              — não de mais ferramentas. Trabalhamos com líderes e times que querem ir além da
              superfície.
            </p>
          </div>
          <div className="md:col-span-5">
            <figure className="photo-editorial photo-editorial--soft aspect-[4/5] w-full rounded-2xl shadow-xl">
              <img
                src={heroCamara}
                alt="Camila Britto em palestra na Câmara Municipal"
                width={1200}
                height={1500}
                loading="eager"
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* Fundadora */}
      <section className="py-20 md:py-28">
        <div className="container-prose grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <figure className="photo-editorial aspect-[4/5] w-full rounded-2xl shadow-xl">
              <img
                src={portraitPerfil}
                alt="Camila Britto durante palestra"
                width={1200}
                height={1500}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
          <div className="md:col-span-7">
            <SectionEyebrow>Fundadora</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              Uma trajetória entre o clínico e o organizacional.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Psicóloga formada com especialização em psicologia organizacional e psicanálise,
                atua há mais de uma década com lideranças de empresas de médio e grande porte no
                Brasil.
              </p>
              <p>
                Une formação clínica sólida — com prática consultorial contínua — a uma vivência
                profunda do ambiente corporativo, tendo conduzido programas para C-levels, conselhos
                e times executivos em setores como tecnologia, varejo, finanças e saúde.
              </p>
              <p>
                Sua abordagem combina psicanálise contemporânea, teoria sistêmica e neurociência
                aplicada — sempre traduzida em conversa direta, sem jargão.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 text-sm text-foreground/80 sm:grid-cols-2">
              <li>· CRP ativo desde 2012</li>
              <li>· Especialização em Psicologia Organizacional</li>
              <li>· Formação em Psicanálise (USP)</li>
              <li>· Certificação Internacional em Coaching Executivo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="border-t border-border/60 bg-secondary/40 py-20 md:py-28">
        <div className="container-prose">
          <div className="mx-auto max-w-2xl text-center">
            <SectionEyebrow>Valores</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              O que sustenta nosso trabalho.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <article key={v.title} className="rounded-2xl border border-border bg-card p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-2xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Conheça o método"
        title="Marque uma conversa inicial."
        description="Em 30 minutos entendemos o seu contexto e desenhamos juntos o melhor caminho."
      />
    </SiteLayout>
  );
}
