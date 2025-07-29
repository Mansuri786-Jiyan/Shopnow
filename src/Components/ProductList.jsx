import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartProvider";

const Products = ({ productData }) => {
  if (!productData || !productData.image) {
    return <p>No products available.</p>;
  }

  const { addToCart, product } = useCart();


  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
      <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 border rounded shadow-md bg-white hover:shadow-lg transition group">

        {/* Entire card except button is clickable */}
        <Link
          to={`/product/${productData.id}`}
          className="absolute inset-0 z-0"
        ></Link>

        {/* Image Section */}
        <img
          src={productData.image}
          alt={productData.title}
          className="w-28 h-28 sm:w-32 sm:h-32 object-cover transition-transform duration-500 group-hover:scale-105 rounded relative z-10"
          loading="lazy"
        />

        {/* Details Section */}
        <div className="relative z-10">
          <p className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-2">
            {productData.title}
          </p>
          <p className="text-gray-600 font-medium text-sm sm:text-base">
            ${productData.price}
          </p>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log("Adding to cart:", productData);
              addToCart(productData);
            }}

            className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-2xl hover:bg-blue-600 transition relative z-20"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
