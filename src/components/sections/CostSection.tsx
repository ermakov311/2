'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { CARS_DATA } from '@/lib/constants';
import Image from 'next/image';
import CostCalculationModal from '@/components/ui/CostCalculationModal';

export default function CostSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const swiperRef = useRef<SwiperType>(null);

  const currentCar = CARS_DATA[activeSlide];

  return (
    <section id="calculator" className="bg-[#1d1d21] py-[81px] relative">
      <div
        className="absolute w-full z-0"
        style={{
          height: '222px',
          top: '50%',
          left: '0',
          background:
            'linear-gradient(180deg, rgba(188, 188, 188, 0.3) 0%, rgba(188, 188, 188, 0.2) 20.96%, rgba(111, 111, 113, 0.2) 41.83%, rgba(29, 29, 33, 0.4) 76.63%), linear-gradient(90deg, rgba(29, 29, 33, 0) 0%, rgba(29, 29, 33, 0.3) 100%), linear-gradient(270deg, rgba(29, 29, 33, 0) 0%, rgba(29, 29, 33, 0.3) 100%)',
        }}
      />

      <div className="w-full px-4 relative z-10">
        <div className="text-center mb-[2px]">
          <h2
            className="font-semibold text-white font-manrope"
            style={{
              fontSize: 'clamp(32px, 3.33vw, 48px)',
              lineHeight: '1.38',
            }}
          >
            Расчет стоимости
          </h2>
        </div>

        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-4">
            <p
              className="font-medium text-[#e8b48b] font-manrope"
              style={{
                fontSize: 'clamp(20px, 1.94vw, 28px)',
                lineHeight: '1.38',
              }}
            >
              Масляный сервис
            </p>
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <div className="rounded-full flex items-center justify-center hover:opacity-80 transition-opacity mt-[5px]">
                <Image
                  src="/images/ui/addition.png"
                  alt="Info"
                  width={24}
                  height={24}
                />
              </div>

              {showTooltip && (
                <div
                  className="absolute top-8 z-50 pl-[21px] pr-[21px] pt-[10px] pb-[10px]"
                  style={{
                    boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.15)',
                    background: 'rgba(134, 114, 92, 0.9)',
                    borderRadius: '4px',
                    width: 'clamp(240px, 19.1vw, 275px)',
                    height: 'clamp(90px, 7.43vw, 107px)',
                    right: '-17px',
                    top: '43px',
                  }}
                >
                  <div className="">
                    {currentCar.services &&
                      currentCar.services.map((service, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center mb-[3px]"
                        >
                          <p
                            style={{
                              font: '400 14px/1.422 font-manrope, sans-serif',
                              color: '#fff',
                            }}
                          >
                            {service.name}
                          </p>
                          <p
                            style={{
                              font: '400 14px/1.422 font-manrope, sans-serif',
                              color: '#fff',
                            }}
                          >
                            {service.price}
                          </p>
                        </div>
                      ))}
                  </div>
                  <div
                    className="absolute -top-2 w-4 h-4"
                    style={{
                      right: '20px',
                      background: 'rgba(134, 114, 92, 0.9)',
                      transform: 'rotate(45deg)',
                    }}
                  ></div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            allowTouchMove={true}
            speed={500}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            className="h-[400px] w-full"
          >
            {CARS_DATA.map((car, index) => (
              <SwiperSlide key={car.id}>
                <div className="relative h-full">
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div
                      className="relative"
                      style={{ 
                        width: 'clamp(400px, 40.83vw, 588px)', 
                        height: 'clamp(200px, 20vw, 288px)' 
                      }}
                    >
                      <Image
                        src={car.image}
                        alt={car.name}
                        fill
                        className="object-contain"
                        priority={index === 0}
                      />
                    </div>
                  </div>

                  {index === activeSlide && (
                    <div className="absolute inset-0 flex items-center justify-between">
                      <div
                        className="opacity-30 blur-sm relative overflow-hidden"
                        style={{
                          width: 'clamp(400px, 40.83vw, 588px)',
                          height: 'clamp(200px, 20vw, 288px)',
                          left: 'clamp(-200px, -20.42vw, -294px)',
                          position: 'absolute',
                          zIndex: 15,
                        }}
                      >
                        <Image
                          src={
                            CARS_DATA[
                              (activeSlide - 1 + CARS_DATA.length) %
                                CARS_DATA.length
                            ].image
                          }
                          alt="Previous car"
                          fill
                          className="object-contain"
                        />
                      </div>

                      <div
                        className="opacity-30 blur-sm relative overflow-hidden z-20"
                        style={{
                          width: 'clamp(400px, 40.83vw, 588px)',
                          height: 'clamp(200px, 20vw, 288px)',
                          right: 'clamp(-200px, -20.42vw, -294px)',
                          position: 'absolute',
                        }}
                      >
                        <Image
                          src={
                            CARS_DATA[(activeSlide + 1) % CARS_DATA.length]
                              .image
                          }
                          alt="Next car"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => {
              if (isTransitioning) return;
              setIsTransitioning(true);
              console.log(
                'Previous clicked, current slide:',
                swiperRef.current?.realIndex
              );
              swiperRef.current?.slidePrev();
              setTimeout(() => setIsTransitioning(false), 600);
            }}
            disabled={isTransitioning}
            className="absolute z-20 w-12 h-12 hover:opacity-80 transition-opacity disabled:opacity-50"
            style={{
              left: 'calc(50% - clamp(300px, 27.78vw, 400px) - 24px)',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <Image
              src="/images/ui/arrowLeft.png"
              alt="Previous"
              width={48}
              height={48}
              className="w-full h-full"
            />
          </button>

          <button
            onClick={() => {
              if (isTransitioning) return;
              setIsTransitioning(true);
              console.log(
                'Next clicked, current slide:',
                swiperRef.current?.realIndex
              );
              swiperRef.current?.slideNext();
              setTimeout(() => setIsTransitioning(false), 600);
            }}
            disabled={isTransitioning}
            className="absolute z-20 w-12 h-12 hover:opacity-80 transition-opacity disabled:opacity-50"
            style={{
              left: 'calc(50% + clamp(300px, 27.78vw, 400px) - 24px)',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <Image
              src="/images/ui/arrowRight.png"
              alt="Next"
              width={48}
              height={48}
              className="w-full h-full"
            />
          </button>
        </div>

        <div className="text-center" style={{ marginTop: '-30px' }}>
          <h3
            className="text-white"
            style={{
              font: '400 clamp(18px, 1.67vw, 24px)/1.422 font-manrope, sans-serif',
              color: '#fff',
              marginBottom: 'clamp(16px, 1.11vw, 16px)'
            }}
          >
            {currentCar.name}
          </h3>

          <div className="flex items-center justify-center gap-[220px] mb-6">
            <span
              style={{
                font: '200 clamp(14px, 1.39vw, 20px)/1.422 font-manrope, sans-serif',
                color: 'rgba(255, 255, 255, 0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              className=""
            >
              Сравните цены и сервис
            </span>
            <p
              style={{
                font: '700 clamp(45px, 4.44vw, 64px) font-manrope, sans-serif',
                letterSpacing: '-0.02em',
                color: '#c6946e',
              }}
            >
              <span style={{ font: '700 clamp(45px, 4.44vw, 64px) font-manrope, sans-serif' }}>
                {currentCar.price.split(',')[0]}
              </span>{' '}
              <span style={{ font: '600 clamp(45px, 4.44vw, 64px) font-manrope, sans-serif' }}>
                ₽
              </span>
            </p>
            <span
                style={{
                  font: '200 clamp(14px, 1.39vw, 20px)/1.422 font-manrope, sans-serif',
                  color: 'rgba(255, 255, 255, 0.5)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                className=""
              >
                Почувствуйте разницу
              </span>
          </div>

          <button
            className="transition-opacity hover:opacity-80 mt-[27px]"
            style={{
              border: '1px solid #e8b48b',
              borderRadius: '50px',
              paddingBlock: '14px',
              paddingInline: '45px',
              color: '#e8b48b',
              background: 'transparent',
              font: '400 clamp(14px, 1.11vw, 16px) font-manrope, sans-serif',
            }}
            onClick={() => setIsModalOpen(true)}
          >
            Рассчитать другой/свой автомобиль
          </button>
        </div>
      </div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev,
        .swiper-button-disabled,
        .swiper-button-lock {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
        
        .swiper .swiper-button-next,
        .swiper .swiper-button-prev {
          display: none !important;
        }
      `}</style>

      <CostCalculationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
