'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function StartButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  const rootRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const aboutEl = document.getElementById('about');
      if (aboutEl) {
        const passed =
          window.scrollY >= aboutEl.offsetTop + aboutEl.offsetHeight;
        setShow(passed);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const phoneHref = 'tel:+74232222999';
  const whatsappHref =
    'https://wa.me/74232222999?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20хочу%20рассчитать%20стоимость';
  const signupHref = 'https://ortus.ru/w/2222999';
  const appHref = 'https://play.google.com/store/apps/details?id=ru.ortus.assistant';

  if (!show) return null;

  return (
    <div
      ref={rootRef}
      className="z-50 fixed"
      style={{ right: '33px', bottom: '33px' }}
    >
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        className="cursor-pointer hover:opacity-90 transition-opacity focus:outline-none relative"
        style={{ width: '150px', height: '150px' }}
      >
        <Image
          src="/images/ui/startButton.png"
          alt="Start Button"
          width={150}
          height={150}
          className="object-contain relative z-10"
          style={{ width: '100%', height: '100%' }}
        />
        
        <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
          <div
            className="rounded-full"
            style={{
              width: '80px',
              height: '80px',
              background: 'conic-gradient(from 0deg, #3b82f6, #60a5fa, #93c5fd, #60a5fa, #3b82f6, #1d4ed8, #3b82f6)',
              mask: 'radial-gradient(circle, transparent 60%, black 61%)',
              WebkitMask: 'radial-gradient(circle, transparent 60%, black 61%)',
              animation: 'colorShift 3s ease-in-out infinite',
              opacity: 0.9,
              filter: 'blur(0.8px) brightness(1.2)',
            }}
          />
        </div>
      </button>

      <div
        className="absolute right-[70%] bottom-[60%] origin-bottom-right"
        style={{
          transform: isOpen
            ? 'translate(0, 0) scale(1)'
            : 'translate(10px, 10px) scale(0.9)',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
          transition: 'opacity 150ms ease, transform 180ms ease',
        }}
      >
        <div
          className="rounded-[12px] shadow-xl backdrop-blur"
          style={{
            background: 'rgba(29,29,33,0.96)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <ul
            className="p-3 min-w-[220px]"
            style={{ display: 'grid', gap: '8px' }}
          >
            <li>
              <a
                href={phoneHref}
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
              >
                <PhoneIcon />
                <span
                  className="text-white font-manrope"
                  style={{
                    font: '500 14px/1.3 var(--font-manrope, Manrope, sans-serif)',
                  }}
                >
                  Позвонить
                </span>
              </a>
            </li>
            <li>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
              >
                <WhatsAppIcon />
                <span
                  className="text-white font-manrope"
                  style={{
                    font: '500 14px/1.3 var(--font-manrope, Manrope, sans-serif)',
                  }}
                >
                  Рассчитать
                </span>
              </a>
            </li>
            <li>
              <a
                href={signupHref}
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
              >
                <CalendarIcon />
                <span
                  className="text-white font-manrope"
                  style={{
                    font: '500 14px/1.3 var(--font-manrope, Manrope, sans-serif)',
                  }}
                >
                  Записаться
                </span>
              </a>
            </li>
            <li>
              <a
                href={appHref}
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
              >
                <DownloadIcon />
                <span
                  className="text-white font-manrope"
                  style={{
                    font: '500 14px/1.3 var(--font-manrope, Manrope, sans-serif)',
                  }}
                >
                  Скачать приложение
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>


      <style jsx>{`
        @keyframes colorShift {
          0% {
            filter: blur(0.8px) brightness(1.2) hue-rotate(0deg);
          }
          25% {
            filter: blur(0.8px) brightness(1.3) hue-rotate(30deg);
          }
          50% {
            filter: blur(0.8px) brightness(1.4) hue-rotate(60deg);
          }
          75% {
            filter: blur(0.8px) brightness(1.3) hue-rotate(30deg);
          }
          100% {
            filter: blur(0.8px) brightness(1.2) hue-rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}

function PhoneIcon() {
  return (
    <Image
      src={'/images/ui/phone-call.png'}
      alt="icon"
      width={18}
      height={18}
      style={{
        width: '15%',
        height: '15%',
        objectFit: 'contain',
      }}
    />
  );
}

function WhatsAppIcon() {
  return (
    <Image
      src={'/images/ui/watsap.png'}
      alt="icon"
      width={18}
      height={18}
      style={{
        width: '15%',
        height: '15%',
        objectFit: 'contain',
      }}
    />
  );
}

function CalendarIcon() {
  return (
    <Image
      src={'/images/ui/calendar-clock 1.png'}
      alt="icon"
      width={18}
      height={18}
      style={{
        width: '15%',
        height: '15%',
        objectFit: 'contain',
      }}
    />
  );
}

function DownloadIcon() {
  return (
    <Image
    src={'/images/ui/pp.png'}
    alt="icon"
    width={18}
    height={18}
    style={{
      width: '15%',
      height: '15%',
      objectFit: 'contain',
    }}
  />
  );
}