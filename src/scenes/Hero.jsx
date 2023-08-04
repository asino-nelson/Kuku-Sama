import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center md:px-44 px-4 text-center bg-[url('/food7.jpg')] bg-fixed bg-cover bg-center bg-no-repeat h-[90vh] text-white">
      <div className="absolute w-full h-full bg-stone-800 bg-opacity-60" />
      <div className="relative">
        <h1 className="text-4xl font-bold mb-4">Good Food, Great Times</h1>
        <p className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          saepe quo corrupti, nihil cupiditate at sunt maxime iure dolores vero
          quos perferendis et, repudiandae nemo suscipit illum a doloremque
          totam.
        </p>
        <button className="mt-9 text-black font-semibold bg-yellow-500 rounded-md px-16 py-3 ">
          Book A Table
        </button>
      </div>
    </div>
  );
};

export default Hero;
