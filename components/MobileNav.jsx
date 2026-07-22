"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const Links = [
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

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-8 items-center justify-center py-20">
        {/* Logo */}
        <Link href="/" className="text-4xl font-semibold text-white">
          MUSLIADI
          <span className="text-emerald-500">.</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-6 text-center">
          {Links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`text-xl font-medium transition-colors ${
                pathname === link.href
                  ? "text-emerald-500 border-b-2 border-emerald-500 pb-1"
                  : "text-white hover:text-emerald-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
