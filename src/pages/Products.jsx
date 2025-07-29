import React, { useEffect, useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import ProductsList from "../Components/ProductList";
import Filtersection from "../Components/Filtersection";

const Products = () => {
  const { data, fetchData, categories } = useContext(DataContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredProducts(data); // initial
  }, [data]);

  const handleFilter = ({ category, search }) => {
    let result = data;
    if (category) result = result.filter((p) => p.category === category);
    if (search) result = result.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredProducts(result);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 mt-20">
      {/* Fixed Filter Sidebar */}
      <Filtersection categories={categories} onFilter={handleFilter} />

      {/* Main Content (Shifted to the right) */}
      <div className="flex-1 lg:ml-[26%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductsList key={product.id} productData={product} />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center animate-emptyState">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400 mb-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 17v-2h6v2H9zm0 0a2 2 0 100 4h6a2 2 0 100-4m-6 0V7a4 4 0 018 0v10"
              />
            </svg>
            <p className="text-center text-gray-600 text-lg font-medium">
              No products available
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
