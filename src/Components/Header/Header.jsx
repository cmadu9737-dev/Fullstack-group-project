
import "./Header.css";
import logo from "../../assets/serveHub Local Experts Logo (1).png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="servehub-header">

      {/* Logo section */}
      <Link to="/" className="servehub-logo">
        <img src={logo} alt="ServeHub logo" />
      </Link>

      {/* Search section */}
      <form
        className="header-search"
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          type="search"
          name="service"
          placeholder="Search for services, skills or providers..."
          aria-label="Search for services"
        />

        <button type="submit">Search</button>
      </form>

      {/* Navigation section */}
      <nav className="header-actions" aria-label="Main navigation">

       <Link to="/register">
        Become a Provider
      </Link>

        <Link to="/login">
          Login
        </Link>

        <Link to="/register" className="signup-button">
          Sign Up
        </Link>

      </nav>
    </header>
  );
};

export default Header;
