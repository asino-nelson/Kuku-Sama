import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 grid-rows-2 items-center justify-center md:py-20 py-5 md:px-44 text-white">
      <motion.div
        className="flex w-full md:gap-4 gap-2 items-center justify-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="flex flex-col md:gap-3 gap-2 mt-14 ">
          <img className="md:w-[230px] w-[200px] md:h-[30vh] h-[20vh]" src="/chicken.jpg" alt="/" />
          <img className="md:w-[230px] w-[200px] md:h-[30vh] h-[20vh]" src="/fish.jpg" alt="/" />
        </div>
        <div className="flex flex-col md:gap-3 gap-2 ">
          <img className="md:w-[230px] w-[200px] md:h-[30vh] h-[20vh]" src="/food4.jpg" alt="/" />
          <img className="md:w-[230px] w-[200px] md:h-[30vh] h-[20vh]" src="/food5.jpg" alt="/" />
        </div>
      </motion.div>

      <motion.div
        className="md:p-9 p-4 md:mt-0 -mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.1, duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1 className="text-4xl font-bold mb-4 text-yellow-500 md:text-left text-center">Our Story</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum iste sit
          fugit eaque soluta nam voluptatem adipisci, quia placeat porro. Sequi
          quae consequatur nam voluptas numquam id minus atque nobis.
        </p>
        <button className="mt-5 font-bold hover:text-yellow-500">More About us</button>
      </motion.div>
    </div>
  );
};

export default About;
