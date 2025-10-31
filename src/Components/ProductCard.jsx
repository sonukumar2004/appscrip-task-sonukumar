export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="price">${product.price}</p>
      </div>
    </div>
  );
}
