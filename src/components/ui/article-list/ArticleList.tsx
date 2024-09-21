"use client";

import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchArticles } from "@/libs/api";

const ArticleList = () => {
  // const { data, status, error } = useInfiniteQuery({
  //   queryKey: ["articles"],
  //   queryFn: fetchArticles,
  //   initialPageParam: 0,
  //   // TODO get the type right in articles type
  //   getNextPageParam: (lastPage, allPages, lastPageParam) =>
  //     lastPage.meta.pagination!.page + 1,
  // });

  return <div className="bg-red-800">ArticleList</div>;
};

export default ArticleList;
