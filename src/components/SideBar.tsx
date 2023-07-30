import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";
import { SlidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const SideBar = () => {
  // get toggle with context api to toggle sidebar with style
  const { isOpen, toggleSidebar } = useContext(SlidebarContext);

  const { cart, clearCart, totalPrice, itemamount } = useContext(CartContext);
  return (
    <div
      // toggle sidebar with style, if isOpen is true, add class right-0, else add class -right-full
      className={`${
        isOpen ? "right-0" : "-right-full"
      } bg-white w-full h-full fixed top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-500 ease-in-out z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping Cart ({itemamount})
        </div>
        {/* icon */}
        <div
          onClick={toggleSidebar}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward onClick={toggleSidebar} className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[312px] lg:h-[380px] xl:h-[600px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((product) => {
          return <CartItem item={product} key={product.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4 ">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>${" "}
            {parseFloat(totalPrice).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div
            className="cursor-pointer py-4 w-12 h-12 text-black hover:text-red-500 transition flex justify-center items-center text-xl"
            onClick={clearCart}
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={"/"}
          className="bg-gray-200 flex py-4 justify-center items-center text-primary w-full font-medium"
        >
          View Cart
        </Link>
        <Link
          to={"/"}
          className="bg-primary flex py-4 justify-center items-center text-white w-full font-medium"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
