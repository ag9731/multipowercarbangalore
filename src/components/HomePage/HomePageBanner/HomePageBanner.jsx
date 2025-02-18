import React from "react";
import banner from "../../../assets/banner/carbanner.webp";
import HomePageContactForm from "./HomePageContactForm";

const HomePageBanner = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 pointer-events-none"></div>
      <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col items-start justify-center gap-6 lg:gap-10 text-white">
            <h2 className="font-bold text-xl sm:text-2xl">
              The services your car needs
            </h2>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              We care about your car
            </h1>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
              At Multi Power Car Service Bengaluru, we provide a complete range
              of garage services for vehicle owners in the area. Our skilled
              professionals are equipped to handle all types of car services
              with expertise. Offering top-quality repairs at unbeatable prices,
              we ensure the best service with state-of-the-art equipment and
              well-equipped workshops.
            </p>
            
            {/* <button className="bg-[#dd7ad0] px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium hover:bg-[#c56ab9] transition-colors duration-300">
              Get Free Estimate
            </button> */}
          </div>
          <div className="flex-1 w-full max-w-md lg:max-w-none mt-10 lg:mt-0">
            <HomePageContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageBanner;
