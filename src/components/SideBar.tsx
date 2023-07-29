import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "./CartItem";
import { SlidebarContext } from "../contexts/SidebarContext";

const SideBar = () => {
  const { isOpen, toggleSidebar } = useContext(SlidebarContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } bg-white w-full h-full fixed top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-500 ease-in-out z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Cart (0)</div>
        {/* icon */}
        <div
          onClick={toggleSidebar}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward onClick={toggleSidebar} className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
