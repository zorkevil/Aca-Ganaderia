'use client';

import Link from 'next/link';
import type { ProductItem } from '@/lib/types';

export default function ProductDetailSection({ product }: { product: ProductItem }) {
  return (
    <section className="pb-7">
      <div className="container">
        {/* Header */}
        <div className="row g-4 align-items-center">
          {/* Imagen izquierda */}
          <div className="col-lg-6 wow animate__animated animate__fadeInLeft">
            <div className="bg-color-15 d-flex align-items-center justify-content-center p-5">
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid product-detail-image"
              />
            </div>
          </div>

          {/* Información derecha */}
          <div className="col-lg-6">
            {/* Título */}
            <h2 className="mb-4 text-color-3 wow animate__animated animate__fadeInUp">
              {product.title ?? product.name}
            </h2>

            {/* Subtítulo (solo si existe) */}
            {product.subtitle && (
              <h4
                className="mb-3 text-color-1 wow animate__animated animate__fadeInUp"
                data-wow-delay="0.1s"
              >
                {product.subtitle}
              </h4>
            )}

            <p className="mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
              {product.description}
            </p>

            <div className="mb-4">
              {/* Categoría comercial */}
              <div
                className="min-height-48 d-flex align-items-center gap-3 wow animate__animated animate__fadeInUp"
                data-wow-delay="0.3s"
              >
                <h4 className="mb-0">Categoría</h4>
                <span>{product.category}</span>
              </div>

              {/* Línea */}
              <div
                className="min-height-48 mb-3 d-flex align-items-center gap-3 wow animate__animated animate__fadeInUp"
                data-wow-delay="0.4s"
              >
                <h4 className="mb-0">Línea</h4>
                <span>{product.generalCategory}</span>
              </div>

              {/* SKU */}
              <p
                className="small mb-5 wow animate__animated animate__fadeInUp"
                data-wow-delay="0.5s"
              >
                SKU: {product.sku}
              </p>

              {/* Acciones */}
              <div
                className="d-flex gap-3 wow animate__animated animate__fadeInUp"
                data-wow-delay="0.6s"
              >
                <Link href="/contacto" className="btn btn-primary">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tabla de detalles */}
        <div className="row pt-7">
          <div className="col-12">
            {/* Presentación */}
            <div
              className="row py-4 px-3 bg-color-16 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="col-md-3">
                <h4 className="text-color-1 mb-md-0">Presentación</h4>
              </div>
              <div className="col-md-9">
                <p className="mb-0">{product.presentation}</p>
              </div>
            </div>

            {/* Administración */}
            <div
              className="row py-4 px-3 bg-color-17 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="col-md-3">
                <h4 className="text-color-1 mb-md-0">Administración</h4>
              </div>
              <div className="col-md-9">
                <p className="mb-0">{product.administration}</p>
              </div>
            </div>

            {/* Categoría técnica */}
            <div
              className="row py-4 px-3 bg-color-16 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.9s"
            >
              <div className="col-md-3">
                <h4 className="text-color-1 mb-md-0">Categoría</h4>
              </div>
              <div className="col-md-9">
                <p className="mb-0">{product.secondCategory}</p>
              </div>
            </div>

            {/* Dosificación */}
            <div
              className="row py-4 px-3 bg-color-17 wow animate__animated animate__fadeInUp"
              data-wow-delay="1s"
            >
              <div className="col-md-3">
                <h4 className="text-color-1 mb-md-0">Dosificación</h4>
              </div>
              <div className="col-md-9">
                <p className="mb-0">{product.dosage}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
