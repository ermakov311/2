'use client';

import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="pt-[31px] pb-[39px]" style={{ background: '#41414a' }}>
      <div
        className="container mx-auto"
        style={{
          paddingLeft:
            'clamp(80px, calc(80px + (140 - 80) * ((100vw - 1024px) / (1440 - 1024))), 140px)',
          paddingRight:
            'clamp(100px, calc(100px + (172 - 100) * ((100vw - 1024px) / (1440 - 1024))), 172px)',
        }}
      >
        <div className="flex flex-row items-start">
          <div className="flex-1 min-w-[244px]">
            <div
              className="relative"
              style={{
                width:
                  'clamp(70px, calc(70px + (94 - 70) * ((100vw - 1024px) / (1440 - 1024))), 94px)',
                height:
                  'clamp(38px, calc(38px + (50 - 38) * ((100vw - 1024px) / (1440 - 1024))), 50px)',
              }}
            >
              <Image
                src="/images/header/logo.png"
                alt="Логотип"
                fill
                className="object-contain"
                sizes="180px"
                priority={false}
              />
            </div>
            <p
              className="mt-[39px]"
              style={{
                font: '400 clamp(8px, calc(8px + (9 - 8) * ((100vw - 1024px) / (1440 - 1024))), 9px) var(--font-manrope, Manrope, sans-serif)',
                color: '#b4b4b4',
              }}
            >
              Вся представленная на сайте информация стоимости
              <br />
              сервисного обслуживания носит исключительно
              <br />
              информационный характер и не является публичной
              <br />
              офертой, определяемой положениями ст. 437(2) ГКРФ
            </p>
          </div>

          <div
            style={{
              width:
                'clamp(24px, calc(24px + (56 - 24) * ((100vw - 1024px) / (1440 - 1024))), 56px)',
            }}
          />

          <div className="min-w-[186px] mt-[10px]">
            <div
              style={{
                font: '700 clamp(16px, calc(16px + (20 - 16) * ((100vw - 1024px) / (1440 - 1024))), 20px) var(--font-manrope, Manrope, sans-serif)',
                letterSpacing: '-0.02em',
                color: '#fff',
              }}
            >
              Главная
            </div>
            <nav className="mt-[7px] flex flex-col">
              {[
                'Акции:',
                'О компании:about',
                'Расчет стоимости:calculator',
                '5 фактов об автоцентре:five',
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.split(':')[1]}`}
                  style={{
                    font: '400 clamp(12px, calc(12px + (14 - 12) * ((100vw - 1024px) / (1440 - 1024))), 14px) / 1.71429 var(--font-manrope, Manrope, sans-serif)',
                    letterSpacing: '-0.02em',
                    color: '#fff',
                  }}
                >
                  {item.split(':')[0]}
                </a>
              ))}
            </nav>
          </div>

          <div
            style={{
              width:
                'clamp(48px, calc(48px + (112 - 48) * ((100vw - 1024px) / (1440 - 1024))), 112px)',
            }}
          />

          <div className="min-w-[200px] mt-[10px]">
            <div
              style={{
                font: '700 clamp(16px, calc(16px + (20 - 16) * ((100vw - 1024px) / (1440 - 1024))), 20px) var(--font-manrope, Manrope, sans-serif)',
                letterSpacing: '-0.02em',
                color: '#fff',
              }}
            >
              Каталог
            </div>
            <nav className="mt-[7px] flex flex-col">
              {['Честные отзывы:feedback', 'Приложение Ortus:app', 'Филиалы:filials'].map((item) => (
                <a
                  key={item}
                  href={`#${item.split(':')[1]}`}
                  style={{
                    font: '400 clamp(12px, calc(12px + (14 - 12) * ((100vw - 1024px) / (1440 - 1024))), 14px) / 1.71429 var(--font-manrope, Manrope, sans-serif)',
                    letterSpacing: '-0.02em',
                    color: '#fff',
                  }}
                >
                  {item.split(':')[0]}
                </a>
              ))}
            </nav>
          </div>

          <div
            style={{
              width:
                'clamp(72px, calc(72px + (181 - 72) * ((100vw - 1024px) / (1440 - 1024))), 181px)',
            }}
          />

          <div className="flex-1 min-w-[240px] mt-[10px]">
            <div
              style={{
                font: '500 clamp(14px, calc(14px + (16 - 14) * ((100vw - 1024px) / (1440 - 1024))), 16px) / 1.467 var(--font-manrope, Manrope, sans-serif)',
                color: '#fff',
              }}
            >
              Мы рады вам 7 дней в неделю
              <br />
              09:00 - 20:00
            </div>

            <div id="footer" className="mt-4 flex items-center gap-3">
              <a
                href="https://wa.me/74232222999"
                style={{
                  font: '800 clamp(16px, calc(16px + (20 - 16) * ((100vw - 1024px) / (1440 - 1024))), 20px) var(--font-manrope, Manrope, sans-serif)',
                  letterSpacing: '-0.02em',
                  color: '#fff',
                }}
              >
                +7 (423) 2222-999
              </a>
              <a
                
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center"
                style={{
                  width:
                    'clamp(16px, calc(16px + (20 - 16) * ((100vw - 1024px) / (1440 - 1024))), 20px)',
                  height:
                    'clamp(16px, calc(16px + (20 - 16) * ((100vw - 1024px) / (1440 - 1024))), 20px)',
                }}
              >
                <Image
                  src={'/images/ui/watsap.png'}
                  alt="icon"
                  width={20}
                  height={20}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </a>
            </div>

            <div className="mt-4">
              <a
                href="/files/politiv-privacy.pdf"
                download="Политика_конфиденциальности.pdf"
                style={{
                  font: '400 clamp(12px, calc(12px + (14 - 12) * ((100vw - 1024px) / (1440 - 1024))), 14px) var(--font-manrope, Manrope, sans-serif)',
                  letterSpacing: '-0.02em',
                  textDecoration: 'underline',
                  textDecorationSkipInk: 'none',
                  color: '#e8b48b',
                }}
              >
                Политика конфиденциальности
              </a>
            </div>

            <div
              className="mt-4"
              style={{
                font: '400 clamp(10px, calc(10px + (12 - 10) * ((100vw - 1024px) / (1440 - 1024))), 12px) var(--font-manrope, Manrope, sans-serif)',
                letterSpacing: '-0.02em',
                color: '#b4b4b4',
              }}
            >
              © 2025 Специализированный автосервис
              <br />
              АвтоГарантСити. Все права защищены.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
