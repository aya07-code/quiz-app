import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../../styles/Header.css';

const Header = () => {
  return (
    <header>
    <img src="images/logo_transparence1.png" alt="Quiz Logo" />
    <nav>
      <Link to="/home" className="nav-a">Home</Link>
      <Link to="/about" className="nav-a">About</Link>
      <Link to="/SignIn" className="nav-a">Login</Link>
    </nav>
  </header>
  );
};

export default Header;


