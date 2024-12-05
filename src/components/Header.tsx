import { useState } from "react";
import { CircleUser, Heart, Search } from "lucide-react";
import { ChevronDown, Menu, X } from "lucide-react";
import { MdArrowDropDown } from "react-icons/md";
import { Select } from "./ui/select";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="max-w-7xl h-[12vh] mx-auto flex items-center justify-between py-4 gap-x-12 md:px-8 sm:px-6 px-4">
        <div className="flex items-center space-x-6">
          <div className="text-3xl font-bold text-primary">
            <p>Alpha</p>
          </div>
          <div className="hidden lg:flex items-center gap-x-2 border border-gray-400 rounded-3xl px-4 py-[8px] hover:shadow-lg transition-shadow">
            <p className="text-sm">Location</p>
            <ChevronDown className="text-gray-500 pt-1 font-bold" size={24} />
          </div>
          <div className="hidden lg:flex items-center relative w-[280px] rounded-3xl border border-gray-400 py-2 px-4 hover:shadow-lg transition-shadow">
            <input
              placeholder="Enter car name"
              className="w-full focus-visible:outline-none"
            />
            <Search
              className="absolute top-1/2 right-0 -translate-y-1/2 mr-3 text-gray-500"
              size={18}
            />
          </div>
        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-500">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          {["Buy Car", "Sell Car", "More"].map((item) => (
            <div
              key={item}
              className="group flex items-center cursor-pointer hover:text-[#168a2e] transition-colors"
            >
              {item}
              <MdArrowDropDown
                className="text-gray-500 pt-0 font-bold group-hover:text-[#168a2e] group-hover:rotate-180 transition-transform duration-300"
                size={24}
              />
            </div>
          ))}
          <div className="flex flex-col items-center justify-center group">
            <Heart className="group-hover:scale-110 transition-transform duration-300" />
            <p className="text-sm">Shortlisted</p>
          </div>
          <div className="flex flex-col items-center justify-center group">
            <CircleUser className="group-hover:scale-110 transition-transform duration-300" />
            <p className="text-sm">Account</p>
          </div>
          <div>
            <p className="text-xs">Call us at</p>
            <p>+91 11111 11111</p>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden flex flex-col space-y-4 shadow-lg rounded-lg p-4">
          {["Buy Car", "Sell Car", "More"].map((item) => (
            <div
              key={item}
              className="flex items-center justify-center cursor-pointer hover:text-[#168a2e] transition-colors"
            >
              {item}
              <MdArrowDropDown className="text-gray-500 font-bold" size={24} />
            </div>
          ))}
          <div className="flex flex-col items-center justify-center">
            <Heart />
            <p className="text-sm">Shortlisted</p>
          </div>
          <div className="flex flex-col items-center justify-between">
            <CircleUser />
            <p className="text-sm">Account</p>
          </div>
          <div className="text-center mt-4">
            <p className="text-xs">Call us at</p>
            <p>+91 11111 11111</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
