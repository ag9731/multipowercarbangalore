import React from "react";
import {
  FaLocationDot,
  FaMobileRetro,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaSquareWhatsapp,
} from "react-icons/fa6";

const HomePageContactUs = () => {
  return (
    <section className="container mx-auto px-4 md:py-16">
      {/* Upper Section */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          Get In Touch
        </h1>
        <p className="text-base md:text-lg text-gray-600">Contact Us</p>
      </div>

      {/* Lower Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        {/* Left Column - Map */}
        <div className="w-full h-64 sm:h-80 lg:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.509792723757!2d77.5255531!3d13.003175100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3daf3190c8e9%3A0x9653c1ca3cdeb15a!2sMulti%20Power%20Car%20Care!5e0!3m2!1sen!2sin!4v1739856168253!5m2!1sen!2sin"
            className="w-full h-full border-0 rounded-lg shadow-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right Column - Contact Details */}
        <div className="bg-white p-4 md:p-6 shadow-lg rounded-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-3">
            Contact Details
          </h2>
          <div className="bg-gray-300 h-[1px] mb-4"></div>
          <p className="text-gray-600 mb-6">We would love to hear from you!</p>

          {/* Contact Items */}
          <div className="space-y-4 md:space-y-5">
            {/* Location */}
            <div className="flex items-start md:items-center gap-3 md:gap-4 border p-3 md:p-4 rounded-md shadow-sm">
              <FaLocationDot className="text-2xl md:text-3xl text-[#ef4444] flex-shrink-0" />
              <p className="text-sm md:text-base text-gray-700">
                No.23/24 Ground Floor, 8th Cross Road, Kempegowda Nagar,
                Bengaluru
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 md:gap-4 border p-3 md:p-4 rounded-md shadow-sm">
              <FaMobileRetro className="text-2xl md:text-3xl text-[#22c55e] flex-shrink-0" />
              <p className="text-sm md:text-base text-gray-700">
                +91 99725 89574
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 md:gap-4 border p-3 md:p-4 rounded-md shadow-sm">
              <FaEnvelope className="text-2xl md:text-3xl text-[#60a5fa] flex-shrink-0" />
              <p className="text-sm md:text-base text-gray-700 break-all">
                info@manpowercarservice.com
              </p>
            </div>

            {/* Social Media */}
            <div className="flex justify-center md:justify-start gap-4 md:gap-6 mt-6">
              <FaFacebook className="text-2xl md:text-3xl text-[#1877F2] hover:scale-110 transition cursor-pointer" />
              <FaInstagram className="text-2xl md:text-3xl text-[#D70060] hover:scale-110 transition cursor-pointer" />
              <FaSquareWhatsapp className="text-2xl md:text-3xl text-[#25D366] hover:scale-110 transition cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageContactUs;
