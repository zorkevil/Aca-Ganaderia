import { notFound } from 'next/navigation';
import { products } from '@/lib/mock';

type Params = { categoria: string; slug: string };

export default async function ProductDetail({ params }: { params: Promise<Params> }) {
  const { categoria, slug } = await params;

  const allProducts = products;
  const product =
    allProducts.find((p) => p.generalCategory === categoria && p.slug === slug) ||
    allProducts.find((p) => p.category === categoria && p.slug === slug);

  if (!product) return notFound();

  return (
    <section className="py-7">
      <div className="container">
        <h1 className="text-color-3 mb-3">{product.name}</h1>
        <img src={product.image} alt={product.name} className="img-fluid rounded-4 mb-4" />
        <p className="mb-4">{product.description}</p>
        <a href="#contacto" className="btn btn-primary">
          Contacto
        </a>
      </div>
    </section>
  );
}
