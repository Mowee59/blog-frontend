import ArticleCard from "@/components/ui/article-card/ArticleCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container  flex flex-col gap-7 lg:max-w-screen-lg">
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </main>
  );
}
