import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 p-8 space-y-8 md:space-y-0">
        {/* Brand Info */}
        <div>
          <Link to="/" className="text-3xl font-bold text-blue-600 mb-2 block">
            🛍️ ShopNow
          </Link>
          <p className="text-sm mb-4">Powering Your World with the Best in Electronics</p>
          <address className="not-italic text-sm">
            123 Electronics St, Style City, NY 10001<br />
            Email: support@shopnow.com<br />
            Phone: (123) 456-7890
          </address>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            {["Contact Us", "Shipping & Returns", "FAQs", "Order Tracking", "Size Guide"].map((item, index) => (
              <li key={index} className="hover:text-red-500 cursor-pointer transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            {[FaFacebookF, FaInstagram, FaTwitter, FaPinterestP].map((Icon, index) => (
              <a key={index} href="#" aria-label="Social Link">
                <Icon className="cursor-pointer hover:text-red-500 transition" />
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Stay in the Loop</h3>
          <p className="text-sm mb-4">Subscribe to get special offers, free giveaways, and more.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-l-lg bg-fuchsia-50 text-zinc-800 focus:outline-none"
            />
            <button
              onClick={handleSubscribe}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-r-lg text-white font-semibold transition"
            >
              Subscribe
            </button>
          </div>
          {message && (
            <p className={`${message.includes("Thank") ? "text-green-400" : "text-red-400"} mt-2`}>
              {message}
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
        © 2025 <span className="text-red-500">ShopNow</span>. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
