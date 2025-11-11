'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import BottomModal from '@/components/ui/BottomModal';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function SpecializedCenter() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectCard, setIsSelectCard] = useState(0);

  const openModal = (index = 0) => {
    setIsModalOpen(true);
    setIsSelectCard(index);
  };
  return (
    <>
      <section
        id="specialized"
        className="bg-white"
        style={{
          paddingTop: 'clamp(60px, 5.56vw, 96px)',
          paddingBottom: 'clamp(60px, 5.56vw, 96px)',
        }}
      >
        <div className="max-w-desktop mx-auto px-4">
          <div
            className="text-center"
            style={{ marginBottom: 'clamp(40px, 4.44vw, 64px)' }}
          >
            <h2
              className="font-bold leading-[1.38] text-[#1d1d21] font-manrope"
              style={{ fontSize: 'clamp(32px, 3.33vw, 48px)' }}
            >
              Выгодный сервис
            </h2>
          </div>

          <div className="flex justify-center">
            <div
              className="grid grid-cols-2"
              style={{
                gap: 'clamp(20px, 2.78vw, 40px)',
                width: 'clamp(600px, 83.33vw, 1200px)',
                marginLeft: 'clamp(40px, 9.72vw, 140px)',
                marginRight: 'clamp(40px, 9.72vw, 140px)',
              }}
            >
              {cardsData.map((card, index) => (
                <Card
                  key={index}
                  imageSrc={card.imageSrc}
                  title={card.title}
                  gradient={card.gradient}
                  onCardClick={() => openModal(index)}
                  isModal={card.isModal}
                  link={card.link}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <BottomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-4">
          <h2 className="text-[18px] lg:text-[20px] font-bold text-black leading-[1.2] uppercase mb-4">
            {cardsData[selectCard].titleModal}
          </h2>
          <p
            className="text-[14px] lg:text-[16px] text-black mb-6 ml-auto mr-auto"
          />
          {cardsData[selectCard].childrenModal}
          <Button
            onClick={() => setIsModalOpen(false)}
            className={'border-[#b89d7e] text-[#b89d7e] p-[14px_45px] text-[20px] font-normal tracking-[-0.02em] hover:bg-[#b89d7e] hover:text-white w-full mt-3 py-3 px-4'}
          >
            Закрыть
          </Button>
        </div>
      </BottomModal>
    </>
  );
}

interface CardProps {
  imageSrc: string;
  title: string;
  width?: number;
  height?: number;
  gradient: boolean;
  onCardClick?: () => void;
  isModal?: boolean;
  link: string;
}

const Card = ({
  imageSrc,
  title,
  width = 740,
  height = 298,
  gradient = true,
  onCardClick,
  isModal = true,
  link = '',
}: CardProps) => {
  if (!isModal && link) {
    return (
      <Link href={link}>
        <div className="relative group overflow-hidden rounded-[20px] cursor-pointer transition-transform duration-300 hover:scale-105">
          <div className="w-[100%] h-[184px] lg:w-[544px] lg:h-[298px] relative flex items-center justify-center">
            <Image
              src={imageSrc}
              alt="Card"
              width={width}
              height={height}
              className="object-conver object-left w-[740px] h-full"
            />
            {gradient && (
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-34% to-[rgba(40,40,40,0.91)] to-94% mix-blend-multiply" />
            )}

            <div className="absolute inset-0 z-10 flex items-end justify-between pl-[24px] pr-[24px] pt-[21px] pb-[21px] lg:p-6">
              <h3
              className="text-[#f2f2f2] font-manrope transition-colors duration-200"
              style={{ 
                fontSize: 'clamp(16px, 1.94vw, 28px)',
                fontWeight: 'normal',
                lineHeight: '1.38'
              }}
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <Image
                src={'/images/ui/arrow-white-right.svg'}
                width={23}
                height={14}
                alt={'открыть карточку'}
                className={'w-[16px] h-[16px] lg:w-[23px] lg:h-[23px]'}
              />
            </div>
          </div>
        </div>
      </Link>
    );
  }
  return (
    <div
      className="relative group overflow-hidden rounded-[20px] cursor-pointer transition-transform duration-300 hover:scale-105"
      onClick={onCardClick}
    >
      <div className="w-[100%] h-[184px] lg:w-[544px] lg:h-[298px] relative flex items-center justify-center">
        <Image
          src={imageSrc}
          alt="Card"
          width={width}
          height={height}
          className="object-cover object-left w-[740px] h-full"
        />
        {gradient && (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-34% to-[rgba(40,40,40,0.91)] to-94% mix-blend-multiply" />
        )}

        <div className="absolute inset-0 z-10 flex items-end justify-between pl-[24px] pr-[24px] pt-[21px] pb-[21px] lg:p-6">
          <h3
            className="text-white text-[24px] lg:text-[32px] leading-[1.2]"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <Image
            src={'/images/ui/arrow-white-right.svg'}
            width={23}
            height={14}
            alt={'открыть карточку'}
            className={'w-[16px] h-[16px] lg:w-[23px] lg:h-[23px]'}
          />
        </div>
      </div>
    </div>
  );
};

const cardsData = [
  {
    imageSrc: '/images/services/service2.png',
    title: 'Подарки новым гостям',
    gradient: true,
    isModal: true,
    link: '',
    titleModal: 'Подарки новым гостям',
    descriptionModal: '',
    childrenModal: (
      <Button className={'border-[#b89d7e] text-[#b89d7e] p-[14px_45px] text-[20px] font-normal tracking-[-0.02em] hover:bg-[#b89d7e] hover:text-white w-full mt-6 py-3 px-4'}>
        Записаться с выгодой
      </Button>
    ),
  },
  {
    imageSrc: '/images/services/service1.png',
    title: 'Акции',
    gradient: false,
    isModal: true,
    link: '',
    titleModal: 'Попробуйте новый формат сервисной книжки',
    descriptionModal:
      'Скачайте приложение ORTUS и получите все услуги с выгодой 10% при онлайн‑записи.',
    childrenModal: (
      <Image
        src={'/images/services/offers-ortus.png'}
        className={'rounded-2xl ml-auto mr-auto w-full h-auto lg:h-[350px]'}
        width={400}
        height={200}
        alt={'в приложении ortus скидка 10%'}
      />
    ),
  },
  {
    imageSrc: '/images/services/service4.png',
    title: 'Розыгрыши',
    gradient: true,
    isModal: true,
    link: '',
    titleModal: 'Розыгрыши',
    descriptionModal:
      'Совсем скоро здесь начнутся регулярные сезонные розыгрыши — с практичными и приятными призами, которые пригодятся каждому владельцу автомобиля.<br/> Не пропустите старт, чтобы узнать условия первыми.<br/> А пока вы можете воспользоваться нашими действующими акциями и подарками.',
    childrenModal: <></>,
  },
  {
    imageSrc: '/images/services/service3.png',
    title: 'Автофестивали',
    gradient: true,
    isModal: false,
    link: 'https://google.com',
    titleModal: 'Подарки новым гостям',
    descriptionModal: '',
    childrenModal: <></>,
  },
];