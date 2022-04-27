import React, { Component } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD:src/components/Navbar/Navbar.js
=======
//import React, { useState } from 'react';
>>>>>>> f603d47b23a17cacbddbf23cb40cececb570c668:client/src/components/Navbar/Navbar.js
import { Button } from "../Button";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          ONLYFROGS
          <i className="fa-solid fa-frog"></i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
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
        <div className="btnContainer">
          <Button className="loginBtn">
<<<<<<< HEAD:src/components/Navbar/Navbar.js
            <Link to="/login" className="link">Login</Link>
=======
            <Link to="/login" className="link">
              Login
            </Link>
>>>>>>> f603d47b23a17cacbddbf23cb40cececb570c668:client/src/components/Navbar/Navbar.js
          </Button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
