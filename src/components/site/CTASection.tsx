import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function CTASection({ eyebrow = "Próximo passo", title, description }: CTASectionProps) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-prose grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-7">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/70">
            {eyebrow}
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.1] text-balance md:text-5xl lg:text-6xl">
            {title}
          </h2>
          {description && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80">
              {description}
            </p>
          )}
        </div>
        <div className="flex items-end md:col-span-5 md:justify-end">
          <Link
            to="/contato"
            className="group inline-flex items-center gap-3 rounded-full bg-cream px-7 py-4 text-sm font-medium text-primary transition-all hover:bg-sand"
          >
            Conversar com a Britto
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
