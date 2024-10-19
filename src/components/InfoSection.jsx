import CartButton from "./ui/CartButton";

function InfoSection() {
  return (
    <div className="px-5 py-3 xl:w-[64rem]">
      <h1 className="text-sm font-bold uppercase text-[#68707d] tracking-widest">sneaker company</h1>
      <h1 className="text-4xl font-bold lg:text-5xl py-2">Fall Limited Edition Sneakers</h1>
      <p className="lg:text-[18px] font-normal text-[#68707d] my-4">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex gap-2 my-2 lg:flex-col lg:my-6">
        <div className="flex gap-4 items-center">
            <h1 className="text-2xl font-bold lg:text-4xl">$125.00</h1>
            <p className="py-1 px-2.5 bg-black text-white rounded-md font-bold">50%</p>
        </div>
        <p className="font-bold text-gray-500 flex-grow text-end lg:text-start line-through">$250.00</p>
      </div>
      <div>
        <CartButton/>
      </div>
    </div>
  );
}

export default InfoSection;
