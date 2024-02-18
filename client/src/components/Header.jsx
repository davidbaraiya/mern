import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header py-4">
      <div className="container">
        <nav className="flex items-center justify-between gap-2">
          <div className="logo-wrapper text-2xl">
            <Link to={"/"}>Ecom</Link>
          </div>
          <ul className="flex items-center gap-5">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/services"}>Services</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/register"}>Register</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
