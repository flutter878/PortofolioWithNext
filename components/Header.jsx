"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useTheme } from "./theme-provider";
import { FiSun, FiMoon } from "react-icons/fi";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="py-8 xl:py12 text-foreground">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            MUSLIADI
            <span className="text-emerald-500">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-emerald-500 hover:border-emerald-500 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <Link href="/contact">
              <Button>Hire Me</Button>
            </Link>
          </div>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-emerald-500 hover:border-emerald-500 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;