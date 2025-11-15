import Image from 'next/image';
import Link from 'next/link';
import { footerNavigation, socialLinks } from '@/lib/navigation';

export default function Footer() {
  return (
    <footer className="bg-color-7 text-color-2">
      <div className="container">
        <div className="row py-7">
          {/* Logo */}
          <div className="col-lg-6 mb-5 mb-lg-0 d-flex align-items-center justify-content-center justify-content-lg-start wow animate__animated animate__fadeInUp">
            <Image
              src="/img/branding/aca-logo.svg"
              alt="ACA Ganadería"
              width={220}
              height={80}
              className="aca-logo img-fluid animate__animated animate__fadeIn"
            />
          </div>

          {/* Links útiles */}
          <div
            className="col-lg-6 d-flex align-items-center wow animate__animated animate__fadeInUp"
            data-wow-delay="0.1s"
          >
            <nav className="d-flex flex-column flex-md-row justify-content-md-between align-items-center w-100">
              {footerNavigation.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  className="text-color-2 text-decoration-none"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="row pb-7">
          {/* Redes sociales */}
          <div
            className="col-md-4 mb-3 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start wow animate__animated animate__fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="d-flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light rounded-circle p-0 d-flex align-items-center justify-content-center icon-32"
                  aria-label={social.name}
                >
                  <i className={`bi ${social.icon} lh-0`} />
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div
            className="col-md-4 text-center mb-3 mb-md-0 d-flex align-items-center justify-content-center wow animate__animated animate__fadeInUp"
            data-wow-delay="0.3s"
          >
            <p className="small mb-0">
              © {new Date().getFullYear()} ACA Ganadería | Todos los derechos reservados.
            </p>
          </div>

          {/* Legal links */}
          <div
            className="col-md-4 text-center text-md-end d-flex align-items-center justify-content-md-end justify-content-center wow animate__animated animate__fadeInUp"
            data-wow-delay="0.4s"
          >
            <Link href="/terminos-condiciones" className="text-color-2 small me-3">
              Términos y Condiciones
            </Link>
            <Link href="/politicas-privacidad" className="text-color-2 small">
              Políticas de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
