'use client';

import Button from '@/components/ui/Button';

export default function Toyota() {
  return (
    <section id="toyota" className="bg-white">
      <div 
        className="max-w-desktop mx-auto"
        style={{ 
          paddingLeft: 'clamp(40px, 9.72vw, 140px)',
          paddingRight: 'clamp(40px, 9.72vw, 140px)',
          paddingTop: 'clamp(40px, 6.74vw, 97px)',
          paddingBottom: 'clamp(40px, 6.74vw, 97px)'
        }}
      >
        <div className="relative">
          <div
            className="bg-cover bg-center bg-no-repeat mx-auto"
            style={{
              backgroundImage: "url('/images/toyota/bg.png')",
              width: 'clamp(600px, 80.56vw, 1160px)',
              height: 'clamp(390px, 52.57vw, 757px)',
            }}
          >
            <div>
              <div 
                className="text-left"
                style={{ marginLeft: 'clamp(80px, 18.06vw, 260px)' }}
              >
                <p 
                  className="font-light leading-[1.2] text-[#696969] font-manrope"
                  style={{ fontSize: 'clamp(18px, 2.08vw, 30px)' }}
                >
                  Специализированный автоцентр
                </p>
              </div>

              <div className="text-center">
                <div 
                  className="font-semibold leading-[1.2] font-manrope"
                  style={{ fontSize: 'clamp(48px, 6.67vw, 96px)' }}
                >
                  <span className="text-[#d82f2f]">TOYOTA / </span>
                  <span className="text-[#696969]">LE</span>
                  <span className="text-white">X</span>
                  <span className="text-[#696969]">US</span>
                </div>
              </div>
            </div>
          </div>

          <div 
            className="absolute -bottom-[119px] left-1/2 transform -translate-x-1/2 mb-[59px]"
          >
            <Button 
              size="sm"
              className="border-[#1d1d21] text-[#1d1d21] hover:text-white hover:bg-[#b89d7e] hover:border-none"
              onClick={() => window.open('/dev-placeholder')}
            >
              Приглашаем в гости
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
