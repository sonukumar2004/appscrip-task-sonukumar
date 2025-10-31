export default function Sidebar({ setCategory }) {
  return (
    <aside className="sidebar">
      <h3>Categories</h3>
      <ul>
        <li onClick={() => setCategory("all")}>All</li>
        <li onClick={() => setCategory("men's clothing")}>Men</li>
        <li onClick={() => setCategory("women's clothing")}>Women</li>
        <li onClick={() => setCategory("jewelery")}>Jewellery</li>
        <li onClick={() => setCategory("electronics")}>Electronics</li>
      </ul>
    </aside>
  );
}
