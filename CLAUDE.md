# Viva Essência Saúde — Landing Page

## Visão Geral do Projeto
Landing page de alta conversão para captação de clientes via tráfego pago (Google Ads e Meta Ads).
O negócio é um Residencial Sênior / Casa de Repouso localizado em Hortolândia-SP, com médico proprietário residente.

## Estrutura de Documentação
O repositório usa 4 pastas no nível raiz para separar tipos de documentação (cada uma tem um `README.md` explicando seu propósito):

- **[plans/](plans/README.md)** — o que SERÁ feito: roadmaps, backlog, propostas de arquitetura
- **[specs/](specs/README.md)** — como algo DEVE funcionar: contratos técnicos, schemas, critérios de aceite
- **[docs/](docs/README.md)** — documentação geral: setup, arquitetura, padrões de código
- **[ops/](ops/README.md)** — operação: tráfego pago, métricas, logs de campanha, decisões de marketing

## Objetivo Principal
Gerar leads qualificados através de formulário de contato e botão de WhatsApp.
O visitante ideal é filho(a) adulto(a), entre 40 e 60 anos, que busca cuidados especializados para um familiar idoso.

## Público-Alvo
- Filhos adultos (40–60 anos) tomando decisões por seus pais
- Famílias de Hortolândia e região de Campinas
- Perfil: preocupados com segurança, qualidade de vida e atendimento médico

## Stack Técnica
- HTML5 semântico
- CSS3 com variáveis (sem frameworks externos)
- JavaScript puro (vanilla JS)
- Sem dependências de build (projeto deve rodar com Live Server)
- Preparado para futura integração de blog (estrutura de pastas modular)

## Identidade Visual
- Cor primária: #4A6B8A (azul-ardósia — confiança, saúde)
- Cor secundária: #7A9E7E (verde-sálvia — natureza, acolhimento)
- Cor de fundo: #F5F3EF (off-white quente)
- Cor de texto: #2D2D2D
- Cor de destaque CTA: #4A6B8A com hover escurecido
- Tipografia título: serifada elegante (ex: Playfair Display via Google Fonts)
- Tipografia corpo: sans-serif limpa (ex: Inter ou Lato via Google Fonts)
- Tom visual: sofisticado, acolhedor, humano — nunca clínico ou frio

## Logo
- Arquivo: /assets/images/logo.png (PNG com fundo transparente)
- Usar no header e footer
- Não distorcer proporções

## Estrutura de Pastas
```
viva-essencia/
├── CLAUDE.md
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── logo.png
│       ├── hero-bg.jpg
│       └── galeria/
├── blog/               ← reservado para fase futura
└── README.md
```

## Seções da Landing Page (nesta ordem)

### 1. Header
- Logo à esquerda
- Botão WhatsApp à direita (sempre visível, sticky no scroll)
- Menu simples: Sobre | Serviços | Estrutura | Contato

### 2. Hero
- Headline emocional focada na dor do familiar: ex: "Seu familiar merece cuidado todos os dias, com carinho e segurança."
- Subheadline reforçando diferencial médico: "Residencial com médico responsável, equipe 24h e estrutura completa em Hortolândia."
- Dois CTAs: "Falar pelo WhatsApp" (principal) + "Conheça nossa estrutura" (secundário)
- Fundo com imagem de ambiente acolhedor (overlay suave nas cores da marca)

### 3. Sobre
- Apresentação humana do residencial
- Destacar: médico proprietário, anos de experiência, missão de cuidado
- Foto do responsável ou da equipe (quando disponível)

### 4. Serviços
- Cards com ícones para cada serviço oferecido
- Exemplos: Cuidados com Alzheimer, Pacientes Acamados, Fisioterapia, Acompanhamento Médico, Alimentação Supervisionada, Atividades de Lazer
- Adaptar conforme lista real fornecida pelo cliente

### 5. Diferenciais
- Seção com ícones + texto curto
- Sugestões: Médico residente, Equipe 24 horas, Ambiente humanizado, Localização privilegiada, Segurança e monitoramento

### 6. Estrutura / Galeria
- Grid de fotos do espaço físico
- Lightbox simples ao clicar
- Legendas curtas em cada foto

### 7. Depoimentos
- Cards com nome, parentesco e depoimento
- Ex: "Filha de residente" — nunca expor sobrenome completo sem autorização
- Carousel simples ou grid de 3 cards

### 8. Localização
- Endereço completo
- Embed do Google Maps
- Telefone e WhatsApp clicáveis
- Horário de visitas

### 9. Footer
- Logo
- Links rápidos
- Contatos
- CTA final: "Agende uma visita"
- Aviso: "Estabelecimento registrado no CRM/ANVISA" (se aplicável)

## CTA e Conversão
- Botão WhatsApp fixo no canto inferior direito (floating button) em todas as páginas
- Mensagem pré-preenchida no WhatsApp: "Olá! Gostaria de saber mais sobre o Residencial Viva Essência Saúde."
- Número WhatsApp: atualizar com número real do cliente antes de publicar
- Formulário simples de contato: Nome, Telefone, Mensagem (opcional)

## SEO Básico
- Title tag: "Viva Essência Saúde | Residencial Sênior em Hortolândia-SP"
- Meta description: "Residencial sênior com médico responsável em Hortolândia. Cuidados especializados, equipe 24h e estrutura acolhedora. Agende uma visita."
- Heading H1 único por página
- Imagens com atributo alt descritivo
- Schema markup de LocalBusiness (JSON-LD)

## Performance e Boas Práticas
- Imagens otimizadas (WebP quando possível)
- Lazy loading nas imagens da galeria
- CSS e JS minificados na versão final
- Site responsivo — mobile first (maioria do tráfego pago chega pelo celular)
- Tempo de carregamento alvo: abaixo de 3 segundos

## Integrações Futuras
- Google Analytics 4 (tag já reservada no head)
- Meta Pixel (tag já reservada no head)
- Google Tag Manager (recomendado para gerenciar tags sem recodar)
- Blog em /blog/ — estrutura de pastas já reservada

## Regras Gerais de Desenvolvimento
- Sempre mobile first
- Nunca usar cores fora da paleta sem aprovação
- Manter tom acolhedor e humano nos textos — jamais linguagem clínica ou fria
- Todos os botões de contato devem abrir WhatsApp ou formulário
- Não usar bibliotecas pesadas (sem Bootstrap, sem jQuery)
- Código limpo, comentado e organizado por seção
