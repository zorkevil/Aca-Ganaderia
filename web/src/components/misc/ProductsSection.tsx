'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import type { ProductItem, ProductCategory } from '@/lib/types';

type Props = {
  title?: string;
  products: ProductItem[];
  categories: ProductCategory[];
  subcategories?: ProductCategory[];
  sectionId?: string;
};

export default function ProductsSection({
  title = 'Productos',
  products,
  categories,
  subcategories,
  sectionId = 'productos',
}: Props) {
  // ---- Estados
  const [search, setSearch] = useState('');
  const [selectedCats, setSelectedCats] = useState<string[]>([]);
  const [selectedSubcats, setSelectedSubcats] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('ventas');
  const [page, setPage] = useState(1);
  const perPage = 6;

  // ---- Filtrado
  const filteredProducts = useMemo(() => {
    let result = products;

    // Filtrar por categoría
    if (selectedCats.length > 0) {
      result = result.filter((p) => selectedCats.includes(p.category));
    }

    // Filtrar por subcategoría
    if (selectedSubcats.length > 0) {
      result = result.filter((p) => selectedSubcats.includes(p.subcategory ?? ''));
    }

    // Filtro por texto
    if (search.trim() !== '') {
      result = result.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    }

    // Ordenar
    switch (sortBy) {
      case 'precio-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'precio-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'recientes':
        result = [...result].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );
        break;
      default:
        // “ventas” o por defecto
        result = [...result].sort((a, b) => b.sales - a.sales);
    }

    return result;
  }, [products, selectedCats, selectedSubcats, search, sortBy]);

  // ---- Paginación
  const totalPages = Math.ceil(filteredProducts.length / perPage);
  const currentPageProducts = filteredProducts.slice((page - 1) * perPage, page * perPage);

  useEffect(() => {
    // Reiniciar paginación al cambiar filtros
    setPage(1);
  }, [search, selectedCats, sortBy]);

  // ---- Funciones
  const toggleCategory = (cat: string) => {
    setSelectedCats((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  const toggleSubcategory = (sub: string) => {
    setSelectedSubcats((prev) =>
      prev.includes(sub) ? prev.filter((s) => s !== sub) : [...prev, sub],
    );
  };

  const clearSubcategory = (sub: string) => {
    setSelectedSubcats((prev) => prev.filter((s) => s !== sub));
  };

  const clearCategory = (cat: string) => {
    setSelectedCats((prev) => prev.filter((c) => c !== cat));
  };

  return (
    <section id={sectionId} className="py-7">
      <div className="container">
        {/* Título */}
        <div className="row mb-5">
          <div className="col-12">
            <hr className="heading-hr wow animate__animated animate__fadeInUp" />
            <h2 className="wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              {title}
            </h2>
          </div>
        </div>

        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3">
            {/* Buscador */}
            <div className="mb-5 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
              <h3 className="mb-3">Buscar</h3>
              <input
                type="text"
                className="form-control border-color-1"
                placeholder="Buscar un producto..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Categorías */}
            <div className="wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
              <h3 className="mb-3">Categorías</h3>

              {/* Lista */}
              <ul className="list-unstyled">
                {categories.map((cat) => {
                  const isSelected = selectedCats.includes(cat.name);

                  return (
                    <li key={cat.id} className="mb-3">
                      {isSelected ? (
                        <span className="badge bg-color-3 text-white d-inline-flex align-items-center gap-2">
                          {cat.name}
                          <button
                            type="button"
                            className="btn-close btn-close-white"
                            aria-label="Eliminar"
                            onClick={() => clearCategory(cat.name)}
                          ></button>
                        </span>
                      ) : (
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleCategory(cat.name);
                          }}
                          className="text-color-3"
                        >
                          {cat.name}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Subcategorías (opcional) */}
            {subcategories && (
              <div className="wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                <h3 className="mb-3">Subcategorías</h3>

                <ul className="list-unstyled mt-2">
                  {subcategories.map((sub) => {
                    const isSelected = selectedSubcats.includes(sub.name);

                    return (
                      <li key={sub.id} className="mb-3">
                        {isSelected ? (
                          <span className="badge bg-color-3 text-white d-inline-flex align-items-center gap-2">
                            {sub.name}
                            <button
                              type="button"
                              className="btn-close btn-close-white"
                              aria-label="Eliminar"
                              onClick={() => clearSubcategory(sub.name)}
                            />
                          </span>
                        ) : (
                          <a
                            href="#"
                            className="text-color-3"
                            onClick={(e) => {
                              e.preventDefault();
                              toggleSubcategory(sub.name);
                            }}
                          >
                            {sub.name}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          {/* Productos */}
          <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="small mb-0">
                {filteredProducts.length > 0
                  ? `Mostrando ${(page - 1) * perPage + 1}-${Math.min(
                      page * perPage,
                      filteredProducts.length,
                    )} de ${filteredProducts.length} resultados`
                  : 'Mostrando 0 resultados'}
              </p>

              <select
                className="form-select small w-auto border-color-1"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="ventas">Ordenar por Ventas</option>
                <option value="precio-asc">Precio: Bajo a Alto</option>
                <option value="precio-desc">Precio: Alto a Bajo</option>
                <option value="recientes">Más recientes</option>
              </select>
            </div>

            {/* Grid o vacío */}
            {currentPageProducts.length > 0 ? (
              <div className="row g-4 mb-4">
                {currentPageProducts.map((p, i) => (
                  <div
                    key={p.id}
                    className="col-md-6 col-xl-4 wow animate__animated animate__fadeInUp"
                    data-wow-delay={`${0.4 + i * 0.1}s`}
                  >
                    <div className="border border-color-3 rounded-4 h-100 d-flex flex-column text-center">
                      <Link
                        href={`/${p.generalCategory}/${p.slug}`}
                        className="text-decoration-none text-reset p-3"
                      >
                        <img
                          src={p.image}
                          alt={p.name}
                          className="img-fluid mb-3 wow animate__animated animate__fadeIn"
                        />
                        <h4 className="text-color-3 mb-3">{p.name}</h4>
                        <p className="flex-grow-1">{p.description}</p>
                      </Link>
                      <div className="d-flex gap-2 justify-content-center p-3 mt-auto">
                        <Link href="#contacto" className="btn btn-outline-primary">
                          Contacto
                        </Link>
                        <Link href={`/${p.generalCategory}/${p.slug}`} className="btn btn-primary">
                          Ver
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="row g-4 mb-4">
                <div className="col-12">
                  <div className="d-flex flex-column align-items-center pt-7 wow animate__animated animate__fadeInUp">
                    <div className="bg-color-10 rounded-4 py-2 px-4 d-flex align-items-center mb-3">
                      <i className="bi bi-info-circle text-color-5 me-3"></i>
                      <p className="mb-0 fs-5 text-color-3">
                        No encontramos productos que coincidan con la búsqueda
                      </p>
                    </div>
                    <button
                      className="btn btn-link text-color-3"
                      onClick={() => {
                        setSearch('');
                        setSelectedCats([]);
                        setSelectedSubcats([]);
                        setSortBy('ventas');
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
              <nav aria-label="Paginación de productos">
                <ul className="pagination justify-content-center">
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
      </div>
    </section>
  );
}
