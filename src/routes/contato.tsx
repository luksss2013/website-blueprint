import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Britto · Vamos conversar" },
      {
        name: "description",
        content:
          "Agende uma conversa inicial com a Britto. Mentoria executiva, desenvolvimento de times e desenho de cultura.",
      },
      { property: "og:title", content: "Contato — Britto" },
      {
        property: "og:description",
        content: "Marque uma conversa inicial sem compromisso.",
      },
    ],
  }),
  component: ContatoPage,
});

const channels = [
  {
    icon: Mail,
    title: "E-mail",
    value: "contato@britto.com.br",
    href: "mailto:contato@britto.com.br",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+55 (11) 99999-9999",
    href: "https://wa.me/5511999999999",
  },
  {
    icon: MapPin,
    title: "Localização",
    value: "São Paulo · Atendimento nacional",
  },
  {
    icon: Clock,
    title: "Resposta",
    value: "Em até 1 dia útil",
  },
];

function ContatoPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border/60 py-20 md:py-28">
        <div className="container-prose">
          <SectionEyebrow>Vamos conversar</SectionEyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] text-balance md:text-6xl lg:text-7xl">
            Toda transformação começa com uma conversa.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Conte sobre o seu momento. Em até 1 dia útil retornamos para marcar uma conversa
            inicial — sem compromisso.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-prose grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <h2 className="font-display text-3xl leading-tight md:text-4xl">
              Canais diretos
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Prefere falar agora? Use um dos canais ao lado. Para uma resposta mais detalhada,
              envie pelo formulário.
            </p>
            <ul className="mt-10 space-y-6">
              {channels.map((c) => (
                <li key={c.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      {c.title}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="mt-1 block text-base text-foreground transition-colors hover:text-primary"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-base text-foreground">{c.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
              <h2 className="font-display text-3xl leading-tight md:text-4xl">
                Envie sua mensagem
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Preencha os campos abaixo. Quanto mais contexto, mais útil será nossa primeira
                conversa.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
