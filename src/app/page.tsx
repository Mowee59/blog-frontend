import ArticleCard from "@/components/ui/article-card/ArticleCard";
import Image from "next/image";
import hero from "/public/svg/hero.jpg";
import { fetchFeaturedArticles } from "@/libs/api";

const Home = async () => {
  // Getting the featured articles list
  const featuredArticles = await fetchFeaturedArticles();

  //Making sure we only get one featured article because we cannot controle featured property is set to true only once in our backend
  const featuredArticle = featuredArticles.data[0];
  console.log(
    `${process.env.STRAPI_API_URL}${featuredArticle.attributes.coverImage.data.attributes.url}`,
  );
  return (
    <main className="container flex flex-col gap-8 lg:max-w-screen-lg">
      <div className=" lg:px-10 xl:px-20">
        <h1 className="mb-6 text-2xl font-medium leading-normal text-neutral-900 dark:text-neutral-300 sm:text-4xl sm:leading-10 lg:mb-8 lg:text-5xl xl:text-6xl">
          {featuredArticle.attributes.title}
        </h1>
        <p className="text-base font-medium text-neutral-700 dark:text-neutral-400 sm:text-lg sm:leading-7 lg:text-xl lg:leading-loose">
          {featuredArticle.attributes.description}
        </p>
      </div>
      {/* #TODO Handle image sizing */}
      <div>
        <div className="relative mx-auto  mb-4 h-[340px] w-full lg:h-[500px] ">
          <Image
            // Image url structure is : strapiUrl/uplooads/image
            src={`${process.env.STRAPI_URL}${featuredArticle.attributes.coverImage.data.attributes.url}`}
            alt={
              featuredArticle.attributes.coverImage.data.attributes
                .alternativeText
            }
            fill
            objectFit="cover"
            className=" rounded-xl object-cover"
          />
        </div>
        <p className="text-center text-xs font-normal italic leading-none text-neutral-600 dark:text-neutral-500">
          {featuredArticle.attributes.coverImage.data.attributes.caption}
        </p>
      </div>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </main>
  );
};

export default Home;
