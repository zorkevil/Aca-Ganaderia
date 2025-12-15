'use client';

import { useMemo, useState } from 'react';
import type { RemateItem, RemateCategory } from '@/lib/types';
import { parseLocalDate } from '@/lib/date';

type Props = {
  remates: RemateItem[];
  tipos: RemateCategory[];
  modalidades: RemateCategory[];
};

export default function TabRemates({ remates, tipos, modalidades }: Props) {
  const [selectedTipos, setSelectedTipos] = useState<string[]>([]);
  const [selectedModalidades, setSelectedModalidades] = useState<string[]>([]);
  const [page, setPage] = useState(1);

  const perPage = 6;

  const toggle = (arr: string[], value: string, setter: any) => {
    setter(arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]);
    setPage(1);
  };

  // ------------------------
  // FILTRADO
  // ------------------------
  const filtered = useMemo(() => {
    let result = remates;

    if (selectedTipos.length > 0) {
      result = result.filter((r) => selectedTipos.includes(r.tipo));
    }

    if (selectedModalidades.length > 0) {
      result = result.filter((r) => selectedModalidades.includes(r.modalidad));
    }

    result = [...result].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return result;
  }, [remates, selectedTipos, selectedModalidades]);

  // ------------------------
  // PAGINACIÓN
  // ------------------------
  const totalPages = Math.ceil(filtered.length / perPage);
  const items = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <>
      {/* Intro */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-7">
          <p className="text-center mb-0">
            Acompañamos a las cooperativas en la organización de remates físicos y virtuales,
            brindando respaldo comercial, comunicación y herramientas que facilitan la operación y
            garantizan transparencia.
          </p>
        </div>
      </div>

      <div className="row">
        {/* Sidebar */}
        <div className="col-lg-3">
          {/* TIPOS */}
          <div className="mb-5">
            <h3 className="mb-3">Tipo</h3>

            <ul className="list-unstyled mt-2">
              {tipos.map((cat) => {
                const isSelected = selectedTipos.includes(cat.name);

                return (
                  <li key={cat.id} className="mb-3">
                    {isSelected ? (
                      <span className="badge bg-color-3 text-white d-inline-flex align-items-center gap-2">
                        {cat.name}
                        <button
                          type="button"
                          className="btn-close btn-close-white"
                          onClick={() => toggle(selectedTipos, cat.name, setSelectedTipos)}
                        />
                      </span>
                    ) : (
                      <a
                        href="#"
                        className="text-color-3"
                        onClick={(e) => {
                          e.preventDefault();
                          toggle(selectedTipos, cat.name, setSelectedTipos);
                        }}
                      >
                        {cat.name}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* MODALIDADES */}
          <div>
            <h3 className="mb-3">Modalidad</h3>

            <ul className="list-unstyled mt-2">
              {modalidades.map((cat) => {
                const isSelected = selectedModalidades.includes(cat.name);

                return (
                  <li key={cat.id} className="mb-3">
                    {isSelected ? (
                      <span className="badge bg-color-3 text-white d-inline-flex align-items-center gap-2">
                        {cat.name}
                        <button
                          type="button"
                          className="btn-close btn-close-white"
                          onClick={() =>
                            toggle(selectedModalidades, cat.name, setSelectedModalidades)
                          }
                        />
                      </span>
                    ) : (
                      <a
                        href="#"
                        className="text-color-3"
                        onClick={(e) => {
                          e.preventDefault();
                          toggle(selectedModalidades, cat.name, setSelectedModalidades);
                        }}
                      >
                        {cat.name}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* GRID */}
        <div className="col-lg-9">
          <div className="mb-4">
            <p className="small mb-0">
              {filtered.length > 0
                ? `Mostrando ${(page - 1) * perPage + 1}-${Math.min(
                    page * perPage,
                    filtered.length,
                  )} de ${filtered.length} resultados`
                : 'Mostrando 0 resultados'}
            </p>
          </div>

          {/* Cards o vacío */}
          {items.length > 0 ? (
            <div className="row g-4 mb-4">
              {items.map((r) => {
                const date = parseLocalDate(r.date);

                return (
                  <div key={r.id} className="col-md-6 col-xl-4">
                    <div className="bg-white border border-color-3 rounded-4 h-100 d-flex flex-column text-center overflow-hidden">
                      <div className="position-relative">
                        <img src={r.image} alt="" className="img-fluid" />

                        <div
                          className={`position-absolute top-0 start-10 ${
                            r.modalidad === 'Virtual' ? 'bg-color-6' : 'bg-color-4'
                          } text-white px-3 py-2 border-bottom-left-radius-20 border-bottom-right-radius-20`}
                        >
                          {r.modalidad}
                        </div>
                      </div>

                      <div className="p-3 d-flex flex-column flex-grow-1">
                        <h4 className="text-color-3 mb-3">{r.title}</h4>

                        <div className="d-flex gap-3 justify-content-center mb-3 small text-color-3">
                          <span className="d-flex align-items-center gap-1">
                            <i className="bi bi-calendar text-color-4"></i>
                            {date.toLocaleDateString('es-AR', {
                              day: 'numeric',
                              month: 'long',
                            })}
                          </span>

                          <span className="d-flex align-items-center gap-1">
                            <i className="bi bi-clock text-color-4"></i>
                            {r.time}hs
                          </span>
                        </div>

                        <p className="small flex-grow-1 mb-2">{r.description}</p>

                        {r.href && (
                          <a
                            href={r.href}
                            className="btn btn-link mt-auto"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Ver remate
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="row g-4 mb-4">
              <div className="col-12">
                <div className="d-flex flex-column align-items-center pt-7 wow animate__animated animate__fadeInUp">
                  <div className="bg-color-10 rounded-4 py-2 px-4 d-flex align-items-center mb-3">
                    <i className="bi bi-info-circle text-color-5 me-3"></i>
                    <p className="mb-0 fs-5 text-color-3">
                      No encontramos remates que coincidan con la búsqueda
                    </p>
                  </div>

                  <button
                    className="btn btn-link text-color-3"
                    onClick={() => {
                      setSelectedTipos([]);
                      setSelectedModalidades([]);
                      setPage(1);
                    }}
                  >
                    Reintentar
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Paginación */}
          {totalPages > 1 && (
            <nav className="pagination justify-content-center">
              <ul className="pagination">
                {Array.from({ length: totalPages }, (_, i) => (
                  <li key={i} className={`page-item ${page === i + 1 ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => setPage(i + 1)}>
                      {i + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </>
  );
}
