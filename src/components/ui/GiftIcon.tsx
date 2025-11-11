'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface GiftIconProps {
  onClick: () => void;
}

export default function GiftIcon({ onClick }: GiftIconProps) {
  const [isHovered, setIsHovered] = useState(false);
  const word = 'П О Д А Р О К';

  return (
    <div
      className="relative cursor-pointer flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      style={{ 
        width: 'clamp(80px, 8.33vw, 150px)', 
        height: 'clamp(80px, 8.33vw, 150px)',
      }}
    >

      <div
        className="relative"
        style={{
          width: 'clamp(80px, 8.33vw, 150px)',
          height: 'clamp(80px, 8.33vw, 150px)',
          animation: isHovered ? 'spin 2s linear infinite' : 'none',
        }}
      >
        <Image
          src="/images/ui/gift1.png"
          alt="Gift"
          width={150}
          height={150}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </div>


      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          width: 'clamp(80px, 8.33vw, 150px)',
          height: 'clamp(80px, 8.33vw, 150px)',
        }}
      >
        <svg
          viewBox="0 0 200 200"
          style={{
            width: '100%',
            height: '100%',
          }}
        >

          <path
            id="textPathTop"
            d="M 25 90 A 65 65 0 1 1 175 90" 
            fill="none"
          />
          

          <path
            id="textPathBottom"
            d="M 175 110 A 65 65 0 1 1 25 110" 
            fill="none"
          />


          <text
            fontFamily="Manrope, sans-serif"
            fontSize="22"
            fontWeight="700"
            fill="white"
            letterSpacing="2"
          >
            <textPath href="#textPathTop" startOffset="50%">
              <tspan textAnchor="middle">{word}</tspan>
            </textPath>
          </text>

          <text
            fontFamily="Manrope, sans-serif"
            fontSize="22"
            fontWeight="700"
            fill="white"
            letterSpacing="2"
          >
            <textPath href="#textPathBottom" startOffset="50%">
              <tspan textAnchor="middle">{word}</tspan>
            </textPath>
          </text>
        </svg>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}