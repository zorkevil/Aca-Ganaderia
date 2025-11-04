// ============================================================================
// Animations (WOW.js + carousel restart)
// ============================================================================

(function initWowAndCarouselAnimations() {
  function initWOW() {
    if (typeof WOW !== 'undefined') {
      // Inicializá WOW sin ocultar el hero (skip iniciales visibles)
      new WOW({
        boxClass: 'wow',
        animateClass: 'animate__animated',
        offset: 50,
        mobile: true,
        live: true,
        callback: function (box) {
          // Evitar reinicializar elementos visibles en el hero
          if (box.closest('#home-hero, #heroCarousel')) {
            box.style.visibility = 'visible';
          }
        },
      }).init();
    } else {
      setTimeout(initWOW, 200);
    }
  }

  // Iniciar apenas el DOM esté listo (sin delay grande)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWOW);
  } else {
    initWOW();
  }

  // Reiniciar animaciones dentro de carousels secundarios
  const carousels = document.querySelectorAll('.carousel:not(#heroCarousel)');
  carousels.forEach((carousel) => {
    carousel.addEventListener('slid.bs.carousel', function () {
      const activeSlide = carousel.querySelector('.carousel-item.active');
      if (!activeSlide) return;

      const wowElements = activeSlide.querySelectorAll('.wow');
      wowElements.forEach((element) => {
        const delay = element.getAttribute('data-wow-delay') || '0s';
        const delayMs = parseFloat(delay) * 1000;
        const clone = element.cloneNode(true);
        clone.style.visibility = 'hidden';
        element.parentNode.replaceChild(clone, element);
        setTimeout(() => {
          clone.style.visibility = 'visible';
        }, delayMs);
      });
    });
  });
})();
