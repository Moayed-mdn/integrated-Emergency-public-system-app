"use client"; // Required for hooks
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function HeaderLinks() {
  const pathname = usePathname();
  const t = useTranslations("Header");

  const links = [
    { name: t("Home"), href: "/" },
    { name: t("About"), href: "/about" },
    { name: t("Posts"), href: "/posts" },
    { name: t("Awareness"), href: "/awareness" },
    { name: t("Help & Suggestions"), href: "/help" },
  ];

  return (
    <nav className="flex flex-1 flex-col md:flex-row justify-end">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`py-1 px-2 lg:px-4 transition-colors text-(--text-color)  rounded-xl   font-semibold ${
              isActive 
                ? "bg-(--primary-color) text-white " 
                : "hover:text-(--secondary-color) "
             
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}