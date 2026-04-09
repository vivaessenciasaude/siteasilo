# Viva Essência Saúde — Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Criar a landing page completa (index.html + style.css + main.js) do Residencial Sênior Viva Essência Saúde, pronta para rodar com Live Server.

**Architecture:** HTML5 semântico com 9 seções, CSS3 mobile-first com custom properties, Vanilla JS para floating WhatsApp, form redirect, lightbox e hamburger menu. Sem frameworks, sem build step.

**Tech Stack:** HTML5, CSS3 (custom properties, Grid, Flexbox), Vanilla JS (ES6+), Google Fonts (Playfair Display + Inter)

---

## File Map

| Arquivo | Responsabilidade |
|---|---|
| `index.html` | Estrutura HTML de todas as 9 seções |
| `assets/css/style.css` | Todos os estilos — reset, variáveis, layout, responsividade |
| `assets/js/main.js` | Hamburger, sticky header, smooth scroll, floating WA, form, lightbox, fade-in |
| `assets/images/` | Diretório de imagens (placeholders comentados no HTML) |
| `blog/` | Diretório vazio reservado |

---

## Task 1: Scaffold do projeto + `<head>` do index.html

**Files:**
- Create: `index.html`
- Create: `assets/css/style.css` (vazio por ora)
- Create: `assets/js/main.js` (vazio por ora)
- Create: `blog/.gitkeep`

- [ ] **Step 1: Criar estrutura de pastas**

```bash
mkdir -p "assets/css" "assets/js" "assets/images/galeria" "blog"
touch assets/css/style.css assets/js/main.js blog/.gitkeep
```

- [ ] **Step 2: Criar index.html com `<head>` completo**

Criar `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Viva Essência Saúde | Residencial Sênior em Hortolândia-SP</title>
  <meta name="description" content="Residencial sênior com médico responsável em Hortolândia. Cuidados especializados, equipe 24h e estrutura acolhedora. Agende uma visita.">

  <!-- Google Analytics 4 — ativar antes do go-live -->
  <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');</script> -->

  <!-- Meta Pixel — ativar antes do go-live -->
  <!-- <script>!function(f,b,e,v,n,t,s){...}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','PIXEL_ID');fbq('track','PageView');</script> -->

  <!-- Google Tag Manager — ativar antes do go-live -->
  <!-- <script>(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-XXXXXXX');</script> -->

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Viva Essência Saúde",
    "description": "Residencial sênior com médico responsável em Hortolândia-SP. Cuidados especializados, equipe 24h e estrutura acolhedora.",
    "url": "https://vivaessenciasaude.com.br",
    "telephone": "+55-19-97169-1912",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hortolândia",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "$$"
  }
  </script>
</head>
<body>
  <!-- CONTEÚDO NAS TASKS SEGUINTES -->
  <script src="assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 3: Verificar no browser**

Abrir `index.html` com Live Server. Deve carregar sem erros no console. Fontes Google devem aparecer na aba Network.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/style.css assets/js/main.js blog/.gitkeep
git commit -m "feat: scaffold projeto e head do index.html"
```

---

## Task 2: CSS — Reset, variáveis e tipografia base

**Files:**
- Modify: `assets/css/style.css`

- [ ] **Step 1: Escrever reset, variáveis e base tipográfica**

```css
/* =============================================
   RESET & BASE
   ============================================= */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: var(--color-bg);
  color: var(--color-text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

/* =============================================
   CSS CUSTOM PROPERTIES
   ============================================= */
:root {
  --color-primary: #4A6B8A;
  --color-primary-dark: #3a5570;
  --color-secondary: #7A9E7E;
  --color-bg: #F5F3EF;
  --color-bg-alt: #EDE9E2;
  --color-text: #2D2D2D;
  --color-text-light: #666666;
  --color-white: #FFFFFF;

  --font-title: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;

  --container-max: 1200px;
  --container-pad: 1.25rem;

  --radius: 8px;
  --radius-lg: 16px;
  --shadow: 0 2px 12px rgba(0,0,0,0.08);
  --shadow-lg: 0 8px 32px rgba(0,0,0,0.12);

  --transition: 0.25s ease;
}

/* =============================================
   UTILITÁRIOS
   ============================================= */
.container {
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-pad);
}

.section {
  padding: 4rem 0;
}

.section--alt {
  background-color: var(--color-bg-alt);
}

.section__header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section__title {
  font-family: var(--font-title);
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  color: var(--color-primary);
  margin-bottom: 0.75rem;
}

.section__subtitle {
  font-size: 1rem;
  color: var(--color-text-light);
  max-width: 560px;
  margin: 0 auto;
}

/* =============================================
   BOTÕES
   ============================================= */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  border-radius: var(--radius);
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: background-color var(--transition), transform var(--transition);
  white-space: nowrap;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn--primary {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.btn--primary:hover {
  background-color: var(--color-primary-dark);
}

.btn--outline {
  background-color: transparent;
  color: var(--color-white);
  border: 2px solid var(--color-white);
}

.btn--outline:hover {
  background-color: rgba(255,255,255,0.15);
}

.btn--whatsapp {
  background-color: #25D366;
  color: var(--color-white);
}

.btn--whatsapp:hover {
  background-color: #1ebe59;
}

/* =============================================
   FADE-IN ANIMATION (controlado pelo JS)
   ============================================= */
.fade-in {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* =============================================
   RESPONSIVIDADE BASE
   ============================================= */
@media (min-width: 768px) {
  .section {
    padding: 5rem 0;
  }
  :root {
    --container-pad: 2rem;
  }
}

@media (min-width: 1024px) {
  .section {
    padding: 6rem 0;
  }
}
```

- [ ] **Step 2: Verificar no browser**

Fundo deve ser `#F5F3EF`, texto `#2D2D2D`, sem barras de scroll horizontais.

- [ ] **Step 3: Commit**

```bash
git add assets/css/style.css
git commit -m "feat: CSS reset, variáveis e tipografia base"
```

---

## Task 3: Header — HTML + CSS

**Files:**
- Modify: `index.html` (dentro do `<body>`, antes do `<script>`)
- Modify: `assets/css/style.css`

- [ ] **Step 1: Adicionar HTML do header em index.html**

Inserir após `<body>` e antes de `<script src="assets/js/main.js">`:

