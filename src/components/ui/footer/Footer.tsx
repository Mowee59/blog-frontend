import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" mt-20  ">
      <div className="container flex flex-col lg:max-w-screen-lg">
        <section className="mb-12 flex flex-col sm:mb-16 sm:flex-row sm:justify-between">
          <div className="sm:max-w-96 ">
            <h4 className="mb-3 text-lg font-medium text-neutral-900 dark:text-neutral-300 sm:mb-5">
              Aniss.dev
            </h4>

            <p className="mb-10 text-sm leading-snug text-neutral-600 dark:text-neutral-500 sm:mb-0 sm:text-lg sm:leading-7">
              Lorem ipsum dolor sit amet consectetur. Egestas convallis amet
              tempus varius neque. Vulputate vivamus egestas vitae.
            </p>
          </div>
          <ul className=" flex gap-4 text-xs font-medium text-neutral-700 dark:text-neutral-400 sm:flex-col">
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
        <section className="mt-10 flex flex-col text-xs font-normal leading-3 text-neutral-600 dark:text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&#169; Copyright</p>
          <div className="mt-5 flex gap-5 sm:mt-0">
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
