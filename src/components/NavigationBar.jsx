import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const NavigationBar = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/userprofile">
              Profile
            </Link>
            <Link className="nav-link" to="/wallet/current-investments">
              Investments
            </Link>
            <Link className="nav-link" to="/wallet/balance">
              Balance
            </Link>
            <div className="ms-auto">
              <Link to="/cart">
                <button type="button" className="btn btn-primary">
                  <span className="bi bi-cart pe-1"></span>
                  <span className="badge badge-pill bg-danger">
                    {cartCount}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
