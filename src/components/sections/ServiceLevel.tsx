'use client';

import React from 'react';
import Image from 'next/image';

export default function ServiceLevel() {
  return (
    <section
      className="relative"
      style={{
        background: 'linear-gradient(180deg, #1d1d21 0%, #5b5b67 100%)',
        paddingTop: 'clamp(60px, 5.56vw, 96px)',
        paddingBottom: 'clamp(60px, 5.56vw, 96px)',
      }}
    >
      <div className="max-w-desktop mx-auto px-4">
        


        <div className="flex flex-col gap-[clamp(30px, 2.78vw, 40px)]">
          <div
            className="flex items-center gap-[clamp(30px, 3.47vw, 50px)]"
            style={{ fill: '#b89d7e' }}
          >
            <div className="flex-1" style={{ paddingTop: 'clamp(80px, calc(80px + (140 - 80) * ((100vw - 1024px) / (1440 - 1024))), 140px)' }}>
              <h3
                className="font-bold leading-[1.38] font-manrope"
                style={{
                  fontSize: 'clamp(28px, calc(28px + (36 - 28) * ((100vw - 1024px) / (1440 - 1024))), 36px)',
                  color: '#ffffff',
                  marginBottom: 'clamp(20px, calc(20px + (24 - 20) * ((100vw - 1024px) / (1440 - 1024))), 24px)'
                }}
              >
                Современная станция <br />
                экспресс услуг F1
              </h3>
                <p
                  className="leading-[1.38] font-manrope"
                  style={{
                    fontSize: 'clamp(20px, calc(20px + (24 - 20) * ((100vw - 1024px) / (1440 - 1024))), 24px)',
                    fontWeight: '400',
                    color: 'rgba(242, 242, 242, 0.7)',
                    marginBottom: 'clamp(28px, calc(28px + (35 - 28) * ((100vw - 1024px) / (1440 - 1024))), 35px)'
                  }}
                >
                  Мы помогаем гостю предупредить <br /> дорогостоящий ремонт через своевременное <br /> обслуживание
                </p>
                <button
                  onClick={() => window.open("https://ortus.ru/w/2222999")}
                  className="cursor-pointer transition-all duration-200 bg-[#b89d7e] hover:opacity-80"
                  style={{
                    fontSize: 'clamp(14px, calc(14px + (20 - 14) * ((100vw - 1024px) / (1440 - 1024))), 20px)',
                    color: '#ffffff',
                    borderRadius: '50px',
                    paddingBlock: 'clamp(12px, calc(12px + (14 - 12) * ((100vw - 1024px) / (1440 - 1024))), 14px)',
                    paddingInline: 'clamp(36px, calc(36px + (45 - 36) * ((100vw - 1024px) / (1440 - 1024))), 45px)',
                    boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.1)',
                    border: 'none'
                  }}
                >
                  Познакомиться
                </button>
            </div>
            <div className="flex-1" style={{ minWidth: 0 }}>
              <Image
                src="/images/service/img1.png"
                alt="Service 1"
                width={840}
                height={700}
                className="object-contain"
                style={{
                  width: 'clamp(400px, calc(400px + (840 - 400) * ((100vw - 1024px) / (1440 - 1024))), 840px)',
                  height: 'auto',
                  maxWidth: 'none'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          marginTop: 'clamp(80px, calc(80px + (120 - 80) * ((100vw - 1024px) / (1440 - 1024))), 120px)',
          background: 'linear-gradient(135deg, #b89d7e 0%, #b89d7e 100%)',
          clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)',
          transform: 'skewY(-9deg)',
          transformOrigin: 'center',
        }}
      >
        <div className="max-w-desktop mx-auto px-4">
          <div
            className="flex items-center gap-[clamp(30px, 3.47vw, 50px)] px-[clamp(40px, 5.56vw, 80px)] py-[clamp(40px, 5.56vw, 80px)] relative z-10"
            style={{
              transform: 'skewY(9deg)',
              transformOrigin: 'center',
            }}
          >
            <div className="flex-1" style={{ 
              minWidth: 0, 
              overflow: 'visible', 
              marginTop: 'clamp(50px, calc(50px + (80 - 50) * ((100vw - 1024px) / (1440 - 1024))), 80px)',
              marginRight: 'clamp(-40px, calc(-40px + (-60 - -40) * ((100vw - 1024px) / (1440 - 1024))), -60px)',
              marginLeft: 'clamp(-25px, calc(-25px + (-40 - -25) * ((100vw - 1024px) / (1440 - 1024))), -40px)'
            }}>
              <Image
                src="/images/service/img2.png"
                alt="Service 2"
                width={840}
                height={672}
                className="object-contain"
                style={{
                  width: 'clamp(400px, calc(400px + (840 - 400) * ((100vw - 1024px) / (1440 - 1024))), 840px)',
                  height: 'auto',
                  maxWidth: 'none'
                }}
              />
            </div>
            <div className="flex-1" style={{ paddingLeft: 'clamp(320px, calc(320px + (450 - 320) * ((100vw - 1024px) / (1440 - 1024))), 450px)' }}>
              <h3
                className="font-bold leading-[1.38] font-manrope"
                style={{
                  fontSize: 'clamp(28px, calc(28px + (36 - 28) * ((100vw - 1024px) / (1440 - 1024))), 36px)',
                  color: '#ffffff',
                  marginBottom: 'clamp(20px, calc(20px + (24 - 20) * ((100vw - 1024px) / (1440 - 1024))), 24px)'
                }}
              >
                Центр автомобильной <br />
                безопасности
              </h3>
              <p
                className="leading-[1.38] font-manrope"
                style={{
                  fontSize: 'clamp(20px, calc(20px + (24 - 20) * ((100vw - 1024px) / (1440 - 1024))), 24px)',
                  fontWeight: '400',
                  color: 'rgba(242, 242, 242, 0.7)',
                  marginBottom: 'clamp(36px, calc(36px + (44 - 36) * ((100vw - 1024px) / (1440 - 1024))), 44px)'
                }}
              >
                Помогаем Гостю сделать эффективный <br />
                выбор в охране автомобиля
              </p>
                <button
                  onClick={() => window.open("https://ortus.ru/w/2222999")}
                  className="cursor-pointer transition-all duration-200 hover:opacity-80"
                  style={{
                    fontSize: 'clamp(14px, calc(14px + (20 - 14) * ((100vw - 1024px) / (1440 - 1024))), 20px)',
                    color: '#ffffff',
                    borderRadius: '50px',
                    paddingBlock: 'clamp(12px, calc(12px + (14 - 12) * ((100vw - 1024px) / (1440 - 1024))), 14px)',
                    paddingInline: 'clamp(36px, calc(36px + (45 - 36) * ((100vw - 1024px) / (1440 - 1024))), 45px)',
                    boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.1)',
                    background: '#1d1d21',
                    border: 'none'
                  }}
                >
                  Познакомиться
                </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-desktop mx-auto px-4">
        <div className="flex items-center gap-[clamp(30px, 3.47vw, 50px)] mt-[clamp(30px, 2.78vw, 40px)]">
          <div className="flex-1" style={{ paddingTop: 'clamp(80px, calc(80px + (140 - 80) * ((100vw - 1024px) / (1440 - 1024))), 140px)' }}>
            <h3
              className="font-bold leading-[1.38] font-manrope"
              style={{
                fontSize: 'clamp(28px, calc(28px + (36 - 28) * ((100vw - 1024px) / (1440 - 1024))), 36px)',
                color: '#ffffff',
                marginBottom: 'clamp(20px, calc(20px + (24 - 20) * ((100vw - 1024px) / (1440 - 1024))), 24px)'
              }}
            >
              Станция технического <br />
              обслуживания
            </h3>
            <p
              className="leading-[1.38] font-manrope"
              style={{
                fontSize: 'clamp(20px, calc(20px + (24 - 20) * ((100vw - 1024px) / (1440 - 1024))), 24px)',
                  fontWeight: '400',
                  color: 'rgba(242, 242, 242, 0.7)',
                  marginBottom: 'clamp(28px, calc(28px + (35 - 28) * ((100vw - 1024px) / (1440 - 1024))), 35px)'
              }}
            >
              Экспертное обслуживание <br />
              и ремонт автомобилей
            </p>
              <button
                className="cursor-pointer transition-all duration-200 hover:opacity-80"
                style={{
                  fontSize: 'clamp(14px, calc(14px + (20 - 14) * ((100vw - 1024px) / (1440 - 1024))), 20px)',
                  color: '#ffffff',
                  borderRadius: '50px',
                  paddingBlock: 'clamp(12px, calc(12px + (14 - 12) * ((100vw - 1024px) / (1440 - 1024))), 14px)',
                  paddingInline: 'clamp(36px, calc(36px + (45 - 36) * ((100vw - 1024px) / (1440 - 1024))), 45px)',
                  boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.1)',
                  background: '#b89d7e',
                  border: 'none'
                }}
                onClick={() => window.open("https://ortus.ru/w/2222999")}
              >
                Познакомиться
              </button>
          </div>
          <div className="flex-1" style={{ minWidth: 0, overflow: 'visible' }}>
            <Image
              src="/images/service/img3.png"
              alt="Service 3"
              width={840}
              height={672}
              className="object-contain"
              style={{
                width: 'clamp(400px, calc(400px + (840 - 400) * ((100vw - 1024px) / (1440 - 1024))), 840px)',
                height: 'auto',
                maxWidth: 'none'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
