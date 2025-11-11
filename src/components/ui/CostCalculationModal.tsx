'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface CostCalculationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormValues = {
  brandModel: string;
  year: string;
  phone: string;
  contactMethod: 'wa' | 'tg' | 'call';
};

export default function CostCalculationModal({ isOpen, onClose }: CostCalculationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      brandModel: '',
      year: '',
      phone: '',
      contactMethod: 'wa',
    },
    mode: 'onChange',
  });

  const formatRuPhone = (value: string) => {
    const digits = value.replace(/\D/g, '').replace(/^8/, '7');
    let res = '+7 (';
    if (digits.length > 1) res += digits.slice(1, 4);
    if (digits.length >= 4) res += ') ' + digits.slice(4, 7);
    if (digits.length >= 7) res += '-' + digits.slice(7, 9);
    if (digits.length >= 9) res += '-' + digits.slice(9, 11);
    return res;
  };

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 800));
    
    const contactMethodLabel = data.contactMethod === 'wa' ? 'WhatsApp' : data.contactMethod === 'tg' ? 'Telegram' : 'Телефонный звонок';
    console.log('Cost Calculation Form Data:', {
      brandModel: data.brandModel,
      year: data.year,
      phone: data.phone,
      contactMethod: contactMethodLabel,
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
      onClose();
    }, 3000);
  };

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
          Расчёт стоимости
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <input
              {...register('brandModel', { required: 'Введите марку и модель' })}
              placeholder="Марка и модель"
              className="w-full text-white placeholder-[#f2f2f2]"
              style={{
                width: '100%',
                height: '46px',
                padding: '0 12px',
                outline: 'none',
                border: `1px solid ${errors.brandModel ? '#ef4444' : '#d6d6de'}`,
                borderRadius: '8px',
                background: '#323237',
              }}
              aria-invalid={!!errors.brandModel}
            />
            {errors.brandModel && (
              <span className="mt-1 text-xs text-red-400">{errors.brandModel.message}</span>
            )}
          </div>

          <div>
            <input
              {...register('year', {
                required: 'Введите год',
                pattern: {
                  value: /^(19|20)\d{2}$/,
                  message: 'Введите корректный год (например, 2020)',
                },
              })}
              placeholder="Год выпуска"
              className="w-full text-white placeholder-[#f2f2f2]"
              style={{
                width: '100%',
                height: '46px',
                padding: '0 12px',
                outline: 'none',
                border: `1px solid ${errors.year ? '#ef4444' : '#d6d6de'}`,
                borderRadius: '8px',
                background: '#323237',
              }}
              aria-invalid={!!errors.year}
            />
            {errors.year && (
              <span className="mt-1 text-xs text-red-400">{errors.year.message}</span>
            )}
          </div>

          <div>
            <input
              {...register('phone', {
                required: 'Введите телефон',
                validate: (v) => /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/.test(v) || 'Неверный формат телефона',
                onChange: (e) => setValue('phone', formatRuPhone(e.target.value)),
              })}
              placeholder="+7 000 000 00 00"
              className="w-full text-white placeholder-[#f2f2f2]"
              style={{
                width: '100%',
                height: '46px',
                padding: '0 12px',
                outline: 'none',
                border: `1px solid ${errors.phone ? '#ef4444' : '#d6d6de'}`,
                borderRadius: '8px',
                background: '#323237',
              }}
              aria-invalid={!!errors.phone}
            />
            {errors.phone && (
              <span className="mt-1 text-xs text-red-400">{errors.phone.message}</span>
            )}
          </div>

          <div>
            <label
              className="block mb-2 font-manrope"
              style={{
                font: '500 14px / 1.3 var(--font-manrope, Manrope, sans-serif)',
                color: '#fff',
              }}
            >
              Куда удобнее отправить расчёт?
            </label>
            <div className="flex flex-col gap-2">
              {[
                { value: 'wa', label: 'WhatsApp' },
                { value: 'tg', label: 'Telegram' },
                { value: 'call', label: 'Телефонный звонок' },
              ].map((option) => (
                <label
                  key={option.value}
                  className="flex items-center cursor-pointer"
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: '#323237',
                    border: `1px solid ${errors.contactMethod ? '#ef4444' : '#d6d6de'}`,
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (e.currentTarget.style) e.currentTarget.style.background = '#3a3a40';
                  }}
                  onMouseLeave={(e) => {
                    if (e.currentTarget.style) e.currentTarget.style.background = '#323237';
                  }}
                >
                  <input
                    type="radio"
                    {...register('contactMethod', { required: 'Выберите способ связи' })}
                    value={option.value}
                    className="mr-3"
                    style={{ accentColor: '#b89d7e' }}
                  />
                  <span
                    className="font-manrope"
                    style={{
                      font: '400 14px / 1.3 var(--font-manrope, Manrope, sans-serif)',
                      color: '#fff',
                    }}
                  >
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
            {errors.contactMethod && (
              <span className="mt-1 text-xs text-red-400">{errors.contactMethod.message}</span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full hover:opacity-90 transition-opacity self-center"
            style={{
              marginTop: 'clamp(12px, calc(12px + (20 - 12) * ((100vw - 1024px) / (1440 - 1024))), 20px)',
              paddingBlock: 'clamp(12px, calc(12px + (14 - 12) * ((100vw - 1024px) / (1440 - 1024))), 14px)',
              paddingInline: 'clamp(36px, calc(36px + (45 - 36) * ((100vw - 1024px) / (1440 - 1024))), 45px)',
              background: '#b89d7e',
              color: '#fff',
              font: "400 clamp(14px, calc(14px + (16 - 14) * ((100vw - 1024px) / (1440 - 1024))), 16px) var(--font-manrope, Manrope, sans-serif)",
              letterSpacing: '-0.02em',
              textAlign: 'center',
              border: 'none',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.6 : 1,
            }}
          >
            {isSubmitting ? 'Отправка...' : 'Отправить запрос'}
          </button>

          {submitted && (
            <div
              className="mt-4 p-3 rounded-md text-center"
              style={{
                background: '#10b981',
                color: '#fff',
                font: '500 14px / 1.3 var(--font-manrope, Manrope, sans-serif)',
              }}
            >
              Спасибо! Мы свяжемся с вами в ближайшее время.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