```html
<!-- =============================================
     HEADER
     ============================================= -->
<header class="header" id="header">
  <div class="container header__inner">
    <a href="#" class="header__logo" aria-label="Viva Essência Saúde — Página inicial">
      <img src="assets/images/logo.png" alt="Viva Essência Saúde" class="header__logo-img"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='block'">
      <span class="header__logo-text" style="display:none">Viva Essência Saúde</span>
    </a>

    <nav class="header__nav" id="main-nav" aria-label="Menu principal">
      <ul class="nav__list">
        <li><a href="#sobre" class="nav__link">Sobre</a></li>
        <li><a href="#servicos" class="nav__link">Serviços</a></li>
        <li><a href="#estrutura" class="nav__link">Estrutura</a></li>
        <li><a href="#contato" class="nav__link">Contato</a></li>
      </ul>
    </nav>

    <a href="https://wa.me/5519971691912?text=Ol%C3%A1!+Gostaria+de+saber+mais+sobre+o+Residencial+Viva+Ess%C3%AAncia+Sa%C3%BAde."
       class="btn btn--whatsapp header__whatsapp"
       target="_blank" rel="noopener noreferrer"
       aria-label="Falar pelo WhatsApp">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      WhatsApp
    </a>

    <button class="hamburger" id="hamburger" aria-label="Abrir menu" aria-expanded="false" aria-controls="main-nav">
      <span class="hamburger__line"></span>
      <span class="hamburger__line"></span>
      <span class="hamburger__line"></span>
    </button>
  </div>
</header>
```

- [ ] **Step 2: Adicionar CSS do header em style.css**

```css
/* =============================================
   HEADER
   ============================================= */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-white);
  border-bottom: 1px solid transparent;
  transition: border-color var(--transition), box-shadow var(--transition);
}

.header.scrolled {
  border-color: rgba(0,0,0,0.08);
  box-shadow: var(--shadow);
}

.header__inner {
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 72px;
}

.header__logo {
  flex-shrink: 0;
}

.header__logo-img {
  height: 48px;
  width: auto;
}

.header__logo-text {
  font-family: var(--font-title);
  font-size: 1.25rem;
  color: var(--color-primary);
  font-weight: 700;
}

.header__nav {
  margin-left: auto;
}

.nav__list {
  display: flex;
  gap: 0.25rem;
}

.nav__link {
  padding: 0.5rem 0.75rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text);
  border-radius: var(--radius);
  transition: color var(--transition), background-color var(--transition);
}

.nav__link:hover {
  color: var(--color-primary);
  background-color: rgba(74,107,138,0.07);
}

.header__whatsapp {
  margin-left: 1rem;
  padding: 0.6rem 1.25rem;
  font-size: 0.9rem;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
}

.hamburger__line {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--color-text);
  border-radius: 2px;
  transition: transform var(--transition), opacity var(--transition);
}

.hamburger.open .hamburger__line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger.open .hamburger__line:nth-child(2) {
  opacity: 0;
}
.hamburger.open .hamburger__line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile nav */
@media (max-width: 767px) {
  .hamburger {
    display: flex;
  }

  .header__whatsapp {
    display: none;
  }

  .header__nav {
    display: none;
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    background-color: var(--color-white);
    border-bottom: 1px solid rgba(0,0,0,0.08);
    padding: 1rem 0;
    margin-left: 0;
  }

  .header__nav.open {
    display: block;
  }

  .nav__list {
    flex-direction: column;
    gap: 0;
  }

  .nav__link {
    display: block;
    padding: 0.85rem 1.5rem;
    border-radius: 0;
    font-size: 1rem;
  }
}

@media (min-width: 768px) {
  .hamburger {
    display: none;
  }
}
```

- [ ] **Step 3: Verificar no browser**

Header deve aparecer fixo no topo com logo, menu e botão WhatsApp verde. No mobile (< 768px), menu e botão WhatsApp devem estar ocultos, hamburger visível.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/style.css
git commit -m "feat: header sticky com menu e botão WhatsApp"
```

---

## Task 4: Hero — HTML + CSS

**Files:**
- Modify: `index.html`
- Modify: `assets/css/style.css`

- [ ] **Step 1: Adicionar HTML do Hero após o `</header>`**

```html
<!-- =============================================
     HERO
     ============================================= -->
<section class="hero" id="inicio" aria-label="Seção inicial">
  <!-- Substituir hero-bg.jpg por foto real do residencial -->
  <div class="hero__overlay"></div>
  <div class="container hero__content">
    <h1 class="hero__title">
      Seu familiar merece cuidado todos os dias,<br>
      <em>com carinho e segurança.</em>
    </h1>
    <p class="hero__subtitle">
      Residencial com médico responsável, equipe 24h e estrutura completa em Hortolândia.
      Cuidamos com dedicação de quem você mais ama.
    </p>
    <div class="hero__ctas">
      <a href="https://wa.me/5519971691912?text=Ol%C3%A1!+Gostaria+de+saber+mais+sobre+o+Residencial+Viva+Ess%C3%AAncia+Sa%C3%BAde."
         class="btn btn--whatsapp"
         target="_blank" rel="noopener noreferrer">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Falar pelo WhatsApp
      </a>
      <a href="#estrutura" class="btn btn--outline">
        Conheça nossa estrutura
      </a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Adicionar CSS do Hero**

```css
/* =============================================
   HERO
   ============================================= */
.hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  background-image: url('../images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-color: var(--color-primary); /* fallback sem imagem */
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(74, 107, 138, 0.82) 0%,
    rgba(122, 158, 126, 0.65) 100%
  );
}

.hero__content {
  position: relative;
  z-index: 1;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.hero__title {
  font-family: var(--font-title);
  font-size: clamp(2rem, 5vw, 3.25rem);
  color: var(--color-white);
  line-height: 1.25;
  margin-bottom: 1.25rem;
  max-width: 720px;
}

.hero__title em {
  font-style: italic;
  color: #d4e8d4;
}

.hero__subtitle {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: rgba(255,255,255,0.9);
  max-width: 580px;
  margin-bottom: 2.25rem;
  line-height: 1.7;
}

.hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

@media (min-width: 768px) {
  .hero {
    min-height: 85vh;
  }
}
```

- [ ] **Step 3: Verificar no browser**

Hero deve cobrir ~90% da viewport com overlay azul-verde, headline branca em Playfair Display, e dois botões (verde WhatsApp + outline). Sem imagem real, o fundo cai para `#4A6B8A` — OK por enquanto.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/style.css
git commit -m "feat: seção hero com headline, subtitle e CTAs"
```

---

## Task 5: Sobre — HTML + CSS

**Files:**
- Modify: `index.html`
- Modify: `assets/css/style.css`

- [ ] **Step 1: Adicionar HTML da seção Sobre após `</section>` do Hero**

```html
<!-- =============================================
     SOBRE
     ============================================= -->
