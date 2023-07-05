import { motion } from "framer-motion";
import { NavBarCel } from "./NavBarCell";
import { NavBarDesk } from "./NavBarDesk";

export const NavBar = () => {
  return (
    <motion.div layoutId="LPageTransition" style={{ height: "10%" }}>
      <NavBarCel />
      <NavBarDesk />
    </motion.div>
  );
};
