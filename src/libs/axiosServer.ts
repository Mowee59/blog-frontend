import { Article } from "@/interfaces/Article";
import { BlogHomePage } from "@/interfaces/Blog-home-page";
import { Payload } from "@/interfaces/Payload";
import { Tag } from "@/interfaces/Tag";
import axios, { AxiosResponse } from "axios";
import { apiServer } from "./axiosConfig";
import { About } from "@/interfaces/About";

/**
 *
 * This file is used to define api request that will be used for server side requests
 *
 */

// // Add Axios interceptor for adding the authorization token
// apiClient.interceptors.request.use(
//   (config) => {
//     // Access the token from the environment variable
//     const token = process.env.STRAPI_API_TOKEN;

//     if (token) {
//       // Add the token to the Authorization header if it exists
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

/**
 * Fetch all the articles
 *
 * @returns A promise that resolves as a payload of Articles
 */
export const fetchArticles = async (): Promise<Payload<Article[]>> => {
  // TODO: Add axios typed response
  const response: AxiosResponse<Payload<Article[]>> = await apiServer.get(
    "/articles?status=published",
  );
  return response.data;
};

/**
 * Fetch the home page data
 *
 * @returns A promise that resolves as a payload containing home page data
 */
export const fetchHomePageData = async (): Promise<Payload<BlogHomePage>> => {
  // TODO: Add axios typed response
  const response = await apiServer.get(
    "/blog-home-page?populate[featuredArticle][populate][0]=coverImage",
  );
  return response.data;
};

/**
 * Fetch the about page data
 *
 * @returns A promise that resolves as a payload containing about page data
 */
export const fetchAboutPageData = async (): Promise<Payload<About>> => {
  const response = await apiServer.get("/about?populate=*");
  return response.data;
};

/**
 * Fetch all the tags
 *
 * @returns A promise that resolves as a payload of Tags
 */
export const fetchTags = async (): Promise<Payload<Tag[]>> => {
  const response = await apiServer.get("/tags?populate=*");
  return response.data;
};

/**
 * Fetch a tag by its name
 *
 * @param name the name of the tag
 * @returns A promise that resolves as a Payload Tags
 */
export const fetchTagByName = async (name: string): Promise<Payload<Tag[]>> => {
  const response = await apiServer.get(
    `/tags?filters[name][$eqi]=${name}&populate=*`,
  );
  return response.data;
};

/**
 * Fetch all the articles associated with a specific tag name
 *
 * @param tagName Name of the tag
 * @params Optional parameters to add to te query
 * @returns
 */
export const fetchArticlesByTagName = async (
  tagName: string,
  params?: string,
): Promise<Payload<Partial<Article>[]>> => {
  const response = await apiServer.get(
    `/articles?filters[tags][name][$in]=${tagName}&${params ?? ""}`,
  );
  return response.data;
};

/**
 * Fetch an article by slug
 *
 * @param slug the slug of the article to retrieve
 * @returns A promise that resolves as a Payload containing a unique article
 */
export const fetchArticleBySlug = async (
  slug: string,
): Promise<Payload<Article[]>> => {
  const response = await apiServer.get(
    `/articles?filters[slug][$eqi]=${slug}&populate[0}=*&populate[seo][populate][1]=metaImage*`,
  );
  return response.data;
};
