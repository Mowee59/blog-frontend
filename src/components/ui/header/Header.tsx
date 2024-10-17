/*
 * This file is part of the Blog Frontend project.
 * 
 * Copyright (C) 2024 Aniss.dev
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */


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
            <ul
              className={`${isMenuOpen ? "flex" : "hidden"} fixed inset-0 z-50 flex-col items-center justify-center gap-12 bg-white p-8 text-xl font-medium
    text-neutral-700 shadow-md dark:bg-gray-800 dark:text-neutral-400 sm:relative sm:inset-auto sm:flex sm:flex-row sm:gap-6 sm:bg-transparent sm:p-0 sm:text-sm sm:shadow-none sm:dark:bg-transparent`}
            >
              <li className="cursor-pointer">
                <Link href="/about" onClick={() => isMenuOpen ?? toggleMenu}>
                  A propos
                </Link>
              </li>
              <li
                className="cursor-pointer"
                onClick={() => isMenuOpen ?? toggleMenu}
              >
                Blog
              </li>
              <li className="cursor-pointer">
                <Link href={"/tags"} onClick={() => isMenuOpen ?? toggleMenu}>
                  Tags
                </Link>
              </li>
              {isMenuOpen && (
                <li
                  className="cursor-pointer text-neutral-700 sm:hidden "
                  onClick={toggleMenu}
                >
                  <Image
                    src={"/svg/closeIcon.svg"}
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
