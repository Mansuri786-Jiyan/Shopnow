import React, { useState } from "react";
import { useCart } from "../context/CartProvider";
import { FiTrash2 } from "react-icons/fi";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const handleQuantity = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + value),
    }));
  };

  const itemsTotal = cartItems.reduce(
    (total, item) => total + item.price * (quantities[item.id] || 1),
    0
  );
  const handlingCharge = 5;
  const grandTotal = itemsTotal + handlingCharge;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-xl md:text-2xl font-bold">
          My Cart ({cartItems.length})
        </h1>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center md:items-stretch justify-between p-4 gap-4 bg-white shadow rounded"
          >
            {/* Product Info */}
            <div className="flex items-center space-x-4 w-full md:w-1/2">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-red-500 font-semibold">₹{item.price}</p>
              </div>
            </div>

            {/* Quantity + Delete */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* Quantity Control */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantity(item.id, -1)}
                  className="px-3 py-1 bg-gray-200 rounded font-bold transition hover:scale-110"
                >
                  -
                </button>
                <span className="px-3 font-semibold">
                  {quantities[item.id] || 1}
                </span>
                <button
                  onClick={() => handleQuantity(item.id, 1)}
                  className="px-3 py-1 bg-blue-500 text-white rounded font-bold transition hover:scale-110 hover:bg-blue-600"
                >
                  +
                </button>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-2 rounded-full bg-red-500 text-white hover:scale-125 transition hover:bg-red-600"
              >
                <FiTrash2 />
              </button>
            </div>
          </div>
        ))}

        {/* Delivery Info */}
        <div className="bg-white shadow rounded p-4 space-y-4">
          <h2 className="text-xl font-semibold">Delivery Info</h2>
          <input className="w-full p-2 border rounded" placeholder="Full Name" />
          <input className="w-full p-2 border rounded" placeholder="Address" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="p-2 border rounded" placeholder="State" />
            <input className="p-2 border rounded" placeholder="PostCode" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input className="p-2 border rounded" placeholder="Country" />
            <input className="p-2 border rounded" placeholder="Phone No" />
          </div>
        </div>
      </div>

      {/* Right Column: Bill Details */}
      <div className="bg-white shadow rounded mt-14 p-3 space-y-4 h-fit">
        <h2 className="text-xl font-semibold">Bill Details</h2>
        <div className="flex justify-between text-sm md:text-base">
          <span>Items total</span>
          <span>₹{itemsTotal}</span>
        </div>
        <div className="flex justify-between text-sm md:text-base">
          <span>Delivery Charge</span>
          <span className="text-green-500">FREE</span>
        </div>
        <div className="flex justify-between text-sm md:text-base">
          <span>Handling Charge</span>
          <span>₹{handlingCharge}</span>
        </div>
        <div className="border-t my-2"></div>
        <div className="flex justify-between text-lg font-bold">
          <span>Grand Total</span>
          <span>₹{grandTotal}</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            className="border p-2 rounded w-full sm:w-2/3"
            placeholder="Enter Promo Code"
          />
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full sm:w-1/3">
            Apply
          </button>
        </div>
        <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transform hover:scale-105 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
