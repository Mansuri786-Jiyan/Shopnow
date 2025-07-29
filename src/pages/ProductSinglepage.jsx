import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const SingleProduct = () => {
  const { id } = useParams();
  const { data, fetchData } = useContext(DataContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!data || data.length === 0) {
      fetchData();
    }
  }, [data, fetchData]);

  useEffect(() => {
    if (data && data.length > 0) {
      const foundProduct = data.find((item) => item.id === parseInt(id));
      setProduct(foundProduct);
    }
  }, [data, id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-900 py-25 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col lg:flex-row">
        
        {/* Product Image */}
        <div className="flex justify-center items-center h-auto  bg-gray-25 rounded-2xl object-fit  ">
          <img
            src={product.image}
            alt={product.title}
            className="h-50 w-50 object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 p-6 flex flex-col gap-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600 text-sm">{product.category}</p>
          </div>
          
          <p className="text-gray-700 text-base leading-relaxed">
            {product.description}
          </p>
          
          <p className="text-2xl font-semibold text-blue-600">${product.price}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all duration-300">
              Add to Cart
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
