import React from "react";
import { motion } from "framer-motion";

const Open = () => {
  return (
    <div className="flex flex-col items-center justify-center md:p-16 p-10 h-screen">
      <h2 className="text-3xl text-center font-bold md:mb-6 mb-4 text-yellow-500">
        Opening Hours
      </h2>
      <div className="bg-stone-600 rounded-sm">
        <motion.div
          className="flex flex-col items-center justify-cente md:p-20 p-8 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p >Monday: 10:00 AM - 10:00 PM</p>
          <p className="mt-5">Tuesday: 11:00 AM - 11:00 PM</p>
          <p className="mt-5">Wednesday: 11:00 AM - 11:00 PM</p>
          <p className="mt-5">Thursday: 11:00 AM - 11:00 PM</p>
          <p className="mt-5">Friday: 11:00 AM - 11:00 PM</p>
          <p className="mt-5">Saturday: 11:00 AM - 11:00 PM</p>
          <p className="mt-5">Sunday: 11:00 AM - 11:00 PM</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Open;
