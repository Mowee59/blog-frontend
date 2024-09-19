import { Tag } from "@/interfaces/tag";
import React from "react";
import Image from "next/image";

const TagCard = ({ id, attributes }: Tag) => {
  // Assigning the cover image to a variable
  const coverImage = attributes.cover.data.attributes;

  return (
    <article className="flex h-[225px] w-full flex-col gap-5">
      <div className="relative h-[150px]">
        <Image
          src={`${process.env.STRAPI_URL}${coverImage.url}`}
          alt={coverImage.alternativeText}
          fill
          placeholder="blur"
          blurDataURL={`${process.env.STRAPI_URL}${coverImage.previewUrl}`}
          objectFit="cover"
          className=" rounded-xl"
        ></Image>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-medium text-neutral-900">{`#${attributes.name}`}</h3>
        <h4 className="text-sm font-medium text-[#3d3d3d]">{`x posts`}</h4>
      </div>
    </article>
  );
};

export default TagCard;
