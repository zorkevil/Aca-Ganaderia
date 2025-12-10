'use client';

import dynamic from 'next/dynamic';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';

import { getShortId } from '@/lib/youtube';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

const LiteYouTube = dynamic(() => import('react-lite-youtube-embed'), {
  ssr: false,
});

export default function ShortCardSlider({ urls }: { urls: string[] }) {
  return (
    <div style={{ width: '100%', padding: '20px 0' }}>
      <Swiper
        modules={[Navigation, Pagination, FreeMode]}
        slidesPerView={1.25}
        spaceBetween={20}
        centeredSlides={false}
        navigation
        pagination={{ clickable: true }}
        freeMode={{ enabled: true }}
        breakpoints={{
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
        style={{ padding: '0 10px' }}
      >
        {urls.map((url, i) => {
          const id = getShortId(url);

          return (
            <SwiperSlide key={i}>
              <div
                style={{
                  background: '#fff',
                  borderRadius: '14px',
                  padding: '14px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                <LiteYouTube id={id} title={`Short ${i + 1}`} poster="maxresdefault" />

                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: '600',
                    margin: 0,
                    textAlign: 'center',
                    color: '#333',
                  }}
                >
                  Short #{i + 1}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
