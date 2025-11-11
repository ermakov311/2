'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section>
        <div
          style={{
            background: '#1D1D21',
            paddingTop: 'clamp(30px, 5.56vw, 50px)',
            paddingBottom: 'clamp(30px, 5.56vw, 50px)',
          }}
        >
          <div className="container mx-auto px-4 max-w-desktop">
            <h1
              className="font-manrope text-center mb-6"
              style={{
                font: '700 clamp(32px, 3.33vw, 48px) / 1.38 var(--font-manrope, Manrope, sans-serif)',
                color: '#fff',
              }}
            >
              Новый формат обслуживания автомобиля
            </h1>

            <p
              className="font-manrope text-center mb-12"
              style={{
                font: '400 clamp(18px, 2vw, 24px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              Сравните цены и уровень сервиса.
              <br />
              Почувствуте разницу!
            </p>

            <div
              className="relative"
              style={{ height: 'clamp(400px, 40vw, 600px)' }}
            >
              <Image
                src="/images/slides/slide1.png"
                alt="Автосервис"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div
          style={{
            background: '#fff',
            paddingTop: 'clamp(60px, 5.56vw, 80px)',
            paddingBottom: 'clamp(60px, 5.56vw, 80px)',
          }}
        >
          <div className="container mx-auto px-4 max-w-desktop">
            <p
              className="font-manrope"
              style={{
                font: '400 clamp(16px, 1.8vw, 20px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#1d1d21',
              }}
            >
              Как мудро заметил Далай Лама:
            </p>
            <p
              className="font-manrope mb-6"
              style={{
                font: '800 clamp(16px, 1.8vw, 22px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#1d1d21',
              }}
            >
              «Раз в году обязательно открывай для себя что-то новое».
            </p>

            <p
              className="font-manrope mb-6"
              style={{
                font: '400 clamp(16px, 1.8vw, 22px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#1d1d21',
              }}
            >
              Именно с этой идеей мы создали уникальный автоформат, где каждый
              сезон становится настоящим раскрывает новые грани сервиса.
            </p>

            <p
              className="font-manrope mb-6"
              style={{
                font: '600 clamp(16px, 1.8vw, 22px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#1d1d21',
              }}
            >
              Приезжай и погружайся в мир нового формата
            </p>

            <p
              className="font-manrope mb-6"
              style={{
                font: '400 clamp(16px, 1.8vw, 22px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#1d1d21',
              }}
            >
              Автоцентр Владивостока с новыми стандартами обслуживания Гостей и
              автомобилей.
            </p>

            <p
              className="font-manrope"
              style={{
                font: '400 clamp(16px, 1.8vw, 22px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#1d1d21',
              }}
            >
              Каждый сезон мы обновляемся и радуем Вас новинками.
            </p>
          </div>
        </div>

        <div
          style={{
            background: '#A38059',
            paddingTop: 'clamp(60px, 5.56vw, 80px)',
            paddingBottom: 'clamp(60px, 5.56vw, 80px)',
          }}
        >
          <div className="container mx-auto px-4 max-w-desktop">
            <p
              className="font-manrope mb-6"
              style={{
                font: '600 clamp(18px, 2vw, 24px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#fff',
              }}
            >
              Наше ДНК - это соединение масштаба, эстетики и сервиса.
            </p>

            <p
              className="font-manrope"
              style={{
                font: '400 clamp(18px, 2vw, 24px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#fff',
              }}
            >
              Мы создали площадку для профессионалов, оснащенную современным
              оборудованием с приятными ценами и новой культурой сервиса.
            </p>
          </div>
        </div>

        <div
          style={{
            background: '#fff',
            paddingTop: 'clamp(60px, 5.56vw, 80px)',
            paddingBottom: 'clamp(60px, 5.56vw, 80px)',
          }}
        >
          <div className="container mx-auto px-4 max-w-desktop">
            <p
              className="font-manrope mb-6"
              style={{
                font: '400 clamp(18px, 2vw, 24px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#A38059',
              }}
            >
              Удивлять новым.
            </p>

            <p
              className="font-manrope"
              style={{
                font: '400 clamp(18px, 2vw, 24px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#A38059',
              }}
            >
              Делать как для себя: это норма и стандарт.
              <br />И нам не за что краснеть.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div
          style={{
            background: '#1D1D21',
            paddingTop: 'clamp(30px, 5.56vw, 50px)',
            paddingBottom: 'clamp(30px, 5.56vw, 50px)',
          }}
        >
          <div className="container mx-auto px-4 max-w-desktop">
            <h1
              className="font-manrope text-center mb-6"
              style={{
                font: '700 clamp(32px, 3.33vw, 48px) / 1.38 var(--font-manrope, Manrope, sans-serif)',
                color: '#fff',
              }}
            >
              Максимум услуг в одном месте
            </h1>

            <p
              className="font-manrope text-center mb-12"
              style={{
                font: '400 clamp(18px, 2vw, 24px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              Бережём ваше время
            </p>

            <div
              className="relative"
              style={{ height: 'clamp(400px, 40vw, 600px)' }}
            >
              <Image
                src="/images/slides/slide2.png"
                alt="Автосервис"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div
          style={{
            background: '#fff',
            paddingTop: 'clamp(60px, 5.56vw, 80px)',
            paddingBottom: 'clamp(60px, 5.56vw, 80px)',
          }}
        >
          <div className="container mx-auto px-4 max-w-desktop">
            <p
              className="font-manrope mb-6"
              style={{
                font: '800 clamp(16px, 1.8vw, 22px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#1d1d21',
                fontStyle: 'italic',
              }}
            >
              «Хорошего должно быть много»
            </p>

            <p
              className="font-manrope mb-6"
              style={{
                font: '400 clamp(16px, 1.8vw, 22px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#1d1d21',
              }}
            >
              Именно этот принцип вдохновил нас на создание масштабного
              Автоцентра. Вам не нужно тратить время на бесконечные поездки по
              городу: Коллекция самых необходимых услуг для вашего автомобиля
              собрана здесь в одном месте.
            </p>
          </div>
        </div>

        <div
          style={{
            background: '#A38059',
            paddingTop: 'clamp(60px, 5.56vw, 80px)',
            paddingBottom: 'clamp(60px, 5.56vw, 80px)',
          }}
        >
          <div className="container mx-auto px-4 max-w-desktop">
            <p
              className="font-manrope"
              style={{
                font: '600 clamp(18px, 2vw, 24px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#fff',
              }}
            >
              Максимум возможностей в масштабном автоцентре:
            </p>
            <ul
              className="ml-[10px]"
              style={{ listStyle: 'disc', paddingLeft: '20px' }}
            >
              <li>37 современных постов</li>
              <li>
                Профессиональное плановое обслуживание:
                <br />- Подготовка к сезону;
                <br />- Ремонт ходовой части и электрики; <br />
                -Установка современных охранных комплексов;
              </li>
              <li>
                Удобная запись 24/7 через собственное приложение  «Ортус».
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div
          style={{
            background: '#1D1D21',
            paddingTop: 'clamp(30px, 5.56vw, 50px)',
            paddingBottom: 'clamp(30px, 5.56vw, 50px)',
          }}
        >
          <div className="container mx-auto px-4 max-w-desktop">
            <h1
              className="font-manrope text-center mb-6"
              style={{
                font: '700 clamp(32px, 3.33vw, 48px) / 1.38 var(--font-manrope, Manrope, sans-serif)',
                color: '#fff',
              }}
            >
              Команда профессионалов №1
            </h1>

            <p
              className="font-manrope text-center mb-12"
              style={{
                font: '400 clamp(18px, 2vw, 24px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              Знаем об автомобилях всё
            </p>

            <div
              className="relative"
              style={{ height: 'clamp(400px, 40vw, 600px)' }}
            >
              <Image
                src="/images/slides/slide3.png"
                alt="Автосервис"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div
          style={{
            background: '#fff',
            paddingTop: 'clamp(60px, 5.56vw, 80px)',
            paddingBottom: 'clamp(60px, 5.56vw, 80px)',
          }}
        >
          <div className="container mx-auto px-4 max-w-desktop">
            <p
              className="font-manrope mb-6"
              style={{
                font: '800 clamp(16px, 1.8vw, 22px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#1d1d21',
                fontStyle: 'italic',
              }}
            >
              Тот кто способен любить своё дело, по–настоящему счастлив.
            </p>

            <p
              className="font-manrope mb-6"
              style={{
                font: '400 clamp(16px, 1.8vw, 22px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#1d1d21',
              }}
            >
              Поэтому АвтоГарантСити – это максимальный концентрат счастливых
              людей. Приезжайте  познакомиться с теми, кто делает свое дело с
              любовью. АвтоГарантСити — это уникальная площадка профессионалов,
              где собрались мастера и эксперты всего  Владивостока.
            </p>
          </div>
        </div>

        <div
          style={{
            background: '#A38059',
            paddingTop: 'clamp(60px, 5.56vw, 80px)',
            paddingBottom: 'clamp(60px, 5.56vw, 80px)',
          }}
        >
          <div className="container mx-auto px-4 max-w-desktop">
            <p
              className="font-manrope mb-6"
              style={{
                font: '600 clamp(18px, 2vw, 24px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#fff',
              }}
            >
              Их всех объединяет:
            </p>
            <ul
              className="ml-[10px]"
              style={{ listStyle: 'disc', paddingLeft: '20px' }}
            >
              <li>Богатый опыт работы с различными марками</li>
              <li>Понимание тонкостей и особенностей автомобиля</li>
              <li>Общее интересное ремесло </li>
              <li>Опыт и непрерывное повышение квалификации.</li>
            </ul>
          </div>
        </div>

        <div
          style={{
            background: '#fff',
            paddingTop: 'clamp(60px, 5.56vw, 80px)',
            paddingBottom: 'clamp(60px, 5.56vw, 80px)',
          }}
        >
          <div className="container mx-auto px-4 max-w-desktop">
            <span className="flex justify-center items-center gap-2 color-#a38059">
              <Image src="/images/ui/12.png" alt="" width={158} height={43} />
            </span>
            <p
              className="font-manrope mb-6 text-center"
              style={{
                font: '600 clamp(22px, 2vw, 26px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#A38059',
              }}
            >
              Просто искренняя  любовь тех, кто любит автомобили
            </p>
            <span className="flex justify-center items-center gap-2 color-#a38059">
              <Image src="/images/ui/12.png" alt="" width={158} height={43} />
            </span>
          </div>
        </div>
      </section>

      <section>
        <div
          style={{
            background: '#1D1D21',
            paddingTop: 'clamp(60px, 5.56vw, 80px)',
            paddingBottom: 'clamp(60px, 5.56vw, 80px)',
          }}
        >
          <div className="container mx-auto px-4 max-w-desktop">
            <h1
              className="font-manrope text-center mb-6"
              style={{
                font: '700 clamp(32px, 3.33vw, 48px) / 1.38 var(--font-manrope, Manrope, sans-serif)',
                color: '#fff',
              }}
            >
              Цены вас приятно удивят
            </h1>

            <p
              className="font-manrope text-center mb-12"
              style={{
                font: '400 clamp(18px, 2vw, 24px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              Все честно и прозрачно
            </p>

            <div
              className="relative"
              style={{ height: 'clamp(400px, 40vw, 600px)' }}
            >
              <Image
                src="/images/slides/slide4.png"
                alt="Автосервис"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div
          style={{
            background: '#fff',
            paddingTop: 'clamp(60px, 5.56vw, 80px)',
            paddingBottom: 'clamp(60px, 5.56vw, 80px)',
          }}
        >
          <div className="container mx-auto px-4 max-w-desktop">
            <p
              className="font-manrope mb-6"
              style={{
                font: '800 clamp(20px, 1.8vw, 26px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#1d1d21',
              }}
            >
              Запчасти
            </p>

            <p
              className="font-manrope mb-6"
              style={{
                font: '400 clamp(16px, 1.8vw, 22px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#1d1d21',
              }}
            >
              Собственный склад автозапчастей и расходных материалов. Всегда
              выбор качественных аналогов по приятным ценам. Наличие склада
              значительно ускоряет логистику и позволяет реализовывать запчасти
              по закупочным ценам.
            </p>

            <p
              className="font-manrope mb-6"
              style={{
                font: '800 clamp(20px, 1.8vw, 26px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#1d1d21',
              }}
            >
              Услуги
            </p>

            <p
              className="font-manrope mb-6"
              style={{
                font: '400 clamp(16px, 1.8vw, 22px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#1d1d21',
              }}
            >
              Масштаб и выстроенные процессы позволяют не только увеличивать
              обороты, но и сокращать издержки в пересчете на время. А это
              значит, что стоимость услуг в автоцентре удивительно приятная.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div
          style={{
            background: '#1D1D21',
            paddingTop: 'clamp(60px, 5.56vw, 80px)',
            paddingBottom: 'clamp(60px, 5.56vw, 80px)',
          }}
        >
          <div className="container mx-auto px-4 max-w-desktop">
            <h1
              className="font-manrope text-center mb-6"
              style={{
                font: '700 clamp(32px, 3.33vw, 48px) / 1.38 var(--font-manrope, Manrope, sans-serif)',
                color: '#fff',
              }}
            >
              Для леди и джентельменов
            </h1>

            <p
              className="font-manrope text-center mb-12"
              style={{
                font: '400 clamp(18px, 2vw, 24px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              Почувствуй себя звездой
            </p>

            <div
              className="relative"
              style={{ height: 'clamp(400px, 40vw, 600px)' }}
            >
              <Image
                src="/images/slides/slide5.png"
                alt="Автосервис"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div
          style={{
            background: '#fff',
            paddingTop: 'clamp(60px, 5.56vw, 80px)',
            paddingBottom: 'clamp(60px, 5.56vw, 80px)',
          }}
        >
          <div className="container mx-auto px-4 max-w-desktop">
            <p
              className="font-manrope"
              style={{
                font: '700 clamp(20px, 1.8vw, 24px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#a38059',
              }}
            >
              Чистота «априори»
            </p>
            <p
              className="font-manrope mb-12"
              style={{
                font: '400 clamp(16px, 1.8vw, 22px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#1d1d21',
              }}
            >
              Убедитесь сами: к нам можно и на каблуках, и в деловом костюме.
            </p>

            <p
              className="font-manrope"
              style={{
                font: '700 clamp(20px, 1.8vw, 24px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#a38059',
              }}
            >
              Современность
            </p>
            <p
              className="font-manrope mb-12"
              style={{
                font: '400 clamp(16px, 1.8vw, 22px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#1d1d21',
              }}
            >
              Каждый пост как дорожка подиума. Все продумано для Вашего
              удобства.
            </p>

            <p
              className="font-manrope"
              style={{
                font: '700 clamp(20px, 1.8vw, 24px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#a38059',
              }}
            >
              Стильный ресепшн
            </p>
            <p
              className="font-manrope mb-12"
              style={{
                font: '400 clamp(16px, 1.8vw, 22px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#1d1d21',
              }}
            >
              Где Вас встретят всегда тепло с улыбкой. 
            </p>

            <p
              className="font-manrope"
              style={{
                font: '700 clamp(20px, 1.8vw, 24px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#a38059',
              }}
            >
              Комфортные relax зоны
            </p>
            <p
              className="font-manrope mb-12"
              style={{
                font: '400 clamp(16px, 1.8vw, 22px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#1d1d21',
              }}
            >
              Созданы для расслабленного ожидания вашего автомобиля.
            </p>

            <p
              className="font-manrope"
              style={{
                font: '700 clamp(20px, 1.8vw, 24px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#a38059',
              }}
            >
              Гармония эстетики и сервиса
            </p>
            <p
              className="font-manrope mb-12"
              style={{
                font: '400 clamp(16px, 1.8vw, 22px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#1d1d21',
              }}
            >
              Уровень  5***** гостиницы, как норма для рынка. И он уже  доступен
              всем, кто уважает и ценит свои потраченные ресурсы: время, деньги
              и готов за них получать лучшее.
            </p>
          </div>
        </div>

        <div
          style={{
            background: '#A38059',
            paddingTop: 'clamp(60px, 5.56vw, 80px)',
            paddingBottom: 'clamp(60px, 5.56vw, 80px)',
          }}
        >
          <div className="container mx-auto px-4 max-w-desktop">
            <p
              className="font-manrope mb-6"
              style={{
                font: '400 clamp(18px, 2vw, 24px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#fff',
              }}
            >
              Мы уделили внимание всем нюансам, чтобы Вам было максимально уютно
              и комфортно. Почувствуйте, как стиль, атмосфера и чистота создают
              гармоничное пространство, наполненное заботой о Вас.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div
          style={{
            background: '#1D1D21',
            paddingTop: 'clamp(30px, 5.56vw, 50px)',
            paddingBottom: 'clamp(30px, 5.56vw, 50px)',
          }}
        >
          <div className="container mx-auto px-4 max-w-desktop">
            <h1
              className="font-manrope text-center mb-6"
              style={{
                font: '700 clamp(32px, 3.33vw, 48px) / 1.38 var(--font-manrope, Manrope, sans-serif)',
                color: '#fff',
              }}
            >
              Продлеваем молодость вашему автомобилю
            </h1>

            <p
              className="font-manrope text-center mb-12"
              style={{
                font: '400 clamp(18px, 2vw, 24px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              Новая культура обслуживания
            </p>

            <div
              className="relative"
              style={{ height: 'clamp(400px, 40vw, 600px)' }}
            >
              <Image
                src="/images/slides/slide3.png"
                alt="Автосервис"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div
          style={{
            background: '#fff',
            paddingTop: 'clamp(60px, 5.56vw, 80px)',
            paddingBottom: 'clamp(60px, 5.56vw, 80px)',
          }}
        >
          <div className="container mx-auto px-4 max-w-desktop">
            <p
              className="font-manrope mb-6"
              style={{
                font: '800 clamp(16px, 1.8vw, 22px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#1d1d21',
              }}
            >
              Плановое обслуживание автомобиля -
            </p>

            <p
              className="font-manrope mb-6"
              style={{
                font: '400 clamp(16px, 1.8vw, 22px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#1d1d21',
              }}
            >
              Это важная часть культуры автосервиса АвтоГарантСити. <br />
              Регулярный уход за автомобилем: <br />
              -Продлевает молодость Вашему автомобилю <br />
              -Обеспечивает безопасность на дороге <br />
              -Сохраняет ценность автомобиля и рыночную стоимость, в случае
              дальнейшей его смены.
            </p>
          </div>
        </div>

        <div
          style={{
            background: '#A38059',
            paddingTop: 'clamp(60px, 5.56vw, 80px)',
            paddingBottom: 'clamp(60px, 5.56vw, 80px)',
          }}
        >
          <div className="container mx-auto px-4 max-w-desktop">
            <p
              className="font-manrope mb-6"
              style={{
                font: '600 clamp(18px, 2vw, 24px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#fff',
              }}
            >
              Плановое обслуживание нового  формата:
            </p>
            <ul
              className="ml-[10px]"
              style={{ listStyle: 'disc', paddingLeft: '20px' }}
            >
              <li>
                Плановое ТО согласно рекомендаций производителя автомобиля
              </li>
              <li>Тройная перепроверка работ</li>
              <li>Дополнительный чек- лист визуального осмотра в подарок </li>
              <li>Система умных напоминаний об обслуживании</li>
              <li>Удобство записи</li>
            </ul>
          </div>
        </div>

        <div
          style={{
            background: '#fff',
            paddingTop: 'clamp(60px, 5.56vw, 80px)',
            paddingBottom: 'clamp(60px, 5.56vw, 80px)',
          }}
        >
          <div className="container mx-auto px-4 max-w-desktop">
            <span className="flex justify-center items-center gap-2 color-#a38059">
              <Image src="/images/ui/12.png" alt="" width={158} height={43} />
            </span>
            <p
              className="font-manrope mb-6 text-center"
              style={{
                font: '600 clamp(22px, 2vw, 26px) / 1.5 var(--font-manrope, Manrope, sans-serif)',
                color: '#A38059',
              }}
            >
              Все это и есть культура сервиса «АвтоГарантСити»
            </p>
            <span className="flex justify-center items-center gap-2 color-#a38059">
              <Image src="/images/ui/12.png" alt="" width={158} height={43} />
            </span>
            <Link href="/dev-placeholder">
              <button className="mt-[20px] block mx-auto font-semibold text-base leading-[1.422] text-center text-[#fff] border border-[#a38059] rounded-full py-[11px] px-[55px] bg-[#1d1d21] hover:opacity-80 transition-all duration-300 hover:-translate-y-[1px] active:translate-y-0">
                Убедитесь сами
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
