"use client";

import React, { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchArticles } from "@/libs/axiosClient";
import ArticleCard from "../article-card/ArticleCard";
import ArticleCardFallback from "../article-card/ArticleCardFallback";
import { useInView } from "react-intersection-observer";
import { ErrorBoundary } from "react-error-boundary";

// Type definition of the props
type ArticleListProps = {
  queryParams?: string;
};

/**
 * A component that fetch and display a list of articles. It lazy laods them and display them in an infinite query style
 *
 *
 * @param Props Query params is optional and represents additional arguments to the query, if not set, all articles will be fetch
 * @returns
 */
const ArticleList = ({ queryParams = "" }: ArticleListProps) => {
  // Infinite query hook from react-query library
  const {
    data,
    status,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteQuery({
    queryKey: ["articles", queryParams],
    queryFn: fetchArticles,
    initialPageParam: 1,
    // TODO get the type right in articles type
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  // Intersection observer Hook
  const { ref, inView } = useInView({
    rootMargin: "-25%",
  });

  // We use an effect to fetch next page of articles when boolean inView is true
  useEffect(() => {
    if (inView) {
      // According to the doc
      !isFetching && fetchNextPage();
    }
  }, [inView, fetchNextPage, isFetching]);

  return status === "pending" ? (
    // IF status is "pending" (no data yet), we dispay the loading spinner
    <div className="mx-auto h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-blue-600" />
  ) : status === "error" ? (
    //If status is error, we display the error message
    <div className="w-full p-4 bg-red-50 border border-red-300 rounded-md shadow-sm">
      <h2 className="text-lg font-semibold text-red-800 mb-2">Une erreur s'est produite</h2>
      <p className="text-red-600 mb-4">Nous n'avons pas pu charger les articles. Veuillez réessayer plus tard.</p>
      <details className="text-sm text-red-700">
        <summary className="cursor-pointer hover:underline">Détails techniques</summary>
        <p className="mt-2 p-2 bg-red-100 rounded">{error.message}</p>
      </details>
    </div>
  ) : (
    // If status is neither pending nor error, we can assule it's "success"
    <>
      <div className="flex w-full flex-col md:gap-12 ">
        {
          // Iterating throug pages
          data.pages.map((page, key) => {
            // Assigning the list of articles of the current page to a variable
            const articles = page.data.data;
            return (
              <div key={key} className="flex flex-col gap-8 md:gap-12 ">
                {
                  // Iterating through articles of the current page and displaying them
                  articles.map((article) => (
                    <ErrorBoundary
                      key={article.id}
                      FallbackComponent={ArticleCardFallback}
                    >
                      <ArticleCard article={article} />
                    </ErrorBoundary>
                  ))
                }
              </div>
            );
          })
        }
      </div>

      {/* Div used to trigger fetching of the next page using intersection observer*/}
      <div ref={ref} className="">
        {isFetchingNextPage && (
          <div className="mx-auto h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-blue-600" />
        )}
      </div>

      {
        // If there's not any page more to laod we display a message
        !hasNextPage && (
          <div className="text-center text-neutral-400">
            Plus d&apos;articles a charger
          </div>
        )
      }
    </>
  );
};

export default ArticleList;
