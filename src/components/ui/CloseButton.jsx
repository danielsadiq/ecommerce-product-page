import { useDispatch } from "react-redux";
import { toggleLightBox } from "../../uiSlice";
function CloseButton() {
  const dispatch = useDispatch();
  return (
    <div className="mb-4 flex justify-end">
      <button onClick={() => dispatch(toggleLightBox())} className="z-50">
        <svg
          viewBox="0 0 15 15"
          width="28"
          height="30"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-pointer"
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="white"
            fillRule="evenodd"
            className="hover:fill-[#ff7d1a]"
          />
        </svg>
      </button>
    </div>
  );
}

export default CloseButton;
