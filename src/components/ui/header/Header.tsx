"use client";

import React, { useState } from "react";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 
  return (
    <header className="mb-20 mt-5 sm:mt-10">
      <div className="container flex h-9 items-center justify-between lg:max-w-screen-lg">
        <Link href={"/"}>
          <h4 className="text-base font-medium leading-tight text-neutral-900 dark:text-neutral-300 sm:text-xl">
            Aniss.dev
          </h4>
        </Link>
        <div className="flex gap-5">
          <nav>
            <ul className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row fixed sm:relative inset-0 sm:inset-auto bg-white dark:bg-gray-800 sm:bg-transparent sm:dark:bg-transparent
    p-8 sm:p-0 shadow-md sm:shadow-none gap-12 sm:gap-6 text-xl sm:text-sm font-medium text-neutral-700 dark:text-neutral-400 z-50 items-center justify-center`}>
              <li className="cursor-pointer">
                <Link href="/about" onClick={toggleMenu}>A propos</Link>
              </li>
              <li className="cursor-pointer" onClick={toggleMenu}>Blog</li>
              <li className="cursor-pointer">
                <Link href={"/tags"} onClick={toggleMenu}>Tags</Link>
              </li>
              {isMenuOpen && (
                <li className="cursor-pointer sm:hidden" onClick={toggleMenu}>
                  <Image
                    src={"/svg/burgerIcon.svg"}
                    alt="Close menu icon"
                    width={16}
                    height={16}
                  />
                </li>
              )}
            </ul>
          </nav>
          <button onClick={toggleMenu} className="sm:hidden">
            <Image
              src={"/svg/burgerIcon.svg"}
              alt="Menu burger icon"
              width={16}
              height={12}
            />
          </button>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default Header;
