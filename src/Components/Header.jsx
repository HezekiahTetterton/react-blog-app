import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">My Blog</h1>

      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;