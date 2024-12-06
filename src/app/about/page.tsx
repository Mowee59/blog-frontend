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

import { fetchAboutPageData } from "@/libs/axiosServer";
import markdownToHtml from "@/libs/markdownToHtml";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const fetchedData = await fetchAboutPageData();
  const seo = fetchedData.data.attributes.seo;

  return {
    title: seo?.metaTitle || "À propos | Aniss.dev Blog",
    description: seo?.metaDescription || "En savoir plus sur Aniss et son blog",
    openGraph: {
      title: seo?.metaTitle,
      description: seo?.metaDescription,
      images: seo?.metaImage?.data?.attributes.url
        ? [seo.metaImage.data.attributes.url]
        : [],
    },
  };
}

const About = async () => {
  try {
    const aboutPageDataPayload = await fetchAboutPageData();

    // Check if the about page data exists
    if (!aboutPageDataPayload.data) {
      throw new Error("About page data not found");
    }

    const aboutData = aboutPageDataPayload.data;

    // Parse the markdown content to HTML
    const content = await markdownToHtml(aboutData.attributes.content || "");

    return (
      <main className="container flex min-h-screen flex-col gap-8 lg:max-w-screen-lg">
        <div className="lg:px-10 xl:px-20">
          <h1 className="mb-6 text-2xl font-medium leading-normal text-neutral-900 dark:text-neutral-300 sm:text-4xl sm:leading-10 lg:mb-8 lg:text-5xl xl:text-6xl">
            À propos
          </h1>
          <div
            className="prose prose-lg dark:prose-invert "
            dangerouslySetInnerHTML={{ __html: content || "" }}
          />
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching about page data:", error);
    return (
      <main className="container flex flex-col gap-8 lg:max-w-screen-lg">
        <div className="lg:px-10 xl:px-20">
          <h1 className="mb-6 text-2xl font-medium leading-normal text-neutral-900 dark:text-neutral-300 sm:text-4xl sm:leading-10 lg:mb-8 lg:text-5xl xl:text-6xl">
            Error
          </h1>
          <p>
            Une erreur s'est produite lors de la récupération des données de la
            page À propos. Veuillez réessayer plus tard.
          </p>
        </div>
      </main>
    );
  }
};

export default About;
