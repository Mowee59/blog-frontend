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
 * Fetch all the articles with pagination
 * Page size
 *
 * @returns A promise that resolves as a payload of Articles
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
  const response = await apiClient.get(
    `/articles?pagination[pageSize]=1&pagination[page]=${pageParam}`,
  );
  return {
    data: response.data,
    currentPage: pageParam,
    nextPage: pageParam + 1,
  };
};
