import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Cart from "./pages/cart";
import Whishlist from "./pages/whishlist";
import About from "./pages/about";
import Sale from "./pages/sale";
import Collection from "./pages/collection";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ProductDetailPage from "./pages/details";
import { CartProvider } from "./context/cart";
import ScrollToTop from "./components/scrollTop";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/collection/:id" element={<ProductDetailPage />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/whishlist" element={<Whishlist />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
