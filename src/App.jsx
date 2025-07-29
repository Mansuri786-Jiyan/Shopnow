import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contect";
import SignIn from "./pages/singin";
import Navbar from "./Components/Navbar";
import Cart from "./pages/Cart";
import Footer from "./Components/Footer";
import Products from "./pages/Products";
import ProductSinglePage from "./pages/ProductSinglepage";
import LocomotiveScroll from "locomotive-scroll";
import { useCart } from "./context/CartProvider";


function App() {
  const { cartItems, setCartItems } = useCart();

  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll();
    return () => scroll.destroy();
  }, []);

  return (
    <div className="w-full min-h-screen bg-zinc-200 text-gray-900">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductSinglePage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
