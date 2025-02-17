import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Us */}
          <div>
            <h2 className="text-xl font-bold border-b-2 border-gray-600 pb-2">
              About Us
            </h2>
            <p className="mt-3 text-sm">
              Multi Power Car Services offers expert car repair, maintenance,
              and detailing services.
            </p>
            <p className="text-sm">
              Your trusted partner for top-notch vehicle care and service
              excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold border-b-2 border-gray-600 pb-2">
              Quick Links
            </h2>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="#banner" className="hover:text-gray-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#about-us" className="hover:text-gray-400 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#services" className="hover:text-gray-400 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="#contact-us"
                  className="hover:text-gray-400 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Locate Us */}
          <div>
            <h2 className="text-xl font-bold border-b-2 border-gray-600 pb-2">
              Locate Us
            </h2>
            <div className="mt-3 space-y-3 text-sm">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                No.23/24, Ground Floor, 8th Cross Road, Kempegowda Nagara,
                Bengaluru
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <FaPhoneAlt className="text-green-500" />
                +91 96322 11717
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <FaEnvelope className="text-blue-400" />
                info@manpowercarservice.com
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Multi Power Car Services. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
