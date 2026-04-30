'use client';

import { useState, useEffect } from 'react';
import styles from './StickyBanner.module.css';

export default function StickyBanner() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setClosed(true), 350);
  };

  if (closed) return null;

  const wrapperClass = `${styles.wrapper}${visible && !closing ? ` ${styles.visible}` : ''}`;

  return (
    <div className={wrapperClass}>
      <div className={styles.inner}>
        <a href="#productos-sanidad" aria-label="Ver productos Caravanas ACA">
          <img
            src="/img/sections/sanidad/banner-caravanas-desktop.png"
            alt="Caravanas ACA - Con tecnología HDX"
            className={`${styles.image} d-none d-lg-block`}
          />
          <img
            src="/img/sections/sanidad/banner-caravanas-tablet.png"
            alt="Caravanas ACA - Con tecnología HDX"
            className={`${styles.image} d-none d-md-block d-lg-none`}
          />
          <img
            src="/img/sections/sanidad/banner-caravanas-mobile.png"
            alt="Caravanas ACA - Con tecnología HDX"
            className={`${styles.image} d-block d-md-none`}
          />
        </a>
        <button
          onClick={handleClose}
          aria-label="Cerrar banner"
          className={styles.closeBtn}
        >
          ×
        </button>
      </div>
    </div>
  );
}
