import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-950 text-white grid md:grid-cols-4 grid-cols-1 md:gap-0 gap-10 items-center justify-around py-12 md:px-20 px-10">
      <h1 className="font-bold text-xl text-yellow-500 text-center md:-mt-20 mt-0">
        Kuku Sama
      </h1>
      <div className="flex flex-col gap-4 font-semibold items-center justify-center">
        <p className="cursor-pointer hover:text-yellow-500">Facebook</p>
        <p className="cursor-pointer hover:text-yellow-500">Instagram</p>
        <p className="cursor-pointer hover:text-yellow-500">Twitter</p>
      </div>
      <div className="flex flex-col gap-4 font-semibold items-center justify-center">
        <p className="cursor-pointer hover:text-yellow-500">Menu</p>
        <p className="cursor-pointer hover:text-yellow-500">Reservations</p>
        <p className="cursor-pointer hover:text-yellow-500">Gallery</p>
      </div>
      <div className="flex flex-col gap-4 font-semibold items-center justify-center">
        <p className="cursor-pointer hover:underline text-yellow-500">
          Contact us
        </p>
        <p>Be the first to get our newsletter</p>
        <div className="md:mb-0 mb-10">
          <input
            className="bg-white/90 px-4 py-2 text-black placeholder-black placeholder-opacity-70 border-none focus:outline-none"
            type="email"
            placeholder="Enter your email address"
          />
          <button className="bg-yellow-500 text-black px-4 py-2">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
