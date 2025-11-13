'use client';

import Link from 'next/link';

type Props = {
  category: string;
  slug: string;
  name: string;
};

export default function ProductBreadcrumbs({ category, slug, name }: Props) {
  const categoryFormatted = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <section className="py-5">
      <div className="container">
        <p className="text-color-7 mb-0 text-start wow animate__animated animate__fadeInUp">
          <Link href="/" className="text-color-7 text-decoration-none">
            Home
          </Link>{' '}
          &gt;{' '}
          <Link href={`/${category}`} className="text-color-7 text-decoration-none">
            {categoryFormatted}
          </Link>{' '}
          &gt; {name}
        </p>
      </div>
    </section>
  );
}
