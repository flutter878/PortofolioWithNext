"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Resume",
    href: "/resume",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="flex gap-4 sm:gap-6 md:gap-8 bg-background px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg font-jetbrains">
      {links.map((link, index) => {
        return (
          <Link
            href={link.href}
            key={index}
            className={`capitalize font-medium text-xs sm:text-sm md:text-base transition-all relative group ${
              link.href === pathname
                ? "text-emerald-500"
                : "text-foreground hover:text-emerald-500"
            }`}
          >
            {link.name}
            <span
              className={`absolute bottom-[-4px] left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full ${
                link.href === pathname ? "w-full" : ""
              }`}
            ></span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
