import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-14 py-12 pt-24">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          About <span className="text-red-500">ShopNow</span>
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Your one-stop destination for electronics, fashion, and more – bringing quality products at unbeatable prices.
        </p>
      </div>

      {/* Company Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1581093588401-22f8a3e4c7cf"
            alt="About ShopNow"
            className="rounded-lg shadow-lg object-cover w-full h-80"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            ShopNow is committed to making online shopping seamless and affordable. We carefully curate our catalog to bring you the latest tech gadgets, fashion essentials, and lifestyle products, all with guaranteed quality.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to provide not just products, but also an experience – with fast delivery, easy returns, and 24/7 customer support.
          </p>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {[
            { title: "Quality Products", icon: "🛍️" },
            { title: "Affordable Pricing", icon: "💰" },
            { title: "Fast Delivery", icon: "🚚" },
            { title: "24/7 Support", icon: "📞" },
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="text-4xl">{value.icon}</div>
              <h3 className="text-lg font-semibold mt-3">{value.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Call To Action */}
      <div className="mt-16 bg-red-500 text-white py-12 rounded-xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Join the ShopNow Community
        </h2>
        <p className="mb-6">
          Discover thousands of products and enjoy exclusive discounts.
        </p>
        <a
          href="/products"
          className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Start Shopping
        </a>
      </div>
    </div>
  );
};

export default About;
