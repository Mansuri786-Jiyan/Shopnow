import React, { useContext, useEffect } from "react";
import Slider from "react-slick";
import { DataContext } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const { data, fetchData } = useContext(DataContext);

  useEffect(() => {
    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800 text-white py-10">     
      <div className="container mx-auto px-6">
        <Slider {...settings}>
          {data?.slice(0, 5).map((product) => (
            <div
              key={product.id}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              {/* Left Side - Content */}
            

              {/* Right Side - Image with gradient border & hover scale */}
             <div className="flex justify-center items-center   w-full h-full">
  <div className="group relative rounded-full p-[6px] bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 shadow-2xl">
    <div className="rounded-full w-100 h-100 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
      <img
        src={product.image}
        alt={product.title}
        className="object-contain w-99 h- transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  </div>
</div>
  <div className="space-y-4 w-full h-[60px] md:pr-8 text-left">
                <p className="text-red-400 text-sm uppercase tracking-wide">
                  Powering Your World with the Best in Electronics
                </p>
                <h2 className="text-4xl font-bold leading-snug uppercase">
                  {product.title}
                </h2>
                <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                  {product.description.slice(0, 180)}...
                </p>
                <button className="bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 rounded text-white font-semibold shadow hover:scale-105 transition">
                  Shop Now
                </button>
              </div>

            </div>
          ))}
        </Slider>

        {/* Category Buttons */}
        {/* <div className="flex justify-center space-x-4 mt-10 ">
          {["Audio", "Gaming", "Mobile", "TV", "Laptop", "Appliances"].map(
            (cat) => (
              <button
                key={cat}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition"
              >
                {cat}
              </button>
            )
          )}
        </div> */}
      </div>
    </div>
  );
}

export default Carousel;
