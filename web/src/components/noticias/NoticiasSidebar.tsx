'use client';

type Props = {
  categories: string[];
  selectedCats: string[];
  toggleCategory: (cat: string) => void;
  clearCategory: (cat: string) => void;
};

export default function NoticiasSidebar({
  categories,
  selectedCats,
  toggleCategory,
  clearCategory,
}: Props) {
  return (
    <div className="wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
      <h3 className="mb-3">Categorías</h3>

      {/* Lista de categorías */}
      <ul className="list-unstyled">
        {categories.map((cat) => {
          const isSelected = selectedCats.includes(cat);

          return (
            <li key={cat} className="mb-3">
              {/* Si está seleccionada → badge */}
              {isSelected ? (
                <span className="badge bg-color-3 text-white d-inline-flex align-items-center gap-2">
                  {cat}
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    aria-label="Eliminar"
                    onClick={() => clearCategory(cat)}
                  />
                </span>
              ) : (
                /* Si NO está seleccionada → link clickeable */
                <a
                  href="#"
                  className="text-color-3"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleCategory(cat);
                  }}
                >
                  {cat}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
