// context to make the open and close button available globally.

import { createContext, useState } from "react";

export const OpenStateContext = createContext();

const OpenStateProvider = ({ children }) => {
  // pass state as true to keep drawer open at app start.
  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <OpenStateContext.Provider value={{ open, setOpen, handleDrawerToggle }}>
      {children}
    </OpenStateContext.Provider>
  );
};

export default OpenStateProvider;
