import { fetchTagByName, fetchTags } from "@/libs/axiosServer";
import React from "react";
import Image from "next/image";
import ArticleList from "@/components/ui/article-list/ArticleList";
import { Metadata } from "next/types";
import { notFound } from 'next/navigation';

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


// This function generates metadata for the tag page
export async function generateMetadata({ params }: { params: { name: string } }): Promise<Metadata> {
  try {
    // Fetch the tag data using the name from the URL parameters
    const tagPayload = await fetchTagByName(params.name);

    // Check if the tag exists
    if (!tagPayload.data || tagPayload.data.length === 0) {
      // If no tag is found, return arbitrary metadata for not found
      return {
        title: 'Tag Not Found',
        description: 'The requested tag could not be found.',
      };
    }

    const tag = tagPayload.data[0];
    const seo = tag.attributes.seo;

    // If there's no SEO data, return basic metadata
    if (!seo) {
      return {
        title: `#${tag.attributes.name}`,
        description: tag.attributes.description,
      };
    }

    // If SEO data exists, return a more comprehensive metadata object
    return {
      // Basic metadata
      title: seo.metaTitle,
      description: seo.metaDescription,
      keywords: seo.keywords,
      robots: seo.metaRobots,
      viewport: seo.metaViewport,
      canonical: seo.canonicalURL,

      // Open Graph metadata for social media sharing
      openGraph: {
        images: seo.metaImage ? [seo.metaImage.data.attributes.url] : [],
      },

      // Twitter-specific metadata
      twitter: {
        card: 'summary_large_image',
        images: seo.metaTwitterImage ? [seo.metaTwitterImage.data.attributes.url] : [],
      },

      // Include structured data if it exists
      ...(seo.structuredData && { 
        other: {
          'script:ld+json': JSON.stringify(seo.structuredData),
        },
      }),
    };
  } catch (error) {
    console.error("Error generating metadata for tag:", error);
    // Return arbitrary metadata for error case
    return {
      title: 'Error Loading Tag',
      description: 'There was an error loading the requested tag.',
    };
  }
}


// TODO Handle 404
// Generate page on demand if path hasn't been regenerated yet
export const dynamicParams = true;

const TagPage = async ({ params }: { params: { name: string } }) => {
  try {
    // Retrieving the tag as a strapi payload
    const tagPayload = await fetchTagByName(params.name);

    // Check if the tag exists
    if (!tagPayload.data || tagPayload.data.length === 0) {
      // If no tag is found, redirect to the 404 page
      notFound();
    }

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
              src={`${process.env.STRAPI_URL}${coverImage.attributes.url}`}
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
  } catch (error) {
    console.error("Error fetching tag:", error);
    notFound();
  }
};

export default TagPage;