<section class="section sobre" id="sobre" aria-labelledby="sobre-title">
  <div class="container sobre__inner">
    <div class="sobre__text fade-in">
      <h2 class="section__title" id="sobre-title">Sobre o Viva Essência Saúde</h2>
      <p class="sobre__lead">
        Somos um residencial sênior fundado e dirigido por médico, com o compromisso
        de oferecer cuidados completos, humanizados e seguros para seus familiares.
      </p>
      <p>
        Em Hortolândia, no coração do interior paulista, criamos um ambiente que vai
        além do atendimento clínico: é um lar, com atenção personalizada, rotinas
        estimulantes e a tranquilidade de uma equipe presente 24 horas por dia.
      </p>
      <p>
        Nosso médico proprietário acompanha de perto cada residente, garantindo que
        decisões clínicas sejam tomadas com agilidade, cuidado e profundo conhecimento
        da história de saúde de cada pessoa.
      </p>
      <a href="https://wa.me/5519971691912?text=Ol%C3%A1!+Gostaria+de+saber+mais+sobre+o+Residencial+Viva+Ess%C3%AAncia+Sa%C3%BAde."
         class="btn btn--primary" target="_blank" rel="noopener noreferrer" style="margin-top:1.5rem">
        Agende uma visita
      </a>
    </div>
    <div class="sobre__image fade-in">
      <!-- Substituir por foto do médico/equipe quando disponível -->
      <div class="sobre__image-placeholder" aria-hidden="true">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
        </svg>
        <p>Foto do médico / equipe</p>
      </div>
      <!-- <img src="assets/images/equipe.jpg" alt="Médico responsável e equipe do Viva Essência Saúde" loading="lazy"> -->
    </div>
  </div>
</section>
```

- [ ] **Step 2: Adicionar CSS da seção Sobre**

```css
/* =============================================
   SOBRE
   ============================================= */
.sobre__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

.sobre__text p {
  color: var(--color-text-light);
  margin-bottom: 1rem;
  line-height: 1.8;
}

.sobre__lead {
  font-size: 1.1rem;
  color: var(--color-text) !important;
  font-weight: 500;
}

.sobre__image img {
  width: 100%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
}

.sobre__image-placeholder {
  width: 100%;
  min-height: 320px;
  background-color: var(--color-bg-alt);
  border-radius: var(--radius-lg);
  border: 2px dashed rgba(74,107,138,0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: var(--color-text-light);
}

@media (min-width: 768px) {
  .sobre__inner {
    grid-template-columns: 1fr 1fr;
  }
}
```

- [ ] **Step 3: Verificar no browser**

Seção deve ter dois blocos lado a lado (desktop) ou empilhados (mobile), com texto à esquerda e placeholder de imagem à direita.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/style.css
git commit -m "feat: seção Sobre com texto e placeholder de imagem"
```

---

## Task 6: Serviços — HTML + CSS

**Files:**
- Modify: `index.html`
- Modify: `assets/css/style.css`

- [ ] **Step 1: Adicionar HTML da seção Serviços após `</section>` do Sobre**

```html
<!-- =============================================
     SERVIÇOS
     ============================================= -->
<section class="section section--alt servicos" id="servicos" aria-labelledby="servicos-title">
  <div class="container">
    <div class="section__header fade-in">
      <h2 class="section__title" id="servicos-title">Nossos Serviços</h2>
      <p class="section__subtitle">Cuidado completo, com atenção às necessidades de cada residente.</p>
    </div>
    <div class="servicos__grid">

      <article class="servico-card fade-in">
        <div class="servico-card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/>
          </svg>
        </div>
        <h3 class="servico-card__title">Cuidados com Alzheimer</h3>
        <p class="servico-card__desc">Acompanhamento especializado com rotinas estruturadas, segurança e carinho para pacientes com demência.</p>
      </article>

      <article class="servico-card fade-in">
        <div class="servico-card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
          </svg>
        </div>
        <h3 class="servico-card__title">Pacientes Acamados</h3>
        <p class="servico-card__desc">Cuidados de enfermagem com prevenção de escaras, higiene completa e conforto 24 horas por dia.</p>
      </article>

      <article class="servico-card fade-in">
        <div class="servico-card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
          </svg>
        </div>
        <h3 class="servico-card__title">Acompanhamento Médico</h3>
        <p class="servico-card__desc">Médico proprietário residente, com acompanhamento próximo e tomada de decisões clínicas ágeis.</p>
      </article>

      <article class="servico-card fade-in">
        <div class="servico-card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
          </svg>
        </div>
        <h3 class="servico-card__title">Fisioterapia</h3>
        <p class="servico-card__desc">Sessões regulares para manutenção da mobilidade, reabilitação e qualidade de vida dos residentes.</p>
      </article>

      <article class="servico-card fade-in">
        <div class="servico-card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0L3 18m0-13.5h18"/>
          </svg>
        </div>
        <h3 class="servico-card__title">Alimentação Supervisionada</h3>
        <p class="servico-card__desc">Cardápio balanceado, adaptado às necessidades nutricionais e preferências de cada residente.</p>
      </article>

      <article class="servico-card fade-in">
        <div class="servico-card__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>
          </svg>
        </div>
        <h3 class="servico-card__title">Atividades de Lazer</h3>
        <p class="servico-card__desc">Programação diária de atividades cognitivas, sociais e recreativas para estimular o bem-estar.</p>
      </article>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Adicionar CSS dos Serviços**

```css
/* =============================================
   SERVIÇOS
   ============================================= */
.servicos__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.servico-card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  padding: 2rem 1.75rem;
  box-shadow: var(--shadow);
  transition: transform var(--transition), box-shadow var(--transition);
}

.servico-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.servico-card__icon {
  width: 52px;
  height: 52px;
  background-color: rgba(74,107,138,0.1);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
}

.servico-card__icon svg {
  width: 28px;
  height: 28px;
  color: var(--color-primary);
}

.servico-card__title {
  font-family: var(--font-title);
  font-size: 1.2rem;
  color: var(--color-text);
  margin-bottom: 0.6rem;
}

.servico-card__desc {
  font-size: 0.95rem;
  color: var(--color-text-light);
  line-height: 1.7;
}

