'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

export default function FromSection() {
  type FormValues = {
    name: string;
    phone: string;
    topic: string;
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      phone: '',
      topic: 'Общая консультация',
    },
    mode: 'onChange',
  });

  const [submitted, setSubmitted] = useState(false);

  const topicOptions = useMemo(
    () => [
      'Общая консультация',
      'Запись на сервис',
      'Вопрос по стоимости',
      'Другое',
    ],
    []
  );

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
    try {
      await fetch('/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch {}
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    reset();
  };

  return (
    <section className="w-full pt-[85px]" style={{ background: '#1D1D21' }}>
      <div className="container mx-auto px-4 py-12">
        <h2
          className="font-manrope text-center"
          style={{ font: '700 48px / 1.38 var(--font-manrope, Manrope, sans-serif)', color: '#fff' }}
        >
          Получите профессиональную<br />консультацию
        </h2>

        <p
          className="font-manrope mt-4 text-center"
          style={{ font: '400 28px / 1.38 var(--font-manrope, Manrope, sans-serif)', color: '#fff' }}
        >
          Мастера-консультанты нашей компании с радостью<br /> ответят на ваши вопросы, произведут расчет стоимости услуг<br />и подготовят индивидуальное предложение
        </p>

        <div
          className="flex items-start"
          style={{
            marginTop:
              'clamp(20px, calc(20px + (40 - 20) * ((100vw - 1024px) / (1440 - 1024))), 40px)',
            gap:
              'clamp(12px, calc(12px + (32 - 12) * ((100vw - 1024px) / (1440 - 1024))), 32px)'
          }}
        >
          <div className="relative w-full min-w-0">
            <div
              className="relative w-full h-full"
              style={{
                height:
                  'clamp(560px, calc(560px + (720 - 560) * ((100vw - 1024px) / (1440 - 1024))), 600px)'
              }}
            >
              <Image
                src="/images/formSection/img.png"
                alt="Форма консультации"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </div>

          <div className="relative w-full min-w-0 flex items-start justify-start">
            <div
              className="relative"
              style={{
                width: 'clamp(340px, calc(340px + (400 - 340) * ((100vw - 1024px) / (1440 - 1024))), 400px)'
              }}
            >
              <Image
                src="/images/formSection/form.png"
                alt="Фон формы"
                width={400}
                height={520}
                className="w-full h-auto object-contain"
                priority={false}
              />

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="absolute inset-0 flex flex-col justify-start"
                style={{
                  padding:
                    'clamp(12px, calc(12px + (24 - 12) * ((100vw - 1024px) / (1440 - 1024))), 24px)',
                  paddingTop:
                    'clamp(12px, calc(12px + (24 - 12) * ((100vw - 1024px) / (1440 - 1024))), 24px)',
                  paddingLeft:
                    'clamp(10px, calc(10px + (20 - 10) * ((100vw - 1024px) / (1440 - 1024))), 20px)',
                  paddingRight:
                    'clamp(10px, calc(10px + (20 - 10) * ((100vw - 1024px) / (1440 - 1024))), 20px)'
                }}
              >
                <input
                  {...register('name', { required: 'Введите имя' })}
                  placeholder="Ваше имя"
                  className="w-full text-white placeholder-[#f2f2f2]"
                  style={{
                    width: '100%',
                    height: '46px',
                    padding: '0 12px',
                    outline: 'none',
                    border: `1px solid ${errors.name ? '#ef4444' : '#d6d6de'}`,
                    borderRadius: '8px',
                    background: '#323237',
                  }}
                  aria-invalid={!!errors.name}
                />
                {errors.name && (
                  <span className="mt-1 text-xs text-red-400">{errors.name.message}</span>
                )}

                <input
                  {...register('phone', {
                    required: 'Введите телефон',
                    validate: (v) => /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/.test(v) || 'Неверный формат телефона',
                    onChange: (e) => setValue('phone', formatRuPhone(e.target.value)),
                  })}
                  placeholder="+7 000 000 00 00"
                  className="w-full mt-3 text-white placeholder-[#f2f2f2]"
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


                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full py-[14px] px-[45px] self-center hover:opacity-90"
                  style={{
                    marginTop:
                      'clamp(18px, calc(18px + (38 - 18) * ((100vw - 1024px) / (1440 - 1024))), 38px)',
                    background: '#b89d7e',
                    color: '#fff',
                    font: "400 clamp(16px, calc(16px + (20 - 16) * ((100vw - 1024px) / (1440 - 1024))), 20px) var(--font-manrope, Manrope, sans-serif)",
                    letterSpacing: '-0.02em',
                    textAlign: 'center',
                  }}
                >
                  {isSubmitting ? 'Отправка...' : 'Получить консультацию'}
                </button>

                <div
                  className="text-center"
                  style={{
                    marginTop:
                      'clamp(8px, calc(8px + (16 - 8) * ((100vw - 1024px) / (1440 - 1024))), 16px)'
                  }}
                >
                  <span
                    className="font-manrope"
                    style={{
                      font:
                        '500 clamp(11px, calc(11px + (15 - 11) * ((100vw - 1024px) / (1440 - 1024))), 15px) var(--font-manrope, Manrope, sans-serif)',
                      color: '#848484'
                    }}
                  >
                    Отправляя заявку я даю согласие на<br /> обработку{' '}
                    <a
                      href="/files/privacy-policy.pdf"
                      download="Согалсие на обработку персональных данных.pdf"
                      className="underline"
                      style={{
                        font:
                          '500 clamp(11px, calc(11px + (15 - 11) * ((100vw - 1024px) / (1440 - 1024))), 15px) var(--font-manrope, Manrope, sans-serif)',
                        color: '#a38059'
                      }}
                    >
                      Персональных данных
                    </a>
                  </span>
                </div>
              </form>

              {submitted && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow">
                  Спасибо! Мы свяжемся для подтверждения времени
                </div>
              )}

              <div
                className="text-center w-full"
                style={{
                  marginTop:
                    'clamp(12px, calc(12px + (24 - 12) * ((100vw - 1024px) / (1440 - 1024))), 24px)'
                }}
              >
                <div
                  className="font-manrope"
                  style={{
                    font: '700 20px / 1.377 var(--font-manrope, Manrope, sans-serif)',
                    textTransform: 'uppercase',
                    color: '#e8b48b',
                  }}
                >
                  Лучше один раз увидеть,
                  <br />чем сто раз услышать.
                </div>
                <div
                  className="mx-auto"
                  style={{
                    marginTop:
                      'clamp(12px, calc(8px + (12 - 8) * ((100vw - 1024px) / (1440 - 1024))), 20px)',
                    width: '101px',
                    height: '1px',
                    background: '#fff'
                  }}
                />
                <div
                  className="font-manrope"
                  style={{
                    marginTop:
                      'clamp(12px, calc(8px + (12 - 8) * ((100vw - 1024px) / (1440 - 1024))), 20px)',
                    font: '500 16px var(--font-manrope, Manrope, sans-serif)',
                    color: 'rgba(255, 255, 255, 0.8)'
                  }}
                >
                  Приезжайте и почувствуйте разницу!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


