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


import Image from "next/image";
import { fetchHomePageData } from "@/libs/axiosServer";
import ArticleList from "@/components/ui/article-list/ArticleList";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const fetchedData = await fetchHomePageData();
  const seo = fetchedData.data.attributes.seo;

  return {
    title: seo?.metaTitle || "Aniss.dev Blog | Accueil",
    description: seo?.metaDescription || "Le blog perso d'Aniss",
    openGraph: {
      title: seo?.metaTitle,
      description: seo?.metaDescription,
      images: seo?.metaImage?.data?.attributes.url
        ? [seo.metaImage.data.attributes.url]
        : [],
    },
  };
}

const Home = async () => {
  // Getting the home page data
  const fetchedData = await fetchHomePageData();

  // Assigning the featured article to a variable for better readability
  const featuredArticle = fetchedData.data.attributes.featuredArticle?.data;
  // Assigning the featured article's image to a variable for better readability
  const featuredImage = featuredArticle?.attributes.coverImage?.data;

  return (
    <main className="container flex flex-col gap-8 lg:max-w-screen-lg">
      {featuredArticle ? (
        <div className="cursur-pointer">
          <Link href={`/articles/${featuredArticle.attributes.slug}`}>
            <div className="lg:px-10 xl:px-20">
              <h1 className="mb-6 text-2xl font-medium leading-normal text-neutral-900 dark:text-neutral-300 sm:text-4xl sm:leading-10 lg:mb-8 lg:text-5xl xl:text-6xl">
                {featuredArticle.attributes.title}
              </h1>
              <p className="text-base font-medium text-neutral-700 dark:text-neutral-400 sm:text-lg sm:leading-7 lg:text-xl lg:leading-loose">
                {featuredArticle.attributes.description}
              </p>
            </div>

            <div>
              <div className="relative mx-auto mb-4 mt-12 h-[340px] w-full lg:h-[500px]">
                <Image
                  src={featuredImage!.attributes.url}
                  alt={
                    featuredImage!.attributes.alternativeText || "cover image"
                  }
                  sizes="100vw"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
              <p className="text-center text-xs font-normal italic leading-none text-neutral-600 dark:text-neutral-500">
                {featuredImage!.attributes.caption}
              </p>
            </div>
          </Link>
        </div>
      ) : (
        <div className="lg:px-10 xl:px-20">
          <h1 className="mb-6 text-2xl font-medium leading-normal text-neutral-900 dark:text-neutral-300 sm:text-4xl sm:leading-10 lg:mb-8 lg:text-5xl xl:text-6xl">
            Bienvenue sur mon blog
          </h1>
          <p className="text-base font-medium text-neutral-700 dark:text-neutral-400 sm:text-lg sm:leading-7 lg:text-xl lg:leading-loose">
            Découvrez mes derniers articles ci-dessous.
          </p>
        </div>
      )}
      <div className="lg:px-10 xl:px-20">
        <ArticleList />
      </div>
    </main>
  );
};

export default Home;
