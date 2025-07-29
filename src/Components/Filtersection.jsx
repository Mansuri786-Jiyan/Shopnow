import React, { useState, useMemo, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // <-- Icons for hamburger & close

const Filtersection = ({ categories = [], products = [], onFilter }) => {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Debounce search input
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedSearch(search), 400);
    return () => clearTimeout(timeout);
  }, [search]);

  // Trigger filter when debounced search or category changes
  useEffect(() => {
    onFilter({
      category: activeCategory === "All Categories" ? null : activeCategory,
      search: debouncedSearch,
    });
  }, [activeCategory, debouncedSearch, onFilter]);

  // Unique categories including "All Categories"
  const uniqueCategories = useMemo(
    () => ["All Categories", ...new Set(categories)],
    [categories]
  );

  return (
    <>
      {/* Hamburger Button (Mobile Only) */}
      <button
        className="lg:hidden fixed top-20 left-4 z-40 bg-blue-500 text-white p-3 rounded-full shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Fixed Filter Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen mt-17 w-3/4 lg:w-1/4 bg-white shadow-md transition-transform duration-300 p-4 z-30 overflow-y-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <h2 className="text-xl font-semibold mb-4">Categories</h2>

        {/* Search Bar */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
        />

        {uniqueCategories.length > 0 ? (
          <div className="flex flex-col gap-2">
            {uniqueCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`flex justify-between px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-[1.02] ${
                  activeCategory === category
                    ? "bg-blue-500 text-white shadow"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-center">No categories available</p>
        )}
      </div>

      {/* Overlay for mobile when menu is open */}
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
