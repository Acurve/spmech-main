import Benefits from "@/components/pages/home/benefits/Benefits";
import Differentiator from "@/components/pages/home/differentiator/Differentiator";
import Ease from "@/components/pages/home/ease/Ease";
import Features from "@/components/pages/home/features/Features";
import Hero from "@/components/pages/home/hero/Hero";
import Introduction from "@/components/pages/home/introduction/Introduction";
import Stats from "@/components/pages/home/stats/Stats";
import FAQs from "@/components/shared/faqs/FAQs";
import { heroFaqData } from "@/constants/faqs";
import Products from "@/components/pages/home/products/Products";
import { CallToActionBackgroundVideo } from "@/components/shared/CallToAction";
import { Category, CategoryShaped } from "@/types/category";
import { Metadata } from "next";
import { getAllCategories } from "@/utils/api/api";

export const metadata: Metadata = {
  title: 'SP Mech Group | Leading Industrial Machine Manufacturers',
  description: 'Innovative manufacturing solutions for hinges, locks, and industrial hardware. Explore our high-precision machinery engineered for global standards.',
  openGraph: {
    title: 'SP Mech Group | Industrial Excellence',
    description: 'Precision-engineered machinery for the hardware manufacturing industry.',
    url: process.env.NEXT_PUBLIC_MAIN_URL,
    siteName: 'SP Mech Group',
    images: [
      {
        url: '/BrandLogo.svg', // Place a high-quality brand image in your public folder
        width: 1200,
        height: 630,
        alt: 'SP Mech Group Manufacturing Facility',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_MAIN_URL,
  },
};

const Home = async () => {
  const catRes = await getAllCategories();
  const categories = catRes.data.data
  const categoriesShaped: CategoryShaped[] = categories.map((cat: Category) => (
    {
      id: cat._id,
      videoSrc: cat.videoUrl,
      name: cat.categoryName,
      description: cat.description,
      href: `/machines/${cat.slug}`,
      image: {
        primary: cat.primaryImage,
        secondary: cat.secondaryImage,
        outline: cat.thirdImage,
      }
    }
  ))
  return (
    <>
      <Hero categories={categoriesShaped}/>
      <Introduction />
      <Products categories={categoriesShaped} />
      <Features />
      <Stats />
      <Benefits />
      <Differentiator />
      <Ease />
      <FAQs className="mt-24" faqList={heroFaqData} />
      <CallToActionBackgroundVideo />
    </>
  );
}

export default Home;