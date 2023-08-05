import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center md:px-44 px-4 text-center bg-[url('/food7.jpg')] bg-fixed bg-cover bg-center bg-no-repeat h-[90vh] text-white">
      <div className="absolute w-full h-full bg-stone-800 bg-opacity-60" />
      <motion.div
        className="relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 2 }}
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h1 className="text-3xl font-bold mb-4 text-yellow-500">
          Good Food, Great Times
        </h1>
        <p className="text-lg md:px-44">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          saepe quo corrupti, nihil cupiditate at sunt maxime iure dolores vero
          quos perferendis et.
        </p>
        <button className="mt-9 text-black font-semibold bg-yellow-500/90 hover:bg-yellow-500 rounded-md px-16 py-3 ">
          Book A Table
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
