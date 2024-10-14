import { useState } from "react";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      {<div className={`absolute top-0 pl-3 z-20 flex flex-col items-start gap-2 bg-white py-8 w-[250px] h-full font-bold lg:hidden ${navOpen ? " left-0": " left-[-300px]"} transition-all duration-300`}>
        <button className="cursor-pointer" onClick={() => setNavOpen(!navOpen)}>
          <img src="../images/icon-close.svg" className="h-6 mb-6" />
        </button>
        <span>Collections</span>
        <span>Men</span>
        <span>Women</span>
        <span>About</span>
        <span>Contact</span>
      </div>}
      <div className="px-3 md:px-24 md:mb-16 xl:px-32 absolute z-10 w-full md:static bg-white">
        <div className="flex justify-between py-4 md:py-8 border-b-1 border-gray-500">
          <div className="flex items-center gap-2">
            <div className="flex items-end gap-4">
              <button className="cursor-pointer md:hidden" onClick={() => setNavOpen(!navOpen)}>
                <img src="../images/icon-menu.svg" />
              </button>
              <a className="cursor-pointer">
                <img src="../images/logo.svg" />
              </a>
            </div>
            <div className="ml-12 gap-4 text-gray-500 hidden md:flex">
              <span>Collections</span>
              <span>Men</span>
              <span>Women</span>
              <span>About</span>
              <span>Contact</span>
            </div>
          </div>
          <div className="flex items-center justify-end gap-6">
            <img src="../images/icon-cart.svg" className="h-8 cursor-pointer" />           
            <img src="../images/image-avatar.png" className="h-12 hover:border-2 rounded-full hover:border-[#ff7d1a] cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
