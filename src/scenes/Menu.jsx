import React from "react";
import MenuItem from "../components/MenuItem";
import { motion } from "framer-motion";
import MenuCategories from "../components/MenuCategories";

const Menu = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-cente md:p-20 p-10 md:mt-0 -mt-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.1, duration: 1 }}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <h1 className="text-4xl font-bold mb-4 text-yellow-500">Menu</h1>
      <p className="text-lg mb-4 text-center">
        We serve delicious food from various cuisines. Check out our menu and
        visit us today!
      </p>
      <MenuCategories/>
      <MenuItem />
    </motion.div>
  );
};

export default Menu;
