'use client';

import { magData } from '@/lib/mock';
import type { MagRow } from '@/lib/types';

export default function TabMAG() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <p className="text-center mb-0">
            El Mercado Agroganadero de Cañuelas es el mercado concentrador de hacienda más
            importante del país y un formador de precios. Un mercado de última generación: Moderno,
            integrador y sustentable; para futuras generaciones.
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead>
                <tr className="text-center">
                  <th>Categoría</th>
                  <th>Máximo</th>
                  <th>Mínimo</th>
                  <th>Promedio</th>
                  <th>Promedio Kgs.</th>
                </tr>
              </thead>

              <tbody>
                {magData.map((row: MagRow) => (
                  <tr key={row.categoria} className="text-end">
                    <td className="text-start">{row.categoria}</td>
                    <td>${row.maximo.toFixed(3)}</td>
                    <td>${row.minimo.toFixed(3)}</td>
                    <td>${row.promedio.toFixed(3)}</td>
                    <td>{row.promedioKgs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
