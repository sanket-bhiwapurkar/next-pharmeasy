"use client";
import Image from "next/image";
import SectionHeader from "./components/data-display/divider/SectionHeader";
import MetaSection from "./components/metaSection";
import LightSlick from "./components/surfaces/light-slick/LightSlick";
import OfferingsCard from "./components/surfaces/cards/OfferingsCard";
import { articleData, categoriesData, featuredBrandsData, labTestsData, offeringsData, productsData } from "./data";
import BasicCard from "./components/surfaces/cards/BasicCard";
import pairArray from "./services/pairArray";
import ProductBetaCard from "./components/surfaces/cards/ProductBetaCard";
import ArticleCard from "./components/surfaces/cards/ArticleCard";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Offerings */}
      <section className="py-8 px-4 flex flex-col mt-6 gap-4 w-full items-center">
        <SectionHeader
          head="Discover Our Offerings"
          className="lg:hidden self-start px-5"
        />
        <LightSlick>
          {offeringsData.map(eachOffering => <OfferingsCard key={eachOffering.id} imgUrl={eachOffering.imgUrl}
            title={eachOffering.title}
            subtext={eachOffering.subText}
            url={eachOffering.url} />)}
        </LightSlick>
      </section>
      {/* End Offerings */}

      {/* Lab Tests */}
      <section className="py-8 px-4 flex flex-col gap-8 w-full">
        <SectionHeader
          head="Lab Tests by Health Concern"
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
        <LightSlick>
          {pairArray(labTestsData).map((eachTest, i) => <div key={i} className="flex flex-col md:flex-row gap-4">
            <BasicCard imgUrl={eachTest[0].imgUrl} className="min-w-36 xl:min-w-44" />
            <BasicCard imgUrl={eachTest[1].imgUrl} className="min-w-36 xl:min-w-44" />
          </div>)}
        </LightSlick>
      </section>
      {/* End Lab Tests */}

      {/* Categories */}
      <section className="py-8 px-4 flex flex-col gap-8 w-full">
        <SectionHeader
          head="Shop by Categories"
        />
        <LightSlick>
          {pairArray(categoriesData).map((eachTest, i) => <div key={i} className="flex flex-col md:flex-row gap-4">
            <BasicCard imgUrl={eachTest[0].imgUrl} title={eachTest[0].title} className="min-w-36 xl:min-w-44" />
            <BasicCard imgUrl={eachTest[1].imgUrl} title={eachTest[1].title} className="min-w-36 xl:min-w-44" />
          </div>)}
        </LightSlick>
      </section>
      {/* End Categories */}

      {/* New Launches */}
      <section className="py-8 px-4 flex flex-col gap-8 w-full">
        <SectionHeader
          head="New Launches"
          subHead="New wellness range just for you!"
        />
        <LightSlick>
          {productsData.map((eachProduct, i) => <ProductBetaCard key={eachProduct.id} imgUrl={eachProduct.imgUrl} title={eachProduct.title} mp={eachProduct.mp} sp={eachProduct.sp} discount={eachProduct.discount} />)}
        </LightSlick>
      </section>
      {/* End New Launches */}

      {/* Trending Near You */}
      <section className="py-8 px-4 flex flex-col gap-8 w-full">
        <SectionHeader
          head="Trending Near You"
          subHead="Popular in your city"
        />
        <LightSlick>
          {productsData.map((eachProduct, i) => <ProductBetaCard key={eachProduct.id} imgUrl={eachProduct.imgUrl} title={eachProduct.title} mp={eachProduct.mp} sp={eachProduct.sp} discount={eachProduct.discount} />)}
        </LightSlick>
      </section>
      {/* End Trending Near You */}

      {/* Wellness Essentials of the Week */}
      <section className="py-8 px-4 flex flex-col gap-8 w-full">
        <SectionHeader
          head="Wellness Essentials of the Week"
          subHead="Super charge your immunity with us"
        />
        <LightSlick>
          {pairArray(productsData).map((eachProduct, i) => <div key={i} className="flex flex-col gap-4">
            <ProductBetaCard key={eachProduct[0].id} orientation="horizontal" imgUrl={eachProduct[0].imgUrl} title={eachProduct[0].title} mp={eachProduct[0].mp} sp={eachProduct[0].sp} discount={eachProduct[0].discount} />
            <ProductBetaCard key={eachProduct[1].id} orientation="horizontal" imgUrl={eachProduct[1].imgUrl} title={eachProduct[1].title} mp={eachProduct[1].mp} sp={eachProduct[1].sp} discount={eachProduct[1].discount} />
          </div>)}
        </LightSlick>
      </section>
      {/* End Wellness Essentials of the Week */}

      {/* Featured Brand */}
      <section className="py-8 px-4 flex flex-col gap-8 w-full">
        <SectionHeader
          head="Featured Brands"
          subHead="Pick from our favourite brands"
        />
        <LightSlick>
          {featuredBrandsData.map((eachProduct, i) => <BasicCard key={eachProduct.id} imgUrl={eachProduct.imgUrl} title={eachProduct.title} className="min-w-24 lg:min-w-44" />)}
        </LightSlick>
      </section>
      {/* End Featured Brand */}

      {/* Deals of the Day */}
      <section className="py-8 px-4 flex flex-col gap-8 w-full">
        <SectionHeader
          head="Deals of the Day"
        />
        <LightSlick>
          {productsData.map((eachProduct, i) => <ProductBetaCard key={eachProduct.id} imgUrl={eachProduct.imgUrl} title={eachProduct.title} mp={eachProduct.mp} sp={eachProduct.sp} discount={eachProduct.discount} />)}
        </LightSlick>
      </section>
      {/* End Deals of the Day */}

      {/* Spotlight*/}
      <section className="bg-gradient-to-b from-[#fff8e3] to-transparent mt-8">
        <div className="py-8 px-4 flex flex-col gap-8 w-full bg-[url('/images/bg/spotlight.svg')] bg-contain bg-center bg-no-repeat ">
          <SectionHeader
            head="In the Spotlight"
          />
          <LightSlick>
            {productsData.map((eachProduct, i) => <ProductBetaCard key={eachProduct.id} imgUrl={eachProduct.imgUrl} title={eachProduct.title} mp={eachProduct.mp} sp={eachProduct.sp} discount={eachProduct.discount} />)}
          </LightSlick>
        </div>
      </section>
      {/* End Spotlight*/}

      {/* Health Articles */}
      <section className="py-8 px-4 flex flex-col gap-8 w-full">
        <SectionHeader
          head="Health Articles"
          subHead="Get up-to-date on our latest health updates"
        />
        <LightSlick>
          {articleData.map((eachProduct, i) => <ArticleCard key={eachProduct.id} imgUrl={eachProduct.imgUrl} title={eachProduct.title} />)}
        </LightSlick>
      </section>
      {/* End Health Articles */}
      <MetaSection />
    </main>
  );
}
