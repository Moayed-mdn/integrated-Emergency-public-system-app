'use client';
import {useTranslations} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';
import HeaderLanguageSwitcher from './HeaderLanguageSwitcher';
import HeaderLogo from './HeaderLogo';
import HeaderMobile from './HeaderMobile';
import HeaderLinks from './HeaderLinks';

export function Header() {
  return (
    <header className="flex  justify-between items-center p-4">
      <HeaderLogo/>
      <div className="hidden md:block flex-1">
        <HeaderLinks />
      </div>
      <div className='flex '>
        <HeaderMobile />
        <HeaderLanguageSwitcher/>
      </div>
    </header>
  );
}