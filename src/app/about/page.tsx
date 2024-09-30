import { fetchAboutPageData } from "@/libs/axiosServer";
import markdownToHtml from "@/libs/markdownToHtml";
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const fetchedData = await fetchAboutPageData();
  const seo = fetchedData.data.attributes.seo;

  return {
    title: seo?.metaTitle || 'À propos | Aniss.dev Blog',
    description: seo?.metaDescription || 'En savoir plus sur Aniss et son blog',
    openGraph: {
      title: seo?.metaTitle,
      description: seo?.metaDescription,
      images: seo?.metaImage?.data?.attributes.url ? [seo.metaImage.data.attributes.url] : [],
    },
  };
}

const About = async () => {
  try {
    const aboutPageDataPayload = await fetchAboutPageData();
    
    // Check if the about page data exists
    if (!aboutPageDataPayload.data) {
      throw new Error('About page data not found');
    }

    const aboutData = aboutPageDataPayload.data;

    // Parse the markdown content to HTML
    const content = await markdownToHtml(aboutData.attributes.content || '');

    return (
      <main className="container flex flex-col gap-8 lg:max-w-screen-lg">
        <div className="lg:px-10 xl:px-20">
          <h1 className="mb-6 text-2xl font-medium leading-normal text-neutral-900 dark:text-neutral-300 sm:text-4xl sm:leading-10 lg:mb-8 lg:text-5xl xl:text-6xl">
            À propos
          </h1>
          <div 
            className="prose prose-lg dark:prose-invert "
            dangerouslySetInnerHTML={{ __html: content || '' }}
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
          <p>An error occurred while fetching the about page data. Please try again later.</p>
        </div>
      </main>
    );
  }
 
};

export default About;
