import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Header.css';

const Header = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); 
    navigate('/');
  };

  return (
    <header>
      <img src={`${process.env.PUBLIC_URL}/images/logo_transparence1.png`} alt="Quiz Logo" />
      <nav>
        <Link to="/" className="nav-a">Home</Link>
        <Link to="/about" className="nav-a">About</Link>
        {isLoggedIn ? (
          <>
            <Link to="/ajouter-quiz" className="nav-a">Ajouter un Quiz</Link>
            <Link to="/quiz-personnalises" className="nav-a">Quiz Personnalisés</Link>
            <button onClick={handleLogout} className="nav-a">Logout</button>
          </>
        ) : (
          <Link to="/SignIn" className="nav-a">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;