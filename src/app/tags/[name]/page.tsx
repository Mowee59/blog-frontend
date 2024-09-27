import { fetchTagByName, fetchTags } from "@/libs/axiosServer";
import React from "react";
import Tags from "../page";
import Image from "next/image";
import ArticleList from "@/components/ui/article-list/ArticleList";

/**
 * This builtin in next js function allows to generate params so we can render pages on the server at build time and cache them this will improve performances and seo
 *
 */
export async function generateStaticParams() {
  const tagsPayload = await fetchTags();
  const tags = tagsPayload.data;

  return tags.map((tag) => ({
    name: tag.attributes.name,
  }));
}

// revalidatethe page every 600 secondes ( 10 min), ISR
// TODO ; Use a webhook instead
export const revalidate = 600;

// TODO Handle 404
// Generate page on demand if path hasn't been regenerated yet
export const dynamicParams = true;

const page = async ({ params }: { params: { name: string } }) => {
  // Retrieving the tag as a strapi payload
  const tagPayload = await fetchTagByName(params.name);

  // Assigning the tag data to a variable
  const tag = tagPayload.data[0];

  const coverImage = tag.attributes.cover.data;

  return (
    <main className="container flex flex-col gap-8 lg:max-w-screen-lg">
      <div className=" lg:px-10 xl:px-20">
        <h1 className="mb-6 text-2xl font-medium leading-normal text-neutral-900 dark:text-neutral-300 sm:text-4xl sm:leading-10 lg:mb-8 lg:text-5xl xl:text-6xl">
          {`#${tag.attributes.name}`}
        </h1>
        <p className="text-base font-medium text-neutral-700 dark:text-neutral-400 sm:text-lg sm:leading-7 lg:text-xl lg:leading-loose">
          {tag.attributes.description}
        </p>
      </div>
      {/* #TODO Handle image sizing */}
      <div>
        <div className="relative mx-auto  mb-4 h-[340px] w-full lg:h-[500px] ">
          <Image
            // Image url structure is : strapiUrl/uplooads/image
            src={`${coverImage.attributes.url}`}
            alt={`${coverImage.attributes.alternativeText}` || "cover image"}
            fill
            className=" rounded-xl object-cover"
          />
        </div>
        <p className="text-center text-xs font-normal italic leading-none text-neutral-600 dark:text-neutral-500">
          {coverImage.attributes.caption}
        </p>
      </div>
      <div className=" lg:px-10 xl:px-20">
        <ArticleList
          queryParams={`filters[tags][name][$in]=${tag.attributes.name}`}
        />
      </div>
    </main>
  );
};

export default page;
