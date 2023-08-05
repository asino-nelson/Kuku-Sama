import React from "react";
import { FaCar } from "react-icons/fa";

const Choice = ({title, description, icon}) => {
  return (
    <div className="bg-transparent p-4 flex flex-col items-center justify-center">
      {icon} 
      <h2 className="font-bold text-xl my-2 text-center">{title}</h2>
      <p className="text-center text-white/50">{description}</p>
    </div>
  );
};

export default Choice;
