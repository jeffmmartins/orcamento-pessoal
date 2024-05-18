import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-success-subtle">
      <nav className=" container navbar navbar-expand-lg">
        <a href="">
          <img src="img/money.png" alt="Dinheiro" />
        </a>
        <div className="ms-4">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="" className="nav-link fs-5">
                Cadastro
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link fs-5">
                Consulta
              </a>
            </li>
            <li>
                <Link to="/consulta">Dinheiro</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;