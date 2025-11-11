import React, { useState, useRef, useEffect } from "react";

const CATALOG_MENU = [
  {
    label: "Плановое обслуживание",
    links: [
      { label: "Замена тех. жидкостей", href: "#oils" },
      { label: "Замена масла в двигателе", href: "#brakes" },
    ],
  },
  {
    label: "Диагностика",
    links: [
      { label: "Диагностика двигателя", href: "#bodypaint" },
      { label: "Диагностика двигателя", href: "#bumper" },
    ],
  },
  {
    label: "Подготовка к сезону",
    links: [
      { label: "Переобувка колес (смена шин)", href: "#bodypaint" },
      { label: "Переобувка колес (смена шин)", href: "#bumper" },
    ],
  },
  {
    label: "АвтоРемонт",
    links: [
      { label: "Диагностика ходовая часть", href: "#diagnostic" },
    ],
  },
  {
    label: "Охрана автомобиля",
    links: [
      { label: "Ремонт охранного оборудвания", href: "#wheels" },
    ],
  },
  {
    label: "Установка доп. оборудования",
    links: [
      { label: "Установка камеры заднего вида, фронтальной камеры", href: "#parts" },
    ],
  },
  {
    label: "Автоэлектрик",
    links: [
      { label: "Диагностика сканером", href: "#condition" },
    ],
  },
];

export default function CatalogSection() {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        setSelectedIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [open]);

  return (
    <section id="catalog" className="bg-white py-[80px]">
      <div className="container mx-auto px-4 max-w-desktop">
        <h2
          className="text-center font-manrope font-bold"
          style={{
            font: "600 clamp(32px,3.33vw,48px)/1.38 var(--font-manrope,Manrope,sans-serif)",
            color: "#1d1d21",
            marginBottom: "clamp(30px, 3vw, 60px)",
          }}
        >
          Каталог услуг
        </h2>
        <div className="relative max-w-[380px] mx-auto" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => {
              setOpen((v) => !v);
              if (!open) setSelectedIndex(null);
            }}
            className="w-full px-6 py-4 border rounded-lg flex items-center justify-between shadow-md focus:outline-none bg-white"
            style={{ font: "500 20px/1.3 var(--font-manrope,Manrope,sans-serif)", color: '#1d1d21', minHeight: 58 , backgroundColor: open ? "#ededed" : ""}}
          >
            {selectedIndex === null
              ? "Выбрать услугу"
              : CATALOG_MENU[selectedIndex].label}
            <span
              style={{
                marginLeft: 8,
                transition: "transform 0.2s",
                display: 'flex',
                alignItems: 'center',
                transform: "rotate(270deg)",
              }}
            >
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="#000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>

          {open && (
            <div
              className="absolute left-0 right-0 mt-2 bg-white border rounded-lg shadow-xl z-20 overflow-hidden"
              style={{ animation: "fadeIn .18s" }}
            >
              {CATALOG_MENU.map((item, idx) => (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedIndex(idx === selectedIndex ? null : idx)
                    }
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 focus:bg-gray-100 transition-colors"
                    style={{ font: "500 18px/1.4 var(--font-manrope,Manrope,sans-serif)", color: '#1d1d21' }}
                  >
                    {item.label}
                    <span
                      style={{
                        marginLeft: 8,
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'transform 0.18s',
                        transform:
                          selectedIndex === idx ? 'rotate(0deg)' : 'rotate(270deg)'
                      }}
                    >
                      {selectedIndex === idx ? (
                        <svg width={20} height={20} viewBox="0 0 20 20">
                          <path d="M6 8l4 4 4-4" stroke="#000" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <svg width={20} height={20} viewBox="0 0 20 20">
                          <path d="M8 6l4 4-4 4" stroke="#000" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                  </button>
                  {selectedIndex === idx && item.links && (
                    <div className="flex flex-col animate-fade-in">
                      {item.links.map((link) => (
                        <a
                          key={link.href}
                          href="https://ortus.ru/w/2222999"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2 hover:bg-gray-100 text-black font-manrope text-base text-left"
                          style={{ fontWeight: 500, boxShadow: '0 1px 3px 0 rgba(0,0,0,0.03)' }}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
