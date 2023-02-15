import { useContext } from "react";
import Drawer from "./drawer/Drawer";
import HeaderBar from "./header-bar/HeaderBar";
import { OpenStateContext } from "./context/OpenStateProvider";

const Home = () => {
  const { open, handleDrawerToggle } = useContext(OpenStateContext);
  return (
    <>
      <HeaderBar
        open={open}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Drawer />
    </>
  );
};

export default Home;
