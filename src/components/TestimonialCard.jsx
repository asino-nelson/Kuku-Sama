import React from "react";

const TestimonialCard = () => {
  return (
    <div className="md:w-[50%] bg-stone-900/80 rounded-md w-full flex items-center justify-center md:p-6 p-4 md:gap-16 gap-9">
      <div className="rounded-full w-[20%] overflow-hidden">
        <img className="w-full h-full" src="/food1.jpg" alt="/" />
      </div>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
        officiis autem hic ipsa natus ut harum sit delectus eum, doloremque.
      </p>
    </div>
  );
};

export default TestimonialCard;
