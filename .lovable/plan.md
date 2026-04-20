
O usuário enviou o logo da **Britto** (leão + borboleta em traço fino verde-escuro sobre fundo branco). Isso já responde uma das perguntas pendentes (nome da marca = Britto). Vou consolidar o plano usando esse logo como âncora visual e propor a paleta a partir dele, mantendo as demais decisões em aberto de forma objetiva.

## Leitura visual do logo
- Traço orgânico, manuscrito, fino — sugere sofisticação artesanal, não corporativo frio
- Verde-escuro / verde-floresta como cor única do desenho
- Tipografia "Britto" em script elegante
- Simbologia: leão (força, liderança) + borboleta (transformação) — narrativa perfeita para psicologia B2B (transformação de lideranças e times)

## Direção visual proposta (a confirmar)
- **Paleta**: Verde-floresta `#1F3A2E` (primário, do logo) · Off-white `#FAF8F3` (fundo) · Bege quente `#E8DFD0` (superfícies) · Grafite `#1A1A1A` (texto) · Dourado discreto `#B8956A` (acento raro)
- **Tipografia**: Serif editorial nos títulos (Fraunces/Cormorant) + sans humanista no corpo (Inter)
- **Tom**: premium, sóbrio, espaçado, fotografia ampla, microinterações sutis

## Estrutura do site (5 páginas do briefing)

```text
/                 Home — hero + proposta + 3 pilares + provas + CTA
/sobre            Sobre — método, fundadora, credenciais, valores
/solucoes         Soluções — programas B2B (cards detalhados)
/cases            Cases & Conteúdo — depoimentos, artigos
/contato          Contato — formulário + dados + agendamento
```

Cada rota com `head()` próprio (SEO/OG por página), conforme padrão TanStack Start.

## Componentes-chave
- `SiteHeader` (logo Britto + nav + CTA "Fale conosco")
- `SiteFooter` (institucional, contato, redes)
- `Hero`, `PillarCard`, `SolutionCard`, `TestimonialCard`, `StatBlock`, `CTASection`
- `ContactForm` (react-hook-form + zod)

## Detalhes técnicos
- Logo copiado para `src/assets/britto-logo.png` e importado como módulo ES6
- Rotas em `src/routes/` (flat: `index.tsx`, `sobre.tsx`, `solucoes.tsx`, `cases.tsx`, `contato.tsx`)
- Tema configurado em `src/styles.css` via `@theme` (tokens semânticos, sem cores hard-coded nos componentes)
- `notFoundComponent` no root + `defaultErrorComponent` no router (já parcialmente presente)
- Imagens hero geradas via Lovable AI (Nano banana) com estética coerente

## Decisões em aberto (3 pontos)

**1. Paleta** — Confirma verde-floresta + bege/off-white extraído do logo, ou prefere outra direção (azul-marinho, terracota, grafite puro)?

**2. Formulário de contato** — Como tratar leads enviados em `/contato`?
   - (a) Salvar no banco (Lovable Cloud) — recomendado
   - (b) Salvar no banco + email de notificação
   - (c) Apenas abrir WhatsApp/email do navegador (sem backend)

**3. Escopo da v1** — Entregar as 5 páginas completas de uma vez, ou começar enxuto (Home + Soluções + Contato) e expandir depois?

Pode responder em texto livre (ex.: "paleta do logo, opção b, todas as 5 páginas") que eu sigo direto para a implementação.
