import React from "react";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <motion.div
      className=" flex flex-col items-center justify-center py-20 md:px-0 px-5 h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: 0.1, duration: 1 }}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <h1 className="text-4xl font-bold mb-4 text-yellow-500">Gallery</h1>
      <p className="text-lg mb-4 text-center">
        We serve delicious food from various cuisines. Check out our menu and
        visit us today!
      </p>

      <motion.div
        className="grid grid-cols-3 md:w-[50%] w-full grid-rows-2 items-center justify-center gap-3 mt-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.5, duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <img
          className="col-span-1 row-span-2 h-full object-cover"
          src="/chicken.jpg"
          alt="/"
        />
        <img className="col-span-1 row-span-1" src="/food7.jpg" alt="/" />
        <img
          className="col-span-1 row-span-2 h-full object-cover"
          src="/food2.jpg"
          alt="/"
        />
        <img className="col-span-1 row-span-1" src="/food5.jpg" alt="/" />
      </motion.div>
      <button className="mt-5 bg-yellow-500 px-4 py-2 rounded-md">
        View gallery
      </button>
    </motion.div>
  );
};

export default Gallery;
