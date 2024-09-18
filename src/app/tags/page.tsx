import React from "react";
import { fetchArticles, fetchTags } from "@/libs/api";

const Tags = async () => {
  console.log(await fetchTags());
  return <main className="container flex lg:max-w-screen-lg"></main>;
};

export default Tags;
