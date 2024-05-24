import React from "react";
import Image from "next/image";
import placeholder from "/public/svg/ph.jpg";

const ArticleCard = () => {
  return (
    <article className=" @container">
      <div className="flex justify-center gap-5 @lg:gap-8 @3xl:gap-12">
        <div>
          <h3 className=" mb-3 text-xs font-medium leading-3 text-neutral-600 @lg:mb-4 dark:text-neutral-400">
            2 Fév - #tag
          </h3>
          <p className="text-sm font-medium leading-tight text-neutral-800 dark:text-neutral-300 sm:text-base sm:leading-normal  lg:text-lg lg:leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Ac porta gravida sed integer
            fusce commodo gravida tellus.
          </p>
        </div>
        <Image
          src={placeholder}
          alt="Image article"
          width={160}
          className="hidden rounded @md:block"
          height={105}
        />
      </div>
    </article>
  );
};

export default ArticleCard;
