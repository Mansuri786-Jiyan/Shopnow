import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";

const Categories = () => {
  const { data, fetchData } = useContext(DataContext);
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data && data.length > 0) {
      // Extract all categories and make unique
      const categories = data.map((item) => item.category);
      const unique = [...new Set(categories)];
      setUniqueCategories(unique);
    }
  }, [data]);

  return (
    <div className="flex justify-center items-center gap-4 mt-10 cursore-pointer">
      {uniqueCategories.map((cat) => (
        <button
          key={cat}
          className="px-5 py-2 rounded-full uppercase bg-gradient-to-r from-red-500 to-purple-400 text-white transition scale-105 duration-300 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white"
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Categories;
