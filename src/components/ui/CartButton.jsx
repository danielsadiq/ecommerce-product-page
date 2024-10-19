import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

function CartButton() {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      <div className="flex flex-1 justify-between rounded-lg bg-[#edeef3] p-4 font-bold">
        <button
          className="bg-transparent"
          onClick={() => setQuantity((c) => (c === 0 ? 0 : c - 1))}
        >
          <img src="../images/icon-minus.svg" />
        </button>
        {quantity}
        <button
          className="bg-transparent"
          onClick={() => setQuantity((c) => c + 1)}
        >
          <img src="../images/icon-plus.svg" />
        </button>
      </div>
      <PrimaryButton>
        <img src="../images/icon-cart black.svg" /> Add to cart
      </PrimaryButton>
    </div>
  );
}

export default CartButton;

// bg-[#f7f8fd]