@media (min-width: 600px) {
  .servicos__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .servicos__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

- [ ] **Step 3: Verificar no browser**

6 cards em grid responsivo: 1 coluna (mobile) → 2 colunas (tablet) → 3 colunas (desktop). Hover deve elevar o card.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/style.css
git commit -m "feat: seção Serviços com grid de cards e ícones SVG"
```

---

## Task 7: Diferenciais — HTML + CSS

**Files:**
- Modify: `index.html`
- Modify: `assets/css/style.css`

- [ ] **Step 1: Adicionar HTML dos Diferenciais após `</section>` dos Serviços**

```html
<!-- =============================================
     DIFERENCIAIS
     ============================================= -->
<section class="section diferenciais" id="diferenciais" aria-labelledby="diferenciais-title">
  <div class="container">
    <div class="section__header fade-in">
      <h2 class="section__title" id="diferenciais-title">Por que escolher o Viva Essência?</h2>
      <p class="section__subtitle">Diferenciais que fazem a diferença no dia a dia do seu familiar.</p>
    </div>
    <div class="diferenciais__grid">

      <div class="diferencial fade-in">
        <div class="diferencial__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/>
          </svg>
        </div>
        <div>
          <h3 class="diferencial__title">Médico Residente</h3>
          <p class="diferencial__desc">Proprietário e médico no mesmo lugar — decisões clínicas ágeis, sem burocracia.</p>
        </div>
      </div>

      <div class="diferencial fade-in">
        <div class="diferencial__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <div>
          <h3 class="diferencial__title">Equipe 24 Horas</h3>
          <p class="diferencial__desc">Profissionais de enfermagem e cuidadores presentes a qualquer hora do dia ou da noite.</p>
        </div>
      </div>

      <div class="diferencial fade-in">
        <div class="diferencial__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
          </svg>
        </div>
        <div>
          <h3 class="diferencial__title">Ambiente Humanizado</h3>
          <p class="diferencial__desc">Espaços pensados para conforto e dignidade, com decoração acolhedora e áreas de convivência.</p>
        </div>
      </div>

      <div class="diferencial fade-in">
        <div class="diferencial__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
          </svg>
        </div>
        <div>
          <h3 class="diferencial__title">Localização Privilegiada</h3>
          <p class="diferencial__desc">Situado em Hortolândia-SP, com fácil acesso a partir de toda a região de Campinas.</p>
        </div>
      </div>

      <div class="diferencial fade-in">
        <div class="diferencial__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
          </svg>
        </div>
        <div>
          <h3 class="diferencial__title">Segurança e Monitoramento</h3>
          <p class="diferencial__desc">Câmeras de segurança, controle de acesso e protocolos rigorosos para a tranquilidade da família.</p>
        </div>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Adicionar CSS dos Diferenciais**

```css
/* =============================================
   DIFERENCIAIS
   ============================================= */
.diferenciais__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
}

.diferencial {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
}

.diferencial__icon {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  background-color: rgba(122,158,126,0.15);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
}

.diferencial__icon svg {
  width: 26px;
  height: 26px;
  color: var(--color-secondary);
}

.diferencial__title {
  font-family: var(--font-title);
  font-size: 1.1rem;
  color: var(--color-text);
  margin-bottom: 0.35rem;
}

.diferencial__desc {
  font-size: 0.95rem;
  color: var(--color-text-light);
  line-height: 1.7;
}

@media (min-width: 600px) {
  .diferenciais__grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .diferenciais__grid {
    grid-template-columns: repeat(3, 1fr);
    /* 5 items: 3+2, última linha centrada via justify-items */
  }
}
```

- [ ] **Step 3: Verificar no browser**

5 diferenciais com ícone verde-sálvia à esquerda e texto à direita, em grid responsivo.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/style.css
git commit -m "feat: seção Diferenciais com ícones e descrições"
```

---

## Task 8: Galeria / Estrutura — HTML + CSS

**Files:**
- Modify: `index.html`
- Modify: `assets/css/style.css`

- [ ] **Step 1: Adicionar HTML da Galeria após `</section>` dos Diferenciais**

```html
<!-- =============================================
     ESTRUTURA / GALERIA
     ============================================= -->
<section class="section section--alt galeria" id="estrutura" aria-labelledby="galeria-title">
  <div class="container">
    <div class="section__header fade-in">
      <h2 class="section__title" id="galeria-title">Nossa Estrutura</h2>
      <p class="section__subtitle">Conheça os espaços pensados para o conforto e bem-estar dos nossos residentes.</p>
    </div>
    <div class="galeria__grid" id="galeria-grid">
      <!-- Substituir src por fotos reais. data-caption é exibido no lightbox -->
      <figure class="galeria__item fade-in">
        <button class="galeria__btn" data-index="0" aria-label="Ver foto: Área de convivência">
          <img src="assets/images/galeria/foto-1.jpg"
               alt="Área de convivência do Viva Essência Saúde"
               loading="lazy"
               onerror="this.parentElement.parentElement.classList.add('galeria__item--placeholder')">
        </button>
        <figcaption class="galeria__caption">Área de convivência</figcaption>
      </figure>
      <figure class="galeria__item fade-in">
        <button class="galeria__btn" data-index="1" aria-label="Ver foto: Quartos individuais">
          <img src="assets/images/galeria/foto-2.jpg" alt="Quarto individual do Viva Essência Saúde" loading="lazy"
               onerror="this.parentElement.parentElement.classList.add('galeria__item--placeholder')">
        </button>
        <figcaption class="galeria__caption">Quartos individuais</figcaption>
      </figure>
      <figure class="galeria__item fade-in">
        <button class="galeria__btn" data-index="2" aria-label="Ver foto: Área externa e jardim">
          <img src="assets/images/galeria/foto-3.jpg" alt="Área externa e jardim do Viva Essência Saúde" loading="lazy"
               onerror="this.parentElement.parentElement.classList.add('galeria__item--placeholder')">
        </button>
        <figcaption class="galeria__caption">Área externa e jardim</figcaption>
      </figure>
      <figure class="galeria__item fade-in">
        <button class="galeria__btn" data-index="3" aria-label="Ver foto: Sala de refeições">
          <img src="assets/images/galeria/foto-4.jpg" alt="Sala de refeições do Viva Essência Saúde" loading="lazy"
               onerror="this.parentElement.parentElement.classList.add('galeria__item--placeholder')">
        </button>
        <figcaption class="galeria__caption">Sala de refeições</figcaption>
      </figure>
      <figure class="galeria__item fade-in">
        <button class="galeria__btn" data-index="4" aria-label="Ver foto: Espaço de fisioterapia">
          <img src="assets/images/galeria/foto-5.jpg" alt="Espaço de fisioterapia do Viva Essência Saúde" loading="lazy"
               onerror="this.parentElement.parentElement.classList.add('galeria__item--placeholder')">
        </button>
        <figcaption class="galeria__caption">Espaço de fisioterapia</figcaption>
      </figure>
      <figure class="galeria__item fade-in">
        <button class="galeria__btn" data-index="5" aria-label="Ver foto: Área de lazer">
          <img src="assets/images/galeria/foto-6.jpg" alt="Área de lazer do Viva Essência Saúde" loading="lazy"
               onerror="this.parentElement.parentElement.classList.add('galeria__item--placeholder')">
        </button>
        <figcaption class="galeria__caption">Área de lazer</figcaption>
      </figure>
    </div>
  </div>

  <!-- Lightbox (controlado pelo main.js) -->
  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Visualizador de imagem" hidden>
    <button class="lightbox__close" id="lightbox-close" aria-label="Fechar">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
    <button class="lightbox__nav lightbox__nav--prev" id="lightbox-prev" aria-label="Foto anterior">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
      </svg>
    </button>
    <div class="lightbox__content">
      <img class="lightbox__img" id="lightbox-img" src="" alt="">
      <p class="lightbox__caption" id="lightbox-caption"></p>
    </div>
    <button class="lightbox__nav lightbox__nav--next" id="lightbox-next" aria-label="Próxima foto">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
      </svg>
    </button>
  </div>
</section>
```

- [ ] **Step 2: Adicionar CSS da Galeria e Lightbox**

```css
/* =============================================
   GALERIA
   ============================================= */
.galeria__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.galeria__item {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  background-color: var(--color-bg-alt);
  aspect-ratio: 4/3;
}

.galeria__item--placeholder {
  border: 2px dashed rgba(74,107,138,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.galeria__btn {
  display: block;
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  overflow: hidden;
}

.galeria__btn img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.galeria__btn:hover img {
  transform: scale(1.05);
}

.galeria__caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0,0,0,0.6));
  color: var(--color-white);
  font-size: 0.85rem;
  padding: 1.5rem 0.75rem 0.5rem;
  text-align: center;
}

