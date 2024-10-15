// eslint-disable-next-line react/prop-types
function PreviousNextButton() {
  // return (
  //   <div className={`absolute bottom-0 left-2 right-2 top-0 flex items-center justify-between ${classes}`}>
  //     <img src="../images/icon-previous.svg" className="cursor-pointer rounded-[50%] bg-white p-2" />
  //     <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer rounded-[50%] bg-white p-2">
  //       <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" className="hover:fill-[#ff7d1a]" />
  //     </svg>
  //     <img src="../images/icon-next.svg" className="cursor-pointer rounded-[50%] bg-white p-2" />
  //   </div>
  // );
  return (
    <div className="absolute inset-[20px] flex items-center justify-between">
      <div className="cursor-pointer rounded-[50%] bg-white p-4 pr-5">
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
            className="hover:stroke-[#ff7d1a]"
          />
        </svg>
      </div>
      <div className="cursor-pointer rounded-[50%] bg-white p-4 pl-5">
        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
            className="hover:stroke-[#ff7d1a]"
          />
        </svg>
      </div>
    </div>
  );
}

export default PreviousNextButton;
