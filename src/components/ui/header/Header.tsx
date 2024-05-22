import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="mb-20 h-9 px-6 pt-5 sm:pt-10">
      <div className="container mx-auto flex items-center justify-between lg:max-w-screen-lg">
        <h4 className="text-base font-medium leading-tight text-neutral-900 sm:text-xl">
          Blog
        </h4>
        <div className="flex gap-5">
          <nav>
            <ul className="hidden gap-6 text-sm font-medium text-neutral-700 sm:flex">
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
          <Image
            className="hover:cursor-pointer"
            src={"/svg/sun.svg"}
            alt="Switch theme icon"
            width={14}
            height={14}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
