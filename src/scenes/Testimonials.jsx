import React from "react";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  return (
    <div
      className="text-white flex flex-col items-center justify-center md:py-0 py-6 
    bg-[url('/food7.jpg')] bg-cover bg-fixed bg-bottom bg-no-repeat"
    >
      <h1 className="text-4xl font-bold mt-6 text-yellow-500 text-center">
        What people are saying about us.
      </h1>
      <div className="flex items-center justify-center md:p-16 p-9 ">
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
