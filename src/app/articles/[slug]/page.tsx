import { fetchArticleBySlug, fetchArticles } from "@/libs/axiosServer";
import markdownToHtml from "@/libs/markdownToHtml";
import { parse } from "path";
import React from "react";
import '@/../public/css/prism.css';
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

// revalidatethe page every 600 secondes ( 10 min), ISR
// TODO ; Use a webhook instead
export const revalidate = 600;

// TODO Handle 404
// Generate page on demand if path hasn't been regenerated yet
export const dynamicParams = true;

const page = async ({ params }: { params: { slug: string } }) => {
  // Retrieving the article as a strapi payload
  const articlePayload = await fetchArticleBySlug(params.slug);

  // Assigning the article data itself to a variable
  const article = articlePayload.data[0];
  // Creating a new Date object from the publishedAt attribute
  const publicationDate = new Date(article.attributes.publishedAt as string);

  // The array of tags the article is related with
  const tags = article.attributes.tags?.data ?? [];

  // We parse the markdown to get HTML content
  const parsedMarkdown = await markdownToHtml(article.attributes.content);

  return (
    <main className="container flex flex-col lg:max-w-screen-lg">
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
          className="prose prose-slate dark:prose-invert lg:prose-xl prose-img:rounded-xl line-numbers"
        ></article>
      </div>
    </main>
  );
};

export default page;
