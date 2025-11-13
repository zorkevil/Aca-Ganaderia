import { notFound } from 'next/navigation';
import ProductBreadcrumbs from '@/components/product/ProductBreadcrumbs';
import ProductDetailSection from '@/components/product/ProductDetailSection';

// Importás TODOS los productos (nutrición, sanidad, etc.)
import { products } from '@/lib/mock';

type Params = { categoria: string; slug: string };

export default async function ProductDetail({ params }: { params: Promise<Params> }) {
  const { categoria, slug } = await params;

  // Buscar el producto según categoría / slug
  const product =
    products.find((p) => p.generalCategory === categoria && p.slug === slug) ||
    products.find((p) => p.category === categoria && p.slug === slug);

  if (!product) return notFound();

  return (
    <main>
      <ProductBreadcrumbs category={categoria} slug={slug} name={product.name} />
      <ProductDetailSection product={product} />
    </main>
  );
}
