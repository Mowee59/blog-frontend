"use client";

import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchArticles } from "@/libs/axiosClient";
import { stat } from "fs";

const ArticleList = () => {
  const { data, status, error } = useInfiniteQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
    initialPageParam: 0,
    // TODO get the type right in articles type
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  return status === "pending" ? (
    <div className="bg-orange-800">Loading</div>
  ) : status === "error" ? (
    <div>{error.message}</div>
  ) : (
    <div>Success</div>
  );
};

export default ArticleList;
