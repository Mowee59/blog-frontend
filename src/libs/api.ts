import { Article } from "@/interfaces/article";
import { Payload } from "@/interfaces/Payload";
import { Tag } from "@/interfaces/tag";
import axios from "axios";

// Creating axios instance
const apiClient = axios.create({
  // Fetching API url from env variables
  baseURL: process.env.STRAPI_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add Axios interceptor for adding the authorization token
apiClient.interceptors.request.use(
  (config) => {
    // Access the token from the environment variable
    const token = process.env.STRAPI_API_TOKEN;

    if (token) {
      // Add the token to the Authorization header if it exists
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

/**
 * Fetch all the articles
 *
 * @returns A promise that resolves as a payload of Articles
 */
export const fetchArticles = async (): Promise<Payload<Article[]>> => {
  // TODO: Add axios typed response
  const response = await apiClient.get("/articles");
  return response.data;
};

/**
 * Fetch the featured articles
 *
 * @returns A promise that resolves as a payload of Articles
 */
export const fetchFeaturedArticles = async (): Promise<Payload<Article[]>> => {
  // TODO: Add axios typed response
  const response = await apiClient.get(
    "/articles?filters[featured][$eq]=true&populate=*",
  );
  return response.data;
};

/**
 * Fetch all the tags
 *
 * @returns A promise that resolves as a payload of Tags
 */
export const fetchTags = async (): Promise<Payload<Tag[]>> => {
  const response = await apiClient.get("/tags");
  return response.data;
};
