import { useState } from "react";
import { Link } from "react-router-dom";
// import Cart from "../pages/card";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cartCount = 2; // Example static cart count

  return (
    <header className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          🛍️ ShopNow
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
          <Link to="/signin" className="hover:text-blue-600 transition">Sign In</Link>

          {/* Cart */}
          {/* <div className="relative">
            <Link to="" className="hover:text-blue-600 transition text-xl">
              <FiShoppingCart />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  {cartCount}
                </span>
              )}
            </Link>
          </div> */}
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-3 space-y-3">
          <Link to="/" onClick={() => setIsOpen(false)} className="block">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block">About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block">Contact</Link>
          <Link to="/signin" onClick={() => setIsOpen(false)} className="block">Sign In</Link>

          {/* Cart */}
          <div className="flex items-center space-x-2 mt-2">
            <FiShoppingCart className="text-xl" />
            <span className="text-sm">Cart: {cartCount}</span>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
