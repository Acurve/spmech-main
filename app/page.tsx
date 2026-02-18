import Benefits from "@/components/pages/home/benefits/Benefits";
import Differentiator from "@/components/pages/home/differentiator/Differentiator";
import Ease from "@/components/pages/home/ease/Ease";
import Features from "@/components/pages/home/features/Features";
import Hero from "@/components/pages/home/hero/Hero";
import Introduction from "@/components/pages/home/introduction/Introduction";
import Products from "@/components/pages/home/products/Products";
import Stats from "@/components/pages/home/stats/Stats";
import FirstLoader from "@/components/loaders/FirstLoader";
import CallToAction from "@/components/shared/CallToAction";
import FAQs from "@/components/shared/faqs/FAQs";
import { heroFaqData } from "@/constants/faqs";

export default function Home() {
  return (
    <>
      <FirstLoader />
      <Hero />
      <Introduction />
      <Products />
      <Features />
      <Differentiator />
      <Benefits />
      <Ease />
      <Stats />
      <FAQs faqList={heroFaqData} />
      <CallToAction />
    </>
  );
}
