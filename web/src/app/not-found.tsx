import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Página no encontrada',
  description: '',
};

export default function NotFound() {
  return (
    <main>
      {/* Título oculto para SEO */}
      <h1 className="visually-hidden">404 - Página no encontrada | ACA Ganadería</h1>

      {/* Sección principal */}
      <section id="gracias" className="py-7">
        <div className="container py-lg-7">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              {/* Imagen 404 */}
              <img
                src="/img/sections/404/404.svg"
                alt="404"
                className="aca-logo img-fluid m-auto mb-5 wow animate__animated animate__fadeIn"
              />

              {/* Título */}
              <h4
                className="text-color-3 mb-4 wow animate__animated animate__fadeInUp"
                data-wow-delay="0.1s"
              >
                ¡Muu…uy perdido estás!
              </h4>

              {/* Subtítulos */}
              <p
                className="text-color-3 wow animate__animated animate__fadeInUp"
                data-wow-delay="0.2s"
              >
                No encontramos lo que buscás.
              </p>
              <p
                className="text-color-3 mb-5 wow animate__animated animate__fadeInUp"
                data-wow-delay="0.3s"
              >
                Pero encontramos muchas formas de mejorar tu producción.
              </p>

              {/* Botón Volver al Home */}
              <Link
                href="/"
                className="btn btn-primary wow animate__animated animate__fadeInUp"
                data-wow-delay="0.4s"
              >
                Ir al Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
