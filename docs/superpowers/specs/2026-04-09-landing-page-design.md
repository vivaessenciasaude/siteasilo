# Viva Essência Saúde — Landing Page Design Spec

**Data:** 2026-04-09  
**Projeto:** Landing page de alta conversão para Residencial Sênior em Hortolândia-SP  
**Objetivo:** Gerar leads qualificados via formulário → WhatsApp e botão flutuante de WhatsApp

---

## Stack

- HTML5 semântico (sem frameworks)
- CSS3 com custom properties (mobile-first, sem Bootstrap)
- Vanilla JavaScript
- Google Fonts: Playfair Display (títulos) + Inter (corpo)
- Roda com Live Server, sem build step

---

## Arquivos Entregues

```
viva-essencia/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/          ← placeholders comentados no HTML
├── blog/                ← reservado, vazio
└── docs/superpowers/specs/  ← este arquivo
```

---

## Identidade Visual

| Token              | Valor     |
|--------------------|-----------|
| `--color-primary`  | `#4A6B8A` |
| `--color-secondary`| `#7A9E7E` |
| `--color-bg`       | `#F5F3EF` |
| `--color-text`     | `#2D2D2D` |
| Font títulos       | Playfair Display |
| Font corpo         | Inter     |

---

## Seções do `index.html` (em ordem)

1. **Header** — logo esquerda, menu (Sobre | Serviços | Estrutura | Contato), botão WhatsApp direita. Sticky com sombra ao rolar.
2. **Hero** — headline emocional, subheadline de diferencial médico, 2 CTAs (WhatsApp principal + âncora secundária). Fundo hero-bg.jpg com overlay.
3. **Sobre** — apresentação humana, destaque médico proprietário.
4. **Serviços** — grid de cards com ícone SVG inline + título + descrição. 6 serviços de exemplo.
5. **Diferenciais** — ícone + texto curto. 5 diferenciais.
6. **Estrutura / Galeria** — grid CSS de fotos, lightbox JS ao clicar.
7. **Depoimentos** — 3 cards com citação, nome e parentesco.
8. **Localização** — endereço, embed Google Maps placeholder, telefone/WhatsApp clicáveis, horário.
9. **Footer** — logo, links rápidos, contatos, CTA "Agende uma visita", aviso CRM/ANVISA.

---

## JavaScript (main.js)

### 1. Floating WhatsApp Button
- Fixo canto inferior direito, z-index alto
- Link: `https://wa.me/5519971691912?text=Olá!+Gostaria+de+saber+mais+sobre+o+Residencial+Viva+Essência+Saúde.`
- Aparece após 2s de scroll ou imediatamente no mobile

### 2. Formulário → WhatsApp Redirect
- Campos: Nome (obrigatório), Telefone (obrigatório), Mensagem (opcional)
- Submit: monta texto com os dados e abre `wa.me/5519971691912?text=...` em nova aba
- Sem backend, sem email

### 3. Lightbox da Galeria
- Clique em foto abre overlay fullscreen
- Navegação com setas (anterior/próximo)
- Fechar: clique fora, botão X ou tecla ESC

### Bônus
- Scroll suave nos links do menu
- Hamburger menu no mobile
- Fade-in das seções ao entrar na viewport (Intersection Observer)

---

## SEO / `<head>`

- `<title>`: Viva Essência Saúde | Residencial Sênior em Hortolândia-SP
- `<meta name="description">`: Residencial sênior com médico responsável em Hortolândia. Cuidados especializados, equipe 24h e estrutura acolhedora. Agende uma visita.
- Schema JSON-LD: `LocalBusiness`
- Tags comentadas reservadas: GA4, Meta Pixel, GTM

---

## WhatsApp

- Número: `5519971691912`
- Mensagem padrão: `Olá! Gostaria de saber mais sobre o Residencial Viva Essência Saúde.`

---

## Responsividade

- Breakpoints: `768px` (tablet) e `1024px` (desktop)
- Cards de serviços: 1 coluna → 2 colunas → 3 colunas
- Header: hamburger no mobile
- Hero: texto centralizado no mobile, alinhado à esquerda no desktop
