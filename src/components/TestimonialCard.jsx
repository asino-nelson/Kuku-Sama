import React from "react";

const TestimonialCard = () => {
  return (
    <div className="md:w-[90%] w-full bg-stone-900/90 rounded-md flex items-center justify-center p-4 gap-9">
      <img
        className="rounded-md w-[100px] h-[80px] "
        src="/food7.jpg"
        alt="/"
      />

      <div className="flex flex-col">
        <h2 className="font-semibold md:text-xl text-base text-gray-300">
          Name
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
