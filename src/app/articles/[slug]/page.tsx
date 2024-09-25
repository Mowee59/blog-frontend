import { fetchArticles } from "@/libs/axiosServer";
import React from "react";

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


// Generate page on demand if path hasn't been regenerated yet
export const dynamicParams = true;

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <main className="container lg:max-w-screen-lg">
      <p>{params.slug}</p>
    </main>
  );
};

export default page;
