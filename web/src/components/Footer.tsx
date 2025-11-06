'use client';

import Image from 'next/image';
import Link from 'next/link';
import { footerNavigation, socialLinks } from '@/lib/navigation';

export default function Footer() {
  return (
    <footer className="bg-color-7 text-color-2 py-5">
      <div className="container">
        <div className="row">
          {/* Logo + descripción */}
          <div className="col-lg-5 me-auto mb-4 mb-lg-0 wow animate__animated animate__fadeInUp">
            <Image
              src="/img/branding/aca-logo.svg"
              alt="ACA Ganadería"
              width={180}
              height={60}
              className="aca-logo img-fluid mb-3 animate__animated animate__fadeIn"
            />
            <p className="small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Links útiles */}
          <div
            className="col-lg-3 mb-4 mb-lg-0 wow animate__animated animate__fadeInUp"
            data-wow-delay="0.1s"
          >
            <h3 className="text-color-2 mb-3">Links útiles</h3>
            <ul className="chevron-list-white">
              {footerNavigation.map((item) => (
                <li key={item.href} className="mb-2">
                  <Link href={item.href} className="text-color-2 text-decoration-none">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-lg-2 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
            <h3 className="text-color-2 mb-3">Contacto</h3>
            <p className="mb-2">Dirección</p>
            <p className="mb-2">Teléfono</p>
            <p className="mb-2">Email</p>
            <p className="mb-2">Lunes a Viernes 9 a 18hs</p>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="row mt-4 pt-4">
          {/* Redes sociales */}
          <div
            className="col-md-4 mb-3 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start wow animate__animated animate__fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="d-flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="btn btn-light rounded-circle p-0 d-flex align-items-center justify-content-center icon-32"
                >
                  <i className={`bi ${social.icon} lh-0`} />
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div
            className="col-md-4 text-center mb-3 mb-md-0 d-flex align-items-center justify-content-center wow animate__animated animate__fadeInUp"
            data-wow-delay="0.4s"
          >
            <p className="small mb-0">
              © {new Date().getFullYear()} ACA Ganadería | Todos los derechos reservados.
            </p>
          </div>

          {/* Legal links */}
          <div
            className="col-md-4 text-center text-md-end d-flex align-items-center justify-content-md-end justify-content-center wow animate__animated animate__fadeInUp"
            data-wow-delay="0.5s"
          >
            <Link href="#" className="text-color-2 small me-3">
              Términos y Condiciones
            </Link>
            <Link href="#" className="text-color-2 small">
              Políticas de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
