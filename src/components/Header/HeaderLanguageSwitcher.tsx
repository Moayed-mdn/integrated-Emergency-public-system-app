import { languages } from "@/i18n/config";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { useLocale } from "next-intl";




export default function HeaderLanguageSwitcher(){
    const pathname = usePathname();
    const locale = useLocale();
    const currentLanguage = languages.find((lang) => lang.code === locale);
    return(
      <Menu as="div" className="relative inset-s-4">
          <MenuButton className="flex items-center gap-2 text-(--primary-color) cursor-pointer">
                <span className="text-sm uppercase font-extrabold">{currentLanguage?.code}</span> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 transition-transform ui-open:rotate-180">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
          </MenuButton>
          <MenuItems className="absolute top-10 inset-e-3   py-3 border border-gray-200
           rounded-lg flex flex-col text-end w-[160px]
           ">
            {languages.map((lang) => (
              <Link key={lang.code} href={pathname}
               locale={lang.code}
               className={`flex justify-between py-1 px-2 flex-row font-bold text-sm
                  ${currentLanguage?.code == lang.code ? 'bg-(--primary-color) text-white' : ''}
                `}
               
               >
                <span>{lang.localName}</span>
                <span className="uppercase">{lang.code}</span>
              </Link>
            ))}
          </MenuItems>
      </Menu>        
    )
}