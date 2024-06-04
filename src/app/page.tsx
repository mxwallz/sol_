
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Library from "@/components/Library";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Solana Stack – The Best Tools & Resources for Solana Traders",
  description: "SolanaStack.xyz is your go-to directory for Solana tools and resources. Find dexscreener, solana explorer, NFTs, and more to boost your trading.",
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
