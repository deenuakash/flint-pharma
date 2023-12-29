import logo from "../../assets/header logo.svg";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo__container">
        <Link to="/">
          <img src={logo} alt="Flint Pharmaceuticals" loading="lazy" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>{" "}
          <li>
            <NavLink to="/aboutUs">About us</NavLink>
          </li>{" "}
          <li>
            <NavLink to="/contactUs">Contact us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
