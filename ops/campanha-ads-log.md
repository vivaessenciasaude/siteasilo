# Log de Gestão — Google Ads Viva Essência Saúde

Histórico de decisões, otimizações e métricas da campanha de tráfego pago.
Mantido por Matheus (gestor de tráfego).

---

## Contexto do projeto

**Cliente:** Viva Essência Saúde
**Segmento:** Residencial sênior em Hortolândia/SP
**Responsável pelo cliente:** médico-proprietário
**Objetivo:** geração de leads qualificados (famílias buscando residencial sênior)
**Posicionamento da marca:** upscale / humanizado — evitar o termo "asilo" em toda comunicação
**Canais ativos:** Google Ads (Search)
**Canais planejados:** Meta Ads (aguardando Business Manager)

---

## Stack técnico

- **Landing page:** HTML/CSS/JS puro
- **Hospedagem:** Vercel (free tier) + GitHub
- **Formulário:** a definir (Formspree ou Web3Forms)
- **Analytics:** Google Analytics 4 (`G-LS74GEWELB`)
- **Conversões:** Google Ads (`AW-18082316445`)
- **Pixel Meta:** a implementar quando Business Manager estiver pronto

---

## Estado inicial da campanha (11–15 abr 2026)

### Diagnóstico de entrada

- Campanha: **CAMPANHA 1 SEARCH**
- Orçamento: **R$ 15,00/dia**
- Estratégia: **Maximizar conversões**
- Pontuação de otimização: **67,06%** → depois revelou-se 59,1% no diagnóstico detalhado

### Métricas iniciais (5 dias)

| Métrica | Valor |
|---|---|
| Impressões | 126 |
| Cliques | 18 |
| CTR | 14,29% |
| CPC médio | R$ 4,57 |
| Custo | R$ 82,32 |
| Conversões (métrica antiga) | 7 |
| Taxa de conversão | 38,89% |
| CPL | R$ 11,76 |

**Ressalva crítica:** conversão configurada como "Clique de saída" — não mede lead real, apenas intenção de contato. Números inflados até correção.

### Problemas identificados no diagnóstico

1. **Metas:** conversão configurada apenas via tag automática, sem tag in-page
2. **Anúncios:** 4 sitelinks reprovados por "destino que não funciona" (Agende uma Visita, Nossa Estrutura, Equipe Médica, Fale Conosco)
3. **Públicos-alvo:** apenas 5 palavras-chave visíveis, 2 gerando cliques
4. **Cobertura geográfica:** limitada a Hortolândia e Sumaré

---

## Sessão 1 — 17 abr 2026

### Contexto da sessão

Recarga de R$ 100,00 na conta do Google Ads. Necessidade de corrigir medição antes de escalar.

### Decisões estratégicas tomadas

1. **Não escalar orçamento** antes de corrigir rastreamento
2. **Implementar rastreamento manual** (GA4 + Google Ads) com eventos específicos, não só tag automática
3. **Estrutura de sitelinks via âncoras** (`/#contato`, `/#estrutura`, `/#servicos`, `/#sobre`) ao invés de URLs internas inexistentes
4. **Manter correspondências frase/exata** — rejeitar sugestão do Google de migrar tudo para ampla (risco alto em conta nova com budget baixo)
5. **Adiar CPA alvo** até acumular 30+ conversões reais
6. **Ativar parceiros de pesquisa** (ganho marginal, risco baixo)

### Ações executadas

#### Landing page (via Claude Code)

- Implementação do arquivo `js/tracking.js` com funções de rastreamento para GA4 e Google Ads
- Tags de inicialização (`gtag`) no `<head>` do `index.html`
- Proteção condicional para não disparar conversão com labels `PENDENTE`
- Meta Pixel comentado aguardando Business Manager
- Ajuste de IDs das seções da landing para casar com âncoras dos sitelinks (`sobre`, `estrutura`, `servicos`, `contato`)
- `scroll-behavior: smooth` aplicado no CSS
- Estrutura `<picture>` com WebP + fallback JPEG para imagens acima de 200 KB
- `loading="lazy"` em imagens abaixo da dobra

#### Google Ads (via Claude no Chrome)

**ETAPA 1 — Palavras-chave negativas (nível campanha, correspondência ampla):**

34 negativas adicionadas em 3 grupos temáticos:

- **Candidatos a emprego:** vaga, vagas, emprego, empregos, curriculo, contratação, contratar, salário, trabalhar, trabalho, cuidador, cuidadora, enfermagem vaga, técnico enfermagem vaga, clt, sindicato, concurso
- **Público assistencialista:** asilo gratuito, asilo sus, asilo publico, asilo prefeitura, voluntário, voluntária, voluntariado, doação, doar, barato, grátis, gratuito, gratuita, idoso abandonado, abrigo, ong, casa lar

Total de negativas na campanha após esta etapa: **40** (6 preexistentes + 34 novas)

**ETAPA 2 — Análise de termos de pesquisa:**

Após análise do relatório de termos, adicionadas **2 negativas em correspondência exata** para preservar posicionamento upscale sem cortar variações qualificadas:

- `[asilo hortolandia]`
- `[asilo em hortolandia]`

Total de negativas após esta etapa: **42**

**ETAPA 3 — Novas palavras-chave:**

