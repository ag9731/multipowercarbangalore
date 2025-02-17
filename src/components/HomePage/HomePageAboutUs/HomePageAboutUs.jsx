import React from "react";
import img1 from "../../../assets/AboutUsSection/manpoercarservicebangalore.webp";
import { FaSquareWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa6";

const HomePageAboutUs = () => {
  return (
    <section className="container mx-auto px-4 md:py-5">
      <div className="flex flex-col-reverse lg:flex-row gap-12">
        <div className="flex-1 space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            About us
          </h1>
          <div className="bg-[#000000] w-24 md:w-32 lg:w-44 h-[1.3px]"></div>
          <div className="space-y-5">
            <h2 className="text-xl md:text-2xl font-bold">
              Our technicians use all the latest diagnostic tools and tools
              specifically tailored to the software in your vehicle.
            </h2>
            <p className="text-sm md:text-base">
              Our automotive repair professionals provide service with
              simplicity that can't be matched at values that are unbeatable.
              Our mechanics are the best in the business and our customers get
              back on road with peace of mind that every repair is done by
              experts.
            </p>
          </div>
          <div className="flex gap-4">
            <FaFacebookF className="fill-[#1877F2] text-2xl md:text-3xl hover:opacity-80 transition-opacity cursor-pointer" />
            <FaInstagram className="fill-[#E4405F] text-2xl md:text-3xl hover:opacity-80 transition-opacity cursor-pointer" />
            <FaSquareWhatsapp className="fill-[#25D366] text-2xl md:text-3xl hover:opacity-80 transition-opacity cursor-pointer" />
          </div>
          <div>
            <button className="bg-[#dd7ad0] text-white px-6 py-3 md:px-10 md:py-5 text-sm md:text-base font-medium hover:bg-[#c56ab9] transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center lg:justify-end">
          <div className="w-full max-w-md lg:max-w-none">
            <img
              src={img1 || "/placeholder.svg"}
              alt="Manpower Car Service Bangalore"
              className="w-96 md:w-full h-60 md:h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageAboutUs;
