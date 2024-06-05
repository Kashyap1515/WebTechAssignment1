import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import icon from '../images/icon.jpeg'

const Navbar = ({ formData }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom px-3">
      <img src={icon} className="card-img" alt={"icon"} style={{ height: 30, width:30, objectFit: 'contain', marginRight:10}} />
      <Link className="navbar-brand" to="/">LaptopHub</Link>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/product">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">Cart</Link>
          </li>

          {formData.id === 1 ? (
            <li className="nav-item">
              <Link className="nav-link" to="/account">Welcome, {formData.firstName}</Link>
            </li>
          ) : <li className="nav-item">
            <Link className="nav-link" to="/account">Account</Link>
          </li>}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
