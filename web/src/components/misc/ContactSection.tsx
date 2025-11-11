'use client';

import { useState } from 'react';
import TomSelectControl from '@/components/misc/TomSelectControl';
import type { ContactSectionProps } from '@/lib/types';

export default function ContactSection({
  title = 'Contacto',
  description = 'Si querés recibir asesoramiento o conocer nuestras soluciones adaptadas a tu producción, completá este breve formulario.',
  submitTo,
}: ContactSectionProps) {
  const [showOtroRol, setShowOtroRol] = useState(false);

  // Determina si es el formulario completo (home) o reducido (página específica)
  const isFullForm = !submitTo;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Formulario enviado a: ${submitTo || '/api/contacto'}`);
  };

  return (
    <section id="contacto" className="bg-color-4">
      <div className="container-fluid">
        <div className="row">
          {/* Imagen lateral */}
          <div className="col-lg-6 contacto-bg border-top-right-radius-40 wow animate__animated animate__fadeIn"></div>

          {/* Formulario */}
          <div className="col-lg-6 contacto-form-pe contacto-content-bg py-7 ps-lg-5">
            <hr className="heading-hr mb-4 wow animate__animated animate__fadeInUp" />
            <h2 className="mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              {title}
            </h2>

            {isFullForm && (
              <p className="mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                {description}
              </p>
            )}

            <form onSubmit={handleSubmit}>
              {/* Nombre y Apellido */}
              <div className="row">
                <div
                  className="col-md-6 mb-4 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      placeholder="Nombre"
                      required
                    />
                    <label htmlFor="nombre">Nombre</label>
                  </div>
                </div>

                <div
                  className="col-md-6 mb-4 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="apellido"
                      placeholder="Apellido"
                      required
                    />
                    <label htmlFor="apellido">Apellido</label>
                  </div>
                </div>
              </div>

              {/* Celular y Email */}
              <div className="row">
                <div
                  className="col-md-6 mb-4 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="form-floating">
                    <input
                      type="tel"
                      className="form-control"
                      id="celular"
                      placeholder="Celular"
                      required
                    />
                    <label htmlFor="celular">Celular</label>
                  </div>
                </div>

                <div
                  className="col-md-6 mb-4 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.6s"
                >
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="E-mail"
                      required
                    />
                    <label htmlFor="email">E-mail</label>
                  </div>
                </div>
              </div>

              {/* Campo 'Área de negocio' solo si es el formulario completo */}
              {isFullForm && (
                <div className="row">
                  <div
                    className="col-md-6 mb-4 wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <div className="form-floating">
                      <TomSelectControl
                        id="area-de-negocio"
                        className="form-select"
                        required
                        defaultValue=""
                      >
                        <option value=""></option>
                        <option value="nutricion">Nutrición</option>
                        <option value="sanidad">Sanidad</option>
                        <option value="hacienda">Hacienda</option>
                        <option value="produccion">Producción</option>
                      </TomSelectControl>
                      <label htmlFor="area-de-negocio">Área de negocio</label>
                    </div>
                  </div>

                  <div
                    className="col-md-6 mb-4 wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="localidad"
                        placeholder="Localidad"
                        required
                      />
                      <label htmlFor="localidad">Localidad</label>
                    </div>
                  </div>
                </div>
              )}

              {/* Campo 'Rol' */}
              {!isFullForm && (
                <div className="row">
                  <div
                    className="col-md-6 mb-4 wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <div className="form-floating">
                      <TomSelectControl
                        id="rol"
                        className="form-select"
                        required
                        defaultValue=""
                        onValueChange={(value) => setShowOtroRol(value === 'otro')}
                      >
                        <option value=""></option>
                        <option value="productor">Productor</option>
                        <option value="asesor">Asesor</option>
                        <option value="ingeniero-agronomo">Ingeniero Agrónomo</option>
                        <option value="veterinario">Veterinario</option>
                        <option value="otro">Otro</option>
                      </TomSelectControl>
                      <label htmlFor="rol">Rol</label>
                    </div>
                  </div>

                  <div
                    className="col-md-6 mb-4 wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="localidad"
                        placeholder="Localidad"
                        required
                      />
                      <label htmlFor="localidad">Localidad</label>
                    </div>
                  </div>
                </div>
              )}

              {/* Campo 'Rol' largo (solo para formulario completo) */}
              {isFullForm && (
                <div className="row">
                  <div
                    className="col-12 mb-4 wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.9s"
                  >
                    <div className="form-floating">
                      <TomSelectControl
                        id="rol"
                        className="form-select"
                        required
                        defaultValue=""
                        onValueChange={(value) => setShowOtroRol(value === 'otro')}
                      >
                        <option value=""></option>
                        <option value="productor">Productor</option>
                        <option value="asesor">Asesor</option>
                        <option value="ingeniero-agronomo">Ingeniero Agrónomo</option>
                        <option value="veterinario">Veterinario</option>
                        <option value="otro">Otro</option>
                      </TomSelectControl>
                      <label htmlFor="rol">Rol</label>
                    </div>
                  </div>
                </div>
              )}

              {/* Campo “Otro rol” */}
              {showOtroRol && (
                <div className="row" id="otro-rol-container">
                  <div
                    className={`${isFullForm ? 'col-md-12' : 'col-md-6'} mb-4 wow animate__animated animate__fadeInUp`}
                  >
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="otro-rol"
                        placeholder="Otro"
                        required
                      />
                      <label htmlFor="otro-rol">Otro</label>
                    </div>
                  </div>
                </div>
              )}

              {/* Mensaje */}
              <div className="mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="1s">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="mensaje"
                    placeholder="Mensaje"
                    rows={4}
                    required
                  ></textarea>
                  <label htmlFor="mensaje">Mensaje: ¿Qué te gustaría consultar?</label>
                </div>
              </div>

              {/* Botón */}
              <div
                className="text-end wow animate__animated animate__fadeInUp"
                data-wow-delay="1.1s"
              >
                <button type="submit" className="btn btn-primary">
                  Contacto
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
