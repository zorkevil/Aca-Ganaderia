'use client';

import { useEffect, useRef } from 'react';

type Props = {
  html: string;
};

export default function LegalContent({ html }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const elements = Array.from(ref.current.querySelectorAll('h2, h3, p, ul, ol, li'));

    elements.forEach((el, index) => {
      // WOW base
      el.classList.add('wow', 'animate__animated', 'animate__fadeInUp');

      el.setAttribute('data-wow-delay', `${0.2 + index * 0.05}s`);

      // ----- H2 -----
      if (el.tagName === 'H2') {
        el.classList.add('h4');

        // Si NO es el primer elemento real → mt-5
        if (el.previousElementSibling) {
          el.classList.add('mt-5');
        }
      }

      // ----- H3 -----
      if (el.tagName === 'H3') {
        el.classList.add('h5', 'mt-4');
      }
    });

    // Reinicializar WOW
    // @ts-ignore
    if (typeof window !== 'undefined' && window.WOW) {
      // @ts-ignore
      new window.WOW().init();
    }
  }, [html]);

  return <div ref={ref} className="legal-content" dangerouslySetInnerHTML={{ __html: html }} />;
}
