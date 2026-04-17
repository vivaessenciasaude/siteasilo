# Spec: Tracking

Contrato de rastreamento de conversões. Esta é a fonte da verdade —
quando algo mudar no painel (Ads/Meta/Formspree), atualizar aqui
**e** aplicar no código nos pontos indicados.

## IDs ativos

| Plataforma | ID | Onde está no código |
|---|---|---|
| Google Analytics 4 | `G-LS74GEWELB` | [index.html](../index.html) — bloco gtag no `<head>` |
| Google Ads | `AW-18082316445` | [index.html](../index.html) — bloco gtag no `<head>` + [assets/js/tracking.js](../assets/js/tracking.js) `CONFIG.ADS_CONVERSION_ID` |
| Meta Pixel | — | pendente (ver abaixo) |

## Eventos implementados

| Evento | Quando dispara | Gatilho no código |
|---|---|---|
| `generate_lead` (GA4) | Submit do formulário de contato | [assets/js/main.js](../assets/js/main.js) → chama `trackFormSubmit()` |
| `click` (GA4) com `event_label: 'whatsapp'` | Clique em qualquer CTA WhatsApp | `onclick="trackWhatsAppClick()"` em todos os botões WhatsApp do [index.html](../index.html) |
| `conversion` (Ads) para form | Submit do formulário — **só se label ≠ PENDENTE** | `trackFormSubmit()` em [tracking.js](../assets/js/tracking.js) |
| `conversion` (Ads) para WhatsApp | Clique WhatsApp — **só se label ≠ PENDENTE** | `trackWhatsAppClick()` em [tracking.js](../assets/js/tracking.js) |

Valor usado: `1.0 BRL` para todas as conversões (placeholder — sem valor de lead definido ainda).

## Itens PENDENTES e como resolver

### 1. Labels de conversão do Google Ads

**Estado:** `ADS_LABEL_FORM` e `ADS_LABEL_WHATSAPP` estão como `'PENDENTE'` em [tracking.js](../assets/js/tracking.js). O código tem guard `if (label !== 'PENDENTE')` para não disparar conversão inválida.

**Para ativar:**
1. Google Ads → Ferramentas → Conversões → Criar duas ações:
   - "Envio de formulário" (categoria: Lead)
   - "Clique WhatsApp" (categoria: Contato)
2. Copiar o label de cada (string após a barra no snippet gerado, ex: `AW-18082316445/AbCdEfGhIj`)
3. Substituir em [tracking.js](../assets/js/tracking.js):
   ```js
   ADS_LABEL_FORM: 'AbCdEfGhIj',      // label real da conversão de formulário
   ADS_LABEL_WHATSAPP: 'KlMnOpQrSt',  // label real da conversão de WhatsApp
   ```
4. Atualizar esta tabela acima removendo "pendente".

### 2. Meta Pixel

**Estado:** sem Business Manager criado. Chamadas `fbq()` estão comentadas em [tracking.js](../assets/js/tracking.js) (`trackFormSubmit` e `trackWhatsAppClick`).

**Para ativar:**
1. Criar Business Manager + Pixel no Meta Business.
2. Adicionar snippet base do Pixel no `<head>` de [index.html](../index.html) (logo abaixo do gtag).
3. Descomentar as duas linhas `fbq('track', ...)` em [tracking.js](../assets/js/tracking.js).
4. Eventos Meta: `Lead` (form) e `Contact` (WhatsApp).

### 3. Endpoint do formulário

**Estado:** `CONFIG.FORM_ENDPOINT` em [tracking.js](../assets/js/tracking.js) está como `https://formspree.io/f/SEU_ID_AQUI` (placeholder). Decisão entre Formspree e Web3Forms ainda pendente.

**Para ativar:**
1. Criar conta no serviço escolhido e obter o endpoint.
2. Substituir `FORM_ENDPOINT` em [tracking.js](../assets/js/tracking.js).
3. Confirmar que [main.js](../assets/js/main.js) usa `CONFIG.FORM_ENDPOINT` no fetch do submit (verificar antes de ativar).

## Decisões arquiteturais

- **Sem Google Tag Manager.** Landing page single — a complexidade do GTM não se justifica. Tags direto no `<head>` + helpers em `tracking.js`.
- **`gtag` inline no `<head>`, helpers com `defer`.** O gtag precisa carregar cedo pra pegar pageview; os helpers (`trackFormSubmit`, `trackWhatsAppClick`) podem carregar depois porque só rodam em interação.
- **Guard `PENDENTE` em vez de remover chamada.** Mantém o código pronto — quando o label chegar, troca a string e funciona. Evita mexer em lógica.
- **`safeCall` wrapping.** Qualquer falha de tag (adblock, rede) loga `console.warn` mas não quebra o submit do formulário nem o redirect para WhatsApp.

## Checklist de validação (após qualquer mudança)

- [ ] Abrir DevTools → Network, filtrar por `google-analytics` e `googleads`
- [ ] Submeter formulário → ver request pra `/g/collect` com `en=generate_lead`
- [ ] Clicar WhatsApp → ver request pra `/g/collect` com `en=click`
- [ ] Se labels Ads ativos: ver request pra `googleadservices.com/pagead/conversion`
- [ ] Google Ads → Conversões → ver "Ação recente" aumentar (pode levar até 3h)
- [ ] GA4 → Relatórios → Tempo real → ver eventos aparecendo
