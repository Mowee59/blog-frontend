import React from "react";
import Image from "next/image";
import { Article_Preview } from "@/interfaces/Article";
import Link from "next/link";

type ArticleCardProps = {
  article: Article_Preview;
};

/**
 * ArticleCard component displays a preview of an article.
 * It includes the article's title, description, publication date, tags, and cover image.
 *
 * @param {ArticleCardProps} props - The properties object containing the article data.
 * @returns {JSX.Element} The rendered ArticleCard component.
 */
const ArticleCard = (props: ArticleCardProps) => {
  // Assigning the thumbnail to a variable
  const coverImageThumbnail =
    props.article.attributes.coverImage.data.attributes.formats.thumbnail;

  // Creating a date from publishedAt attribute
  const publicationDate = new Date(props.article.attributes.publishedAt!);

  // The array of tags the article is related with
  const tags = props.article.attributes.tags!.data;

  return (
    <Link href={`/articles/${props.article.attributes.slug}`}>
      <article className="cursor-pointer @container">
        <div className="flex h-fit w-full min-w-full justify-between gap-5 @lg:gap-8 @3xl:gap-12 md:h-[120px]">
          <div className="">
            <h3 className="mb-3 text-xs font-medium leading-3 text-neutral-600 @lg:mb-2 dark:text-neutral-400">
              {`${publicationDate?.getDate()} `}
              <span className="text-transform: capitalize">
                {`${publicationDate?.toLocaleDateString("FR-fr", { month: "short" }).slice(0, 3)} `}
                &#8226;{" "}
              </span>
              <div className="inline-block">
                {tags.map((tag) => (
                  <span key={tag.id} className="mr-1 hover:underline">
                    {"#" + tag.attributes?.name + " "}
                  </span>
                ))}
              </div>
            </h3>
            <h2 className="max-h-full text-xl font-semibold leading-tight text-neutral-800 dark:text-neutral-300 sm:text-base sm:leading-normal lg:text-lg lg:leading-relaxed">
              {props.article.attributes.title}
            </h2>
            <p className="line-clamp-2 max-h-full text-sm font-medium leading-tight text-neutral-800 dark:text-neutral-300 sm:text-base sm:leading-normal lg:text-lg lg:leading-relaxed">
              {props.article.attributes.description}
            </p>
          </div>
          <div className="relative hidden h-[120px] w-[160px] flex-shrink-0 @md:block">
            <Image
              src={`${coverImageThumbnail.url}`}
              alt={
                props.article.attributes.coverImage.data.attributes
                  .alternativeText
              }
              fill
              className="rounded"
            />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
