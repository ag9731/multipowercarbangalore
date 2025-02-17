import React, { useState } from "react";
import {
  FaAlignJustify,
  FaRegCircleXmark,
  FaFacebook,
  FaInstagram,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import logo from "../../assets/logo.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <main className="bg-[#fff] relative">
      {/* desktop menu */}
      <section className="shadow-lg hidden md:block">
        <header className="container mx-auto flex items-center justify-between">
          <figure>
            <img className="max-w-32" src={logo} alt="logo" />
          </figure>

          <nav className="flex items-center">
            <ul className="flex gap-20 text-[17px] text-black font-semibold">
              <li>
                <a href="#banner">Home</a> {/* Use anchor link here */}
              </li>
              <li>
                <a href="#about-us">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact-us">Contact</a>
              </li>
            </ul>
          </nav>

          <section>
            <button className="text-white font-bold uppercase bg-[#000000] py-2 px-5">
              Book Now
            </button>
          </section>
        </header>
      </section>

      {/* mobile menu */}
      <section className="shadow-lg block relative md:hidden z-[9999]">
        <header className="container mx-auto flex items-center justify-between">
          <figure>
            <img className="max-w-32" src={logo} alt="logo" />
          </figure>

          <nav className="flex items-center">
            {toggle ? (
              <>
                <div
                  className="absolute top-1/2 -translate-y-1/2 right-10"
                  onClick={handleToggle}
                >
                  <FaRegCircleXmark className="text-4xl" />
                </div>
                {/* Display Menu */}
                <ul
                  className={`flex flex-col py-10 justify-start items-center translate-x-full absolute bg-[#dd7ad0] w-[100%] top-32 left-0 gap-10 text-[22px] h-[100vh] text-black font-semibold transition-transform duration-500 ease-in-out ${
                    toggle ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  <li>
                    <a href="#banner">Home</a> {/* Use anchor link here */}
                  </li>
                  <li>
                    <a href="#about-us">About Us</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#contact-us">Contact Us</a>
                  </li>
                  <li>
                    <button className="text-white font-bold uppercase bg-[#000000] py-2 px-5">
                      Book Now
                    </button>
                  </li>
                  <li className="flex gap-5">
                    <FaFacebook />
                    <FaInstagram />
                    <FaSquareWhatsapp />
                  </li>
                </ul>
              </>
            ) : (
              <div
                className="absolute z-[9999] top-1/2 -translate-y-1/2 right-10"
                onClick={handleToggle}
              >
                <FaAlignJustify className="text-4xl" />
              </div>
            )}
          </nav>
        </header>
      </section>
    </main>
  );
};

export default Header;
