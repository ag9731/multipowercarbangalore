import React from "react";
import whychooseus from "../../../assets/WhyChooseUsBanner/whychooseusbanner.webp";

const HomePageWhyChooseUSSection = () => {
  const cardsArray = [
    {
      desc: "Your vehicle's safety relies on proper maintenance, and our team of skilled technicians is here to ensure it receives the care it needs.",
      designation: "Expert Engineers",
    },
    {
      desc: "Our auto repair shop services a wide range of vehicle models. We focus solely on the necessary repairs to address your issue, offering transparent, upfront pricing and cost-saving options.",
      designation: "Experience Skills",
    },
    {
      desc: "We diagnose, repair, and prevent vehicle performance issues, ensuring that your vehicle remains reliable, safe, and efficient.",
      designation: "Trusted Work",
    },
  ];

  return (
    <section className="container mx-auto px-4 md:py-16">
      {/* Upper Section */}
      <div className="flex flex-col gap-5 justify-center items-center text-center mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Why Choose Us
        </h1>
        <p className="w-full md:w-2/3 lg:w-1/2">
          We offer fair prices for car repair services, with fair prices, you
          can have your car repaired by a professional
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left */}
        <div className="lg:flex-1">
          <img
            src={whychooseus || "/placeholder.svg"}
            className="w-full h-auto rounded-t-2xl lg:rounded-l-2xl lg:rounded-r-none"
            alt="Why choose us"
          />
        </div>

        {/* Right */}
        <div className="lg:flex-1 flex flex-col gap-6 md:gap-8 lg:gap-10 justify-center">
          {cardsArray.map((card, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 md:gap-6 shadow-black items-start rounded-3xl bg-white p-4 md:p-6 shadow-inner"
            >
              <h2 className="text-lg md:text-xl leading-7 md:leading-8">
                {card.desc}
              </h2>
              <p className="text-white px-4 py-1 w-full md:w-auto text-center font-bold bg-[#dd7ad0] rounded-full">
                {card.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageWhyChooseUSSection;
