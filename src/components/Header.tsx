import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircleUser, Heart, Search } from "lucide-react";
import { Menu, X } from "lucide-react";
import { MdArrowDropDown, MdDirectionsCar, MdInfo } from "react-icons/md";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    setSearchTerm("")
    e.preventDefault();

    navigate("/car/bmw");
  };

  return (
    <div>
      <div className="max-w-7xl h-[12vh] mx-auto flex items-center justify-between py-4 gap-x-12 md:px-8 sm:px-6 px-4">
        <div className="flex items-center space-x-10">
          <div className="flex items-center gap-x-2">
            <div>
              <img src={logo} alt="" className="size-14" />
            </div>
            <div className="text-3xl font-bold text-primary font-sans">
              <NavLink to="/">Alpha</NavLink>
            </div>
          </div>
          <form
            onSubmit={handleSearch}
            className="hidden lg:flex items-center relative w-[280px] rounded-3xl border border-gray-400 py-2 px-4 hover:shadow-lg transition-shadow"
          >
            <input
              placeholder="Enter car name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full focus-visible:outline-none"
            />
            <button type="submit">
              <Search
                className="absolute top-1/2 right-0 -translate-y-1/2 mr-3 text-gray-500"
                size={18}
              />
            </button>
          </form>
        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-500">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden lg:flex items-center space-x-12">
          <NavLink
            to="/car/bmw"
            className="group flex items-center cursor-pointer hover:text-[#168a2e] transition-colors"
          >
            <MdDirectionsCar className="mr-2" size={24} />
            Buy Car
          </NavLink>
          <NavLink to="/about" className="group flex items-center cursor-pointer hover:text-[#168a2e] transition-colors">
            <MdInfo className="mr-2" size={24} />
            About
          </NavLink>
          <NavLink
            to="/car/bmw"
            className="flex flex-col items-center justify-center group"
          >
            <Heart className="group-hover:scale-110 transition-transform duration-300" />
            <p className="text-sm">Shortlisted</p>
          </NavLink>
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
