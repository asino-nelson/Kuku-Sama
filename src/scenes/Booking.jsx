import React from "react";
import { motion } from "framer-motion";

const Booking = () => {
  return (
    <div className=" grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2 justify-center items-center gap-9 md:px-48 px-5 h-screen">
      <motion.div
        className="flex flex-col md:items-start items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h2 className="text-3xl font-semibold text-center text-yellow-500">
          Discover the True Meaning of Taste
        </h2>
        <p className="mt-9">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
          eaque voluptatum iste culpa quos sint quas, fugit accusamus dolorem,
          tempore temporibus cum enim quae perspiciatis explicabo. Error amet
          esse odio.
        </p>
        <button className="mt-9 text-black bg-yellow-500 rounded-sm w-full md:w-fit px-16 py-3 ">
          Book A Table
        </button>
      </motion.div>

      <motion.img
        className="w-full md:mt-0 -mt-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        src="/open.jpg"
        alt="/"
      />
    </div>
  );
};

export default Booking;
