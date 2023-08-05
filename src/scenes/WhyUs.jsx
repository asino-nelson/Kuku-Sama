import React from "react";
import Choice from "../components/Choice";
import { FaCar, FaMoneyCheck, FaStar } from "react-icons/fa";

const whyCategories = [
    {
      title: "Fresh foods",
      description: "We serve the best quality fresh foods.",
      icon: <FaStar size={60} className="text-yellow-500"/>,
    },
    {
      title: "Best Offer",
      description: "We give the best offers to our valuable customers.",
      icon: <FaMoneyCheck size={60} className="text-yellow-500"/>,
    },
    {
      title: "Fast delivery",
      description: "We have delivery van for fast delivery.",
      icon: <FaCar size={60} className="text-yellow-500"/>,
    }
  ];

const WhyUs = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-1 text-yellow-500">Why choose us?</h1>
        <p>Over the millions customers are happy with us</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 md:px-40 px-20 mt-8">
        {whyCategories.map((category, index) => (
          <Choice
            key={index}
            icon={category.icon}
            title={category.title}
            description={category.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
