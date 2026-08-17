'use client';

import { useTranslations, useLocale } from 'next-intl';
import Container from '@/components/Container';

export default function AboutPage() {
  const t = useTranslations('About');
  const locale = useLocale();

  return (
    <section className="py-16 px-4">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[var(--primary-color)] rounded-full mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary-color)] mb-4">
              {t('title')}
            </h1>
            <p className="text-xl text-[var(--text-color)] max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 mb-8">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">
              {t('mission.title')}
            </h2>
            <p className="text-lg text-[var(--text-color)] leading-relaxed">
              {t('mission.description')}
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 mb-8">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-4">
              {t('vision.title')}
            </h2>
            <p className="text-lg text-[var(--text-color)] leading-relaxed">
              {t('vision.description')}
            </p>
          </div>

          {/* Core Values Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 mb-8">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-6">
              {t('values.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Value 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
                    {t('values.value1.title')}
                  </h3>
                  <p className="text-[var(--text-color)]">
                    {t('values.value1.description')}
                  </p>
                </div>
              </div>

              {/* Value 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
                    {t('values.value2.title')}
                  </h3>
                  <p className="text-[var(--text-color)]">
                    {t('values.value2.description')}
                  </p>
                </div>
              </div>

              {/* Value 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
                    {t('values.value3.title')}
                  </h3>
                  <p className="text-[var(--text-color)]">
                    {t('values.value3.description')}
                  </p>
                </div>
              </div>

              {/* Value 4 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--secondary-color)] rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-2">
                    {t('values.value4.title')}
                  </h3>
                  <p className="text-[var(--text-color)]">
                    {t('values.value4.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What We Do Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 mb-8">
            <h2 className="text-3xl font-bold text-[var(--primary-color)] mb-6">
              {t('whatWeDo.title')}
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--secondary-color)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg text-[var(--text-color)]">
                  {t('whatWeDo.item1')}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--secondary-color)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg text-[var(--text-color)]">
                  {t('whatWeDo.item2')}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--secondary-color)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg text-[var(--text-color)]">
                  {t('whatWeDo.item3')}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--secondary-color)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg text-[var(--text-color)]">
                  {t('whatWeDo.item4')}
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--secondary-color)] flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg text-[var(--text-color)]">
                  {t('whatWeDo.item5')}
                </p>
              </div>
            </div>
          </div>

          {/* Technology Section */}
          <div className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] rounded-lg shadow-md p-8 mb-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              {t('technology.title')}
            </h2>
            <p className="text-lg leading-relaxed opacity-95">
              {t('technology.description')}
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center">
              <div className="text-4xl font-bold text-[var(--primary-color)] mb-2">24/7</div>
              <p className="text-[var(--text-color)] font-medium">{t('stats.availability')}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center">
              <div className="text-4xl font-bold text-[var(--primary-color)] mb-2">5</div>
              <p className="text-[var(--text-color)] font-medium">{t('stats.emergencyNumbers')}</p>
            </div>
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center">
              <div className="text-4xl font-bold text-[var(--primary-color)] mb-2">2</div>
              <p className="text-[var(--text-color)] font-medium">{t('stats.languages')}</p>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 text-center">
            <h2 className="text-2xl font-bold text-[var(--primary-color)] mb-4">
              {t('contact.title')}
            </h2>
            <p className="text-lg text-[var(--text-color)] mb-6">
              {t('contact.description')}
            </p>
            <a 
              href={`/${locale}/help`}
              className="inline-block bg-[var(--primary-color)] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[var(--secondary-color)] transition-colors duration-200"
            >
              {t('contact.button')}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
