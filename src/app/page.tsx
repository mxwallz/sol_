
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Library from "@/components/Library";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Solana Toolkit",
  description: "Free Next.js SaaS Boilerplate and Starter Kit designed and built for SaaS startups. It comes with all necessary integrations, pages, and components you need to launch a feature-rich SaaS websites.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Features />
      <Library />
      
      {/*
      <CallToAction />
      <CallToAction />
      <About />
      <Pricing />
      <Testimonials />
      <Faq />
      <Team />
      <Contact />
      <Clients />
  */}
    </main>
  );
}
