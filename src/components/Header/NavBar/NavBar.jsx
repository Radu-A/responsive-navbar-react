import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavBar = () => {
  const [menuClassName, setMenuClassName] = useState("menu");
  const [menuIcon, setMenuIcon] = useState(faBars);
  // Toggle mobile menu
  const toggleMenu = () => {
    if (menuClassName === "menu active") {
      setMenuClassName("menu");
      // adds the menu (hamburger) icon
      setMenuIcon(faBars);
    } else {
      setMenuClassName("menu active");
      // adds the menu (x) icon
      setMenuIcon(faTimes);
    }
  };

  return (
    <nav>
      <ul className={menuClassName}>
        <li className="logo">
          <a href="#">Creative Mind Agency</a>
        </li>
        <li className="item">
          <a href="#">Home</a>
        </li>
        <li className="item">
          <a href="#">About</a>
        </li>

        <li className="item has-submenu">
          <a tabIndex="0">Services</a>
          <ul className="submenu">
            <li className="subitem">
              <a href="#">Design</a>
            </li>
            <li className="subitem">
              <a href="#">Development</a>
            </li>
            <li className="subitem">
              <a href="#">SEO</a>
            </li>
            <li className="subitem">
              <a href="#">Copywriting</a>
            </li>
          </ul>
        </li>

        <li className="item has-submenu">
          <a tabIndex="0">Plans</a>
          <ul className="submenu">
            <li className="subitem">
              <a href="#">Freelancer</a>
            </li>
            <li className="subitem">
              <a href="#">Startup</a>
            </li>
            <li className="subitem">
              <a href="#">Enterprise</a>
            </li>
          </ul>
        </li>

        <li className="item">
          <a href="#">Blog</a>
        </li>
        <li className="item">
          <a href="#">Contact</a>
        </li>
        <li className="item button">
          <a href="#">Log In</a>
        </li>
        <li className="item button secondary">
          <a href="#">Sign Up</a>
        </li>
        <li className="toggle">
          <a href="#" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuIcon} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
