'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { mainNavigation } from '@/lib/navigation';

export default function Header() {
  const pathname = usePathname();

  // Normalizar URLs
  const normalize = (path: string) => (path === '/' ? '/' : path.replace(/\/$/, ''));

  const current = normalize(pathname);

  useEffect(() => {
    const init = async () => {
      const Offcanvas = (await import('bootstrap/js/dist/offcanvas')).default;

      const offcanvasEl = document.getElementById('offcanvasNavbar');
      if (!offcanvasEl) return;

      // Instancia Bootstrap
      const instance = Offcanvas.getOrCreateInstance(offcanvasEl);

      // Botón real que Bootstrap escucha
      const closeBtn = offcanvasEl.querySelector(
        '[data-bs-dismiss="offcanvas"]',
      ) as HTMLElement | null;

      // Cerrar Offcanvas cuando hago clic en cualquier item o el botón Contacto
      offcanvasEl.querySelectorAll('a.nav-link, .btn.w-100').forEach((el) => {
        el.addEventListener('click', () => {
          closeBtn?.click();
        });
      });
    };

    init();
  }, []);

  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          {/* Logo */}
          <Link href="/" className="navbar-brand animate__animated animate__fadeInDown">
            <Image
              src="/img/branding/aca-iso.svg"
              alt="ACA Ganadería Logo"
              width={1}
              height={1}
              className="navbar-logo"
            />
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler animate__animated animate__fadeInDown"
            style={{ animationDelay: '0.1s' }}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Menu */}
          <div className="navbar-collapse justify-content-center d-none d-lg-flex">
            <ul className="navbar-nav">
              {mainNavigation.map((item, i) => {
                const delay = `${0.1 * (i + 1)}s`;
                const hasChildren = item.children?.length;

                const isActive =
                  (item.href && current === normalize(item.href)) ||
                  (item.href && current.startsWith(normalize(item.href) + '/'));

                return (
                  <li
                    key={item.label}
                    className={`nav-item ${hasChildren ? 'dropdown' : ''} animate__animated animate__fadeInDown`}
                    style={{ animationDelay: delay }}
                  >
                    {/* Link del ítem */}
                    <Link
                      href={item.href ?? '#'}
                      className={`nav-link ${hasChildren ? 'dropdown-toggle' : ''} ${
                        isActive ? 'active' : ''
                      }`}
                      {...(hasChildren
                        ? { role: 'button', 'data-bs-toggle': 'dropdown', 'aria-expanded': false }
                        : {})}
                    >
                      {item.label}
                    </Link>

                    {/* Dropdown si tiene hijos */}
                    {hasChildren && (
                      <ul className="dropdown-menu">
                        {/* Opción padre (opcional) */}
                        {item.href && (
                          <>
                            <li>
                              <Link className="dropdown-item" href={item.href}>
                                {item.label}
                              </Link>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                          </>
                        )}

                        {item.children!.map((sub, j) => (
                          <li key={j}>
                            <Link className="dropdown-item" href={sub.href!}>
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Botón Contacto (Desktop) */}
          <Link
            href="/contacto"
            className="btn btn-primary d-none d-xl-block animate__animated animate__fadeInDown"
            style={{ animationDelay: '0.7s' }}
          >
            Contacto
          </Link>

          {/* Menú móvil (offcanvas) */}
          <div
            className="offcanvas offcanvas-end d-lg-none"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <Image
                  src="/img/branding/aca-iso.svg"
                  alt="ACA Ganadería Logo"
                  width={100}
                  height={35}
                  className="navbar-logo"
                />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav">
                {mainNavigation.map((item) => {
                  const isActive =
                    current === normalize(item.href) ||
                    current.startsWith(normalize(item.href) + '/');

                  return (
                    <li key={item.href} className="nav-item">
                      <Link href={item.href} className={`nav-link ${isActive ? 'active' : ''}`}>
                        {item.label}
                      </Link>
                    </li>
                  );
                })}

                <li className="nav-item d-lg-none mt-4">
                  <Link href="/contacto" className="btn btn-primary w-100">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
