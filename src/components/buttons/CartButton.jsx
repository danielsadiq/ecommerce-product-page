import { useState } from "react"

function CartButton() {
    const [quantity, setQuantity] = useState(0);
    return (
        <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex bg-[#edeef3] p-4 justify-between font-bold rounded-lg flex-1">
                <button className="bg-transparent" onClick={() => setQuantity(c => c===0 ? 0 : c-1)}>
                    <img src="../images/icon-minus.svg"/>
                </button>
                {quantity}
                <button className="bg-transparent" onClick={() => setQuantity(c => c+1)}>
                    <img src="../images/icon-plus.svg"/>
                </button>
            </div>
            <button className="flex gap-2 justify-center items-center bg-orange-500 w-full p-4 rounded-lg flex-1 font-bold hover:bg-orange-500/50">
                <img src="../images/icon-cart black.svg" /> Add to cart
            </button>
        </div>
    )
}

export default CartButton

// bg-[#f7f8fd]