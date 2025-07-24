import React from "react";
import { FaTruck, FaLock, FaSyncAlt, FaHeadset } from "react-icons/fa";

const Features = () => {
  const items = [
    {
      icon: <FaTruck className="text-red-500 text-4xl mb-3" />,
      title: "Free Shipping",
      desc: "On orders over $100",
    },
    {
      icon: <FaLock className="text-red-500 text-4xl mb-3" />,
      title: "Secure Payment",
      desc: "100% protected payments",
    },
    {
      icon: <FaSyncAlt className="text-red-500 text-4xl mb-3" />,
      title: "Easy Returns",
      desc: "30-day return policy",
    },
    {
      icon: <FaHeadset className="text-red-500 text-4xl mb-3" />,
      title: "24/7 Support",
      desc: "Dedicated customer service",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            {item.icon}
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
