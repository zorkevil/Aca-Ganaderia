export default function TabComercializacion() {
  return (
    <>
      {/* Texto centrado */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-7">
          <p className="text-center mb-0">
            Ofrecemos múltiples canales de comercialización para las diferentes categorías de
            hacienda: venta directa, consignación, MAG y exportación. Buscamos generar oportunidades
            para todos los actores del tejido cooperativo, promoviendo negocios previsibles, seguros
            y rentables.
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          {/* Lista de servicios */}
          <div className="row mb-lg-4">
            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <ul className="chevron-list">
                <li>Venta directa a frigoríficos</li>
              </ul>
            </div>

            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <ul className="chevron-list">
                <li>Operatoria en el MAG</li>
              </ul>
            </div>

            <div className="col-lg-4 d-flex justify-content-center align-items-center">
              <ul className="chevron-list">
                <li>Comercialización de carnes</li>
              </ul>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            <div className="col-lg-5 d-flex justify-content-center align-items-center">
              <ul className="chevron-list">
                <li>Comercialización de gordo terminado de feedlot</li>
              </ul>
            </div>
            <div className="col-lg-5 d-flex justify-content-center align-items-center">
              <ul className="chevron-list">
                <li>Compra de Invernada</li>
              </ul>
            </div>
          </div>

          {/* Botón */}
          <div className="row">
            <div className="col-12 text-center">
              <a href="#" className="btn btn-outline-primary">
                Comercializá tu hacienda con ACA
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
