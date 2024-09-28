/**
 *
 * This file is used to define api request that will be used for client side requests
 *
 */

import axios from "axios";
import { Article } from "@/interfaces/article";
import { BlogHomePage } from "@/interfaces/blog-home-page";
import { Payload } from "@/interfaces/Payload";
import { Tag } from "@/interfaces/tag";
import { QueryFunction, QueryFunctionContext } from "@tanstack/react-query";
import { infiniteQueryFormatedData } from "@/interfaces/infiniteQueryFormatedData";
import { apiClient } from './axiosConfig';

//Number of article per page
const PAGE_SIZE = 2;


/**
 *
 * @param Options An object with the page param that defines the current page
 * @returns
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
    // if the number of pages is greate that the current apge, next page is current page + 1 otherwise we return null
    nextPage:
      response.data.meta.pagination.pageCount > pageParam
        ? pageParam + 1
        : null,
  };
};
