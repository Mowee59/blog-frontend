/**
 * This file is used to define API requests that will be used for client-side requests.
 */

import { QueryFunction, QueryFunctionContext } from "@tanstack/react-query";
import { infiniteQueryFormatedData } from "@/interfaces/InfiniteQueryFormatedData";
import { apiClient } from "./axiosConfig";

// Number of articles per page
const PAGE_SIZE = 2;

/**
 * Fetches articles from the API with pagination and populates related data.
 *
 * @param {QueryFunctionContext<[string, string], number>} context - The context object containing page parameters and query key.
 * @returns {Promise<infiniteQueryFormatedData>} The formatted data including articles, current page, and next page if available. This format is directly used by react-query infinite query hook.
 */
export const fetchArticles: QueryFunction<
  infiniteQueryFormatedData,
  [string, string],
  number
> = async ({
  pageParam = 1,
  queryKey,
}: QueryFunctionContext<[string, string], number>) => {
  // TODO: Add axios typed response

  const [_key, queryParams = ""] = queryKey;
  const response = await apiClient.get(
    `/articles?pagination[pageSize]=${PAGE_SIZE}&pagination[page]=${pageParam}&populate[tags][fields][0]=name&populate[coverImage][fields][0]=name&populate[coverImage][fields][1]=alternativeText&populate[coverImage][fields][2]=caption&populate[coverImage][fields][3]=formats&fields[0]=title&fields[1]=description&fields[2]=publishedAt&fields[3]=slug&status=published&${queryParams}`,
  );
  return {
    data: response.data,
    currentPage: pageParam,
    // If the number of pages is greater than the current page, next page is current page + 1, otherwise return null
    nextPage:
      response.data.meta.pagination.pageCount > pageParam
        ? pageParam + 1
        : null,
  };
};
