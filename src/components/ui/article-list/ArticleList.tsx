"use client";

import React, { MouseEventHandler, useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchArticles } from "@/libs/axiosClient";
import { stat } from "fs";
import ArticleCard from "../article-card/ArticleCard";
import { useInView } from "react-intersection-observer";

const ArticleList = () => {
  // Infinite query hook from react-query library
  const { data, status, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ["articles"],
    queryFn: fetchArticles,
    initialPageParam: 1,
    // TODO get the type right in articles type
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  // Intersection observer Hook
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return status === "pending" ? (
    <div className="bg-orange-800">Loading</div>
  ) : status === "error" ? (
    <div>{error.message}</div>
  ) : (
    <div className="flex w-full flex-col gap-10">
      {
        // Iterating throug pages
        data.pages.map((page) => {
          // Assigning the list of articles of the current page to a variable
          const articles = page.data.data;
          return (
            <>
              {
                // Iterating through articles of the current page and displaying them
                articles.map((article) => {
                  return <ArticleCard key={article.id} article={article} />;
                })
              }
            </>
          );
        })
      }

      {/* Div used to trigger fetching of the next page using intersection observer*/}
      <div ref={ref}></div>
    </div>
  );
};

export default ArticleList;
