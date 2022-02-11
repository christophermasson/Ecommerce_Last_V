import "./App.css";
import AllArticles from "./components/Articles/AllArticles";
import Articles from "./components/Articles/Articles";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Store from "./components/Store";
import ProductListing from "./components/ProductListing";

import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Counter from "./components/test/Counter";
import Home from "./components/Homepage/Home";

import Promotion from "./components/promotion/Promotion";
import Nouveaute from "./components/nouveaute/Nouveaute";
import Shop from "../src/shop/Shop";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/articles/:id" element={<Articles />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/counter/" element={<Counter />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<ProductListing />} />
        <Route path="/promotions" element={<Promotion />} />
        <Route path="/nouveaute" element={<Nouveaute />} />
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
