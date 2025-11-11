'use client';

import React from 'react';
import Image from 'next/image';
import { FIVE_FACTS_DATA } from '@/lib/constants';

const FiveFactsSection = () => {
  return (
    <section id="five" className="relative" style={{ paddingTop: 'clamp(60px, 5.56vw, 80px)', paddingBottom: 'clamp(60px, 5.56vw, 80px)' }}>
      <div className="absolute inset-0">
        <Image
          src="/images/fiveFactsSection/bg.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <h2
          className="text-center"
          style={{
            font: '600 clamp(32px, 3.33vw, 48px) / 1.38 font-manrope, sans-serif',
            color: '#fff',
            marginBottom: 'clamp(16px, 1.39vw, 24px)',
          }}
        >
          5 фактов об Автоцентре<br />
          «АвтоГарантСити»
        </h2>

        <p
          className="text-center"
          style={{
            font: '500 clamp(20px, 1.94vw, 28px) / 1.38 font-manrope, sans-serif',
            color: '#e8b48b',
            marginBottom: 'clamp(40px, 4.17vw, 64px)',
          }}
        >
          Результаты убедительнее слов
        </p>

        <div 
          className="flex items-center justify-center mb-[88px]"
          style={{ gap: 'clamp(24px, 2.5vw, 45px)' }}
        >
          {FIVE_FACTS_DATA.map((fact, index) => (
            <React.Fragment key={fact.id}>
              <div className="flex flex-col items-center">
                {fact.number ? (
                  <div
                    className="mb-4"
                    style={{
                      font: '700 clamp(40px, 4.44vw, 64px) font-manrope, sans-serif',
                      letterSpacing: '-0.02em',
                      color: '#e8b48b',
                      textShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    {fact.number}
                  </div>
                ) : (
                  <div
                    className="mb-4"
                    style={{
                      width: 'clamp(40px, 6.67vw, 70px)',
                      height: 'clamp(40px, 6.67vw, 70px)',
                    }}
                  >
                    <Image
                      src={fact.image!}
                      alt="icon"
                      width={70}
                      height={70}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                )}

                <p
                  className="text-center "
                  style={{
                    font: '400 clamp(12px, 1.11vw, 16px) font-manrope, sans-serif',
                    color: '#fff',
                  }}
                >
                  {fact.text.split('<br />').map((line, lineIndex, array) => (
                    <React.Fragment key={lineIndex}>
                      {line}
                      {lineIndex < array.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>

              {index < FIVE_FACTS_DATA.length - 1 && (
                <div
                  className="self-stretch"
                  style={{
                    border: '1px solid #a38059',
                    height: 'clamp(80px, 8.33vw, 120px)',
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="text-center">
          <button
            className="transition-opacity hover:opacity-80 font-manrope"
            style={{
              border: '1px solid #e8b48b',
              borderRadius: '50px',
              paddingBlock: 'clamp(10px, 0.97vw, 14px)',
              paddingInline: 'clamp(32px, 3.06vw, 45px)',
              color: '#e8b48b',
              background: 'transparent',
              font: '400 clamp(12px, 1.11vw, 16px) / 1 font-manrope, sans-serif',
            }}
            onClick={() => window.open('https://wa.me/74232222999')}
          >
            Увидеть своими глазами 
          </button>
        </div>
      </div>
    </section>
  );
};

export default FiveFactsSection;