@media (min-width: 768px) {
  .galeria__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}

/* =============================================
   LIGHTBOX
   ============================================= */
.lightbox {
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.92);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.lightbox[hidden] {
  display: none;
}

.lightbox__content {
  max-width: 90vw;
  max-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.lightbox__img {
  max-width: 100%;
  max-height: 80vh;
  border-radius: var(--radius);
  object-fit: contain;
}

.lightbox__caption {
  color: rgba(255,255,255,0.8);
  font-size: 0.9rem;
  text-align: center;
}

.lightbox__close {
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 44px;
  height: 44px;
  background: rgba(255,255,255,0.1);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  transition: background-color var(--transition);
}

.lightbox__close:hover {
  background: rgba(255,255,255,0.2);
}

.lightbox__close svg {
  width: 22px;
  height: 22px;
}

.lightbox__nav {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  background: rgba(255,255,255,0.1);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  transition: background-color var(--transition);
}

.lightbox__nav:hover {
  background: rgba(255,255,255,0.25);
}

.lightbox__nav svg {
  width: 22px;
  height: 22px;
}

.lightbox__nav--prev { left: 1rem; }
.lightbox__nav--next { right: 1rem; }
```

- [ ] **Step 3: Verificar no browser**

Grid de 6 fotos (2 colunas no mobile, 3 no desktop). Sem fotos reais, os cards ficam com cor de fundo `#EDE9E2`. Lightbox HTML deve estar no DOM mas invisível (`hidden`).

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/style.css
git commit -m "feat: seção Galeria com lightbox HTML e CSS"
```

---

## Task 9: Depoimentos — HTML + CSS

**Files:**
- Modify: `index.html`
- Modify: `assets/css/style.css`

- [ ] **Step 1: Adicionar HTML dos Depoimentos após `</section>` da Galeria**

```html
<!-- =============================================
     DEPOIMENTOS
     ============================================= -->
<section class="section depoimentos" id="depoimentos" aria-labelledby="depoimentos-title">
  <div class="container">
    <div class="section__header fade-in">
      <h2 class="section__title" id="depoimentos-title">O que as famílias dizem</h2>
      <p class="section__subtitle">A confiança das famílias é nossa maior realização.</p>
    </div>
    <div class="depoimentos__grid">

      <blockquote class="depoimento fade-in">
        <div class="depoimento__stars" aria-label="5 estrelas">★★★★★</div>
        <p class="depoimento__texto">
          "Desde que minha mãe foi morar no Viva Essência, nossa família dorme muito mais tranquila.
          O atendimento é atencioso, a estrutura é linda e o médico está sempre presente quando precisamos."
        </p>
        <footer class="depoimento__autor">
          <strong>Carla M.</strong>
          <span>Filha de residente</span>
        </footer>
      </blockquote>

      <blockquote class="depoimento fade-in">
        <div class="depoimento__stars" aria-label="5 estrelas">★★★★★</div>
        <p class="depoimento__texto">
          "Visitei vários residenciais antes de escolher o Viva Essência. A diferença está nos detalhes:
          a limpeza, o carinho dos cuidadores e a presença constante do médico nos deram total segurança."
        </p>
        <footer class="depoimento__autor">
          <strong>Roberto A.</strong>
          <span>Filho de residente</span>
        </footer>
      </blockquote>

      <blockquote class="depoimento fade-in">
        <div class="depoimento__stars" aria-label="5 estrelas">★★★★★</div>
        <p class="depoimento__texto">
          "Meu pai tem Alzheimer e eu estava com muito medo de colocá-lo em uma casa de repouso.
          No Viva Essência encontramos não só cuidado médico, mas também carinho e dignidade."
        </p>
        <footer class="depoimento__autor">
          <strong>Fernanda L.</strong>
          <span>Filha de residente</span>
        </footer>
      </blockquote>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Adicionar CSS dos Depoimentos**

```css
/* =============================================
   DEPOIMENTOS
   ============================================= */
.depoimentos__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.depoimento {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow);
  border-left: 4px solid var(--color-secondary);
}

.depoimento__stars {
  color: #F5A623;
  font-size: 1.1rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.depoimento__texto {
  font-size: 0.97rem;
  color: var(--color-text-light);
  line-height: 1.8;
  font-style: italic;
  margin-bottom: 1.25rem;
}

.depoimento__autor {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.depoimento__autor strong {
  font-size: 0.95rem;
  color: var(--color-text);
}

.depoimento__autor span {
  font-size: 0.85rem;
  color: var(--color-text-light);
}

@media (min-width: 768px) {
  .depoimentos__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

- [ ] **Step 3: Verificar no browser**

3 cards de depoimento com borda esquerda verde-sálvia, estrelas douradas, texto em itálico e autor.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/style.css
git commit -m "feat: seção Depoimentos com 3 cards"
```

---

## Task 10: Localização + Formulário de Contato — HTML + CSS

**Files:**
- Modify: `index.html`
- Modify: `assets/css/style.css`

- [ ] **Step 1: Adicionar HTML da Localização e Contato após `</section>` dos Depoimentos**

```html
<!-- =============================================
     LOCALIZAÇÃO / CONTATO
     ============================================= -->
<section class="section section--alt localizacao" id="contato" aria-labelledby="contato-title">
  <div class="container localizacao__inner">

    <div class="localizacao__info fade-in">
      <h2 class="section__title" id="contato-title" style="text-align:left">Venha nos conhecer</h2>
      <p style="color:var(--color-text-light);margin-bottom:2rem">
        Agende uma visita sem compromisso e conheça pessoalmente nossa estrutura e equipe.
      </p>

      <ul class="localizacao__lista">
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
          </svg>
          <div>
            <strong>Endereço</strong>
            <!-- Atualizar com endereço completo real -->
            <span>Rua [Endereço], nº [Número] — Hortolândia-SP</span>
          </div>
        </li>
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
          </svg>
          <div>
            <strong>Telefone / WhatsApp</strong>
            <a href="tel:+5519971691912">(19) 97169-1912</a>
          </div>
        </li>
        <li>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <div>
            <strong>Horário de Visitas</strong>
            <span>Terça a Domingo — 9h às 17h</span>
          </div>
        </li>
      </ul>

      <!-- Formulário de contato → WhatsApp -->
      <form class="contato-form" id="contato-form" novalidate aria-label="Formulário de contato">
        <h3 class="contato-form__title">Entre em contato</h3>
        <div class="contato-form__field">
          <label for="campo-nome">Nome *</label>
          <input type="text" id="campo-nome" name="nome" placeholder="Seu nome completo" required autocomplete="name">
        </div>
        <div class="contato-form__field">
          <label for="campo-tel">Telefone *</label>
          <input type="tel" id="campo-tel" name="telefone" placeholder="(19) 99999-9999" required autocomplete="tel">
        </div>
        <div class="contato-form__field">
          <label for="campo-msg">Mensagem (opcional)</label>
          <textarea id="campo-msg" name="mensagem" rows="3" placeholder="Conte-nos um pouco sobre o seu familiar..."></textarea>
        </div>
        <button type="submit" class="btn btn--whatsapp" style="width:100%;justify-content:center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Enviar pelo WhatsApp
        </button>
      </form>
    </div>

    <div class="localizacao__mapa fade-in">
      <!-- Substituir src pelo embed real do Google Maps -->
      <iframe
        class="localizacao__iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117568.5!2d-47.2!3d-22.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDUxJzAwLjAiUyA0N8KwMTInMDAuMCJX!5e0!3m2!1spt!2sbr!4v0000000000000"
        width="600"
        height="100%"
        style="border:0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Localização do Viva Essência Saúde em Hortolândia-SP"
        aria-label="Mapa do Google Maps com a localização do residencial">
      </iframe>
    </div>

  </div>
</section>
```

- [ ] **Step 2: Adicionar CSS da Localização e Formulário**

```css
/* =============================================
   LOCALIZAÇÃO / CONTATO
   ============================================= */
.localizacao__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
}

.localizacao__lista {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.localizacao__lista li {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.localizacao__lista svg {
  width: 24px;
  height: 24px;
  color: var(--color-primary);
  flex-shrink: 0;
  margin-top: 2px;
}

.localizacao__lista div {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.localizacao__lista strong {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
}

.localizacao__lista span,
.localizacao__lista a {
  font-size: 0.95rem;
  color: var(--color-text-light);
}

.localizacao__lista a:hover {
  color: var(--color-primary);
}

/* Formulário */
.contato-form {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow);
}

.contato-form__title {
  font-family: var(--font-title);
  font-size: 1.3rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
}

.contato-form__field {
  margin-bottom: 1.25rem;
}

.contato-form__field label {
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: 0.4rem;
}

.contato-form__field input,
.contato-form__field textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1.5px solid rgba(0,0,0,0.15);
  border-radius: var(--radius);
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-text);
  background-color: var(--color-bg);
  transition: border-color var(--transition);
  resize: vertical;
}

.contato-form__field input:focus,
.contato-form__field textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.contato-form__field input.error,
.contato-form__field textarea.error {
  border-color: #e53e3e;
}

/* Mapa */
.localizacao__mapa {
  min-height: 400px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
}

.localizacao__iframe {
  width: 100%;
  height: 100%;
  min-height: 400px;
}

@media (min-width: 1024px) {
  .localizacao__inner {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }
}
```

- [ ] **Step 3: Verificar no browser**

Seção deve mostrar lista de info (endereço, tel, horário), formulário com 3 campos e botão verde, e o iframe do Maps. No mobile ficam empilhados.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/style.css
git commit -m "feat: seção Localização com formulário e mapa"
```

---

## Task 11: Footer — HTML + CSS

**Files:**
- Modify: `index.html`
- Modify: `assets/css/style.css`

- [ ] **Step 1: Adicionar HTML do Footer após `</section>` da Localização, antes de `<script>`**

```html
<!-- =============================================
     FOOTER
     ============================================= -->
<footer class="footer" role="contentinfo">
  <div class="container footer__inner">

    <div class="footer__brand">
      <a href="#" class="footer__logo" aria-label="Viva Essência Saúde — topo da página">
        <img src="assets/images/logo.png" alt="Viva Essência Saúde"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='block'">
        <span style="display:none" class="footer__logo-text">Viva Essência Saúde</span>
      </a>
      <p class="footer__tagline">Cuidado com carinho, segurança com presença.</p>
      <p class="footer__registro">Estabelecimento registrado no CRM/ANVISA</p>
    </div>

    <div class="footer__links">
      <h4 class="footer__heading">Links rápidos</h4>
      <ul>
        <li><a href="#sobre">Sobre nós</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#estrutura">Estrutura</a></li>
        <li><a href="#depoimentos">Depoimentos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </div>

    <div class="footer__contato">
      <h4 class="footer__heading">Contato</h4>
      <ul>
        <li>
          <a href="tel:+5519971691912">(19) 97169-1912</a>
        </li>
        <li>
          <a href="https://wa.me/5519971691912?text=Ol%C3%A1!+Gostaria+de+saber+mais+sobre+o+Residencial+Viva+Ess%C3%AAncia+Sa%C3%BAde."
             target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </li>
        <li>Hortolândia-SP</li>
      </ul>
      <a href="#contato" class="btn btn--primary footer__cta">
        Agende uma visita
      </a>
    </div>

  </div>
  <div class="footer__bottom">
    <div class="container">
      <p>&copy; <span id="footer-year"></span> Viva Essência Saúde. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>
```

- [ ] **Step 2: Adicionar CSS do Footer**

```css
/* =============================================
   FOOTER
   ============================================= */
.footer {
  background-color: #1e2d3d;
  color: rgba(255,255,255,0.75);
}

.footer__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  padding-top: 3.5rem;
  padding-bottom: 3rem;
}

