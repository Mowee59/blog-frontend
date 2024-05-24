import ArticleCard from "@/components/ui/article-card/ArticleCard";
import Image from "next/image";
import hero from "/public/svg/hero.jpg";

export default function Home() {
  return (
    <main className="container flex flex-col gap-7 lg:max-w-screen-lg">
      <div className=" lg:px-10 xl:px-14">
        <h1 className="mb-6 text-2xl font-medium leading-normal text-neutral-900 dark:text-neutral-300 sm:text-4xl sm:leading-10 lg:mb-8 lg:text-5xl xl:text-6xl">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="text-base font-medium text-neutral-700 dark:text-neutral-400 sm:text-lg sm:leading-7 lg:text-xl lg:leading-loose">
          Lorem ipsum dolor sit amet consectetur. Lectus fringilla amet
          fringilla maecenas. Volutpat in volutpat dui placerat nec in. Volutpat
          id.
        </p>
      </div>
      {/* #TODO Handle image sizing */}
      <div>
        <div className="relative mx-auto  mb-4 h-[340px] w-full lg:h-[500px] ">
          <Image
            src={hero}
            alt="hero image"
            fill
            className=" rounded-xl object-cover"
          />
        </div>
        <p className="text-center text-xs font-normal italic leading-none text-neutral-600 dark:text-neutral-500">
          Exploring the mountains in Indonesia - Unsplash
        </p>
      </div>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </main>
  );
}
