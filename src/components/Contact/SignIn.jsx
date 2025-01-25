import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import '../../styles/SignIn.css';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
const SignIn = () => {
  return (
  <>
    <Header />
    <article className="row" style={{fontFamily: 'New Century Schoolbook, TeX Gyre Schola, serif' }}>
      <div className="mask ">
          <div className="signIn ">
            <div class="container">
              <h2>Sign In</h2>
              <img className='img' src="images/logo-transparence-sans-logo1.png" alt="logo" />
            </div>
            <div className="input">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input">
            <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div class="input">
              <input type="submit" value="Sign In" id="btn" />
            </div>
            <div className="pss">
              <p>Don't have an account?</p>
              <p><Link to="/SignUp" className="link">Sign Up</Link></p>
              <p><Link to="/ForgetPassword" className="link">Forget Password?</Link></p> 
            </div>
          </div>
      </div>
    </article>
    <Footer />
  </>
  );
};

export default SignIn;