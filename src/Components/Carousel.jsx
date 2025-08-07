import React, { useContext, useEffect } from "react";
import Slider from "react-slick";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Categories from "./Categories";

function Carousel() {
  const { data, fetchData } = useContext(DataContext);

  useEffect(() => {
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    swipe: true,
    fade: true,            
    adaptiveHeight: true,
    responsive: [
      { breakpoint: 1024, settings: { dots: true, arrows: false } },
      { breakpoint: 640, settings: { dots: true, arrows: false, swipe: true } },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-600 to-zinc-200 text-white py-20 rounded-b-3xl">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {data?.slice(0, 7).map((product) => (
            <div key={product.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <div className="flex justify-center items-center">
                <div className="group relative rounded-full p-[6px] hover:bg-gradient-to-r from-zinc-100 to-black shadow-2xl">
                  <div className="rounded-full w-56 h-56 md:w-64 md:h-64 flex items-center justify-center overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      className="object-contain w-full h-full transform group-hover:scale-110 transition duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 text-center md:text-left md:pr-8">
                <p className="text-red-500 text-xs sm:text-sm uppercase tracking-wide">
                  Powering Your World with the Best in Electronics
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug uppercase">
                  {product.title}
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-md mx-auto md:mx-0">
                  {product.description.slice(0, 180)}...
                </p>
                <Link
                  to={`/product/${product.id}`}
                  className="inline-block bg-gradient-to-r from-zinc-200 via-gray-600 to-black px-5 py-2 rounded text-white font-semibold shadow hover:scale-105 transition"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Categories />
    </div>
  );
}

export default Carousel;
