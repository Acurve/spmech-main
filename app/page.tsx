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




const Home = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <Products />
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