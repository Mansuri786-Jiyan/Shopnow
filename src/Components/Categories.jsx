import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate
import { DataContext } from "../context/DataContext";

const Categories = () => {
  const { data, fetchData, categories } = useContext(DataContext);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      const unique = [...new Set(categories)];
      setUniqueCategories(unique);
    }
  }, [data, categories]);

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-10 mb-32 cursor-pointer ">
      {uniqueCategories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleCategoryClick(cat)}
          className="px-5 py-2 rounded-full uppercase bg-gray-200 border-zinc-950 text-black 
            transition transform  hover:scale-110 duration-300 hover:from-pink-500 hover:to-purple-500"
        >
          <span >{cat}</span>
        </button>
      ))}
    </div>
  );
};

export default Categories;
