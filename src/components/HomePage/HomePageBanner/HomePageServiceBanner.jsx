import React from "react";
import bgImage from "../../../assets/banner/serviceBanner.webp";
import { FaCalendarDays, FaCheck } from "react-icons/fa6";

const HomePageServiceBanner = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "70vh",
        backgroundAttachment: "fixed",
        width: "100%",
      }}
      className="relative flex items-center mt-10 justify-center py-16 px-4 md:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 pointer-events-none"></div>
      <div className="container mx-auto z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="flex-1 text-white flex flex-col gap-6 lg:gap-10 items-start">
            <h1 className="text-3xl md:text-4xl font-bold">
              We provide the best mechanic service
            </h1>
            <p className="text-sm md:text-base">
              Our professionals know how to handle a wide range of car services.
              Whether you drive a passenger car or medium sized truck or SUV,
              our mechanics strive to ensure that your vehicle will be
              performing at its best.
            </p>
            <div className="group relative flex gap-3 md:gap-5 items-center border border-white px-4 py-3 md:px-5 md:py-4 overflow-hidden hover:border-pink-500 cursor-pointer">
              <div className="absolute inset-0 w-0 bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></div>
              <FaCalendarDays className="text-2xl md:text-3xl fill-[#dd7ad0] group-hover:fill-white relative z-10" />
              <h3 className="text-sm md:text-base relative z-10">
                Book an Appointment
              </h3>
            </div>
          </div>
          <div className="hidden lg:block w-px bg-white"></div>
          <div className="flex-1 text-white">
            <div className="flex flex-col gap-6 lg:gap-10">
              <h1 className="text-3xl md:text-4xl font-bold">Working Hours</h1>
              <div className="flex flex-col md:flex-row gap-4 md:gap-10">
                <div className="flex gap-3 md:gap-5 items-center">
                  <FaCheck className="fill-black text-xl md:text-2xl p-1 bg-white" />
                  <p className="font-semibold text-sm md:text-base">
                    WeekDays : 8am - 10pm
                  </p>
                </div>
                <div className="flex gap-3 md:gap-5 items-center">
                  <FaCheck className="fill-black text-xl md:text-2xl p-1 bg-white" />
                  <p className="font-semibold text-sm md:text-base">
                    WeekEnd : 8am - 6pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageServiceBanner;
