import React from "react";
import Slider from "react-slick";

const HomePageCarNeedSection = () => {
  // Testimonial Data
  const testimonials = [
    {
      name: "John Doe",
      message:
        "Great service! My car was in perfect condition after the maintenance. Highly recommended!",
    },
    {
      name: "Jane Smith",
      message:
        "The detailing and painting was done flawlessly. My car looks brand new!",
    },
    {
      name: "Mark Johnson",
      message:
        "Awesome experience! The team was very professional, and I loved the car wash service.",
    },
    {
      name: "Emily Davis",
      message:
        "Quick and efficient repair service. I will definitely come back for future needs!",
    },
  ];

  // Slick Slider Settings
  const settings = {
    dots: true, // Show dots navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Number of slides to show on mobile
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides on tablets and above
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-section p-10 bg-gray-50">
      <h2 className="text-center text-3xl font-bold mb-8">
        What Our Clients Say
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card p-5 bg-white border border-gray-300 rounded-lg shadow-lg"
          >
            <p className="text-lg text-gray-700 italic">
              "{testimonial.message}"
            </p>
            <p className="text-md text-gray-900 mt-4 font-semibold">
              {testimonial.name}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomePageCarNeedSection;
