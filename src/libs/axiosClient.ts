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

export const apiClient = axios.create({
  // Fetching API url from env variables
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 *
 * @param Options An object with the page param that defines the current page
 * @returns
 */
export const fetchArticles = async ({
  pageParam,
}: {
  pageParam: number;
}): Promise<{
  data: Payload<Article[]>;
  currentPage: number;
  nextPage: number | null;
}> => {
  // TODO: Add axios typed response

  //Noumber of articles per page
  const pageSize = 1;
  const response = await apiClient.get(
    `/articles?pagination[pageSize]=${pageSize}&pagination[page]=${pageParam}&populate=*`,
  );
  return {
    data: response.data,
    currentPage: pageParam,
    nextPage: pageParam + 1,
  };
};
