import { Tag } from "@/interfaces/tag";
import React from "react";
import Image from "next/image";
import { fetchArticlesByTagName } from "@/libs/axiosServer";
import Link from "next/link";

//Typing the component props
type TagCardProps = {
  tag: Tag;
};

const TagCard =  (props: TagCardProps) => {
  // Assigning the cover image attributes to a variable
  const coverImageAttributes = props.tag.attributes.cover.data.attributes;

  // Asssigning the thumbnail to a varialbe
  const coverImageThumbnail = coverImageAttributes.formats.thumbnail;

  // Getting the number of articles related to the tag
  const articlesCount = props.tag.attributes.articles?.data.length;

  return (
    <article className="flex h-[225px] w-full flex-col gap-5">
      <Link href={`/tags/${props.tag.attributes.name.toLocaleLowerCase()}`}>
        <div>
          <div className="relative h-[150px]">
            <Image
              src={`${coverImageThumbnail.url}`}
              alt={coverImageAttributes.alternativeText}
              fill
              placeholder="blur"
              blurDataURL={`${coverImageAttributes.previewUrl}`}
              className=" rounded-xl object-cover"
            ></Image>
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-medium leading-snug text-neutral-900 dark:text-neutral-300">{`#${props.tag.attributes.name}`}</h3>
            <h4 className="text-sm font-medium leading-4 text-[#3d3d3d] dark:text-neutral-400">{`${articlesCount} Articles`}</h4>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default TagCard;
