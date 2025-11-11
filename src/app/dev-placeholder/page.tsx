import React from 'react';
import Image from 'next/image';

export default function DevPlaceholder() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-white px-4 ">
      <div className="flex-1 flex flex-col justify-center items-center w-full ">
        <h1
          className="font-manrope font-bold text-2xl md:text-4xl text-gray-900 text-center mb-10"
          style={{ marginTop: 40 }}
        >
          Данная страница находится в разработке
        </h1>
        <div className="flex flex-col items-center gap-6 mt-8 w-full max-w-xs">
          <a
            href="tel:+74232222999"
            className="flex items-center justify-center gap-4 w-full p-4 border rounded-xl shadow-md transition-colors cursor-pointer group bg-[#3d8adb]"
            style={{ textDecoration: 'none' }}
          >
            <Image
              src="/images/ui/phone-call.png"
              alt="Телефон"
              width={32}
              height={32}
              className="object-contain"
              style={{ minWidth: 32 }}
            />
            <span className="font-manrope text-xl md:text-2xl font-semibold text-[#1d1d21] group-hover:underline">
              +7 (423) 2222-999
            </span>
          </a>
          <div className="text-sm md:text-base font-manrope text-[#a38059] text-center mt-4">
            Мы рады вам 7 дней в неделю
          </div>
        </div>
      </div>
    </main>
  );
}
