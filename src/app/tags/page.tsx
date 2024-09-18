import React from "react";
import { fetchArticles, fetchTags } from "@/libs/api";

const Tags = async () => {
  console.log(await fetchTags());
  return <div> TAg</div>;
};

export default Tags;
