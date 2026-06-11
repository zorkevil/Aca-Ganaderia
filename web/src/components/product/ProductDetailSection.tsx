import Link from 'next/link';
import type { ProductItem } from '@/lib/types';

function toSlug(value?: string) {
  if (!value) return '';
  return value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\s+/g, '-');
}

export default function ProductDetailSection({ product }: { product: ProductItem }) {
  const isElectronicId = toSlug(product.category) === 'identificacion-electronica';
  const isSorgoGranifero = toSlug(product.subcategory) === 'sorgo-granifero';
  const isMaizDobleProposito = toSlug(product.subcategory) === 'maiz-doble-proposito';
  const isSorgoForrajero = toSlug(product.subcategory) === 'sorgo-forrajero';

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
            <h1 className="h2 mb-4 text-color-3 wow animate__animated animate__fadeInUp">
              {product.title ?? product.name}
            </h1>

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

                {/* Icono solo si existe */}
                {product.iconCategory && (
                  <img
                    src={product.iconCategory}
                    alt={product.category}
                    className="flex-shrink-0 icon-48"
                  />
                )}
              </div>

              {/* Subcategoría comercial */}
              {product.subcategory && (
                <div
                  className="min-height-48 d-flex align-items-center gap-3 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.35s"
                >
                  <h4 className="mb-0">Subcategoría</h4>
                  <span>{product.subcategory}</span>

                  {/* Icono solo si existe */}
                  {product.iconSubcategory && (
                    <img
                      src={product.iconSubcategory}
                      alt={product.subcategory}
                      className="flex-shrink-0 icon-48"
                    />
                  )}
                </div>
              )}

              {/* Línea */}
              <div
                className="min-height-48 mb-3 d-flex align-items-center gap-3 wow animate__animated animate__fadeInUp"
                data-wow-delay="0.4s"
              >
                <h4 className="mb-0">Línea</h4>
                <span>{product.generalCategoryName}</span>
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

        {/* Tabla de detalles - Sorgo Granifero */}
        {isSorgoGranifero && (
          <div className="row pt-7">
            <div className="col-12">
              <div className="row py-4 px-3 bg-color-16 wow animate__animated animate__fadeInUp" data-wow-delay="0.7s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Aptitud de uso</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.aptitud_de_uso}</p>
                </div>
              </div>
              <div className="row py-4 px-3 bg-color-17 wow animate__animated animate__fadeInUp" data-wow-delay="0.8s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Ciclo</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.ciclo}</p>
                </div>
              </div>
              <div className="row py-4 px-3 bg-color-16 wow animate__animated animate__fadeInUp" data-wow-delay="0.9s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Contenido de tanino</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.contenido_de_tanino}</p>
                </div>
              </div>
              <div className="row py-4 px-3 bg-color-17 wow animate__animated animate__fadeInUp" data-wow-delay="1s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Altura cm</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.altura_cm}</p>
                </div>
              </div>
              <div className="row py-4 px-3 bg-color-16 wow animate__animated animate__fadeInUp" data-wow-delay="1.1s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Despeje de panoja</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.despeje_de_panoja}</p>
                </div>
              </div>
              <div className="row py-4 px-3 bg-color-17 wow animate__animated animate__fadeInUp" data-wow-delay="1.2s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Calidad de MS</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.calidad_de_ms}</p>
                </div>
              </div>
              <div className="row py-4 px-3 bg-color-16 wow animate__animated animate__fadeInUp" data-wow-delay="1.3s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Perfil sanitario</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.perfil_sanitario}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tabla de detalles - Sorgo Forrajero */}
        {isSorgoForrajero && (
          <div className="row pt-7">
            <div className="col-12">
              <div className="row py-4 px-3 bg-color-16 wow animate__animated animate__fadeInUp" data-wow-delay="0.7s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Ciclo</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.ciclo}</p>
                </div>
              </div>
              <div className="row py-4 px-3 bg-color-17 wow animate__animated animate__fadeInUp" data-wow-delay="0.8s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">BMR</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.bmr}</p>
                </div>
              </div>
              <div className="row py-4 px-3 bg-color-16 wow animate__animated animate__fadeInUp" data-wow-delay="0.9s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Contenido de tanino</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.contenido_de_tanino}</p>
                </div>
              </div>
              <div className="row py-4 px-3 bg-color-17 wow animate__animated animate__fadeInUp" data-wow-delay="1s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Aptitud de uso</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.aptitud_de_uso}</p>
                </div>
              </div>
              <div className="row py-4 px-3 bg-color-16 wow animate__animated animate__fadeInUp" data-wow-delay="1.1s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Porcentaje de panoja</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.porcentaje_de_panoja}</p>
                </div>
              </div>
              <div className="row py-4 px-3 bg-color-17 wow animate__animated animate__fadeInUp" data-wow-delay="1.2s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Calidad de MS</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.calidad_de_ms}</p>
                </div>
              </div>
              <div className="row py-4 px-3 bg-color-16 wow animate__animated animate__fadeInUp" data-wow-delay="1.3s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Zona de adaptación</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.zona_de_adaptacion}</p>
                </div>
              </div>
              <div className="row py-4 px-3 bg-color-17 wow animate__animated animate__fadeInUp" data-wow-delay="1.4s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Densidad de siembra</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.densidad_de_siembra}</p>
                </div>
              </div>
              <div className="row py-4 px-3 bg-color-16 wow animate__animated animate__fadeInUp" data-wow-delay="1.5s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Perfil sanitario</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.perfil_sanitario}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tabla de detalles - Maíz Doble Propósito */}
        {isMaizDobleProposito && (
          <div className="row pt-7">
            <div className="col-12">
              <div className="row py-4 px-3 bg-color-16 wow animate__animated animate__fadeInUp" data-wow-delay="0.7s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Tecnología</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.tecnologia}</p>
                </div>
              </div>
              <div className="row py-4 px-3 bg-color-17 wow animate__animated animate__fadeInUp" data-wow-delay="0.8s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Madurez relativa</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.madurez_relativa}</p>
                </div>
              </div>
              <div className="row py-4 px-3 bg-color-16 wow animate__animated animate__fadeInUp" data-wow-delay="0.9s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Ciclo</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.ciclo}</p>
                </div>
              </div>
              <div className="row py-4 px-3 bg-color-17 wow animate__animated animate__fadeInUp" data-wow-delay="1s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Comportamiento a vuelco y quebrado</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.comportamiento_a_vuelco_y_quebrado}</p>
                </div>
              </div>
              <div className="row py-4 px-3 bg-color-16 wow animate__animated animate__fadeInUp" data-wow-delay="1.1s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Velocidad de secado</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.velocidad_de_secado}</p>
                </div>
              </div>
              <div className="row py-4 px-3 bg-color-17 wow animate__animated animate__fadeInUp" data-wow-delay="1.2s">
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Textura de grano</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.textura_de_grano}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tabla de detalles - default */}
        {!isElectronicId && !isSorgoGranifero && !isMaizDobleProposito && !isSorgoForrajero && <div className="row pt-7">
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

            {/* Categoría técnica o Fórmula */}
            <div
              className="row py-4 px-3 bg-color-16 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.9s"
            >
              <div className="col-md-3">
                <h4 className="text-color-1 mb-md-0">
                  {product.secondCategory && product.secondCategory.trim() !== ''
                    ? 'Categoría'
                    : 'Fórmula'}
                </h4>
              </div>

              <div className="col-md-9">
                <p className="mb-0">
                  {product.secondCategory && product.secondCategory.trim() !== ''
                    ? product.secondCategory
                    : product.formula}
                </p>
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

            {/* SENASA (opcional) */}
            {product.senasa && (
              <div
                className="row py-4 px-3 bg-color-16 wow animate__animated animate__fadeInUp"
                data-wow-delay="1.1s"
              >
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Número de registro de SENASA</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.senasa}</p>
                </div>
              </div>
            )}

            {/* Especie Animal (opcional) */}
            {product.especieAnimal && (
              <div
                className="row py-4 px-3 bg-color-17 wow animate__animated animate__fadeInUp"
                data-wow-delay="1.2s"
              >
                <div className="col-md-3">
                  <h4 className="text-color-1 mb-md-0">Especie Animal</h4>
                </div>
                <div className="col-md-9">
                  <p className="mb-0">{product.especieAnimal}</p>
                </div>
              </div>
            )}
          </div>
        </div>}
      </div>
    </section>
  );
}
