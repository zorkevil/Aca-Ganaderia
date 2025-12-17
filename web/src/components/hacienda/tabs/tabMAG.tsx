'use client';

import type { MagRow } from '@/lib/types';
import { formatDateLongEs, formatTodayLongEs } from '@/utils/formatDate';

type Props = {
  fecha: string;
  data: MagRow[];
};

export default function TabMAG({ fecha, data }: Props) {
  return (
    <>
      <div className="row justify-content-center mb-5">
        <div className="col-lg-7">
          <p className="text-center mb-0">
            El Mercado Agroganadero de Cañuelas es el mercado concentrador de hacienda más
            importante del país y un formador de precios.
          </p>
        </div>
      </div>

      <div className="row flex-column-reverse flex-lg-row mb-5">
        <div className="col-lg-8">
          <h3 className="text-color-3 mb-3">Mercado Agroganadero S.A. - {formatTodayLongEs()}</h3>

          {fecha && <p>Resumen estadístico de precios del día {formatDateLongEs(fecha)}</p>}

          <p className="mb-0">Hacienda vacuna tipo faena</p>
        </div>

        <div className="col-lg-4 text-lg-end mb-3 mb-lg-0">
          <img
            src="/img/sections/hacienda/logo-mercado-agroganadero.png"
            alt="MAG"
            className="img-fluid mb-2"
          />
        </div>
      </div>

      <div className="row">
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
                {data.length > 0 ? (
                  data.map((row) => (
                    <tr key={row.categoria} className="text-end">
                      <td className="text-start">{row.categoria}</td>
                      <td>${row.maximo.toFixed(3)}</td>
                      <td>${row.minimo.toFixed(3)}</td>
                      <td>${row.promedio.toFixed(3)}</td>
                      <td>{row.promedioKgs}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center py-4">
                      No hay datos disponibles
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
