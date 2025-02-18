import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMobileScreen, FaEnvelope, FaLocationDot } from "react-icons/fa6";

const HomePageContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        formData,
        "your_public_key" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send message. Try again.");
        }
      );

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
    });
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 sm:p-6 bg-black/50 shadow-md rounded-md">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
        Make an Enquiry
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 sm:p-3 border border-gray-300 rounded text-sm sm:text-base"
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 sm:p-3 border border-gray-300 rounded text-sm sm:text-base"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone*"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-2 sm:p-3 border border-gray-300 rounded text-sm sm:text-base"
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full p-2 sm:p-3 border border-gray-300 rounded text-sm sm:text-base"
        >
          <option value="">Select Required Service*</option>
          <option value="Euro Touch Maintenance Package">
            Multi Power Cars Maintenance Package
          </option>
          <option value="Car Painting">Car Painting</option>
          <option value="Car Wash">Car Wash</option>
          <option value="Car Maintenance">Car Maintenance</option>
          <option value="Others">Others</option>
        </select>
        <button
          type="submit"
          className="w-full p-2 sm:p-3 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300 text-sm sm:text-base"
        >
          Send Message
        </button>
      </form>
      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3 sm:gap-5">
          <FaMobileScreen className="fill-white text-lg sm:text-xl" />
          <h1 className="text-white text-sm sm:text-base">+91 99725 89574</h1>
        </div>
        <div className="flex items-center gap-3 sm:gap-5">
          <FaEnvelope className="fill-white text-lg sm:text-xl" />
          <h1 className="text-white text-sm sm:text-base">
            info@multipowercarservice.com
          </h1>
        </div>
        <div className="flex items-start gap-3 sm:gap-5">
          <FaLocationDot className="fill-white text-lg sm:text-xl mt-1" />
          <h1 className="text-white capitalize text-sm sm:text-base">
            No 40 & 41, 9th Cross Rd, Kempegowda Layout, Laggere, Bengaluru,
            Karnataka 560058
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePageContactForm;
