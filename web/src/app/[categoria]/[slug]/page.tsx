import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ProductBreadcrumbs from '@/components/product/ProductBreadcrumbs';
import ProductDetailSection from '@/components/product/ProductDetailSection';

import { products, productsSanidad } from '@/lib/mock';

// -------------------------------------------
// UNIFICAMOS LOS PRODUCTOS
// -------------------------------------------
const allProducts = [...products, ...productsSanidad];

// -------------------------------------------
// TIPADO DE RUTAS
// -------------------------------------------
type Params = { categoria: string; slug: string };

// -------------------------------------------
// METADATA DINÁMICO POR PRODUCTO
// -------------------------------------------
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { categoria, slug } = await params;

  const product =
    allProducts.find((p) => p.generalCategory === categoria && p.slug === slug) ||
    allProducts.find((p) => p.category === categoria && p.slug === slug);

  if (!product) return notFound();

  return {
    title: product.name,
    description: product.metaDescription ?? product.description.slice(0, 150),

    openGraph: {
      title: product.name,
      description: product.metaDescription ?? product.description.slice(0, 150),
      url: `/${categoria}/${slug}`,
      images: product.image ? [{ url: product.image }] : [],
    },
  };
}

// -------------------------------------------
// PÁGINA DINÁMICA DEL PRODUCTO
// -------------------------------------------
export default async function ProductDetailPage({ params }: { params: Promise<Params> }) {
  const { categoria, slug } = await params;

  const product =
    allProducts.find((p) => p.generalCategory === categoria && p.slug === slug) ||
    allProducts.find((p) => p.category === categoria && p.slug === slug);

  if (!product) return notFound();

  return (
    <main>
      <ProductBreadcrumbs category={categoria} slug={slug} name={product.name} />
      <ProductDetailSection product={product} />
    </main>
  );
}
