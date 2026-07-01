# Execução SEO / GEO — Leva 1 (fundação técnica) — 2026-07-01

Deriva da auditoria estratégica de SEO/GEO/tráfego. Esta leva cobre só o que
**não depende de painéis externos** (Google Ads, Meta, GBP). Nada foi commitado —
mudanças ficam no working tree para revisão.

## O que foi implementado

### 1. Schema LocalBusiness corrigido e enriquecido (`index.html`)
- Removida a propriedade **inválida** `postalAddressLocality` (gerava erro).
- Bairro movido para `streetAddress`; `addressLocality` = Hortolândia.
- Adicionados: `@id`, `alternateName`, `image`, `logo`, `geo` (lat/long),
  `hasMap`, `sameAs` (link do GBP), `areaServed` (Hortolândia + região de
  Campinas), `openingHoursSpecification`, `currenciesAccepted`.
- **Não** foi incluído `aggregateRating` — exige avaliações verificáveis; o
  caminho certo é puxar das reviews reais do GBP depois.

### 2. Seção FAQ visível + `FAQPage` schema (maior ganho de GEO)
- Acordeão nativo `<details>` (sem JS, acessível, conteúdo no DOM = rastreável
  por busca e por IA generativa).
- 6 perguntas da jornada de decisão: o que é ILPI, tem médico, atende
  Alzheimer/acamados, quais cidades, como agendar, como funciona o valor.
- `FAQPage` JSON-LD espelhando exatamente o conteúdo visível.
- Link "Dúvidas frequentes" adicionado no footer.
- Estilos em nova seção no fim do `style.css` (usa tokens existentes; não toca
  no bloco `:root` da leva UI/UX em andamento).

### 3. Assets quebrados (404) consertados
- Criado `assets/images/favicon.svg` (marca — folha sálvia sobre azul-ardósia).
- `og:image` / `twitter:image` reapontados para `hero-bg.webp` (foto real que
  existe → preview de compartilhamento no WhatsApp/Facebook para de vir vazio).
- Removida a referência quebrada ao `apple-touch-icon.png` inexistente.

### 4. Mapa real (`index.html`)
- Embed genérico (apontava para lugar nenhum) trocado por consulta ao endereço
  real. Para o pin exato do perfil: GBP > Compartilhar > Incorporar mapa.

### 5. Performance
- `preload` + `fetchpriority="high"` na imagem do hero (LCP).
- Fontes do Google carregadas de forma não-bloqueante (`media="print"
  onload="this.media='all'"`) com fallback `<noscript>`.

### 6. Sitemap
- `lastmod` atualizado para 2026-07-01.

## Dados usados / a confirmar
- **GBP:** KG MID `/g/11nc16xkpx`, link `https://share.google/Js7ECI3415SMEjnuZ`.
- **Coordenadas:** -22.8696 / -47.2213 (geocodificação nível de rua — refinar
  com o pin exato do GBP quando possível).
- ⚠️ **Bairro/CEP:** OSM registra a rua como Vila São Francisco / Remanso
  Campineiro, CEP 13184-213, mas o site usa "Parque Ortolândia". **Confirmar
  qual está no GBP** e alinhar site + schema (consistência de NAP é crítica
  para SEO local).

## Leva 1b — Seção de autoridade do médico (E-E-A-T) — ADICIONADA
- Credencial na seção Sobre: **Dr. George J. Burlandy — CRM/SP 80709**, médico
  responsável e proprietário (avatar com iniciais + linha de função + descrição).
- Footer: linha de registro agora nomeia o médico responsável + CRM (concreto e
  verificável, substituindo o vago "registrado no CRM/ANVISA").
- Schema: `founder` e `employee` (Person) adicionados ao LocalBusiness, com CRM
  em `identifier` (propertyID `CRM/SP`).
- ⚠️ **Estado do CRM assumido como SP** (local de atuação). Confirmar.
- Melhorias futuras opcionais: foto real do médico, especialidade
  (`medicalSpecialty`), anos de experiência.

## Deferido (aguardando dado/decisão do cliente)
- **Labels de conversão do Google Ads** — cliente ainda não criou; código já
  degrada com segurança (`'PENDENTE'` em `tracking.js`).
- **Meta Pixel** — sem Business Manager/ID ainda.
- **Backend do formulário** — decisão foi manter só-WhatsApp por ora.
- **apple-touch-icon.png (180×180)** e **og-image.jpg (1200×630)** dedicados —
  polimento (sem ferramenta de imagem no ambiente atual).

## Próximos passos sugeridos
1. Testar os dois schemas no Rich Results Test do Google.
2. Confirmar bairro/CEP no GBP e alinhar NAP.
3. Cliente cria as 2 conversões no Ads → colar labels no `tracking.js`.
4. Passar nome + CRM do médico → montar seção de autoridade + `Physician`/`sameAs`.
5. Iniciar hub de conteúdo/blog (jornada de decisão) — reabrir `/blog/` no robots.
