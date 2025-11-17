'use client';

import type { IdentificacionItem } from '@/lib/types';

type Props = {
  items: IdentificacionItem[];
};

export default function TabIdentificacion({ items }: Props) {
  return (
    <>
      {/* Textos centrados */}
      <div className="row justify-content-center mb-4">
        <div className="col-lg-8">
          <p className="text-center">
            Impulsamos una gestión moderna, digital y trazable de toda la cadena ganadera.
            Integramos sistemas que permiten planificar, operar, controlar y dar seguimiento a cada
            etapa, con eficiencia y datos en tiempo real.
          </p>
          <p className="text-center">
            Nuestro <strong>Programa de Trazabilidad</strong> permite seguir cada lote en tiempo
            real y garantizar transparencia en toda la cadena. Trazabilidad completa, desde el
            origen hasta el consumidor.
          </p>
        </div>
      </div>

      {/* Grid dinámico */}
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="row">
            {items.map((item) => (
              <div key={item.id} className="col-lg-6 mb-4">
                <div className="text-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    title={item.title}
                    className="icon-96 mb-3"
                  />
                  <h4 className="text-color-3 mb-3">{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
