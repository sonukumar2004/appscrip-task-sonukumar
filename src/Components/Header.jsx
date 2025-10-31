export default function Header() {
  return (
    <header className="header">
      <div className="logo">SHOPP</div>
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Contact</a>
      </nav>
      <div className="icons">
        <i className="fa fa-user"></i>
        <i className="fa fa-shopping-cart"></i>
      </div>
    </header>
  );
}
