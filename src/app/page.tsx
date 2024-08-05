"use client";
import Image from "next/image";
import SectionHeader from "./components/data-display/divider/SectionHeader";
import MetaSection from "./components/metaSection";
import LightSlick from "./components/surfaces/light-slick/LightSlick";
import OfferingsCard from "./components/surfaces/cards/OfferingsCard";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen gap-16">
      <SectionHeader
        head="Lorem ipsum dolor sit amet consectetur."
        subHead={
          <p>
            Lorem, ipsum.{" "}
            <Image
              src="/images/Thyrocare.webp"
              alt="Thyrocare"
              width={100}
              height={0}
              className="w-24 inline ms-2"
            />
          </p>
        }
      />
      <LightSlick settings={{ auto: true }}>
        <OfferingsCard />
        <OfferingsCard />
        <OfferingsCard />
        <OfferingsCard />
        <OfferingsCard />
        <OfferingsCard />
        <OfferingsCard />
        <OfferingsCard />
      </LightSlick>
      <MetaSection />
    </main>
  );
}
