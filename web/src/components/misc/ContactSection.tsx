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
          <div className="col-lg-6 contacto-bg border-top-right-radius-40 wow animate__animated animate__fadeIn"></div>

          <div className="col-lg-6 contacto-form-pe contacto-content-bg py-7 ps-lg-5">
            <hr className="heading-hr mb-4 wow animate__animated animate__fadeInUp" />
            <h2 className="mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              {title}
            </h2>
            <p className="mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
              {description}
            </p>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div
                  className="col-md-6 mb-4 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="form-floating">
                    <input
                      type="text"
                      name="nombre"
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
                      className="form-control"
                      placeholder="Apellido"
                      required
                    />
                    <label htmlFor="apellido">Apellido</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div
                  className="col-md-6 mb-4 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="form-floating">
                    <input
                      type="tel"
                      name="celular"
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
                      className="form-control"
                      placeholder="E-mail"
                      required
                    />
                    <label htmlFor="email">E-mail</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div
                  className="col-md-6 mb-4 wow animate__animated animate__fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="form-floating">
                    <TomSelectControl id="rol" className="form-select" required defaultValue="">
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
                  data-wow-delay="0.8s"
                >
                  <div className="form-floating">
                    <input
                      type="text"
                      name="localidad"
                      className="form-control"
                      placeholder="Localidad"
                      required
                    />
                    <label htmlFor="localidad">Localidad</label>
                  </div>
                </div>
              </div>

              <div className="mb-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.9s">
                <div className="form-floating">
                  <textarea
                    name="mensaje"
                    className="form-control"
                    placeholder="Mensaje"
                    rows={4}
                    required
                  />
                  <label htmlFor="mensaje">Mensaje: ¿Qué te gustaría consultar?</label>
                </div>
              </div>

              <div className="text-end wow animate__animated animate__fadeInUp" data-wow-delay="1s">
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
