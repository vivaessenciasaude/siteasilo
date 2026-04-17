/* =============================================
   VIVA ESSÊNCIA SAÚDE — tracking.js
   Helpers de conversão. O gtag é inicializado inline no <head>
   (GA4: G-LS74GEWELB + Google Ads: AW-18082316445).
   ============================================= */

const CONFIG = {
  FORM_ENDPOINT: 'https://formspree.io/f/SEU_ID_AQUI', // TODO: substituir quando endpoint for decidido (Formspree/Web3Forms)
  ADS_CONVERSION_ID: 'AW-18082316445',
  ADS_LABEL_FORM: 'PENDENTE',      // TODO: criar ação de conversão no Google Ads e colar o label aqui
  ADS_LABEL_WHATSAPP: 'PENDENTE',  // TODO: criar ação de conversão no Google Ads e colar o label aqui
};

function safeCall(fn, label) {
  try {
    fn();
  } catch (e) {
    console.warn(`[tracking] ${label} falhou:`, e);
  }
}

function trackFormSubmit() {
  // GA4 sempre dispara
  safeCall(() => gtag('event', 'generate_lead', {
    currency: 'BRL',
    value: 1.0,
  }), 'GA4 generate_lead');

  // Ads só dispara se label estiver configurado
  if (CONFIG.ADS_LABEL_FORM !== 'PENDENTE') {
    safeCall(() => gtag('event', 'conversion', {
      send_to: `${CONFIG.ADS_CONVERSION_ID}/${CONFIG.ADS_LABEL_FORM}`,
      value: 1.0,
      currency: 'BRL',
    }), 'Ads conversion form');
  }

  // TODO: ativar quando tiver Meta Pixel ID
  // safeCall(() => fbq('track', 'Lead'), 'Meta Lead');
}

function trackWhatsAppClick() {
  // GA4 sempre dispara
  safeCall(() => gtag('event', 'click', {
    event_category: 'contact',
    event_label: 'whatsapp',
  }), 'GA4 whatsapp click');

  // Ads só dispara se label estiver configurado
  if (CONFIG.ADS_LABEL_WHATSAPP !== 'PENDENTE') {
    safeCall(() => gtag('event', 'conversion', {
      send_to: `${CONFIG.ADS_CONVERSION_ID}/${CONFIG.ADS_LABEL_WHATSAPP}`,
      value: 1.0,
      currency: 'BRL',
    }), 'Ads conversion whatsapp');
  }

  // TODO: ativar quando tiver Meta Pixel ID
  // safeCall(() => fbq('track', 'Contact'), 'Meta Contact');
}
