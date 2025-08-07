import React, { useState, useMemo, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Filtersection = ({ categories = [], products = [], onFilter }) => {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedSearch(search), 400);
    return () => clearTimeout(timeout);
  }, [search]);

  useEffect(() => {
    onFilter({
      category: activeCategory === "All Categories" ? null : activeCategory,
      search: debouncedSearch,
    });
  }, [activeCategory, debouncedSearch, onFilter]);

  const uniqueCategories = useMemo(
    () => ["All Categories", ...new Set(categories)],
    [categories]
  );

  return (
    <>
      {/* Toggle Button */}
      <button
        className="lg:hidden fixed top-20 left-4 z-40 bg-blue-500 text-white p-3 rounded-full shadow-md"
        onClick={() => setIsOpen(!isOpen)} 
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 h-auto left-0 mt-17 w-3/4 lg:w-1/4 bg-white shadow-md transition-transform duration-300 p-4 z-30 overflow-y-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div>
          <h1 className="text-xl font-bold mb-1">Product Filter</h1>
          <p className="text-gray-600 mb-4 text-sm">Search and select categories</p>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          />

          {uniqueCategories.length > 0 ? (
            <ul className="flex flex-col gap-2">
              {uniqueCategories.map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-7 py-5 rounded transition-all duration-300 ease-in-out transform hover:scale-[1.02] ${
                      activeCategory === category
                        ? "bg-blue-500 text-white shadow"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <>
            
              <p className="text-center text-sm text-gray-500 mt-3">
                No categories provided
              </p>
            </>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Filtersection;
