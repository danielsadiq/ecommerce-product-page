import NavButtons from "./buttons/NavButtons"

function Image() {
    return (
        <div className="flex flex-col gap-4 relative">
            <img src="../images/image-product-1.jpg" className="lg:rounded-3xl overflow-hidden" />
            <NavButtons/>
            <div className="hidden justify-between lg:flex">
                <img src="../images/image-product-1-thumbnail.jpg" className="h-20 rounded-xl border-2 border-[#ff7d1a]" />
                <img src="../images/image-product-2-thumbnail.jpg" className="h-20 rounded-xl border-2 border-[#ff7d1a]" />
                <img src="../images/image-product-3-thumbnail.jpg" className="h-20 rounded-xl border-2 border-[#ff7d1a]" />
                <img src="../images/image-product-4-thumbnail.jpg" className="h-20 rounded-xl border-2 border-[#ff7d1a]" />
            </div>
        </div>
    )
}

export default Image
