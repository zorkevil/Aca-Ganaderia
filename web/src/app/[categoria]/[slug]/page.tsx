import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/api/products';

import ProductBreadcrumbs from '@/components/product/ProductBreadcrumbs';
import ProductDetailSection from '@/components/product/ProductDetailSection';

// -------------------------------------------
// TIPADO DE RUTAS
// -------------------------------------------
type Params = { categoria: string; slug: string };

// -------------------------------------------
// METADATA DINÁMICO POR PRODUCTO
// -------------------------------------------
export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { categoria, slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return {
    title: product.name,
    description: product.metaDescription ?? product.description?.slice(0, 150),

    openGraph: {
      title: product.name,
      description: product.metaDescription ?? product.description?.slice(0, 150),
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

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <ProductBreadcrumbs category={categoria} slug={slug} name={product.name} />

      <ProductDetailSection product={product} />
    </main>
  );
}