.footer__logo img {
  height: 48px;
  width: auto;
  margin-bottom: 1rem;
  filter: brightness(0) invert(1);
}

.footer__logo-text {
  font-family: var(--font-title);
  font-size: 1.25rem;
  color: var(--color-white);
  font-weight: 700;
  display: block;
  margin-bottom: 1rem;
}

.footer__tagline {
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 0.5rem;
}

.footer__registro {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.45);
}

.footer__heading {
  font-family: var(--font-title);
  font-size: 1rem;
  color: var(--color-white);
  margin-bottom: 1rem;
}

.footer__links ul,
.footer__contato ul {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer__links a,
.footer__contato a {
  font-size: 0.95rem;
  transition: color var(--transition);
}

.footer__links a:hover,
.footer__contato a:hover {
  color: var(--color-white);
}

.footer__cta {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  padding: 0.7rem 1.5rem;
}

.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 1.25rem 0;
}

.footer__bottom p {
  font-size: 0.85rem;
  text-align: center;
  color: rgba(255,255,255,0.4);
}

@media (min-width: 768px) {
  .footer__inner {
    grid-template-columns: 2fr 1fr 1fr;
  }
}
```

- [ ] **Step 3: Verificar no browser**

Footer escuro com 3 colunas (desktop) / empilhado (mobile). Logo com filtro branco.

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/style.css
git commit -m "feat: footer com logo, links, contato e CTA"
```

