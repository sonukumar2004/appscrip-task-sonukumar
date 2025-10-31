export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <h4>About</h4>
          <p>We offer a wide range of quality products at affordable prices.</p>
        </div>
        <div>
          <h4>Customer Service</h4>
          <ul>
            <li>Help & Contact</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <div className="socials">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-twitter"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 SHOPP. All rights reserved.</p>
      </div>
    </footer>
  );
}
