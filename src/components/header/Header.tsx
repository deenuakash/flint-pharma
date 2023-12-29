import { useState } from "react";
import logo from "../../assets/header logo.svg";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [showMenu, setMenu] = useState(false);

  return (
    <header>
      <div className="logo__container">
        <Link to="/">
          <img src={logo} alt="Flint Pharmaceuticals" loading="lazy" />
        </Link>
      </div>
      <nav>
        <div
          className={showMenu ? "menu open" : "menu"}
          onClick={() => setMenu((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={showMenu ? "open" : ""}>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/aboutUs">About us</NavLink>
          </li>
          <li>
            <NavLink to="/contactUs">Contact us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
