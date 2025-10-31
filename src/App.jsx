import { useEffect, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((item) => item.category === category);

  return (
    <div className="page">
      <Header />
      <div className="main-content">
        <Sidebar setCategory={setCategory} />
        <ProductGrid products={filteredProducts} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
