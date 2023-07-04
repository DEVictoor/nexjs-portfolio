import { motion } from "framer-motion";
import { NavBarCel } from "./NavBarCell";
import { NavBarDesk } from "./NavBarDesk";

export const NavBar = () => {
  return (
    <motion.div layoutId="LPageTransition" style={{ zIndex: 0 }}>
      <NavBarCel />
      <NavBarDesk />
    </motion.div>
  );
};
