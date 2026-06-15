import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";



export default function HeaderLogo(){
    const t = useTranslations('Header');
    return (
        <Link href="/">
           <div className="flex items-center">

            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-8 h-8 text-(--secondary-color)"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            <span className="text-(--primary-color) font-extrabold text-sm lg:text-lg">{t('title')}</span>
           </div>
        </Link>
    )
}