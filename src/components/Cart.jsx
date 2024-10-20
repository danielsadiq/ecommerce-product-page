import { useSelector } from "react-redux";
import PrimaryButton from "./ui/PrimaryButton";

function Cart() { 
  const cartQuantity = useSelector(state => state.cart.quantity);
  return (
    <div className="z-10 m-2 flex flex-col rounded-2xl bg-white p-4 shadow-xl shadow-black/10 md:w-96 w-[94vw]">
      <h2 className="border-b-[1px] border-gray-200 pb-2 font-bold">Cart</h2>
      <div className="flex flex-1 items-center justify-center">
        <p className="font-bold text-[#68707d]">Your cart is empty</p>
      </div>

      <div className="flex items-center gap-4 my-4">
        <img src="images\image-product-1-thumbnail.jpg" className="w-12 rounded-md" />
        <div className="text-[#68707d] grow">
          <p>Fall Limited Edition Sneakers</p>
          <p>$125.00 &times; {cartQuantity} <span className="font-bold text-black">$375.00</span></p>
        </div>
        <img src="images\icon-delete.svg"/>
      </div>
      <PrimaryButton>
        Checkout
      </PrimaryButton>
    </div>
  );
}

export default Cart;
