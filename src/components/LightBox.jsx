import { useSelector } from "react-redux";
import Image from "./Image";
import CloseButton from "./ui/CloseButton";

function LightBox() {
  const lightBoxOn = useSelector(state => state.ui.lightBox);
  if (!lightBoxOn) return null;
  return (
    <div className="hidden absolute inset-0 z-30 lg:flex items-center justify-center bg-[#000000bf]">
      <div className="relative w-[35%]">
        <CloseButton/>
        <Image />
      </div>
    </div>
  );
}

export default LightBox;

{/* <div className="z-50">
          <PreviousNextButton/>
        </div> */}
        {/* <div className="absolute inset-[-20px] z-40 flex items-center justify-between">
          <div className="cursor-pointer rounded-[50%] bg-white p-4 pr-5">
            <img src="../images/icon-previous.svg" />
          </div>
          <div className="cursor-pointer rounded-[50%] bg-white p-4 pl-5">
            <img src="../images/icon-next.svg" />
          </div>
        </div> */}