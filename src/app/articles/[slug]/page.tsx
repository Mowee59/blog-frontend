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


import { Metadata } from "next";
import { fetchArticleBySlug, fetchArticles } from "@/libs/axiosServer";
import markdownToHtml from "@/libs/markdownToHtml";
import React from "react";
import "@/../public/css/prism.css";
import { notFound } from "next/navigation";

/**
 * This builtin in next js function allows to generate params so we can render pages on the server at build time and cache them this will improve performances and seo
 *
 */
export async function generateStaticParams() {
  const articlesPayload = await fetchArticles();
  const articles = articlesPayload.data;

  return articles.map((article) => ({
    slug: article.attributes.slug,
  }));
}

// This function generates metadata for the article page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // Fetch the article data using the slug from the URL parameters
  const articlePayload = await fetchArticleBySlug(params.slug);

  // Check if the article exists
  if (!articlePayload.data || articlePayload.data.length === 0) {
    // If no article is found, return a default metadata object
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  }

  const article = articlePayload.data[0];
  const seo = article.attributes.seo;

  // If there's no SEO data, return basic metadata
  if (!seo) {
    return {
      title: article.attributes.title,
      description: article.attributes.description,
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
      title: seo.metaTitle || article.attributes.title,
      description: seo.metaDescription || article.attributes.description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/articles/${article.attributes.slug}`,
      siteName: "Aniss.dev",
      images: seo.metaImage
        ? [
            {
              url: seo.metaImage.data.attributes.url,
              width: seo.metaImage.data.attributes.width,
              height: seo.metaImage.data.attributes.height,
              alt:
                seo.metaImage.data.attributes.alternativeText ||
                article.attributes.title,
            },
          ]
        : [],
      locale: "fr_FR",
      type: "article",
      publishedTime: article.attributes.publishedAt,
      authors: "Aniss",
    },

    // Twitter-specific metadata
    twitter: {
      card: "summary_large_image",
      title: seo.metaTitle || article.attributes.title,
      description: seo.metaDescription || article.attributes.description,
      images: seo.metaTwitterImage
        ? [
            {
              url: `${process.env.STRAPI_URL}${seo.metaTwitterImage.data.attributes.url}`,
              alt:
                seo.metaTwitterImage.data.attributes.alternativeText ||
                article.attributes.title,
              width: seo.metaTwitterImage.data.attributes.width,
              height: seo.metaTwitterImage.data.attributes.height,
            },
          ]
        : [],
    },

    // Include structured data if it exists
    ...(seo.structuredData && {
      other: {
        "script:ld+json": JSON.stringify(seo.structuredData),
      },
    }),
  };
}




// Generate page on demand if path hasn't been regenerated yet
export const dynamicParams = true;

const Article = async ({ params }: { params: { slug: string } }) => {
  try {
    // Retrieving the article as a strapi payload
    const articlePayload = await fetchArticleBySlug(params.slug);

    // Check if the article exists
    if (!articlePayload.data || articlePayload.data.length === 0) {
      // If no article is found, redirect to the 404 page
      notFound();
    }

    // Assigning the article data itself to a variable
    const article = articlePayload.data[0];
    // Creating a new Date object from the publishedAt attribute
    const publicationDate = new Date(article.attributes.publishedAt as string);

    // The array of tags the article is related with
    const tags = article.attributes.tags?.data ?? [];

    // We parse the markdown to get HTML content
    const parsedMarkdown = await markdownToHtml(article.attributes.content);

    return (
      <main className="container flex flex-col lg:max-w-screen-lg ">
        <div className=" lg:px-10 xl:px-20">
          <div className="flex flex-col">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <h6 className="text-xs font-medium leading-3 text-neutral-600 dark:text-neutral-400">
                  {`${publicationDate.toLocaleDateString("Fr-fr", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}`}
                  <br />
                  {tags.map((tag) => (
                    <span key={tag.id} className="mr-1 hover:underline ">
                      {"#" + tag.attributes.name + " "}
                    </span>
                  ))}
                </h6>
                <h6 className="text-xs font-medium leading-3 text-neutral-600 dark:text-neutral-400">
                  {article.attributes.readingTime.slice(0, -5)}
                </h6>
              </div>
              <h1 className="mb-6 text-2xl font-medium leading-normal text-neutral-900 dark:text-neutral-300 sm:text-4xl sm:leading-10 lg:mb-8 lg:text-5xl xl:text-6xl">
                {article.attributes.title}
              </h1>
              {/* <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-400">
                {article.attributes.description}
              </p> */}
            </div>
          </div>
          <article
            dangerouslySetInnerHTML={{ __html: parsedMarkdown }}
            className="prose prose-slate dark:prose-invert lg:prose-xl prose-img:rounded-xl"
          ></article>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching article:", error);
    notFound();
  }
};

export default Article;
