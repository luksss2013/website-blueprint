import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-display text-7xl text-primary">404</p>
        <h1 className="mt-4 font-display text-2xl text-foreground">Página não encontrada</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          O endereço acessado não existe ou foi movido.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Britto — Psicologia organizacional para lideranças e times" },
      {
        name: "description",
        content:
          "Britto é uma consultoria de psicologia B2B que transforma lideranças, cultura e performance com profundidade humana.",
      },
      { name: "author", content: "Britto" },
      { name: "theme-color", content: "#1F3A2E" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Britto" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Britto — Psicologia organizacional para lideranças e times" },
      { name: "twitter:title", content: "Britto — Psicologia organizacional para lideranças e times" },
      { name: "description", content: "Website Blueprint plans and builds websites based on your provided files and assets." },
      { property: "og:description", content: "Website Blueprint plans and builds websites based on your provided files and assets." },
      { name: "twitter:description", content: "Website Blueprint plans and builds websites based on your provided files and assets." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8c723143-0fbe-4339-aa27-015cee541888/id-preview-09ddeaf6--f24092af-4467-4d0f-9fd0-e7a041dbbfa0.lovable.app-1776660942384.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8c723143-0fbe-4339-aa27-015cee541888/id-preview-09ddeaf6--f24092af-4467-4d0f-9fd0-e7a041dbbfa0.lovable.app-1776660942384.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
