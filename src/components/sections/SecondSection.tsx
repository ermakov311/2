'use client';

import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Button from '@/components/ui/Button';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [
  {
    id: 1,
    background: '/images/slides/slide1.png',
    title: <>Новый формат <br /> обслуживания автомобиля</>,
    subtitle: <>Сравните цены и уровень сервиса. <br />Почувствуте разницу!</>,
    buttonText: 'Нам есть чем Вас удивить',
  },
  {
    id: 2,
    background: '/images/slides/slide2.png',
    title:  <>Максимум услуг <br /> в одном месте</>,
    subtitle: 'Бережём ваше время',
    buttonText: 'Загляните в гости',
  },
  {
    id: 3,
    background: '/images/slides/slide3.png',
    title: <>Команда <br /> профессионалов №1</>,
    subtitle: 'Знаем об автомобилях всё',
    buttonText: 'Давайте знакомиться',
  },
  {
    id: 4,
    background: '/images/slides/slide1.png',
    title: <>Новый формат <br /> обслуживания автомобиля</>,
    subtitle: <>Сравните цены и уровень сервиса. <br />Почувствуте разницу!</>,
    buttonText: 'Нам есть чем Вас удивить',
  },
  {
    id: 5,
    background: '/images/slides/slide2.png',
    title: <>Максимум услуг <br /> в одном месте</>,
    subtitle: 'Бережём ваше время',
    buttonText: 'Загляните в гости ',
  },
  {
    id: 6,
    background: '/images/slides/slide3.png',
    title: <>Команда <br /> профессионалов №1</>,
    subtitle: 'Знаем об автомобилях всё',
    buttonText: 'Давайте знакомиться',
  },
  {
    id: 7,
    background: '/images/slides/slide1.png',
    title: <>Новый формат <br /> обслуживания автомобиля</>,
    subtitle: <>Сравните цены и уровень сервиса. <br />Почувствуте разницу!</>,
    buttonText: 'Нам есть чем Вас удивить',
  },
];

export default function SecondSection() {
  const swiperRef = useRef<SwiperType>(null);

  useEffect(() => {
    if (swiperRef.current) {
      console.log('Swiper initialized with slides:', slides.length);
    }
  }, []);

  return (
    <section id='about' className="relative bg-black" style={{ height: 'clamp(600px, 55.56vw, 800px)' }}>
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        pagination={{
          clickable: true,
          enabled: true,
          dynamicBullets: false,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.background})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
              
              <div className="relative h-full max-w-desktop mx-auto px-4">
                <div style={{ paddingLeft: 'clamp(40px, 8.33vw, 120px)', paddingTop: '52px' }}>
                  <h2
                    className="text-white font-bold leading-[1.38] font-manrope"
                    style={{ 
                      fontSize: 'clamp(28px, 3.19vw, 46px)',
                      fontWeight: '700',
                      marginBottom: '11px'
                    }}
                  >
                    {slide.title}
                  </h2>
                  
                  <p
                    className="leading-[1.38] font-manrope mb-[30px]"
                    style={{ 
                      fontSize: 'clamp(16px, 1.81vw, 26px)',
                      fontWeight: '400',
                      color: 'rgba(242, 242, 242, 0.7)',
                    }}
                  >
                    {slide.subtitle}
                  </p>
                  
                  <Button 
                    size="lg"
                    className="border-[#b89d7e] text-[#b89d7e] p-[14px_45px] text-[20px] font-normal tracking-[-0.02em] hover:bg-[#b89d7e] hover:text-white"
                    onClick={() => window.location.href = '/services'}
                  >
                    {slide.buttonText}
                  </Button>
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

