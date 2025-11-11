'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Script from 'next/script';
import Image from 'next/image';

type Branch = {
  id: string;
  title: string;
  address: string;
  photoSrc: string;
  coords: [number, number];
    videos?: string[];
    parkingPhotoSrc?: string;
};

type ContentTab = 'map' | 'photo' | 'route' | 'parking';

declare global {
  interface Window {
    ymaps: any;
  }
}

export default function BranchesSection() {
  const branches: Branch[] = useMemo(
    () => [
      {
        id: 'vladivostok',
        title: 'ул. Шилкинская, 32а',
        address: 'Россия, Владивосток, ул. Шилкинская, 32а',
        photoSrc: '/images/slides/slide2.png',
        coords: [43.117964, 131.93111],
          videos: [
            '/videos/gaidamak.mp4',
            '/videos/thirty-work.mp4',
            '/videos/city-hall-torgovya.mp4',
          ],
          parkingPhotoSrc: '/images/mapSection/1park.jpg',
      },
      {
        id: 'vladivostok1',
        title: 'ул. Снеговая, 1 стр.3',
        address: 'Россия, Владивосток, ул. Снеговая, 1 стр.3',
        photoSrc: '/images/mapSection/st3.jpg',
        coords: [43.136710, 131.927759],
          videos: [
            'https://storage.yandexcloud.net/example-bucket/video3.mp4',
          ],
          parkingPhotoSrc: '/images/mapSection/st3park.jpg',
      },
      {
        id: 'vladivostok2',
        title: 'ул. Снеговая, 1 стр.7',
        address: 'Россия, Владивосток, ул. Снеговая, 1 стр.7',
        photoSrc: '/images/mapSection/st7.jpg',
        coords: [43.136664, 131.929331],
          videos: [
            'https://storage.yandexcloud.net/example-bucket/video3.mp4',
          ],
          parkingPhotoSrc: '/images/mapSection/st7park.jpg',
      },
    ],
    []
  );

  const [activeBranchId, setActiveBranchId] = useState<string>(branches[0].id);
  const [activeTab, setActiveTab] = useState<ContentTab>('map');
  const [mapState, setMapState] = useState<
    'idle' | 'loading' | 'loaded' | 'error'
  >('idle');
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);

  const activeBranch = useMemo(
    () => branches.find((b) => b.id === activeBranchId)!,
    [branches, activeBranchId]
  );

  const yandexKey =
    process.env.NEXT_PUBLIC_YANDEX_API_KEY ||
    '5b2a9a4d-b5ee-425a-9f9d-34dd0477bcc2';

  const initMap = () => {
    if (!window.ymaps || !mapContainerRef.current) {
      console.error('YMaps not loaded or container not found');
      return;
    }

    try {
      setMapState('loading');

      window.ymaps.ready(() => {
        try {
          if (mapInstanceRef.current) {
            mapInstanceRef.current.destroy();
            mapInstanceRef.current = null;
          }

          const map = new window.ymaps.Map(mapContainerRef.current, {
            center: activeBranch.coords,
            zoom: 16,
            controls: ['zoomControl', 'fullscreenControl'],
          });

          const marker = new window.ymaps.Placemark(
            activeBranch.coords,
            {
              hintContent: activeBranch.title,
              balloonContent: activeBranch.address,
            },
            {
              preset: 'islands#redIcon',
            }
          );

          map.geoObjects.add(marker);
          mapInstanceRef.current = map;
          setMapState('loaded');

          console.log('Map initialized successfully');
        } catch (error) {
          console.error('Error creating map:', error);
          setMapState('error');
        }
      });
    } catch (error) {
      console.error('Error in initMap:', error);
      setMapState('error');
    }
  };

  const handleScriptLoad = () => {
    console.log('Yandex Maps script loaded');
    setMapState('loaded');
  };

  const handleScriptError = () => {
    console.error('Failed to load Yandex Maps script');
    setMapState('error');
  };

  useEffect(() => {
    if (activeTab !== 'map') return;

    if (window.ymaps && mapState === 'loaded') {
      initMap();
    }
  }, [activeTab, activeBranchId, mapState]);

  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section id="filials" className="bg-white pt-[80px]">
      <Script
        src={`https://api-maps.yandex.ru/2.1/?apikey=${yandexKey}&lang=ru_RU`}
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
        onError={handleScriptError}
      />

      <div className="container mx-auto px-4 ">
        <h2 className="font-manrope text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          Наши филиалы
        </h2>

        <div className="mt-[47px]">
          <div
            className="flex items-end justify-center overflow-x-auto"
            style={{ gap: '250px' }}
          >
            {branches.map((branch) => {
              const isActive = branch.id === activeBranchId;
              return (
                <button
                  key={branch.id}
                  onClick={() => setActiveBranchId(branch.id)}
                  className="relative pb-3 text-center whitespace-nowrap"
                  style={{ color: '#a38059' }}
                >
                  <div
                    className="font-manrope"
                    style={{
                      font: `${
                        isActive ? '700' : '500'
                      } 28px / 1.38 var(--font-manrope, Manrope, sans-serif)`,
                      textAlign: 'center',
                      color: '#a38059',
                    }}
                  >
                    {branch.title}
                  </div>
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 block transition-all duration-200"
                    style={{
                      height: isActive ? '6px' : '1px',
                      width: '340px',
                      backgroundColor: '#a38059',
                    }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <div
            className="flex items-center justify-center w-full"
            style={{ gap: 0 }}
          >
            {(
              [
                { key: 'map', label: 'Карта' },
                { key: 'photo', label: 'Фото' },
                { key: 'route', label: 'Как проехать' },
                { key: 'parking', label: 'Парковка' },
              ] as { key: ContentTab; label: string }[]
            ).map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="transition-colors text-center hover:opacity-90"
                  style={{
                    background: isActive ? '#b89d7e' : '#373737',
                    color: '#f2f2f2',
                    border: 'none',
                    flex: 1,
                    height: '80px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '0px',
                    font: '300 24px / 1.38 var(--font-manrope, Manrope, sans-serif)',
                    padding: 0,
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="mt-0">
            {activeTab === 'map' && (
              <div>
                <div
                  ref={mapContainerRef}
                  className="w-full bg-gray-100 rounded-lg overflow-hidden relative"
                  style={{ height: '878px', minHeight: '878px' }}
                >
                  <button
                    onClick={() => {
                      const [lat, lon] = activeBranch.coords;
                      const url = `https://yandex.ru/maps/?rtext=~${lat},${lon}&rtt=auto`;
                      window.open(url, '_blank');
                    }}
                    className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 hover:opacity-80"
                    style={{
                      bottom: '40px',
                      zIndex: 20,
                      border: '1px solid #b89d7e',
                      borderRadius: '50px',
                      paddingBlock: '14px',
                      paddingInline: '45px',
                      background: '#b89d7e',
                      color: '#ffffff',
                    }}
                  >
                    <span className="inline-block" aria-hidden>
                      <svg
                        width="15"
                        height="22"
                        viewBox="0 0 15 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.0475068 4.37611C-0.0284181 4.22426 -0.0121365 4.04534 0.0909014 3.91519L2.94325 0.173511C3.02459 0.0650574 3.15475 0 3.29031 0C3.42588 0 3.55603 0.0650574 3.64279 0.173511L6.49514 3.91519C6.59818 4.04534 6.60901 4.22972 6.53853 4.37611C6.46261 4.52796 6.3108 4.62013 6.14266 4.62013H5.4106V8.45402C3.55603 9.37046 2.05935 10.8943 1.17544 12.7651V4.62013H0.443376C0.27528 4.62013 0.123431 4.52251 0.0475068 4.37611Z"
                          fill="white"
                        />
                        <path
                          d="M14.1145 10.8565L10.3728 13.7088C10.2427 13.8119 10.0583 13.8281 9.91189 13.7522C9.76004 13.6763 9.66787 13.5245 9.66787 13.3564V12.6243H9.14185C7.0812 12.6243 5.41101 14.2999 5.41101 16.3551V20.5795C5.41125 20.6372 5.40005 20.6944 5.37807 20.7478C5.35608 20.8012 5.32373 20.8497 5.2829 20.8906C5.24207 20.9314 5.19355 20.9637 5.14015 20.9857C5.08675 21.0077 5.02953 21.0189 4.97178 21.0187H1.6151C1.55736 21.0189 1.50013 21.0077 1.44673 20.9857C1.39333 20.9637 1.34482 20.9314 1.30398 20.8906C1.26315 20.8497 1.2308 20.8012 1.20882 20.7478C1.18683 20.6944 1.17563 20.6372 1.17588 20.5795V16.6751C1.17588 12.1091 4.89044 8.39459 9.45638 8.39459H9.67329V7.66253C9.67329 7.49443 9.76546 7.34258 9.91731 7.26666C10.0692 7.19615 10.2481 7.20702 10.3782 7.31005L14.1199 10.1624C14.2284 10.2437 14.2935 10.3739 14.2935 10.5148C14.288 10.6504 14.2284 10.7751 14.1145 10.8565Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <span
                      className="font-manrope"
                      style={{
                        font: '300 16px / 1.2 var(--font-manrope, Manrope, sans-serif)',
                      }}
                    >
                      Проложить маршрут
                    </span>
                  </button>
                  {(mapState === 'loading' || mapState === 'idle') && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <div className="text-gray-500">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900 mx-auto mb-2"></div>
                        <p>Загрузка карты...</p>
                      </div>
                    </div>
                  )}
                  {mapState === 'error' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <div className="text-center">
                        <p className="text-red-500 font-semibold mb-2">
                          Не удалось загрузить карту
                        </p>
                        <button
                          onClick={() => window.location.reload()}
                          className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                        >
                          Обновить страницу
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'photo' && (
               <div className="relative w-full rounded-lg overflow-hidden" style={{ height: '878px' }}>
                 <Image
                   src={activeBranch.photoSrc}
                   alt={`Фото филиала: ${activeBranch.title}`}
                   fill
                   className="object-cover"
                   sizes="100vw"
                 />
               </div>
            )}

             {activeTab === 'route' && (
               <div className="rounded-md text-gray-900" style={{ minHeight: '878px' }}>
                 <div className="flex flex-col mt-[10px]" style={{ gap: '10px' }}>
                   {(activeBranch.videos || []).map((src, idx) => (
                     <video key={src + idx} controls playsInline className="w-full rounded-lg bg-black" style={{ height: '260px' }}>
                       <source src={src} />
                       Ваш браузер не поддерживает воспроизведение видео.
                     </video>
                   ))}
                   {(!activeBranch.videos || activeBranch.videos.length === 0) && (
                     <div className="w-full h-full min-h-[200px] rounded-lg border border-gray-300 flex items-center justify-center text-gray-500">
                       Видео для данного филиала пока не добавлены
                     </div>
                   )}
                 </div>
               </div>
             )}

            {activeTab === 'parking' && (
              <div className="relative rounded-lg overflow-hidden" style={{ height: '878px' }}>
                 {activeBranch.parkingPhotoSrc ? (
                   <Image
                     src={activeBranch.parkingPhotoSrc}
                     alt={`Парковка у филиала: ${activeBranch.title}`}
                     fill
                     className="object-cover"
                     sizes="100vw"
                   />
                 ) : (
                   <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                     <span className="text-gray-500">Фото парковки пока не добавлено</span>
                   </div>
                 )}
               </div>
             )}
          </div>
        </div>
      </div>
    </section>
  );
}
