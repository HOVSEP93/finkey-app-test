import { navLinks } from "../constants";
import { menu, close, finkeyLogo } from "../assets";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle); // Toggle the state when the icon is clicked
  };
  return (
    <nav
      onClick={toggleMenu}
      className="mx-auto  flex items-center justify-between py-6 font-bold text-neutral-900 px-5 sm:px-10 md:px-14 "
    >
      {/* logo */}
      <div className="flex items-center gap-x-2">
        <img src={finkeyLogo} alt="Finkey Logo" className="h-24 " />
      </div>
      {/* navigasi */}
      <div className="space-x-1 hidden md:flex">
        {navLinks.map((navlink) => (
          <div key={navlink.id}>
            <a
              className={`${
                navlink.title === "Login"
                  ? "rounded-lg bg-white px-6 py-2 hover:bg-[#65E4A3] duration-300"
                  : "rounded-lg px-6 py-2  hover:bg-[#012a32] hover:text-white duration-300"
              }`}
              href={`#${navlink.id}`}
            >
              {navlink.title}
            </a>
          </div>
        ))}
      </div>
      {/* navigasi mobile */}
      <div className="md:hidden">
        {toggle ? (
          <AiOutlineClose
            className=" cursor-pointer z-50"
            onClick={toggleMenu}
          />
        ) : (
          <HiOutlineMenuAlt3
            className=" cursor-pointer z-50"
            onClick={toggleMenu}
          />
        )}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } sidebar absolute right-5 top-16 z-20 flex-col items-center space-y-3 rounded-[10px] bg-[#1C3D5B] p-5 font-semibold md:hidden`}
        >
          {navLinks.map((navlink) => (
            <div key={navlink.id}>
              <a
                className={`${
                  navlink.title === "Login"
                    ? "rounded-lg bg-white px-6 py-1 hover:bg-[#65E4A3]"
                    : "rounded-lg px-6 py-1 text-white  hover:bg-[#012a32]"
                }`}
                href={`#${navlink.id}`}
              >
                {navlink.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
