import { useDispatch } from "react-redux";
import { toggleNav } from "../../uiSlice";
import ResponsiveNavbar from "./ResponsiveNavbar";
import Cart from "../Cart";

function Navbar() {
  const dispatch = useDispatch();
  return (
    <>
      <ResponsiveNavbar/>
      <div className="px-3 md:px-24 md:mb-16 xl:px-32 absolute z-10 w-full md:static bg-white">
        <div className="flex justify-between py-4 md:py-8 border-b-[1px] border-gray-200">
          <div className="flex items-center gap-2">
            <div className="flex items-end gap-4">
              <button className="cursor-pointer md:hidden" onClick={() => dispatch(toggleNav())}>
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
      <Cart/>
    </>
  );
}

export default Navbar;
