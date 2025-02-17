import React, { useState } from "react";
import { FaCheck, FaCaretDown } from "react-icons/fa6";
import bannerImg from "../../../assets/ServiceLastSection/manpowercarsbangalore.webp";

const HomePageServicesLstSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  // Repair Service Section
  const repairServices = [
    { serviceId: "1", serviceName: "Transmission repair & Replacement" },
    { serviceId: "2", serviceName: "Brake Repair & Replacement" },
    { serviceId: "3", serviceName: "General Auto Repair & Maintenance" },
    { serviceId: "4", serviceName: "Air conditioning A/C Repair" },
    { serviceId: "5", serviceName: "Tire Repair & Replacement" },
    { serviceId: "6", serviceName: "Fuel System Repair" },
    { serviceId: "7", serviceName: "Exhaust system repair" },
    { serviceId: "8", serviceName: "Electrical Diagnostics" },
    { serviceId: "9", serviceName: "Starting & Charging repair" },
    { serviceId: "10", serviceName: "Engine Cooling System Maintenance" },
    { serviceId: "11", serviceName: "Wheel Alignment" },
    { serviceId: "12", serviceName: "Steering & Suspension Work" },
    { serviceId: "13", serviceName: "Computer Diagonostic testing" },
    { serviceId: "14", serviceName: "Vehicle Preventive Maintenance" },
    { serviceId: "15", serviceName: "Oil Change" },
  ];

  // FAQ's Section
  const faqs = [
    {
      id: 1,
      title: "Brake Repair Pads & Rotors",
      desc: "To diagnose that spongy brake pedal, discover why your brake light is on, or just check out your brakes as part of routine maintenance.",
    },
    {
      id: 2,
      title: "Shocks, Struts Replacement",
      desc: "Almost every vehicle is equipped with shocks and struts, which wear out over time and can lead to uncomfortable rides as well as other problems.",
    },
    {
      id: 3,
      title: "Exhaust System Services",
      desc: "Mufflers and exhaust systems are responsible for reducing harmful emissions from entering the atmosphere. They not only sound better, but they are also better – for you, your car, and the environment.",
    },
    {
      id: 4,
      title: "Oil Change",
      desc: "The engine's oil provides lubrication, reduces friction, provides lubrication, forms a seal between the pistons, rings and cylinder walls while cooling the engine parts. Without oil, carbon and varnish buildup would be toxic to the engine.",
    },
    {
      id: 5,
      title: "Steering & Suspension",
      desc: "The advanced diagnostic equipment we use allows our highly qualified technicians to repair and/or maintain your vehicle's steering system, suspension, and wheel alignment.",
    },
    {
      id: 6,
      title: "Radiator & Engine Cooling",
      desc: "It is common for cars to overheat for several reasons. In addition to engine combustion temperatures reaching 2000° F and higher, there is a lot of heat produced by the engine.",
    },
    {
      id: 7,
      title: "Air Conditioning Services",
      desc: "You can increase the efficiency of your vehicle's air conditioner by keeping it regularly serviced.",
    },
    {
      id: 8,
      title: "Tires & Wheel Balancing",
      desc: "Make sure your tires are regularly inspected and serviced. This will prevent blowouts, flats, and expensive accidents.",
    },
  ];

  // FAQs Toggle
  const handleToggle = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="container mx-auto px-4 md:py-16">
      {/* Upper Section */}
      <div className="flex flex-col gap-5 justify-center items-center text-center mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          The Service Your Car Needs
        </h1>
        <p>Services</p>
      </div>

      {/* Lower Section */}
      <section className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:mt-16">
        {/* First Column */}
        <div className="order-3 md:order-1">
          <div className="flex flex-col gap-3">
            {repairServices.map((repairList) => (
              <div key={repairList.serviceId}>
                <ul className="flex items-center gap-4">
                  <FaCheck className="fill-green-600 flex-shrink-0" />
                  <li className="text-sm md:text-base">
                    {repairList.serviceName}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Second Column */}
        <div className="order-2 md:order-2">
          <div>
            {faqs.map((faqsList) => (
              <div key={faqsList.id}>
                <div
                  className="bg-white flex p-3 flex-col gap-3 shadow-xl"
                  onClick={() => handleToggle(faqsList.id)}
                >
                  <div className="flex justify-between items-center cursor-pointer">
                    <h2 className="font-bold text-sm md:text-md text-[#4e5a59]">
                      {faqsList.title}
                    </h2>
                    <FaCaretDown
                      className={`transform transition-transform duration-300 ${
                        openFAQ === faqsList.id ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>

                  {/* Description Toggle */}
                  {openFAQ === faqsList.id && (
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        openFAQ === faqsList.id
                          ? "max-h-40 opacity-100 py-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="font-normal text-sm">{faqsList.desc}</p>
                    </div>
                  )}
                </div>
                <div className="bg-slate-300 h-[1px]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Third Column */}
        <div className="order-1 md:order-3 flex justify-center md:justify-end items-end">
          <img
            src={bannerImg || "/placeholder.svg"}
            className="rounded-lg w-full max-w-[350px] h-auto"
            alt="banner_image"
          />
        </div>
      </section>
    </section>
  );
};

export default HomePageServicesLstSection;
