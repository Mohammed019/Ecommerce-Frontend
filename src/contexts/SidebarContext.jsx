import { createContext, useState } from "react";

export const SlidebarContext = createContext(null);

const SlidebarProvider = ({ children }) => {
  // Product state
  const [isOpen, setIsOpen] = useState(false);
  // toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SlidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SlidebarContext.Provider>
  );
};

export default SlidebarProvider;
