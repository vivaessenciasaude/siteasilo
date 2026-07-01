# Refinamento UI/UX — iniciado 2026-05-06

**Status:** EM ANDAMENTO — pausado para continuação posterior.

## Contexto
Auditoria sênior do estado atual do site identificou 22 oportunidades de melhoria. Cliente revisou e selecionou 18 para implementar (excluiu itens 2, 4 e 22).

## Itens selecionados

### Tier 1 — Alto impacto na conversão
- [ ] **1.** Hero subtitle frio e genérico — reescrever versão concisa
- [ ] **3.** Selos CRM/ANVISA mais visíveis (hoje só no footer em cinza claro)
- [ ] **5.** Form submit → WhatsApp sem feedback (loading state + fallback toast)
- [ ] **6.** Nav links sem estado ativo (IntersectionObserver)
- [ ] **7.** Floating WhatsApp sem `env(safe-area-inset-bottom)` no iPhone
- [ ] **8.** CTA intermediário entre seções (banner soft entre Diferenciais e Galeria)

### Tier 2 — Polish visual sênior
- [/] **9.** Tokens de design — **PARCIAL: `:root` já atualizado** (ver abaixo)
- [ ] **10.** Sombras coloridas — tokens refatorados, falta APLICAR nos componentes
- [ ] **11.** Hierarquia do hero — eyebrow + remover tagline em `<em>`
- [ ] **12.** Estrelas dos depoimentos — trocar `#F5A623` por `var(--color-gold)` (token já adicionado)
- [ ] **13.** Stroke-width SVG: `1.75` → `1.5` (17 ocorrências em index.html, lightbox 2.5 não muda)
- [ ] **14.** Botões com tactile feedback — `transform: scale(0.97)` em `.btn:active`

### Tier 3 — Acessibilidade
- [ ] **15.** `@media (prefers-reduced-motion: reduce)` — desligar fade-ins e hovers
- [ ] **16.** Skip-link + wrapper `<main id="conteudo">`
- [ ] **17.** Focus trap no menu mobile (hoje só lightbox tem)

### Tier 4 — Performance
- [ ] **18.** `<link rel="preload" as="image">` para hero-bg.webp + `fetchpriority="high"`
- [ ] **19.** Iframe Google Maps → facade (placeholder com endereço + botão "Ver mapa interativo" carrega iframe via JS)
- [ ] **20.** Fontes Google: pattern `media="print" onload="this.media='all'"` para não bloquear render

### Tier 5 — CRO
- [ ] **21.** Nova seção "Como agendar uma visita" (3 passos: WhatsApp → Visita guiada → Avaliação personalizada)

## Itens EXCLUÍDOS pelo cliente
- ~~**2.** Trust signals acima da dobra~~
- ~~**4.** Galeria com fotos humanas (mantida com ambientes)~~
- ~~**22.** Depoimentos com foto/origem verificável (mantidos como estão)~~

## O que JÁ ESTÁ APLICADO no working tree (não commitado)

**`assets/css/style.css`** — bloco `:root` (linhas ~41-92):
- Adicionado `--color-gold: #D4A93C`
- Type scale: `--text-xs` a `--text-5xl`
- Spacing scale: `--space-1` a `--space-20`
- `--radius-full: 9999px`
- Shadows refatorados com HSL primário: `--shadow-sm`, `--shadow`, `--shadow-md`, `--shadow-lg`

Nenhum outro arquivo foi tocado. Nada commitado nesta sessão.

## Próximo passo ao retomar
Começar pelo Tier 2 (mecânico, baixo risco):
1. `.btn:active` linha ~139 → `transform: scale(0.97)`
2. `.depoimento__stars` linha ~831 → `color: var(--color-gold)`
3. `index.html` Edit replace_all: `stroke-width="1.75"` → `stroke-width="1.5"`
4. Tier 2 itens 11, depois Tier 1, depois 3, 4, 5

Sequência sugerida: **Tier 2 → Tier 3 → Tier 1 (HTML/JS) → Tier 4 → Tier 5**.

## Notas de implementação

- **Hero hierarchy (item 11):** trocar tagline em `<em>` por `<p class="hero__eyebrow">` (pill com `padding/border-radius-full/backdrop-filter`). Subtitle reescrito: *"Equipe presente 24 horas, médico responsável e ambiente preparado para que seu familiar viva com conforto, segurança e dignidade."*
- **Selos CRM/ANVISA (item 3):** colocar como chips na seção Sobre, não como trust bar (cliente excluiu trust bar full no item 2).
- **Maps facade (item 19):** sem Static Maps API (paga). Usar placeholder estilizado com endereço + botão; JS substitui pelo iframe no clique.
- **Nav active (item 6):** IntersectionObserver com `rootMargin: '-40% 0px -55% 0px'` para marcar seção dominante.
- **Form fallback (item 5):** toast com link "Não abriu? Toque aqui" e telefone. Componente toast novo (HTML+CSS+JS).
- **Skip-link (item 16):** envolver content em `<main id="conteudo">` (header e footer ficam fora).
- **Stack:** vanilla HTML/CSS/JS, sem build. Deploy automático via Vercel ao push em master.
