import React from "react";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header className="mb-20  px-6 pt-5 sm:pt-10">
      <div className="container mx-auto flex h-9 items-center justify-between lg:max-w-screen-lg">
        <h4 className="text-base font-medium leading-tight text-neutral-900 sm:text-xl dark:text-neutral-300">
          Blog
        </h4>
        <div className="flex gap-5">
          <nav>
            <ul className="hidden gap-6 text-sm font-medium text-neutral-700 sm:flex dark:text-neutral-400">
              <li className="cursor-pointer">A propos</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Tags</li>
            </ul>
          </nav>
          <Image
            className="sm:hidden"
            src={"/svg/burgerIcon.svg"}
            alt="Menu burger icon"
            width={16}
            height={12}
          />
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default Header;
