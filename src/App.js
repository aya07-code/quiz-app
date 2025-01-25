import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './components/Contact/SignIn';
import SignUp from './components/Contact/SignUp';
import ForgetPassword from './components/Contact/ForgetPassword';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import ListCardCategory from './components/Category/ListCardCategory';
import About from './components/Acceuil/About';
import Home from './components/Acceuil/Home';
import './App.css';
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/listcardcategory" element={<ListCardCategory />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<ListCardCategory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;