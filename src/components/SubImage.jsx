/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { toggleLightBox } from "../uiSlice";

function SubImage({num}) {
  const dispatch = useDispatch();
  const curr = useSelector((state) => state.ui.curr);
  return (
    <div className={`cursor-pointer rounded-xl ${num === curr ? "border-2 border-[#ff7d1a]":""}`}>
      <img
        src="../images/image-product-1-thumbnail.jpg"
        onClick={() => dispatch(toggleLightBox())}
        className={`h-full rounded-lg ${num === curr ? "opacity-30":""}`}
      />
    </div>
  );
}

export default SubImage;
