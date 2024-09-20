import { Tag } from "@/interfaces/tag";
import React from "react";
import Image from "next/image";
import { fetchArticlesByTagName } from "@/libs/api";

//Typing the component props
type TagCardProps = {
  tag: Tag;
};

const TagCard = async (props: TagCardProps) => {
  // Assigning the cover image attributes to a variable
  const coverImageAttributes = props.tag.attributes.cover.data.attributes;

  // Asssigning the thumbnail to a varialbe
  const coverImageThumbnail = coverImageAttributes.formats.thumbnail;

  // Fetching the articles related to the tag
  // We are adding  the 'fields[0]' query parameter to filter all list car we are only interested in metadata ( to get the number of articles related to the tag)
  const articles = await fetchArticlesByTagName(
    props.tag.attributes.name,
    "fields[0]",
  );

  return (
    <article className="flex h-[225px] w-full flex-col gap-5">
      <div className="relative h-[150px]">
        <Image
          src={`${process.env.STRAPI_URL}${coverImageThumbnail.url}`}
          alt={coverImageAttributes.alternativeText}
          fill
          placeholder="blur"
          blurDataURL={`${process.env.STRAPI_URL}${coverImageAttributes.previewUrl}`}
          objectFit="cover"
          className=" rounded-xl"
        ></Image>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-medium leading-snug text-neutral-900 dark:text-neutral-300">{`#${props.tag.attributes.name}`}</h3>
        <h4 className="text-sm font-medium leading-4 text-[#3d3d3d] dark:text-neutral-400">{`${articles.meta.pagination?.total} posts`}</h4>
      </div>
    </article>
  );
};

export default TagCard;
