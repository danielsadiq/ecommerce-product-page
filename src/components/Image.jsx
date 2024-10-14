import { useDispatch } from "react-redux"
import PreviousNextButton from "./buttons/PreviousNextButton"
import { toggleLightBox } from "../uiSlice";

function Image() {
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col gap-4">

            <div className="relative">
                <img src="../images/image-product-1.jpg" className="lg:rounded-3xl overflow-hidden" />
                <PreviousNextButton/>
            </div>
            <div className="hidden justify-between lg:flex">
                <img src="../images/image-product-1-thumbnail.jpg" onClick={() => dispatch(toggleLightBox())} className="cursor-pointer h-20 rounded-xl border-2 border-[#ff7d1a]" />
                <img src="../images/image-product-2-thumbnail.jpg" onClick={() => dispatch(toggleLightBox())} className="cursor-pointer h-20 rounded-xl border-2 border-[#ff7d1a]" />
                <img src="../images/image-product-3-thumbnail.jpg" onClick={() => dispatch(toggleLightBox())} className="cursor-pointer h-20 rounded-xl border-2 border-[#ff7d1a]" />
                <img src="../images/image-product-4-thumbnail.jpg" onClick={() => dispatch(toggleLightBox())} className="cursor-pointer h-20 rounded-xl border-2 border-[#ff7d1a]" />
            </div>
        </div>
    )
}

export default Image
