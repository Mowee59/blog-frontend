/*
 * This file is part of the Blog Frontend project.
 * 
 * Copyright (C) 2024 Aniss.dev
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */


"use client";

import React, { useEffect, useState } from "react";
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
  const [showIntersectionObserver, setShowIntersectionObserver] =
    useState(false);

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
    if (inView && showIntersectionObserver) {
      // According to the doc
      !isFetching && fetchNextPage();
    }
  }, [inView, fetchNextPage, isFetching, showIntersectionObserver]);

  return status === "pending" ? (
    // IF status is "pending" (no data yet), we dispay the loading spinner
    <div className="mx-auto h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-blue-600" />
  ) : status === "error" ? (
    //If status is error, we display the error message
    <div className="w-full rounded-md border border-red-300 bg-red-50 p-4 shadow-sm">
      <h2 className="mb-2 text-lg font-semibold text-red-800">
        Une erreur s'est produite
      </h2>
      <p className="mb-4 text-red-600">
        Nous n'avons pas pu charger les articles. Veuillez réessayer plus tard.
      </p>
      <details className="text-sm text-red-700">
        <summary className="cursor-pointer hover:underline">
          Détails techniques
        </summary>
        <p className="mt-2 rounded bg-red-100 p-2">{error.message}</p>
      </details>
    </div>
  ) : (
    // If status is neither pending nor error, we can assule it's "success"
    <>
      <div className="item flex w-full flex-col md:gap-12 ">
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

      {!showIntersectionObserver && hasNextPage && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowIntersectionObserver(true)}
            className="mt-8 w-full rounded-md border border-neutral-300 bg-neutral-200 py-3 text-xs font-medium leading-3 text-[#3d3d3d] dark:border-[#3d3d3d] dark:bg-neutral-800 dark:text-neutral-400 md:max-w-72"
          >
            Voir Plus
          </button>
        </div>
      )}

      {showIntersectionObserver && (
        <>
          {/* Div used to trigger fetching of the next page using the intersection observer*/}
          <div ref={ref} className="">
            {isFetchingNextPage && (
              <div className="mx-auto h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-blue-600" />
            )}
          </div>

          {
            // If there's not any page more to laod we display a message
            !hasNextPage && (
              <div className="mt-10 text-center text-neutral-400">
                Plus aucun article à charger
              </div>
            )
          }
        </>
      )}
    </>
  );
};

export default ArticleList;
