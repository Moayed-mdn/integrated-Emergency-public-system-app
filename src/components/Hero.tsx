'use client';

import { useTranslations, useLocale } from 'next-intl';
import Container from './Container';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('Hero');
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1B4343] via-[#0d2828] to-[#002623] text-white">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            rgba(255,255,255,.05) 35px,
            rgba(255,255,255,.05) 70px
          )`
        }}></div>
      </div>

      {/* Animated Emergency Pulse Effect */}
      <div className="absolute top-10 right-10 md:top-20 md:right-20 rtl:right-auto rtl:left-10 rtl:md:left-20">
        <div className="relative">
          <div className="w-32 h-32 md:w-48 md:h-48 bg-[#B1A074] rounded-full opacity-20 animate-ping"></div>
          <div className="absolute inset-0 w-32 h-32 md:w-48 md:h-48 bg-[#B1A074] rounded-full opacity-30"></div>
        </div>
      </div>

      <Container>
        <div className="relative py-20 md:py-32 lg:py-40">
          <div className="max-w-4xl">
            {/* Logo Banner */}
            <div className="mb-8">
              <Image 
                src="/logo.svg" 
                alt="ResQ" 
                width={400} 
                height={100} 
                className="h-16 md:h-20 w-auto"
                priority
              />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#B1A074]" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">{t('badge')}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t('title')}
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
              {t('subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#emergency-numbers"
                className="inline-flex items-center justify-center bg-[#B1A074] text-[#1B4343] font-bold px-8 py-4 rounded-lg hover:bg-[#d4c599] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t('cta_primary')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
              
              <a
                href={`/${locale}/awareness`}
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                {t('cta_secondary')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#B1A074] mb-2">24/7</div>
                <div className="text-sm md:text-base text-gray-300">{t('stat_1')}</div>
              </div>
              <div className="text-center border-x border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-[#B1A074] mb-2">110</div>
                <div className="text-sm md:text-base text-gray-300">{t('stat_2')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#B1A074] mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 md:h-10 md:w-10 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <div className="text-sm md:text-base text-gray-300">{t('stat_3')}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Wave Shape */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
