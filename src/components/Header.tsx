import { useContext } from "react";
import { SlidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, toggleSidebar } = useContext(SlidebarContext);
  return (
    <div className="bg-pink-200">
      <div className="cursor-pointer" onClick={() => toggleSidebar()}>
        <BsBag className="text-2xl" />
      </div>
    </div>
  );
};

export default Header;
