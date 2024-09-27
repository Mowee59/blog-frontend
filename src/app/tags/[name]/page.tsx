import { fetchTagByName, fetchTags } from "@/libs/axiosServer";
import React from "react";
import Tags from "../page";

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

  return <div>{tag.attributes.name}</div>;
};

export default page;
