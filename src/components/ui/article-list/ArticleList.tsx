"use client";

import React, { MouseEventHandler } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchArticles } from "@/libs/axiosClient";
import { stat } from "fs";
import ArticleCard from "../article-card/ArticleCard";

const ArticleList = () => {
  const { data, status, error, fetchNextPage } = useInfiniteQuery({
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
    <div className="mx-auto">
      {
        // Iterating throug pages
        data.pages.map((page) => {
          // Assigning the list of articles of the current page to a variable
          const articles = page.data.data;
          return (
            <div key={page.currentPage} className="flex w-full flex-col gap-10">
              {
                // Iterating through articles of the current page and displaying them
                articles.map((article, key) => {
                  return <ArticleCard key={key} article={article} />;
                })
              }
            </div>
          );
        })
      }
    </div>
  );
};

export default ArticleList;
