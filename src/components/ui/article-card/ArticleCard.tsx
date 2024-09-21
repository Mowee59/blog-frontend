import React from "react";
import Image from "next/image";
import placeholder from "/public/svg/ph.jpg";
import { Article } from "@/interfaces/article";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = (props: ArticleCardProps) => {
  // Asssigning the thumbnail to a varialbe
  const coverImageThumbnail =
    props.article.attributes.coverImage.data.attributes.formats.thumbnail;

  // Creating a date from publciated at attribute
  const publicationDate = new Date(props.article.attributes.publishedAt!);

  // The array of tags the article is related with
  const tags = props.article.attributes.tags!.data;

  return (
    <article className=" cursor-pointer @container">
      <div className="flex h-[120px] justify-center gap-5  @lg:gap-8 @3xl:gap-12">
        <div className="">
          <h3 className=" mb-3 text-xs font-medium leading-3 text-neutral-600 @lg:mb-4 dark:text-neutral-400">
            {`${publicationDate?.getDate()} `}
            <span className="text-transform: capitalize">
              {`${publicationDate?.toLocaleDateString("FR-fr", { month: "short" }).slice(0, -2)} `}
              &#8226;{" "}
            </span>
            <div className="inline-block ">
              {tags.map((tag) => (
                <span className="mr-1 hover:underline">
                  {"#" + tag.attributes.name + " "}
                </span>
              ))}
            </div>
          </h3>
          <p className="  line-clamp-3 max-h-full text-sm font-medium leading-tight  text-neutral-800 dark:text-neutral-300 sm:text-base sm:leading-normal lg:text-lg lg:leading-relaxed">
            {props.article.attributes.description}
          </p>
        </div>
        <div className="relative  hidden h-[120px] w-[160px] flex-shrink-0 @md:block">
          <Image
            src={coverImageThumbnail.url}
            alt="Image article"
            fill
            className=" rounded "
          />
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
