// ============================================================================
// Animations (WOW.js + carousel restart)
// ============================================================================
document.addEventListener('DOMContentLoaded', function () {
  if (typeof WOW !== 'undefined') {
    new WOW().init();
  }

  // Reiniciar animaciones dentro de los carousels (excepto el principal)
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
});
