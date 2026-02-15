import Benefits from "@/components/home/benefits/Benefits";
import Differentiator from "@/components/home/differentiator/Differentiator";
import Ease from "@/components/home/ease/Ease";
import Features from "@/components/home/features/Features";
import Hero from "@/components/home/hero/Hero";
import Introduction from "@/components/home/introduction/Introduction";
import Products from "@/components/home/products/Products";
import Stats from "@/components/home/stats/Stats";
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
