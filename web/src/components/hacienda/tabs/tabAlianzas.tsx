'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// IMPORTANTE
import 'swiper/css';
import 'swiper/css/navigation';

import type { AlianzaItem } from '@/lib/types';

type Props = {
  alianzas: AlianzaItem[];
  text: string;
};

export default function TabAlianzas({ alianzas, text }: Props) {
  return (
    <>
      <div className="row justify-content-center mb-5">
        <div className="col-lg-7">
          <p className="text-center">{text}</p>
        </div>
      </div>

      <div className="row justify-content-center px-3">
        <div className="col-12 position-relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 4 },
            }}
            className="alianzasSwiper"
          >
            {alianzas.map((item) => (
              <SwiperSlide key={item.title}>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    title={item.title}
                    className="swiper-logo img-fluid mb-3"
                  />
                </div>
              </SwiperSlide>
            ))}

            {/* Las flechas DEBEN estar dentro del Swiper */}
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </Swiper>
        </div>
      </div>
    </>
  );
}
