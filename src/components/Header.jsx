import { useContext, useEffect, useState } from "react";
import { SlidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

const Header = () => {
  // get toggle with context api to toggle sidebar
  const { isOpen, toggleSidebar } = useContext(SlidebarContext);
  const { itemamount } = useContext(CartContext);

  const [isActive, setIsActive] = useState(false);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6 "
      } fixed w-full z-10 transition-all duration-300 ease-in-out`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={logo} alt="image" />
          </div>
        </Link>

        {/* cart */}
        <div
          className="cursor-pointer flex relative"
          onClick={() => toggleSidebar()}
        >
          <BsBag className="text-2xl" />

          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full  flex justify-center items-center">
            {itemamount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
