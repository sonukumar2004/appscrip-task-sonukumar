import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  return (
    <section className="product-section">
      <h2 className="section-title">Discover Our Products</h2>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
