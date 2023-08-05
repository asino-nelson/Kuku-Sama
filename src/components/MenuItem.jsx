import React from "react";
import MealCategory from "./MealCategory";

const categories = [
  {
    title: "Appetizers",
    description: "Start your meal with delicious appetizers.",
    image: "/food1.jpg",
  },
  {
    title: "Main Course",
    description: "Enjoy our mouthwatering main course meals.",
    image: "/food2.jpg",
  },
  {
    title: "Pizza",
    description: "Enjoy our mouthwatering main course meals.",
    image: "/food5.jpg",
  },
  {
    title: "Desserts",
    description: "Indulge in our delightful dessert options.",
    image: "/food6.jpg",
  }
];

const MenuItem = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <MealCategory
            key={index}
            title={category.title}
            description={category.description}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
