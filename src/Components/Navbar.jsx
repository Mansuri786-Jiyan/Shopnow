import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartProvider";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();
  const cartCount = cartItems.length;

  return (
    <header className="bg-white shadow w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-red-500">
          🛍️ ShopNow
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center text-lg">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/products" className="hover:text-blue-600 transition">Products</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
          <Link to="/signin" className="hover:text-blue-600 transition">Sign In</Link>
          <Link to="/cart" className="relative hover:text-blue-600 transition">
            <FiShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-100 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Slide-in Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-2xl font-bold text-blue-600">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <FiX size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 p-4 text-lg">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/signin" onClick={() => setIsOpen(false)}>Sign In</Link>
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-2"
          >
            <FiShoppingCart />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full px-1">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
