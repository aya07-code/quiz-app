import React from 'react';
import '../../styles/Home.css';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <section className="hero" style={{ backgroundImage: `url('/images/background_quiz2.jpg')` }}>
        <div className="titre">
          <h1>Think Fast</h1>
          <h1>Think Fast</h1>
        </div>
        <h2>Sharpen Your Mind</h2>
      </section>
      <Footer />
    </>
  );
};

export default Home;