---

## Task 12: JavaScript — Hamburger, sticky header, scroll suave, ano do footer

**Files:**
- Modify: `assets/js/main.js`

- [ ] **Step 1: Escrever o JS base em main.js**

```js
/* =============================================
   VIVA ESSÊNCIA SAÚDE — main.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------
     ANO DINÂMICO NO FOOTER
  -------------------------------------------------- */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* --------------------------------------------------
     STICKY HEADER — adiciona classe .scrolled ao rolar
  -------------------------------------------------- */
  const header = document.getElementById('header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* --------------------------------------------------
     HAMBURGER MENU
  -------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('main-nav');

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mainNav.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Fechar menu ao clicar em um link
    mainNav.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mainNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --------------------------------------------------
     SCROLL SUAVE (fallback para browsers sem suporte nativo)
  -------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerH = header ? header.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH - 8;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
```

- [ ] **Step 2: Verificar no browser**

- Ano correto no footer
- Header ganha sombra ao rolar
- No mobile: hamburger abre/fecha o menu
- Links do menu fecham o menu mobile e rolam suavemente

- [ ] **Step 3: Commit**

```bash
git add assets/js/main.js
git commit -m "feat: JS hamburger, sticky header, scroll suave e ano footer"
```

---

## Task 13: JavaScript — Floating WhatsApp Button

**Files:**
- Modify: `index.html` (inserir HTML do botão flutuante antes de `</body>`)
- Modify: `assets/css/style.css`
- Modify: `assets/js/main.js`

- [ ] **Step 1: Adicionar HTML do botão flutuante no final do `<body>`, antes do `<script>`**

```html
<!-- Floating WhatsApp Button -->
<a href="https://wa.me/5519971691912?text=Ol%C3%A1!+Gostaria+de+saber+mais+sobre+o+Residencial+Viva+Ess%C3%AAncia+Sa%C3%BAde."
   class="whatsapp-float"
   id="whatsapp-float"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Falar pelo WhatsApp agora">
  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>
```

- [ ] **Step 2: Adicionar CSS do botão flutuante em style.css**

```css
/* =============================================
   FLOATING WHATSAPP BUTTON
   ============================================= */
.whatsapp-float {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 200;
  width: 60px;
  height: 60px;
  background-color: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.45);
  transition: transform var(--transition), box-shadow var(--transition), opacity var(--transition);
  opacity: 0;
  pointer-events: none;
}

.whatsapp-float.visible {
  opacity: 1;
  pointer-events: auto;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 24px rgba(37, 211, 102, 0.6);
}
```

- [ ] **Step 3: Adicionar JS para mostrar o botão após scroll em main.js**

Dentro do `DOMContentLoaded`, após o bloco do hamburger:

```js
  /* --------------------------------------------------
     FLOATING WHATSAPP — aparece após 300px de scroll
  -------------------------------------------------- */
  const waFloat = document.getElementById('whatsapp-float');
  if (waFloat) {
    const toggleWaFloat = () => {
      waFloat.classList.toggle('visible', window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleWaFloat, { passive: true });
    toggleWaFloat();
  }
```

- [ ] **Step 4: Verificar no browser**

Ao rolar 300px, botão verde aparece no canto inferior direito. Clique deve abrir WhatsApp com mensagem pré-preenchida. Hover escala o botão.

- [ ] **Step 5: Commit**

```bash
git add index.html assets/css/style.css assets/js/main.js
git commit -m "feat: floating WhatsApp button com aparição por scroll"
```

---

## Task 14: JavaScript — Formulário → WhatsApp redirect

**Files:**
- Modify: `assets/js/main.js`

- [ ] **Step 1: Adicionar handler do formulário em main.js**

Dentro do `DOMContentLoaded`, após o bloco do floating WA:

```js
  /* --------------------------------------------------
     FORMULÁRIO → WHATSAPP REDIRECT
  -------------------------------------------------- */
  const form = document.getElementById('contato-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const nome = form.querySelector('#campo-nome');
      const tel = form.querySelector('#campo-tel');
      const msg = form.querySelector('#campo-msg');

      // Validação simples — marcar campos obrigatórios vazios
      let valid = true;
      [nome, tel].forEach(field => {
        if (!field.value.trim()) {
          field.classList.add('error');
          valid = false;
        } else {
          field.classList.remove('error');
        }
      });

      if (!valid) return;

      const nomeVal = nome.value.trim();
      const telVal = tel.value.trim();
      const msgVal = msg.value.trim();

      let texto = `Olá! Me chamo *${nomeVal}*, meu telefone é *${telVal}*.`;
      if (msgVal) texto += ` Mensagem: ${msgVal}`;

      const url = `https://wa.me/5519971691912?text=${encodeURIComponent(texto)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });

    // Remover classe .error ao digitar
    form.querySelectorAll('input, textarea').forEach(field => {
      field.addEventListener('input', () => field.classList.remove('error'));
    });
  }
