'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { scrollToSection } from '@/lib/utils';

export default function Hero() {
  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <section
      id="top"
      className="relative overflow-x-hidden bg-[#1c1c20]"
      style={{ height: 'clamp(600px, 55.56vw, 800px)' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero/bg.png')" }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 z-5"
        style={{
          height: 'clamp(354px, 32.78vw, 472px)',
          boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.5)',
          background:
            'linear-gradient(184deg, rgba(28, 28, 32, 0) 0%, rgba(28, 28, 32, 0.8) 56.46%, #1c1c20 100%)',
        }}
      />

      <div className="relative z-10 flex justify-center h-full container overflow-x-hidden">
        <div className="w-full max-w-desktop mx-auto px-4" style={{ paddingTop: 'clamp(100px, 14.44vw, 208px)', maxWidth: '100%' }}>
          <div style={{ paddingLeft: 'clamp(40px, 8.33vw, 120px)' }}>
            <h1 
              className="font-bold leading-[1.38] text-white font-manrope"
              style={{ fontSize: 'clamp(36px, 3.89vw, 56px)' }}
            >
              Добро пожаловать
              <br />в автоцентр <span className="text-accent">№1</span>
            </h1>
          </div>

          <div className="flex items-start" style={{ marginLeft: 'clamp(40px, 8.33vw, 120px)' }}>
            <svg
              width="43"
              height="9"
              viewBox="0 0 43 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0"
              style={{ 
                width: 'clamp(32px, 2.99vw, 43px)',
                height: 'clamp(7px, 0.63vw, 9px)',
                marginTop: 'clamp(30px, 3.33vw, 48px)'
              }}
            >
              <circle
                cx="38.5"
                cy="4.5"
                r="4"
                transform="rotate(-180 38.5 4.5)"
                stroke="#BBBBBB"
              />
              <circle
                cx="21.5"
                cy="4.5"
                r="4"
                transform="rotate(-180 21.5 4.5)"
                stroke="#BBBBBB"
              />
              <circle
                cx="4.5"
                cy="4.5"
                r="4.5"
                transform="rotate(-180 4.5 4.5)"
                fill="#B89D7E"
              />
            </svg>
            <p 
              className="font-normal leading-[1.38] text-[#f2f2f2] font-manrope"
              style={{ 
                fontSize: 'clamp(18px, 1.94vw, 28px)',
                marginLeft: 'clamp(12px, 1.18vw, 17px)',
                marginTop: 'clamp(22px, 2.43vw, 35px)'
              }}
            >
              Меня зовут Валерия <br />
              что Вас интересует?
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 container overflow-x-hidden">
          <div className="max-w-desktop mx-auto px-4" style={{ maxWidth: '100%' }}>
            <div 
              className="flex gap-[57px]"
              style={{ 
                paddingLeft: 'clamp(20px, calc(20px + (140 - 20) * ((100vw - 1024px) / (1440 - 1024))), 140px)',
                paddingBottom: 'clamp(40px, 4.93vw, 71px)',
                gap: 'clamp(8px, calc(8px + (40 - 8) * ((100vw - 1024px) / (1440 - 1024))), 40px)',
                maxWidth: '100%',
                flexWrap: 'nowrap'
              }}
            >
              <Button
                size="lg"
                onClick={() => window.open('https://ortus.ru/w/2222999')}
              >
                Записаться
              </Button>

              <Button
                size="lg"
                onClick={() => handleScrollToSection('about')}
              >
                <span style={{ whiteSpace: 'nowrap' }}>Познакомиться с компанией</span>
              </Button>

              <Button
                size="lg"
                onClick={() => handleScrollToSection('calculator')}
              >
                <span style={{ whiteSpace: 'nowrap' }}>Узнать стоимость</span>
              </Button>

              <Button size="lg" onClick={() => handleScrollToSection('footer')}>
                Контакты
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
