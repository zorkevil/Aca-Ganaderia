'use client';

import { useState } from 'react';
import TomSelectControl from '@/components/misc/TomSelectControl';
import type { ContactSectionProps } from '@/lib/types';

export default function ContactSection({
  title = 'Contacto',
  description = 'Si querés recibir asesoramiento o conocer nuestras soluciones adaptadas a tu producción, completá este breve formulario.',
  submitTo = '/api/contacto',
}: ContactSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtroRol, setShowOtroRol] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      setIsSubmitting(true);
      const res = await fetch(submitTo, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error('Error al enviar formulario');
      alert('Mensaje enviado correctamente');
      form.reset();
      setShowOtroRol(false);
    } catch (err) {
      console.error(err);
      alert('Hubo un problema al enviar el mensaje');
    } finally {
      setIsSubmitting(false);
    }
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
            <p className="mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
              {description}
            </p>

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
                      name="nombre"
                      id="nombre"
                      className="form-control"
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
                      name="apellido"
                      id="apellido"
                      className="form-control"
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
                      name="celular"
                      id="celular"
                      className="form-control"
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
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="E-mail"
                      required
                    />
                    <label htmlFor="email">E-mail</label>
                  </div>
                </div>
              </div>

              {/* Área de negocio y Localidad */}
              <div className="row">
                <div
                  className="col-md-6 mb-4 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="form-floating">
                    <TomSelectControl id="area" className="form-select" required defaultValue="">
                      <option value=""></option>
                      <option value="nutricion">Nutrición</option>
                      <option value="sanidad">Sanidad</option>
                      <option value="hacienda">Hacienda</option>
                      <option value="produccion">Producción</option>
                    </TomSelectControl>
                    <label htmlFor="area">Área de negocio</label>
                  </div>
                </div>

                <div
                  className="col-md-6 mb-4 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.8s"
                >
                  <div className="form-floating">
                    <input
                      type="text"
                      name="localidad"
                      id="localidad"
                      className="form-control"
                      placeholder="Localidad"
                      required
                    />
                    <label htmlFor="localidad">Localidad</label>
                  </div>
                </div>
              </div>

              {/* Rol */}
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
                      tomOptions={{
                        onChange: (value: string) => {
                          setShowOtroRol(value === 'otro');
                        },
                      }}
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

              {/* Campo "Otro rol" */}
              {showOtroRol && (
                <div className="row" id="otro-rol-container">
                  <div className="col-md-12 mb-4 wow animate__animated animate__fadeInUp">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="otro_rol"
                        id="otro_rol"
                        className="form-control"
                        placeholder="Otro"
                        required
                      />
                      <label htmlFor="otro_rol">Otro</label>
                    </div>
                  </div>
                </div>
              )}

              {/* Mensaje */}
              <div className="mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="1s">
                <div className="form-floating">
                  <textarea
                    name="mensaje"
                    id="mensaje"
                    className="form-control"
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
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
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
