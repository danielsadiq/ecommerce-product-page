import Image from "./Image";

function LightBox() {
  return (
    <div className="hidden absolute inset-0 z-30 lg:flex max-h-[100vh] items-center justify-center bg-[#000000bf]">
      <div className="relative w-[35%]">
        <div className="flex justify-end mb-4">
            <svg viewBox="0 0 15 15" width="28" height="30" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#69707D"
                fillRule="evenodd"
                className="hover:fill-black"
              />
            </svg>
        </div>
        <div className="absolute inset-[-20px] z-40 flex items-center justify-between">
          <div className="cursor-pointer rounded-[50%] bg-white p-4 pr-5">
            <img src="../images/icon-previous.svg" />
          </div>
          <div className="cursor-pointer rounded-[50%] bg-white p-4 pl-5">
            <img src="../images/icon-next.svg" />
          </div>
        </div>
        <Image />
      </div>
    </div>
  );
}

export default LightBox;
