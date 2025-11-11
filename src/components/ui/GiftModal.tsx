'use client';

import React from 'react';

interface GiftModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GiftModal({ isOpen, onClose }: GiftModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
      style={{ background: 'rgba(0, 0, 0, 0.5)' }}
    >
      <div
        className="relative bg-[#1D1D21] rounded-lg shadow-xl max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
        style={{
          padding: 'clamp(24px, calc(24px + (32 - 24) * ((100vw - 1024px) / (1440 - 1024))), 32px)',
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:opacity-80 text-2xl"
          style={{ fontSize: '28px', lineHeight: '1' }}
        >
          ×
        </button>

        <h2
          className="font-manrope mb-4"
          style={{
            font: '700 clamp(24px, calc(24px + (32 - 24) * ((100vw - 1024px) / (1440 - 1024))), 32px) / 1.38 var(--font-manrope, Manrope, sans-serif)',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          Подарок
        </h2>

        <div
          className="text-center"
          style={{
            font: '400 16px / 1.5 var(--font-manrope, Manrope, sans-serif)',
            color: '#fff',
          }}
        >
          Здесь будет информация о подарке
        </div>
      </div>
    </div>
  );
}



