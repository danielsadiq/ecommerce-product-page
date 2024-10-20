import { useSelector } from "react-redux";
import PreviousNextButton from "./ui/PreviousNextButton";
import SubImage from "./SubImage";

function Image() {
  const curr = useSelector((state) => state.ui.curr);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <img
          src={`../images/image-product-${curr}.jpg`}
          className="overflow-hidden lg:rounded-3xl"
        />
        <PreviousNextButton />
      </div>
      <div className="hidden justify-between lg:grid grid-cols-4 gap-3 px-4">
        <SubImage num={1} />
        <SubImage num={2} />
        <SubImage num={3} />
        <SubImage num={4} />
      </div>
    </div>
  );
}

export default Image;
