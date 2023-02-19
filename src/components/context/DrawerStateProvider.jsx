// context to make the open and close button available globally.

import { createContext, useState } from "react";

export const DrawerStateContext = createContext();

const DrawerStateProvider = ({ children }) => {
  // pass state as true to keep drawer open at app start.
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen((prevState) => !prevState);
  };

  const handleDrawerOpen = (isOpen) => {
    setOpen(isOpen);
  };

  return (
    <DrawerStateContext.Provider
      value={{ open, setOpen, handleDrawerToggle, handleDrawerOpen }}
    >
      {children}
    </DrawerStateContext.Provider>
  );
};

export default DrawerStateProvider;
