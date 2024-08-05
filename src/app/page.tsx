"use client";
import ProductAlphaCard from "./components/cards/ProductAlphaCard";
import MetaSection from "./components/metaSection";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen gap-16">
      <ProductAlphaCard />
      <MetaSection />
    </main>
  );
}
