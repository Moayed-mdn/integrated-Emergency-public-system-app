'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export function Footer() {
  const t = useTranslations('Footer');
  const params = useParams();
  const locale = params.locale as string;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--primary-color)] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('about.title')}</h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              {t('about.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('quickLinks.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={`/${locale}`}
                  className="text-gray-200 hover:text-[var(--secondary-color)] transition-colors text-sm"
                >
                  {t('quickLinks.home')}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/about`}
                  className="text-gray-200 hover:text-[var(--secondary-color)] transition-colors text-sm"
                >
                  {t('quickLinks.about')}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/alerts`}
                  className="text-gray-200 hover:text-[var(--secondary-color)] transition-colors text-sm"
                >
                  {t('quickLinks.alerts')}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/awareness`}
                  className="text-gray-200 hover:text-[var(--secondary-color)] transition-colors text-sm"
                >
                  {t('quickLinks.awareness')}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/help`}
                  className="text-gray-200 hover:text-[var(--secondary-color)] transition-colors text-sm"
                >
                  {t('quickLinks.help')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Emergency Numbers */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('emergency.title')}</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-200">
                <span className="font-semibold">{t('emergency.ambulance')}:</span> 110
              </li>
              <li className="text-gray-200">
                <span className="font-semibold">{t('emergency.fire')}:</span> 113
              </li>
              <li className="text-gray-200">
                <span className="font-semibold">{t('emergency.police')}:</span> 112
              </li>
              <li className="text-gray-200">
                <span className="font-semibold">{t('emergency.traffic')}:</span> 115
              </li>
              <li className="text-gray-200">
                <span className="font-semibold">{t('emergency.redCrescent')}:</span> 114
              </li>
            </ul>
          </div>

          {/* Download App Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('downloadApp.title')}</h3>
            <p className="text-gray-200 text-sm mb-4">
              {t('downloadApp.description')}
            </p>
            
            {/* App Store Badges */}
            <div className="space-y-3">
              {/* Google Play Store */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-black hover:bg-gray-800 transition-colors rounded-lg px-4 py-2.5 flex items-center gap-3"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">{t('downloadApp.getItOn')}</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>

              {/* Apple App Store */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-black hover:bg-gray-800 transition-colors rounded-lg px-4 py-2.5 flex items-center gap-3"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">{t('downloadApp.downloadOn')}</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-300 text-sm text-center md:text-left">
              {t('copyright', { year: currentYear })}
            </div>

            {/* Social Media Links (Optional) */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-gray-300 hover:text-[var(--secondary-color)] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[var(--secondary-color)] transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[var(--secondary-color)] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
