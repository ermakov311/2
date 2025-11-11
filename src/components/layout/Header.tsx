'use client';

import React from 'react';
import { NAVIGATION_ITEMS } from '@/lib/constants';
import { scrollToSection } from '@/lib/utils';
import Image from 'next/image';

export default function Header() {

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-black/50`}
      style={{ height: 'clamp(80px, 6.5vw, 104px)' }}
    >
      <div className="w-full h-full container">
        <div className="max-w-desktop mx-auto px-4 h-full">
          <div className="flex items-end justify-between h-full">
            <div
              className="flex items-center mb-[21px]"
              style={{ marginLeft: 'clamp(40px, 10.4vw, 149px)' }}
            >
              <div
                className="relative flex-shrink-0 mr-[18px]"
                style={{
                  width: 'clamp(70px, 6.56vw, 94px)',
                  height: 'clamp(37px, 3.47vw, 50px)',
                }}
              >
                 <Image
                   src="/images/header/logo.png"
                   alt="АвтоГарантСити"
                   width={94}
                   height={50}
                   className="rounded-lg object-contain w-full h-full"
                 />
              </div>

              <svg
                width="1"
                height="39"
                viewBox="0 0 1 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 hidden md:block"
              >
                <path d="M1 0H0V39H1V0Z" fill="white" />
              </svg>

              <div className="hidden md:block">
                <p
                  className="font-normal leading-[1.422] ml-[16px] text-white font-manrope"
                  style={{
                    fontSize: 'clamp(10px, 0.97vw, 14px)',
                    width: 'clamp(160px, 15.28vw, 220px)',
                  }}
                >
                  НОВЫЙ ФОРМАТ ОБСЛУЖИВАНИЯ АВТОМОБИЛЯ
                </p>
              </div>
            </div>

            <nav
              className="flex items-center mb-[42px]"
              style={{
                gap: 'clamp(12px, 2.36vw, 34px)',
                marginRight: 'clamp(20px, 9.65vw, 139px)',
              }}
            >
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-normal font-manrope tracking-[-0.02em] text-center text-white transition-colors duration-200 hover:text-accent"
                  style={{ fontSize: 'clamp(12px, 1.39vw, 20px)' }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}