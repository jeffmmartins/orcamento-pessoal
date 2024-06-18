import React from "react";
import { NavLink } from "react-router-dom";
import  ImgLogo  from "../assets/img/money.png"

const Navbar = () => {
  return (
    <header className="bg-success-subtle">
      <nav className=" container navbar navbar-expand-lg">
        <img src={ImgLogo} alt="Dinheiro" />

        <div className="ms-4">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link fs-5">
                Cadastro
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/consulta" className="nav-link fs-5">
                Consulta
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
