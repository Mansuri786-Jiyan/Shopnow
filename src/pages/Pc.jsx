import React from "react";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ]; // You can also fetch dynamically

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleCategoryClick(cat)}
          className="bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 rounded text-white font-semibold shadow hover:scale-105 transition"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Categories;
