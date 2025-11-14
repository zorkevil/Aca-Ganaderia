import Link from 'next/link';
import type { SocialLink } from '@/lib/types';

type Props = {
  socialLinks: SocialLink[];
};

export default function ThankyouSection({ socialLinks }: Props) {
  return (
    <section id="gracias" className="bg-color-4 py-7 contacto-content-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            {/* Logo */}
            <img
              src="/img/branding/aca-logo.svg"
              alt="ACA Ganadería"
              className="aca-logo img-fluid m-auto mb-5 wow animate__animated animate__fadeIn"
            />

            <h2
              className="text-color-3 mb-4 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.1s"
            >
              ¡Gracias por contactarte!
            </h2>

            <p
              className="text-color-3 mb-5 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.2s"
            >
              Recibimos tu mensaje y te responderemos en breve.
            </p>

            {/* Redes sociales */}
            <div
              className="d-flex gap-3 justify-content-center mb-5 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.3s"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light rounded-circle p-0 d-flex align-items-center justify-content-center icon-32"
                  aria-label={social.name}
                >
                  <i className={`bi ${social.icon} lh-0`} />
                </a>
              ))}
            </div>

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
  );
}
