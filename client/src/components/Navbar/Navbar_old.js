
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import React, { useState } from 'react';

const Navbar = () => {

    const [clicked, setClicked] = useState(0);

    const handleClick = () => {
      setClicked(clicked == 0 ? 1 : 0);
    };
    
    return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        ONLYFROGS
        <i className="fa-solid fa-frog" />
      </h1>

      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked == 1 ? "fas fa-times" : "fas fa-bars"} />
      </div>

      <ul className={clicked == 1 ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={`${item.url}`}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>

    </nav>
  );
}

export default Navbar;
