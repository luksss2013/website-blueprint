import { Link } from "@tanstack/react-router";
import { Mail, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/britto-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="container-prose py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src={logo} alt="Britto" className="h-14 w-auto" width={140} height={56} />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Psicologia organizacional para lideranças e times que desejam transformar
              cultura, performance e bem-estar com profundidade humana.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground/60">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/sobre" className="text-foreground/80 hover:text-primary">Sobre</Link></li>
              <li><Link to="/solucoes" className="text-foreground/80 hover:text-primary">Soluções</Link></li>
              <li><Link to="/cases" className="text-foreground/80 hover:text-primary">Cases</Link></li>
              <li><Link to="/contato" className="text-foreground/80 hover:text-primary">Contato</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-foreground/60">
              Contato
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="mailto:contato@britto.com.br" className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary">
                  <Mail className="h-4 w-4" /> contato@britto.com.br
                </a>
              </li>
              <li className="text-foreground/80">São Paulo · Atendimento nacional</li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 transition-colors hover:border-primary hover:text-primary">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Britto. Todos os direitos reservados.</p>
          <p className="font-display italic">Força que transforma.</p>
        </div>
      </div>
    </footer>
  );
}
