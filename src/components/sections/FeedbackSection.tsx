'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import { FEEDBACK_DATA } from '@/lib/constants';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const ratingImages = [
  '/images/feedbackSection/ortus.png',
  '/images/feedbackSection/vlru.png',
  '/images/feedbackSection/yandex.png',
  '/images/feedbackSection/google.png',
  '/images/feedbackSection/2gus.png',
];

export default function FeedbackSection() {
  const swiperRef = useRef<SwiperType>(null);

  return (
    <section id="feedback" className="relative bg-white" style={{ height: 'clamp(660px, 61.11vw, 860px)' }}>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Pagination, EffectFade]}
        pagination={{
          clickable: true,
          enabled: true,
          dynamicBullets: false,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        loop={true}
        className="h-full"
      >
        <SwiperSlide>
          <div className="h-full bg-white relative">
            <div className="container relative h-full mx-auto px-4">
              <div className="flex items-start h-full">
                <div className="flex items-start pt-0">
                  <Image
                    src="/images/feedbackSection/img.png"
                    alt="Rating"
                    width={833}
                    height={700}
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </div>

                <div className="flex flex-col justify-center mt-[30px]">
                  <h2
                    className="font-manrope"
                    style={{
                      font: '700 clamp(32px, 3.33vw, 48px) / 1.38 font-manrope, sans-serif',
                      color: '#1d1d21',
                      marginBottom: 'clamp(16px, 1.39vw, 24px)',
                    }}
                  >
                    Честные отзывы<br />
                    наших гостей
                  </h2>

                  <p
                    className="font-manrope"
                    style={{
                      font: '500 clamp(20px, 1.94vw, 28px) / 1.38 font-manrope, sans-serif',
                      color: 'rgba(29, 29, 33, 0.7)',
                      marginBottom: 'clamp(20px, 2.22vw, 32px)',
                    }}
                  >
                    Рейтинги
                  </p>

                  <div className="flex flex-col">
                    {ratingImages.map((img, index) => (
                      <React.Fragment key={index}>
                        <div style={{ width: 'clamp(300px, 30.56vw, 441px)' }}>
                          <Image
                            src={img}
                            alt={`Rating ${index + 1}`}
                            width={441}
                            height={80}
                            className="object-contain w-full"
                            style={{ width: '100%', height: 'auto' }}
                          />
                        </div>
                        {index < ratingImages.length - 1 && (
                          <div
                            style={{
                              border: '1px solid rgba(163, 128, 89, 0.25)',
                              width: 'clamp(300px, 30.56vw, 441px)',
                              marginTop: 'clamp(10px, 1.04vw, 15px)',
                              marginBottom: 'clamp(10px, 1.04vw, 15px)',
                            }}
                          />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {FEEDBACK_DATA.map((feedback) => (
          <SwiperSlide key={feedback.id}>
            <div className="h-full bg-white relative">
              <div className="container relative h-full mx-auto px-4">
                <div className="flex flex-col h-full">
                  <h2
                    className="text-center font-manrope"
                    style={{
                      font: '700 clamp(32px, 3.33vw, 48px) / 1.38 font-manrope, sans-serif',
                      color: '#1d1d21',
                      paddingTop: '55px',
                      marginBottom: '20px',
                    }}
                  >
                    Что о нас говорят
                  </h2>

                  <p
                    className="font-manrope text-center"
                    style={{
                      font: '500 clamp(20px, 1.94vw, 28px) / 1.38 font-manrope, sans-serif',
                      color: 'rgba(29, 29, 33, 0.7)',
                      marginBottom: '40px',
                    }}
                  >
                    источник {feedback.source}
                  </p>

                  <div className="container mx-auto flex-1">
                    <div className="flex items-start justify-center" style={{ gap: 'clamp(24px, 2.78vw, 40px)' }}>
                      {feedback.screenshots.map((screenshot, index) => (
                        <div key={index} style={{ width: '360px' }}>
                          <Image
                            src={screenshot}
                            alt={`Feedback ${feedback.source} ${index + 1}`}
                            width={360}
                            height={240}
                            className="object-contain w-full"
                            style={{ height: 'auto' }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="absolute z-10" style={{ bottom: 'clamp(25px, 2.29vw, 33px)', left: '50%', transform: 'translateX(-50%)' }}>
        <div className="flex items-center" style={{ gap: 'clamp(120px, 13.89vw, 200px)' }}>
          <button 
            onClick={() => swiperRef.current?.slidePrev()}
            style={{ width: 'clamp(40px, 4.17vw, 60px)', height: 'clamp(40px, 4.17vw, 60px)' }}
            className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img src="/images/ui/arrowLeft.png" alt="Previous" className="w-full h-full object-contain" />
          </button>
          
          <button 
            onClick={() => swiperRef.current?.slideNext()}
            style={{ width: 'clamp(40px, 4.17vw, 60px)', height: 'clamp(40px, 4.17vw, 60px)' }}
            className="flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img src="/images/ui/arrowRight.png" alt="Next" className="w-full h-full object-contain" />
          </button>
        </div>
      </div>
      
      <style jsx global>{`
        .swiper-pagination {
          position: absolute !important;
          bottom: clamp(45px, 4.17vw, 60px) !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: auto !important;
          height: auto !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: clamp(8px, 0.69vw, 12px) !important;
          z-index: 20 !important;
        }
        
        .swiper-pagination-bullet {
          width: clamp(8px, 0.69vw, 12px) !important;
          height: clamp(8px, 0.69vw, 12px) !important;
          background-color: #BBBBBB !important;
          opacity: 1 !important;
          margin: 0 !important;
          display: inline-block !important;
        }
        
        .swiper-pagination-bullet-active {
          background-color: #B89D7E !important;
        }
      `}</style>
    </section>
  );
}