12 em correspondência de frase:
- `"residencial para idosos hortolândia"`
- `"residencial sênior hortolândia"`
- `"residencial sênior campinas"`
- `"casa de repouso campinas"`
- `"casa de repouso americana"`
- `"casa de repouso paulínia"`
- `"casa de repouso monte mor"`
- `"casa de repouso indaiatuba"`
- `"clinica geriátrica hortolândia"`
- `"cuidados para idosos dependentes"`
- `"residencial geriátrico hortolândia"`
- `"moradia assistida idosos"`

3 em correspondência exata:
- `[residencial senior hortolandia]`
- `[residencial para idosos campinas]`
- `[casa de repouso hortolandia]`

Total de palavras-chave ativas após esta etapa: **31** (19 preexistentes + 12 novas; 3 exatas são adições, não substituições)

**Pulada:** `"clínica para idosos hortolândia"` (variação de acentuação é normalizada pelo Google, evitaria duplicata).

#### Sitelinks

URLs atualizadas de links quebrados para âncoras da landing page:

| Texto do sitelink | URL final |
|---|---|
| Agende uma Visita | `https://vivaessenciasaude.com.br/#contato` |
| Nossa Estrutura | `https://vivaessenciasaude.com.br/#estrutura` |
| Nossos Serviços | `https://vivaessenciasaude.com.br/#servicos` |
| Quem Somos | `https://vivaessenciasaude.com.br/#sobre` |

Status: **em revisão pelo Google**.

### Métricas ao final da sessão (11–17 abr 2026)

| Métrica | Valor | Variação vs. inicial |
|---|---|---|
| Impressões | 164 | +30% |
| Cliques | 21 | +17% |
| CTR | 12,80% | -1,49 pontos |
| Custo | R$ 97,41 | +18% |
| Conversões (métrica antiga) | 9 | +29% |
| CPL | R$ 10,82 | -8% |

**Observação:** conversões ainda contadas pela métrica antiga "Clique de saída". Números serão recalibrados quando as novas ações de conversão (formulário + WhatsApp) estiverem ativas.

### Pendências ao final da sessão

- [ ] Decidir serviço de formulário (Formspree vs Web3Forms) e preencher `FORM_ENDPOINT`
- [ ] Deploy no Vercel e validação do tracking com Google Tag Assistant
- [ ] Criar ações de conversão no Google Ads: "Envio de Formulário" e "Clique WhatsApp"
- [ ] Coletar e preencher `ADS_LABEL_FORM` e `ADS_LABEL_WHATSAPP` no `tracking.js`
- [ ] Marcar eventos `generate_lead` e `contact` como conversão no GA4 (24h após deploy)
- [ ] Substituir placeholders de `favicon.svg`, `apple-touch-icon.png`, `og-image.jpg`
- [ ] Pausar conversão antiga "Clique de saída" (apenas após novas estarem coletando dados)
- [ ] Criar página de Política de Privacidade (LGPD)
- [ ] Banner de consentimento de cookies
- [ ] Business Manager Meta + criação do Pixel

### Pontos de atenção monitorados

1. **Bucket "outros termos de pesquisa":** 113 impressões, 12 cliques, R$ 44,84, 5 conversões ocultas. Representa 57% das conversões em buscas não visíveis individualmente. Monitorar semanalmente.
2. **Keywords dormentes (status "Baixo volume de pesquisa"):** clínica geriátrica hortolândia, residencial geriátrico hortolândia, [residencial senior hortolandia]. Manter ativas, reavaliar a cada 2 semanas.
3. **Grupo de anúncios único:** 31 KWs em "Grupo de anúncios 1". Fragmentação planejada para fase futura (após 30-40 conversões reais), preferencialmente por intenção (popular vs premium vs alta dependência).

---

## Roadmap

### Curto prazo (próximos 7 dias)

1. Validar tracking em produção após deploy
2. Criar ações de conversão no Google Ads
3. Colar Conversion Labels no `tracking.js`
4. Confirmar aprovação dos sitelinks

### Médio prazo (7–30 dias)

1. Acumular 30+ conversões reais com nova medição
2. Pausar conversão antiga "Clique de saída"
3. Avaliar ajuste de orçamento (R$ 15/dia → R$ 25-30/dia)
4. Ativar CPA alvo quando houver histórico suficiente
5. Revisão semanal de termos de pesquisa e adição de negativas emergentes

### Longo prazo (30–90 dias)

1. Fragmentação de grupos de anúncios por intenção (popular / premium / alta dependência)
2. Criação de anúncios temáticos por grupo
3. Implementação do Meta Pixel e abertura de campanhas no Meta Ads
4. Início da fase de SEO / conteúdo no diretório `/blog`
5. Considerar Supabase caso surja necessidade de dashboard / admin de blog

---

## Princípios de gestão adotados

- **Planejar antes de codar / otimizar** — CLAUDE.md como fonte de verdade do projeto
- **Medir antes de escalar** — não aumentar orçamento com conversão mal configurada
- **Preferir correspondência exata > frase > ampla** em contas novas com budget baixo
- **Ignorar recomendações automáticas do Google** que conflitem com a estratégia (ampla, lances agressivos, aplicação automática)
- **Construir incrementalmente** — landing → tráfego pago validado → SEO → backend dinâmico
- **Respeitar posicionamento da marca** — "residencial sênior", não "asilo"
