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
