'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TomSelectControl from '@/components/misc/TomSelectControl';
import type { ContactSectionProps } from '@/lib/types';

export default function ContactSection({
  title = 'Contacto',
  description = 'Si querés recibir asesoramiento o conocer nuestras soluciones adaptadas a tu producción, completá este breve formulario.',
  submitTo, // ← sigue entrando pero ahora es SOLO para identificar sección
  noImage = false,
}: ContactSectionProps & { noImage?: boolean }) {
  const router = useRouter();
  const [showOtroRol, setShowOtroRol] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFullForm = !submitTo;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const area = formData.get('area-de-negocio');

      // -----------------------------
      // Payload unificado
      // -----------------------------
      const payload = {
        nombre: formData.get('nombre'),
        apellido: formData.get('apellido'),
        email: formData.get('email'),
        telefono: formData.get('celular'),
        rol: formData.get('rol'),
        otro_rol: formData.get('otro-rol'),
        localidad: formData.get('localidad'),
        area,
        mensaje: formData.get('mensaje'),

        section: submitTo?.replace('/api/contacto-', '') ?? area,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      console.log(response);

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      router.push('/gracias');
    } catch (error) {
      console.error('Error envío contacto:', error);
      console.log('Hubo un error al enviar el formulario. Intentá nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className={`bg-color-4 ${noImage ? 'contacto-content-bg py-7' : ''}`}>
      <div className={`${noImage ? 'container' : 'container-fluid'}`}>
        <div className="row justify-content-center">
          {!noImage && (
            <div className="col-lg-6 contacto-bg border-top-right-radius-40 wow animate__animated animate__fadeIn" />
          )}

          <div
            className={`col-lg-6 ${
              noImage ? '' : 'contacto-form-pe contacto-content-bg py-7 ps-lg-5'
            }`}
          >
            <hr className="heading-hr mb-4 wow animate__animated animate__fadeInUp" />

            <h2 className="mb-4 wow animate__animated animate__fadeInUp">{title}</h2>

            {isFullForm && <p className="mb-4">{description}</p>}

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
                      name="nombre"
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
                      name="apellido"
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
                      name="celular"
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
                      name="email"
                      id="email"
                      placeholder="E-mail"
                      required
                    />
                    <label htmlFor="email">E-mail</label>
                  </div>
                </div>
              </div>

              {/* Área de negocio (solo en full form) */}
              {isFullForm && (
                <div className="row">
                  <div
                    className="col-md-6 mb-4 wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <div className="form-floating">
                      <TomSelectControl
                        name="area-de-negocio"
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
                        name="localidad"
                        id="localidad"
                        placeholder="Localidad"
                        required
                      />
                      <label htmlFor="localidad">Localidad</label>
                    </div>
                  </div>
                </div>
              )}

              {/* Rol (en versión corta) */}
              {!isFullForm && (
                <div className="row">
                  <div
                    className="col-md-6 mb-4 wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.7s"
                  >
                    <div className="form-floating">
                      <TomSelectControl
                        name="rol"
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
                        name="localidad"
                        id="localidad"
                        placeholder="Localidad"
                        required
                      />
                      <label htmlFor="localidad">Localidad</label>
                    </div>
                  </div>
                </div>
              )}

              {/* Rol (full form, ancho completo) */}
              {isFullForm && (
                <div className="row">
                  <div
                    className="col-12 mb-4 wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.9s"
                  >
                    <div className="form-floating">
                      <TomSelectControl
                        name="rol"
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

              {/* Campo Otro Rol */}
              {showOtroRol && (
                <div className="row" id="otro-rol-container">
                  <div
                    className={`${isFullForm ? 'col-md-12' : 'col-md-6'} mb-4 wow animate__animated animate__fadeInUp`}
                  >
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        name="otro-rol"
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
                    name="mensaje"
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
                <button
                  type="submit"
                  className={`btn btn-primary ${isSubmitting ? 'disabled animate__animated animate__pulse' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting && (
                    <span className="spinner-border spinner-border-sm" role="status" />
                  )}
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
