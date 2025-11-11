'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ACQUAINTANCE_SERVICES } from '@/lib/constants';
import GiftIcon from '@/components/ui/GiftIcon';
import GiftModal from '@/components/ui/GiftModal';

export default function AcquaintanceSection() {
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false);

  return (
    <section
      id="acquaintance"
      className="bg-white"
      style={{ paddingTop: 'clamp(40px, 5.56vw, 80px)' }}
    >
      <div className="max-w-desktop mx-auto px-4">
        <div
          className="text-center"
          style={{ marginBottom: 'clamp(10px, 1.39vw, 20px)' }}
        >
          <h2
            className="font-bold"
            style={{
              fontSize: 'clamp(32px, 3.33vw, 48px)',
              lineHeight: '1.38',
              color: '#1d1d21',
            }}
          >
            Давай знакомиться!
          </h2>
        </div>

        <div
          className="text-center"
          style={{ marginBottom: 'clamp(28px, 3.96vw, 57px)' }}
        >
          <p
            className="font-medium"
            style={{
              fontSize: 'clamp(20px, 1.94vw, 28px)',
              lineHeight: '1.38',
              textAlign: 'center',
              color: '#1d1d21',
            }}
          >
            Выберите желаемую услугу
            <br />и почувствуйте разницу
          </p>
        </div>
      </div>

      <div className="w-full">
        {ACQUAINTANCE_SERVICES.map((service, index) => (
          <div
            key={service.id}
            className="relative w-full overflow-hidden"
            style={{ height: '398px' }}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />

            {index === 0 && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="container relative h-full mx-auto" style={{ paddingLeft: 'clamp(16px, 9.72vw, 140px)' }}>
                  <div
                    className="absolute z-10 pointer-events-auto"
                    style={{
                      bottom: '40px',
                      left: '140px',
                    }}
                  >
                    <GiftIcon onClick={() => setIsGiftModalOpen(true)} />
                  </div>
                </div>
              </div>
            )}

            <div className="absolute inset-0 flex items-center pr-[140px]">
              <div
                className="container mx-auto flex items-center justify-end"
                style={{ paddingLeft: 'clamp(16px, 9.72vw, 140px)' }}
              >
                <div className="flex items-center justify-end" style={{ gap: '35px' }}>
                  <div 
                    className="flex flex-col" 
                    style={{ 
                      alignItems: 'flex-start',
                      minWidth: 'clamp(200px, 23.61vw, 340px)' 
                    }}
                  >
                    <h3
                      className="font-normal text-white pr-[34px]"
                      style={{ fontSize: 'clamp(20px, 2.22vw, 32px)', textAlign: 'left' }}
                    >
                      {service.title.split('<br />').map((line, index, array) => (
                        <React.Fragment key={index}>
                          {line}
                          {index < array.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h3>
                  </div>
                  <Image
                    src="/images/ui/arrowRight.png"
                    alt="Arrow"
                    width={48}
                    height={48}
                    style={{
                      width: 'clamp(32px, 3.33vw, 48px)',
                      height: 'clamp(32px, 3.33vw, 48px)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <GiftModal
        isOpen={isGiftModalOpen}
        onClose={() => setIsGiftModalOpen(false)}
      />
    </section>
  );
}
