import { useDispatch, useSelector } from "react-redux";
import { toggleNav } from "../../uiSlice";

function ResponsiveNavbar() {
  const dispatch = useDispatch();
  const navOpen = useSelector(state => state.ui.navOpen);
  return (
    <div
      className={`${navOpen ? "z-20 bg-[#000000bf]" : "-z-30 bg-white"} absolute inset-0 flex max-h-[100vh] items-center justify-center transition-all duration-500 lg:hidden`}
    >
      <div
        className={`absolute top-0 z-20 flex h-full w-[250px] flex-col items-start gap-2 bg-white py-8 pl-3 font-bold lg:hidden ${navOpen ? "left-0" : "left-[-300px]"} transition-all duration-500`}
      >
        <button
          className="cursor-pointer"
          onClick={() => dispatch(toggleNav())}
        >
          <img src="../images/icon-close.svg" className="mb-6 h-6" />
        </button>
        <span>Collections</span>
        <span>Men</span>
        <span>Women</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </div>
  );
}

export default ResponsiveNavbar;
