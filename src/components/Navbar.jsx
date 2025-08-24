import { useState } from "react";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
      <div
        className="text-neutral-500 bg-black/60 backdrop-blur-md max-w-7xl
        mx-auto px-4 py-3 flex justify-between items-center rounded-xl border
        border-neutral-800"
      >
        { /* <img src={logo} alt="logo" width={120} height={24} /> */ }
        <div className="text-white text-xl font-bold">
          Strivo
        </div>

        {/* center links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-neutral-200">
            How it works
          </a>
          <a href="#" className="hover:text-neutral-200">
            Pricing
          </a>
          <a href="#" className="hover:text-neutral-200">
            Testimonials
          </a>
        </div>

        {/* right side buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#" className="hover:text-neutral-200">
            Login
          </a>
          <a
            href="#"
            className="border border-neutral-700 text-white
            py-2 px-4 rounded-lg hover:bg-neutral-700 transition"
          >
            Get a demo
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white
            py-2 px-4 rounded-lg hover:bg-blue-500 transition"
          >
            Start Free Trial
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <RiCloseFill /> : <RiMenuFill />}
          </button>
        </div>
      </div>

      {/* Mobile menu - moved outside the main navbar container */}
      {isOpen && (
        <div
          className="md:hidden bg-neutral-900/60 backdrop-blur-md border
          border-neutral-800 p-4 rounded-xl mt-2 mx-auto max-w-7xl"
        >
          <div className="flex flex-col space-y-4">
            <a href="#" className="hover:text-neutral-200">
              How it works
            </a>
            <a href="#" className="hover:text-neutral-200">
              Pricing
            </a>
            <a href="#" className="hover:text-neutral-200">
              Testimonials
            </a>
            <div className="border-t border-neutral-700 my-2"></div>
            <a href="#" className="hover:text-neutral-200">
              Login
            </a>
            <a href="#" className="hover:text-neutral-200">
              Get a demo
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white
              py-2 px-4 rounded-lg hover:bg-blue-500 transition"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;