import React from "react";
import { fetchArticles, fetchTags } from "@/libs/axiosServer";
import TagCard from "@/components/ui/tag-card/TagCard";
import ArticleList from "@/components/ui/article-list/ArticleList";

const Tags: React.FC = async () => {
  // Fetching all the tags
  const tagsPayload = await fetchTags();

  // we extract the actual tags list from the payload
  const tags = tagsPayload.data;

  return (
    <main className="container  lg:max-w-screen-lg">
      <section className="flex flex-col items-center gap-9 px-6 sm:grid sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
        {tags.map((tag) => (
          <TagCard tag={tag} key={tag.id}></TagCard>
        ))}
      </section>
      <section className="container  lg:max-w-screen-lg">
        <ArticleList />
      </section>
    </main>
  );
};

export default Tags;

//Invalidate the cache  every 600 secondes (10min)
export const revalidate = 600;
