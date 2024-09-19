import React from "react";
import { fetchArticles, fetchTags } from "@/libs/api";
import TagCard from "@/components/ui/tag-card/TagCard";

const Tags: React.FC = async () => {
  // Fetching all the tags
  const tagsPayload = await fetchTags();

  // we extract the actual tags list from the payload
  const tags = tagsPayload.data;

  return (
    <main className="container flex flex-col lg:max-w-screen-lg">
      {tags.map((tag) => (
        <TagCard id={tag.id} attributes={tag.attributes} key={tag.id}></TagCard>
      ))}
    </main>
  );
};

export default Tags;
