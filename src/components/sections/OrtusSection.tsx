'use client';

import React from 'react';
import Image from 'next/image';

export default function OrtusSection() {
  return (
    <section 
      id = "app"
      className="relative"
      style={{ 
        height: 'clamp(600px, calc(600px + (1064 - 600) * (100vw - 1024px) / (1440 - 1024)), 1064px)',
        backgroundColor: '#0A254E'
      }}
    >
      <div className="container relative h-full mx-auto px-4">
        <div 
          className="relative h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/images/ortusSection/bg.png)',
          }}
        >
          <div className="relative h-full">
            <div 
              className="flex items-start"
              style={{
                paddingTop: 'clamp(60px, calc(60px + (100 - 60) * (100vw - 1024px) / (1440 - 1024)), 100px)',
                paddingLeft: 'clamp(80px, calc(80px + (150 - 80) * (100vw - 1024px) / (1440 - 1024)), 150px)'
              }}
            >
              <div className="flex items-start">
                <div className="font-manrope">
                  <div
                    className="font-manrope"
                    style={{
                      font: '500 clamp(40px, calc(40px + (86 - 40) * (100vw - 1024px) / (1440 - 1024)), 86px) / 1.1 font-manrope, sans-serif',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      color: '#fff',
                      lineHeight: '1.1',
                    }}
                  >
                    ЭЛЕКТРОННАЯ
                  </div>
                  
                  <div className="flex items-start" style={{ gap: 'clamp(20px, calc(20px + (40 - 20) * (100vw - 1024px) / (1440 - 1024)), 40px)' }}>
                    <div
                      className="font-manrope"
                      style={{
                        font: '500 clamp(40px, calc(40px + (86 - 40) * (100vw - 1024px) / (1440 - 1024)), 86px) / 1.1 font-manrope, sans-serif',
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase',
                        color: '#fff',
                        lineHeight: '1.1',
                      }}
                    >
                      ЛУЧШЕ
                    </div>
                    
                    <div
                      className="font-manrope"
                      style={{
                        fontSize: `clamp(16px, calc(16px + (30 - 16) * (100vw - 1024px) / (1440 - 1024)), 30px)`,
                        fontWeight: `300`,
                        color: '#fff',
                        lineHeight: '1.1',
                        textAlign: 'right',
                        marginTop: 'clamp(10px, calc(10px + (20 - 10) * (100vw - 1024px) / (1440 - 1024)), 20px)',
                        marginLeft: 'clamp(5px, calc(5px + (20 - 5) * (100vw - 1024px) / (1440 - 1024)), 20px)',
                      }}
                    >
                      сервисная книжка<br />
                      вашего автомобиля
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button 
              className="absolute cursor-pointer hover:opacity-80 transition-opacity"
              style={{
                top: 'clamp(50px, calc(50px + (85 - 50) * (100vw - 1024px) / (1440 - 1024)), 85px)',
                right: 'clamp(80px, calc(80px + (140 - 80) * (100vw - 1024px) / (1440 - 1024)), 140px)'
              }}
              onClick={() => window.open("https://web.ortus.ru/")}
            >
              <Image
                src="/images/ui/download.png"
                alt="Download"
                width={215}
                height={214}
                className="object-contain"
                style={{
                  width: 'clamp(120px, calc(120px + (215 - 120) * (100vw - 1024px) / (1440 - 1024)), 215px)',
                  height: 'clamp(120px, calc(120px + (214 - 120) * (100vw - 1024px) / (1440 - 1024)), 214px)'
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
