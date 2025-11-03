'use client';

import Image from 'next/image';
import Link from 'next/link';
import { mainNavigation } from '@/lib/navigation';

export default function Header() {
  return (
    <header className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          {/* Logo */}
          <Link href="#" className="navbar-brand animate__animated animate__fadeInDown">
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
              {mainNavigation.map((item, i) => (
                <li
                  key={item.href}
                  className="nav-item animate__animated animate__fadeInDown"
                  style={{ animationDelay: `${0.1 * (i + 1)}s` }}
                >
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Botón Contacto (Desktop) */}
          <Link
            href="#contacto"
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
                  alt="Aca Ganadería Logo"
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
                {mainNavigation.map((item) => (
                  <li key={item.href} className="nav-item">
                    <Link href={item.href} className="nav-link">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="nav-item d-lg-none mt-4">
                  <Link href="#contacto" className="btn btn-primary w-100">
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
