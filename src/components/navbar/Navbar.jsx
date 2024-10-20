import { useDispatch, useSelector } from "react-redux";
import { toggleCart, toggleNav } from "../../uiSlice";
import ResponsiveNavbar from "./ResponsiveNavbar";
import Cart from "../Cart";

function Navbar() {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.quantity);
  const cartIsOpen = useSelector((state) => state.ui.cartOpen);
  console.log(cartQuantity);
  
  return (
    <>
      <ResponsiveNavbar />
      <div className="absolute z-10 w-full bg-white px-3 md:static md:mb-16 md:px-24 xl:px-32">
        <div className="flex justify-between border-b-[1px] border-gray-200 py-4 md:py-8">
          <div className="flex items-center gap-2">
            <div className="flex items-end gap-4">
              <button
                className="cursor-pointer md:hidden"
                onClick={() => dispatch(toggleNav())}
              >
                <img src="../images/icon-menu.svg" />
              </button>
              <a className="cursor-pointer">
                <img src="../images/logo.svg" />
              </a>
            </div>
            <div className="ml-12 hidden gap-4 text-gray-500 md:flex">
              <span>Collections</span>
              <span>Men</span>
              <span>Women</span>
              <span>About</span>
              <span>Contact</span>
            </div>
          </div>
          <div className="flex items-center justify-end gap-6">
            <div className="lg:relative">
              <button className="bg-transparent relative h-12" onClick={() => dispatch(toggleCart())}>
                <img src="../images/icon-cart.svg" className="h-8 cursor-pointer" />
                {cartQuantity > 0 && <span className="bg-[#ff7d1a] absolute top-0 left-1/2 rounded-full px-4 font-bold text-white">{cartQuantity}</span>}
              </button>
              <div className="absolute top-[100%] right-0 lg:right-[-8rem]">
                {cartIsOpen && <Cart/>}
              </div>
            </div>

            <img
              src="../images/image-avatar.png"
              className="h-12 cursor-pointer rounded-full hover:border-2 hover:border-[#ff7d1a]"
            />
          </div>
        </div>
      </div>
      {/* {cartIsOpen && <Cart/>} */}
    </>
  );
}

export default Navbar;
