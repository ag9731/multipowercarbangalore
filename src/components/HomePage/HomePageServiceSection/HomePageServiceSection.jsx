import React from "react";
import HomePageServiceCards from "./HomePageServiceCards";

const HomePageServiceSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 sm:py-16 lg:py-20">
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
        <div className="flex justify-center items-center flex-col gap-3 sm:gap-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
            Services
          </h1>
          <p className="w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 text-center text-sm sm:text-base">
            At Multi Power Car Service, we offer top-quality mechanic services
            with a comprehensive range of auto repair solutions. Here are some
            of the services we provide.
          </p>
        </div>
        {/* Service Cards Section */}
        <div className="w-full">
          <HomePageServiceCards />
        </div>
      </div>
    </section>
  );
};

export default HomePageServiceSection;
