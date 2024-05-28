import { FaRegStar } from "react-icons/fa";
import { MdFavoriteBorder, MdOutlineDescription } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import RelatedProduct from "../components/RelatedProduct";

export default function ProductDetails() {
  const shoe = useLoaderData();

  const {
    images,
    brand,
    model,
    type,
    size,
    color,
    price,
    inStock,
    ratings,
    description,
    id,
  } = shoe || {};

  return (
    <div className="">
      <div className="grid grid-cols-12">
        <div className="col-span-8 p-10">
          <div className="bg-cover">
            <img src={images} alt="" />
          </div>
        </div>
        <div className="col-span-4 p-10">
          <div className="">
            <h1 className="font-bold text-4xl">{model}</h1>
            <p className="py-3">
              Brand: {brand} Type: {type}
            </p>
            <p className="font-bold text-2xl">$ {price}</p>
            <p className=" w-fit bg-accent text-xl px-5 py-1 my-2 rounded">
              {inStock ? "Availabe" : "Not available"}
            </p>
            <p className="font-semibold text-xl flex items-center gap-2">
              {" "}
              <FaRegStar /> {ratings}
            </p>
            <h1 className="font-bold text-2xl py-3">Colors</h1>
            <div className="flex gap-2 flex-wrap">
              <span className="border border-black py-1 px-5 rounded text-white bg-black">
                {color}
              </span>
            </div>
            <h1 className="font-bold text-2xl py-3">Sizes</h1>
            <div className="flex gap-2 flex-wrap">
              {size.map((s, i) => (
                <span className="border border-black py-1 px-5 rounded" key={i}>
                  {s}
                </span>
              ))}
            </div>
            {/* size selection */}
            <div className="w-1/2 my-4 flex justify-center items-center bg-black py-2 px-10 cursor-pointer rounded">
              <span className="text-white font-semibold text-xl">
                Select Size
              </span>
            </div>
            {/* add to wishlist button  */}
            <div className="w-1/2 my-4 flex justify-center items-center py-2 px-10 cursor-pointer rounded border-[3px] border-black hover:bg-black hover:text-white">
              <span className="font-semibold text-xl flex justify-center items-center gap-2">
                Add to Wishlist
                <MdFavoriteBorder />
              </span>
            </div>
            <div className="text-2xl flex items-center gap-2">
              <MdOutlineDescription size={27} />
              Description
            </div>
            <p className="py-4 mr-6 pr-10">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full border-opacity-100">
        <div className="divider">YOU MAY ALSO LIKE</div>
      </div>
      <div className="">
        <RelatedProduct id={id} />
      </div>
    </div>
  );
}
