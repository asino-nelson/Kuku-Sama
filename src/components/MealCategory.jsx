import React from "react";

const MealCategory = ({ title, description, image }) => {
  return (
    <div className="max-w-xs mx-auto bg-stone-700 rounded-md overflow-hidden shadow-sm md:my-4 my-2 cursor-pointer hover:scale-105 transition-transform delay-200">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="px-4 py-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default MealCategory;
