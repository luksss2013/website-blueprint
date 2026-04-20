import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { CTASection } from "@/components/site/CTASection";
import eventoLilas from "@/assets/camila-evento-lilas.jpg";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: "Cases & Conteúdo — Britto" },
      {
        name: "description",
        content:
          "Histórias, depoimentos e reflexões sobre liderança, cultura e transformação organizacional.",
      },
      { property: "og:title", content: "Cases & Conteúdo — Britto" },
      {
        property: "og:description",
        content: "Resultados reais de programas de mentoria, times e cultura.",
      },
      { property: "og:image", content: eventoLilas },
      { name: "twitter:image", content: eventoLilas },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CasesPage,
});

const testimonials = [
  {
    quote:
      "O processo com a Britto mudou completamente minha forma de liderar — passei a tomar decisões com mais clareza e menos reatividade.",
    author: "CEO",
    role: "SaaS · 200+ colaboradores",
  },
  {
    quote:
      "Pela primeira vez tivemos um trabalho de cultura que não soou como discurso vazio. Mexeu com práticas reais.",
    author: "Diretora de Pessoas",
    role: "Varejo nacional",
  },
  {
    quote:
      "A intervenção com nosso time executivo desbloqueou conversas que estavam represadas há mais de um ano.",
    author: "COO",
    role: "Healthtech",
  },
];

const cases = [
  {
    sector: "Tecnologia",
    title: "Sucessão executiva em scale-up",
    summary:
      "Mentoria 1:1 ao longo de 12 meses para preparar uma C-level recém-promovida. Resultado: retenção da liderança e expansão do escopo.",
    metric: "12 meses",
  },
  {
    sector: "Varejo",
    title: "Reconexão cultural pós-fusão",
    summary:
      "Diagnóstico cultural e desenho de novos rituais de liderança após fusão entre duas operações com históricos distintos.",
    metric: "+38% NPS interno",
  },
  {
    sector: "Saúde",
    title: "Time executivo destravado",
    summary:
      "Programa de 6 meses com o C-level de uma healthtech para alinhar agenda, conflito produtivo e cadência de decisão.",
    metric: "6 meses",
  },
];

const articles = [
  {
    eyebrow: "Liderança",
    title: "O preço silencioso de evitar conflito",
    excerpt:
      "Por que times de alta performance precisam aprender a brigar bem — e como começar essa conversa.",
  },
  {
    eyebrow: "Cultura",
    title: "Cultura não é o que você diz, é o que você tolera",
    excerpt:
      "Pequenos comportamentos do dia a dia revelam mais sobre cultura do que qualquer manifesto.",
  },
  {
    eyebrow: "Carreira",
    title: "Quando a promoção vira armadilha",
    excerpt:
      "Os três sinais de que uma liderança recém-promovida precisa de suporte estruturado — e o custo de ignorá-los.",
  },
];

function CasesPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border/60 py-20 md:py-28">
        <div className="container-prose grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionEyebrow>Cases & Conteúdo</SectionEyebrow>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-balance md:text-6xl lg:text-7xl">
              Histórias reais de transformação.
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-lg text-muted-foreground">
              Cases anonimizados, depoimentos de clientes e reflexões publicadas regularmente sobre
              liderança, cultura e o ofício da psicologia organizacional.
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 md:py-28">
        <div className="container-prose">
          <SectionEyebrow>Depoimentos</SectionEyebrow>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.author + t.role}
                className="flex flex-col rounded-2xl border border-border bg-card p-8"
              >
                <Quote className="h-6 w-6 text-primary" />
                <blockquote className="mt-5 flex-1 font-display text-xl leading-snug text-foreground">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5 text-sm">
                  <p className="font-medium text-foreground">{t.author}</p>
                  <p className="text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="border-y border-border/60 bg-secondary/40 py-20 md:py-28">
        <div className="container-prose">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <SectionEyebrow>Engajamentos</SectionEyebrow>
              <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
                Recortes de programas que conduzimos.
              </h2>
              <figure className="photo-editorial mt-10 aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={eventoLilas}
                  alt="Palestra Agosto Lilás na Câmara Municipal de Arujá"
                  width={1600}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </figure>
              <p className="mt-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Palestra · Agosto Lilás · Câmara Municipal de Arujá
              </p>
            </div>
            <div className="md:col-span-7">
              <ul className="divide-y divide-border">
                {cases.map((c) => (
                  <li key={c.title} className="py-7 first:pt-0">
                    <p className="text-xs font-medium uppercase tracking-widest text-primary">
                      {c.sector}
                    </p>
                    <div className="mt-2 flex items-baseline justify-between gap-6">
                      <h3 className="font-display text-2xl text-foreground md:text-3xl">
                        {c.title}
                      </h3>
                      <span className="shrink-0 text-sm text-muted-foreground">{c.metric}</span>
                    </div>
                    <p className="mt-3 text-base text-muted-foreground">{c.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-20 md:py-28">
        <div className="container-prose">
          <SectionEyebrow>Reflexões</SectionEyebrow>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.map((a) => (
              <article
                key={a.title}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <p className="text-xs font-medium uppercase tracking-widest text-primary">
                  {a.eyebrow}
                </p>
                <h3 className="mt-4 font-display text-2xl leading-snug text-foreground">
                  {a.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>
                <span className="mt-6 text-sm font-medium text-primary">Em breve →</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Sua história pode ser a próxima."
        description="Conte sobre seu momento. Desenhamos juntos um caminho de transformação."
      />
    </SiteLayout>
  );
}
