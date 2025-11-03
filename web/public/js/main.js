// ============================================================================
// Main initializer
// ============================================================================

// Este archivo carga los módulos necesarios del sitio
document.addEventListener('DOMContentLoaded', function () {
  console.log('Main JS initialized');

  // Scripts globales adicionales pueden ir acá
  // Ej: smooth scroll, navbar shrink, tooltips, etc.

  // Ejemplo: Navbar shrink al hacer scroll
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }
});
