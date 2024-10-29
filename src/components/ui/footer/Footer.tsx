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

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" mt-20 pb-10  ">
      <div className="container flex flex-col lg:max-w-screen-lg">
        <section className="mb-12 flex flex-col sm:mb-16 sm:flex-row sm:justify-between">
          <div className="sm:max-w-96 ">
            <h4 className="mb-3 text-lg font-medium text-neutral-900 sm:mb-5 dark:text-neutral-300">
              Aniss.dev
            </h4>

            <p className="mb-10 text-sm leading-snug text-neutral-600 sm:mb-0 sm:text-lg sm:leading-7 dark:text-neutral-500">
              Lorem ipsum dolor sit amet consectetur. Egestas convallis amet
              tempus varius neque. Vulputate vivamus egestas vitae.
            </p>
          </div>
          <ul className=" flex gap-4 text-xs font-medium text-neutral-700 sm:flex-col dark:text-neutral-400">
            <li className="flex items-center gap-3 ">
              Lorem
              <Image
                src={"/svg/arrowLink.svg"}
                alt="arrow icon"
                width={10}
                height={10}
              />
            </li>
            <li className="flex items-center gap-3">
              Lorem
              <Image
                src={"/svg/arrowLink.svg"}
                alt="arrow icon"
                width={10}
                height={10}
              />
            </li>
            <li className="flex items-center gap-3 ">
              Lorem
              <Image
                src={"/svg/arrowLink.svg"}
                alt="arrow icon"
                width={10}
                height={10}
              />
            </li>
          </ul>
        </section>
        <hr className="dark:border-neutral-800"></hr>
        <section className="mt-10 flex flex-col text-xs font-normal leading-3 text-neutral-600 sm:flex-row sm:items-center sm:justify-between dark:text-neutral-500">
          <p>&#169; Copyright</p>
          <div className="mt-5 flex gap-5 sm:mt-0">
            <Link href="/mentions-legales">
              <p>Mentions légales</p>
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
