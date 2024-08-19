import Image from "next/image";
import React from "react";
import "../../globals.css";
import { FiCheckCircle } from "react-icons/fi";
import InputText from "@/app/components/inputs/form/inputText";
import { Button } from "@/app/components/inputs/buttons/Button";
import Select from "@/app/components/inputs/form/select/Select";
import SectionHeader from "@/app/components/data-display/SectionHeader";
import { iconSize } from "@/app/constants/styles";
import LightSlick from "@/app/components/surfaces/light-slick/LightSlick";
import RatingStars from "@/app/components/data-display/ratingStars";
import Divider from "@/app/components/data-display/divider";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const Franchisestores = () => {
  return (
    <main className="bg-[#f1f8ff]">
      {/* layout navbar */}
      <header className="bg-white">
        <div className="flex items-center h-16 px-4 shadow">
          <Image
            alt="logo"
            height={0}
            src="/images/pharmeasy-logos/logo-wo-slogan.svg"
            width={117}
          />
        </div>
      </header>
      {/* Page Header */}
      <header className="ps-4 flex justify-between">
        <div className="w-56 flex flex-col gap-4 mt-6">
          <p className="text-xl font-semibold">
            Become a PharmEasy Franchise today
          </p>
          <ul className="list-none flex flex-col gap-4">
            <li className="flex items-center gap-2 text-xs">
              <div>
                <FiCheckCircle />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <div>
                <FiCheckCircle />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li className="flex items-center gap-2 text-xs">
              <div>
                <FiCheckCircle />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </div>
        <div className="w-32 rounded-b-full">
          <Image
            alt="avatar"
            height={0}
            src="/images/bg/M_web_114x196_2_cc66271082.webp"
            width={128}
          />
        </div>
      </header>
      {/* form */}
      <div className="mt-6 p-4">
        <form
          action=""
          className="rounded-xl shadow-lg bg-white p-4 flex flex-col gap-1"
        >
          <SectionHeader head="Partner with us" />
          <InputText
            id="name"
            name="name"
            placeholder="Lorem"
            required={true}
          />
          <InputText
            id="name"
            name="name"
            placeholder="Lorem"
            required={true}
          />
          <InputText
            id="name"
            name="name"
            placeholder="Lorem"
            required={true}
          />
          <InputText
            id="name"
            name="name"
            placeholder="Lorem"
            required={true}
          />
          <Select>
            <option>Option1</option>
            <option>Option2</option>
            <option>Option3</option>
          </Select>
          <Button
            variant="contained"
            color="primary"
            className="!justify-center mt-5"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
      {/* Stats */}
      <div className="bg-secondary py-2 mt-2 flex justify-around">
        <div className="text-center">
          <p className="text-base font-medium">₹24 Cr+</p>
          <p className="text-xsm text-gray-500 font-semibold uppercase">
            ONLINE ORDERS
          </p>
        </div>
        <div className="text-center">
          <p className="text-base font-medium">₹24 Cr+</p>
          <p className="text-xsm text-gray-500 font-semibold uppercase">
            ONLINE ORDERS
          </p>
        </div>
        <div className="text-center">
          <p className="text-base font-medium">₹24 Cr+</p>
          <p className="text-xsm text-gray-500 font-semibold uppercase">
            ONLINE ORDERS
          </p>
        </div>
      </div>
      {/* video */}
      <div className="bg-white py-6 px-4 grid grid-cols-1 md:grid-cols-2 items-center">
        <SectionHeader
          head="India’s largest franchise network of pharmacies"
          subHead="We aim to transform your pharmacy into a healthcare centre, where your customers will not only get medicines, but will also be able to book lab tests and get everyday-use healthcare products at affordable prices and thereby helping you grow your business."
          className="mb-4"
        />
        <video width="400" className="w-full rounded-lg" controls>
          <source
            src="https://surgicare-assets.surgicare.in/Pharm_Easy_Franchise_Testimonial_Video_a3c10d38d7.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      {/* Why */}
      <div className="py-8 px-3 bg-white flex flex-col gap-8">
        <SectionHeader head="Why partner with PharmEasy" />
        <div className="flex items-center gap-3">
          <Image
            alt="why"
            height={40}
            src="/images/why/Revenue_1_eefe256e76.webp"
            width={40}
          />
          <div>
            <p className="text-sm font-semibold">Joining Benefits:</p>
            <p className="text-xs">
              Complimentary Rio Club membership and high-margin products worth
              Rs. 50,000.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image
            alt="why"
            height={40}
            src="/images/why/Revenue_1_eefe256e76.webp"
            width={40}
          />
          <div>
            <p className="text-sm font-semibold">Joining Benefits:</p>
            <p className="text-xs">
              Complimentary Rio Club membership and high-margin products worth
              Rs. 50,000.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image
            alt="why"
            height={40}
            src="/images/why/Revenue_1_eefe256e76.webp"
            width={40}
          />
          <div>
            <p className="text-sm font-semibold">Joining Benefits:</p>
            <p className="text-xs">
              Complimentary Rio Club membership and high-margin products worth
              Rs. 50,000.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image
            alt="why"
            height={40}
            src="/images/why/Revenue_1_eefe256e76.webp"
            width={40}
          />
          <div>
            <p className="text-sm font-semibold">Joining Benefits:</p>
            <p className="text-xs">
              Complimentary Rio Club membership and high-margin products worth
              Rs. 50,000.
            </p>
          </div>
        </div>
      </div>
      {/* How */}
      <div className="py-8 px-3 bg-white">
        <SectionHeader head="How can you grow with us?" className="mb-6" />
        <ul className="list-none flex flex-col gap-3">
          <li className="flex items-center gap-2 text-xs">
            <div>
              <FiCheckCircle className={`${iconSize.medium}`} />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li className="flex items-center gap-2 text-xs">
            <div>
              <FiCheckCircle className={`${iconSize.medium}`} />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li className="flex items-center gap-2 text-xs">
            <div>
              <FiCheckCircle className={`${iconSize.medium}`} />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li className="flex items-center gap-2 text-xs">
            <div>
              <FiCheckCircle className={`${iconSize.medium}`} />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li className="flex items-center gap-2 text-xs">
            <div>
              <FiCheckCircle className={`${iconSize.medium}`} />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </div>
      {/* Reviews */}
      <div className="bg-white py-8 px-3">
        <SectionHeader head="Franchisee Speaks" className="mb-6" />
        <LightSlick>
          <div className="border border-gray-300 rounded-xl min-w-80 p-3 text-dark">
            <div className="">
              <p className="text-xsm mb-1">Lorem, ipsum.</p>
              <RatingStars />
              <p className="text-xs mt-2 font-light">Lorem, ipsum.</p>
            </div>
            <Divider orienation="horizontal" className="my-4 !opacity-100" />
            <div>
              <BiSolidQuoteAltLeft className="text-2xl text-blue-500" />
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                vitae dolor mollitia at consequuntur quae? Beatae iste quo illo
                similique quam ea nisi laudantium, numquam temporibus molestias
                error vero a quos cum veniam in excepturi blanditiis qui,
                tenetur odit sapiente.
              </p>
            </div>
          </div>
          <div className="border border-gray-300 rounded-xl min-w-80 p-3 text-dark">
            <div className="">
              <p className="text-xsm mb-1">Lorem, ipsum.</p>
              <RatingStars />
              <p className="text-xs mt-2 font-light">Lorem, ipsum.</p>
            </div>
            <Divider orienation="horizontal" className="my-4 !opacity-100" />
            <div>
              <BiSolidQuoteAltLeft className="text-2xl text-blue-500" />
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
                rerum sequi inventore expedita officia praesentium tempora
                placeat maiores dolor et eaque laboriosam eveniet aperiam cum
                voluptatum ipsam distinctio iure delectus minus nemo modi itaque
                alias perspiciatis aut! Totam perspiciatis voluptates adipisci,
                corporis accusamus, maxime enim itaque, culpa sequi ducimus
                voluptatem?
              </p>
            </div>
          </div>
        </LightSlick>
      </div>
      {/* form trigger */}
      <div className="bg-cyan-100 py-8 px-3">
        <SectionHeader head="Become a Franchise Partner now" className="mb-4" />
        <Button
          variant="contained"
          color="primary"
          className="uppercase !text-xsm"
        >
          Be our parner now
        </Button>
      </div>
      {/* Footer */}
      <footer className="p-6 bg-dark">
        <p className="text-white">© 2023 PharmEasy. All Rights Reserved</p>
      </footer>
    </main>
  );
};

export default Franchisestores;
