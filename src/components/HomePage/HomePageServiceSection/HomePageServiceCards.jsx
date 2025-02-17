import React from "react";
import img1 from "../../../assets/ServiceCardsImages/1.webp";
import img2 from "../../../assets/ServiceCardsImages/2.webp";
import img3 from "../../../assets/ServiceCardsImages/3.webp";
import img4 from "../../../assets/ServiceCardsImages/4.webp";
import { FaWhatsapp, FaPhone } from "react-icons/fa6";

const HomePageServiceCards = () => {
  const services = [
    {
      image: img1,
      title: "Euro Touch® Maintenance Package",
      desc: "A car's maintenance schedule includes changing oil, rotating tires, checking fluids, and more. Timing and serpentine belts, however, need to be replaced periodically as well.",
    },
    {
      image: img2,
      title: "Car Detailing & Painting",
      desc: "A high-quality paint job protects your vehicle from damage from the road. It prevents rust and can even help your car survive everyday driving. A durable paint job enhances the durability of your car.",
    },
    {
      image: img3,
      title: "Car Wash",
      desc: "Car washes provide you with more than just a shiny vehicle. You will enjoy driving a clean, comfortable vehicle that is bright on the outside and spotless inside.",
    },
    {
      image: img4,
      title: "Installation & Repair",
      desc: "We want to make it as easy as possible for you to have your car repaired or serviced, we won't surprise you with unexpected charges. We'll get your approval before we do anything to ensure that you are satisfied",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {services.map((service, index) => (
        <div
          className="border-4 border-b-slate-950 overflow-hidden shadow-2xl pb-5 flex flex-col rounded-xl gap-5 bg-white group transition-transform duration-300 ease-in-out"
          key={index}
        >
          <div className="p-4">
            <img
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              className="w-full h-48 object-cover rounded-lg transition-all duration-300 ease-in-out transform group-hover:scale-110"
            />
          </div>
          <div className="px-4">
            <h2 className="text-lg sm:text-xl font-bold min-h-[60px] uppercase text-black">
              {service.title}
            </h2>
          </div>
          <div className="flex-grow px-4">
            <p className="text-sm sm:text-base text-[#4e5652]">
              {service.desc}
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="flex gap-4 px-4 mt-4">
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#dd7ad0] p-2 rounded-lg text-white text-sm sm:text-base">
              <FaWhatsapp />
              <span>WhatsApp</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#dd7ad0] p-2 rounded-lg text-white text-sm sm:text-base">
              <FaPhone />
              <span>Call</span>
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HomePageServiceCards;
