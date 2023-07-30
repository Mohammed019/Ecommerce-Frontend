// use context to use cart context
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";

// Cart context for adding product to cart
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  // Descructure product
  const { id, title, price, image, category } = product;
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300 ease-in-out"
              src={image}
              alt="image"
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            // Add product to cart with addToCart function in CartContext provider and pass id as argument to addToCart function to add product to cart by id
            onClick={() => addToCart(product, id)}
            className="flex justify-center items-center text-white w-12 h-12 bg-red-500"
          >
            <div>
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category & title */}

      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold ">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
