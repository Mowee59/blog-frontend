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
 *
 * This file is used to define api request that will be used for server side requests
 *
 */


import { Article } from "@/interfaces/Article";
import { BlogHomePage } from "@/interfaces/Blog-home-page";
import { Payload } from "@/interfaces/Payload";
import { Tag } from "@/interfaces/Tag";
import { AxiosResponse } from "axios";
import { apiServer } from "./axiosConfig";
import { About } from "@/interfaces/About";



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
 * Fetch an article by slug with its Seo data
 *
 * @param slug the slug of the article to retrieve
 * @returns A promise that resolves as a Payload containing a unique article
 */
export const fetchArticleBySlug = async (
  slug: string,
): Promise<Payload<Article[]>> => {
  const response = await apiServer.get(
    `/articles?filters[slug][$eqi]=${slug}&populate[seo][populate][1]=metaImage&populate[seo][populate][2]=metaTwitterImage&populate=tags`,
  );
  return response.data;
};