```

- [ ] **Step 2: Verificar no browser**

1. Tentar submeter com campos vazios → campos ficam com borda vermelha, não abre WA
2. Preencher Nome e Telefone → clique abre WA com texto: `Olá! Me chamo *[Nome]*, meu telefone é *[Tel]*.`
3. Preencher também a Mensagem → texto inclui a mensagem ao final

- [ ] **Step 3: Commit**

```bash
git add assets/js/main.js
git commit -m "feat: formulário com validação e redirect para WhatsApp"
```

---

## Task 15: JavaScript — Lightbox da galeria

**Files:**
- Modify: `assets/js/main.js`

- [ ] **Step 1: Adicionar lightbox em main.js**

Dentro do `DOMContentLoaded`, após o bloco do formulário:

```js
  /* --------------------------------------------------
     LIGHTBOX DA GALERIA
  -------------------------------------------------- */
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');
  const lbClose = document.getElementById('lightbox-close');
  const lbPrev = document.getElementById('lightbox-prev');
  const lbNext = document.getElementById('lightbox-next');
  const galeriaGrid = document.getElementById('galeria-grid');

  if (lightbox && galeriaGrid) {
    // Coletar todas as imagens da galeria em ordem
    const items = Array.from(galeriaGrid.querySelectorAll('.galeria__item'));
    let currentIndex = 0;

    const getImgData = (index) => {
      const item = items[index];
      const img = item.querySelector('img');
      const caption = item.querySelector('.galeria__caption');
      return {
        src: img ? img.src : '',
        alt: img ? img.alt : '',
        caption: caption ? caption.textContent : ''
      };
    };

    const openLightbox = (index) => {
      currentIndex = index;
      const data = getImgData(index);
      lbImg.src = data.src;
      lbImg.alt = data.alt;
      lbCaption.textContent = data.caption;
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      lbClose.focus();
    };

    const closeLightbox = () => {
      lightbox.hidden = true;
      document.body.style.overflow = '';
      // Devolver foco ao botão que abriu o lightbox
      const activeBtn = galeriaGrid.querySelector(`[data-index="${currentIndex}"]`);
      if (activeBtn) activeBtn.focus();
    };

    const navigate = (direction) => {
      currentIndex = (currentIndex + direction + items.length) % items.length;
      const data = getImgData(currentIndex);
      lbImg.src = data.src;
      lbImg.alt = data.alt;
      lbCaption.textContent = data.caption;
    };

    // Abrir ao clicar nos botões da galeria
    galeriaGrid.addEventListener('click', e => {
      const btn = e.target.closest('.galeria__btn');
      if (btn) openLightbox(Number(btn.dataset.index));
    });

    lbClose.addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click', () => navigate(-1));
    lbNext.addEventListener('click', () => navigate(1));

    // Fechar ao clicar fora do conteúdo
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });

    // Teclado: ESC fecha, setas navegam
    document.addEventListener('keydown', e => {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });
  }
```

- [ ] **Step 2: Verificar no browser**

Clicar em qualquer item da galeria deve abrir o lightbox (sem fotos reais, mostra imagem quebrada — OK). ESC e clique fora fecham. Setas ou botões navegam entre fotos. Scroll do body fica travado enquanto lightbox está aberto.

- [ ] **Step 3: Commit**

```bash
git add assets/js/main.js
git commit -m "feat: lightbox da galeria com navegação e acessibilidade"
```

---

## Task 16: JavaScript — Intersection Observer (fade-in das seções)

**Files:**
- Modify: `assets/js/main.js`

- [ ] **Step 1: Adicionar Intersection Observer em main.js**

Dentro do `DOMContentLoaded`, após o lightbox:

```js
  /* --------------------------------------------------
     FADE-IN AO ENTRAR NA VIEWPORT
  -------------------------------------------------- */
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // anima só uma vez
        }
      });
    }, { threshold: 0.12 });

    fadeEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: mostrar tudo se IntersectionObserver não estiver disponível
    fadeEls.forEach(el => el.classList.add('visible'));
  }
```

- [ ] **Step 2: Verificar no browser**

Rolar a página devagar — cada seção e card deve aparecer com fade-in suave ao entrar na viewport. Abrir DevTools → Elements para confirmar que a classe `.visible` é adicionada.

- [ ] **Step 3: Commit**

```bash
git add assets/js/main.js
git commit -m "feat: fade-in das seções via Intersection Observer"
```

---

## Task 17: Revisão final e memória

**Files:**
- Modify: `C:\Users\muril\.claude\projects\c--ASILO-SITE\memory\` (salvar memória do projeto)

- [ ] **Step 1: Verificar a landing page completa no browser**

Cheklist de qualidade:

- [ ] Todas as 9 seções aparecem em ordem (Header → Hero → Sobre → Serviços → Diferenciais → Galeria → Depoimentos → Localização → Footer)
- [ ] Mobile (< 768px): hamburger funciona, layout empilhado, botão WA fixo visível
- [ ] Tablet (768px): grid 2 colunas nos cards, layout transição
- [ ] Desktop (≥ 1024px): grid 3 colunas, layout side-by-side nas seções
- [ ] Formulário → WA redirect funciona com Nome + Telefone obrigatórios
- [ ] Floating WA aparece após 300px de scroll
- [ ] Lightbox abre (com imagens placeholder ou reais), navega, fecha
- [ ] Fade-in suave ao scrollar
- [ ] Sem erros no console do browser
- [ ] Fontes Playfair Display e Inter carregam (verificar na aba Network)

- [ ] **Step 2: Commit final**

```bash
git add -A
git commit -m "feat: landing page Viva Essência Saúde completa e funcional"
```

- [ ] **Step 3: Substituições pendentes antes do go-live (não bloqueiam o desenvolvimento)**

Documentar no código os itens que precisam de atualização pelo cliente:

| Placeholder | Localização | O que substituir |
|---|---|---|
| `assets/images/logo.png` | Header, Footer | Logo real PNG transparente |
| `assets/images/hero-bg.jpg` | Hero | Foto acolhedora do residencial |
| `assets/images/equipe.jpg` | Seção Sobre | Foto do médico/equipe |
| `assets/images/galeria/foto-[1-6].jpg` | Galeria | 6 fotos reais do espaço |
| `Rua [Endereço], nº [Número]` | Localização | Endereço completo |
| Embed Google Maps | Localização | URL real do Maps com endereço |
| `G-XXXXXXXXXX` | Head (comentado) | ID real do GA4 |
| `PIXEL_ID` | Head (comentado) | ID real do Meta Pixel |
| `GTM-XXXXXXX` | Head (comentado) | ID real do GTM |

---

*Plano gerado por superpowers:writing-plans em 2026-04-09*
