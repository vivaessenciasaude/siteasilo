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

      // Validação — marcar campos obrigatórios vazios
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

    galeriaGrid.addEventListener('click', e => {
      const btn = e.target.closest('.galeria__btn');
      if (btn) openLightbox(Number(btn.dataset.index));
    });

    lbClose.addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click', () => navigate(-1));
    lbNext.addEventListener('click', () => navigate(1));

    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', e => {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });
  }

  /* --------------------------------------------------
     FADE-IN AO ENTRAR NA VIEWPORT
  -------------------------------------------------- */
  const fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: mostrar tudo se IntersectionObserver não estiver disponível
    fadeEls.forEach(el => el.classList.add('visible'));
  }

}); // fim DOMContentLoaded
