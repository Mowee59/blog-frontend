"use client";

import React, { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchArticles } from "@/libs/axiosClient";
import ArticleCard from "../article-card/ArticleCard";
import { useInView } from "react-intersection-observer";

type ArticleListProps = {
  queryParams: string | undefined;
};

const ArticleList = ({queryParams = ''} : ArticleListProps) => {
  // Infinite query hook from react-query library
  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["articles", queryParams ],
    queryFn:  fetchArticles,
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
    <div className="mx-auto h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-blue-600" />
  ) : status === "error" ? (
    <div>{error.message}</div>
  ) : (
    <>
      <div className="flex w-full flex-col gap-8 md:gap-12">
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
      </div>

      {/* Div used to trigger fetching of the next page using intersection observer*/}
      <div ref={ref} className="mx-auto">
        {isFetchingNextPage && (
          <div className="h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-blue-600" />
        )}
      </div>

      {!hasNextPage && (
        <div className="text-center text-neutral-400">
          Plus d'articles a charger
        </div>
      )}
    </>
  );
};

export default ArticleList;
