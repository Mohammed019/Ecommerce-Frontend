import { createContext, useState } from "react";

export const SlidebarContext = createContext(null);

const SlidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
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
