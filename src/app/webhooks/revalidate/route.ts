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


import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { fetchHomePageData } from "@/libs/axiosServer"; 
import { purgeCloudflareCache } from "@/libs/cloudflare";

// Add this line to get the BLOG_URL
const BLOG_URL = process.env.BLOG_URL;

/**
 * Handles POST requests for revalidating pages.
 * This function is triggered by a webhook to update cached pages when content changes.
 * @param {NextRequest} request - The incoming request object
 * @returns {Promise<NextResponse>} A JSON response indicating the result of the revalidation
 */
export async function POST(request: NextRequest) {
  // Parse the request body to get the slug and model
  const body = await request.json();
  const authorization = request.headers.get("Authorization");
  const { model } = body;
  // TODO: Implement a more secure method to verify the secret
  // Check for secret to confirm this is a valid request
  if (authorization !== process.env.WEBHOOK_SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  try {
    if (model === "article") {
      const slug = body.entry.slug;
      // Revalidate the article page
      revalidatePath(`/articles/${slug}`);
      revalidatePath("/tags");

      // Purge Cloudflare cache for the article and tags pages
      await purgeCloudflareCache([
        `${BLOG_URL}/articles/${slug}`,
        `${BLOG_URL}/tags`
      ]);

      // Check if this article is the featured article on the home page
      const blogHomePage = await fetchHomePageData();
      if (blogHomePage.data.attributes.featuredArticle && 
          (blogHomePage.data.attributes.featuredArticle.data.attributes.slug === slug )) {
        // If the article is featured, also revalidate the home page
        revalidatePath("/");
        // Purge Cloudflare cache for the home page
        await purgeCloudflareCache([`${BLOG_URL}/`]);
      }

      return NextResponse.json({ revalidated: true, now: Date.now() });
    } else if (model === "tag") {
      const name = body.entry.name;
      // Revalidate the tag page and the tags index page
      revalidatePath(`/tags/${name}`);
      revalidatePath("/tags");
      // Purge Cloudflare cache for the tag and tags pages
      await purgeCloudflareCache([
        `${BLOG_URL}/tags/${name}`,
        `${BLOG_URL}/tags`
      ]);
      return NextResponse.json({ revalidated: true, now: Date.now() });
    } else if (model === "blog-home-page") {
      // Revalidate the home page
      revalidatePath("/");
      // Purge Cloudflare cache for the home page
      await purgeCloudflareCache([`${BLOG_URL}/`]);
      return NextResponse.json({ revalidated: true, now: Date.now() });
    } else if (model === "about") {
      // Revalidate the about page
      revalidatePath("/about");
      // Purge Cloudflare cache for the about page
      await purgeCloudflareCache([`${BLOG_URL}/about`]);
      return NextResponse.json({ revalidated: true, now: Date.now() });
    } else {
      // Return an error for unsupported models
      return NextResponse.json({
        revalidated: false,
        message: "Unsupported model",
      });
    }
  } catch (err) {
    // If there was an error, Next.js will continue to show the last successfully generated page
    // Return a 500 status code to indicate a server error
    return NextResponse.json({ revalidated: false, error: err }, { status: 500 });
  }
}
