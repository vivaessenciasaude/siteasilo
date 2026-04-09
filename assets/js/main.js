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

