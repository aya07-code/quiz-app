import React from 'react';
import '../../styles/About.css';
import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer';
const About = () => {
    return (
      <div>
        <Header />
        <section id="welcome" className="section welcome-section">
          <h3>Welcome To Think Faster</h3>
          <div className="welcome-container">
            <img src="images/welcome.png" alt="Welcome Image" />
            <div className="welcome-text">
              <h4>ThinkFaster</h4>
              <p>
                ThinkFaster is an engaging and interactive quiz web app designed to challenge your knowledge across a variety of topics. Test your skills and learn something new every time!
              </p>
            </div>
          </div>
        </section>
  
        <section id="difficulty" className="section quiz-difficulty">
          <h3>Quiz Difficulty Levels</h3>
          <div className="difficulty-levels">
            <div className="difficulty-card">
              <img src="images/easy2-.jpg" alt="Easy Icon" />
              <h4>Level A : Easy</h4>
              <p>
                Level A is designed for those just starting their quiz journey. This level helps you build confidence and get comfortable with the quiz format.
              </p>
            </div>
            <div className="difficulty-card">
              <img src="images/medium2 (3)-.jpg" alt="Medium Icon" />
              <h4>Level B : Medium</h4>
              <p>
                Level B ramps up the challenge with more complex questions and requires a deeper understanding of the subject matter.
              </p>
            </div>
            <div className="difficulty-card">
              <img src="images/hard2-.jpg" alt="Hard Icon" />
              <h4>Level C : Hard</h4>
              <p>
                Level C is for quiz experts and those who are ready to push their knowledge to the limit. This level is meant for those who thrive on competition.
              </p>
            </div>
          </div>
        </section>
  
        <section id="categories" className="section quiz-categories">
          <h3>Quiz Categories</h3>
          <div className="categories-grid">
            <div className="category-card">
              <img src="images/chefcuis.jpg" alt="Food" />
              <h4>Cuisine</h4>
              <p> Questions sur les films et le 7ᵉ art.</p>
            </div>
            <div className="category-card">
              <img src="images/voyage.jpg" alt="Food" />
              <h4>Voyages</h4>
              <p>Découvrez des cultures et destinations.</p>
            </div>
            <div className="category-card">
              <img src="images/sports.jpg" alt="Sport" />
              <h4>Sports</h4>
              <p>Testez vos connaissances sportives.</p>
            </div>
            <div className="category-card">
              <img src="images/programme.jpg" alt="Informatics" />
              <h4>Développement</h4>
              <p>Explorez le monde du codage.</p>
            </div>
            <div className="category-card">
              <img src="images/films.jpg" alt="Films" />
              <h4>Cinéma</h4>
              <p>The Magic of Cinema</p>
            </div>
            <div className="category-card">
              <img src="images/langues.jpg" alt="Films" />
              <h4>Langues</h4>
              <p>Apprenez tout en jouant avec les langues.</p>
            </div>
            <div className="category-card">
              <img src="images/santes.jpg" alt="Sport" />
              <h4>Santé</h4>
              <p>Quiz sur le bien-être et la santé.</p>
            </div>
            <div className="category-card">
              <img src="images/art.jpg" alt="Informatics" />
              <h4>Arts</h4>
              <p>Plongez dans l’univers créatif des arts.</p>
            </div>
          </div>
        </section>
  
        <section id="features" className="section features">
          <h3>Quiz Assistance Features</h3>
          <div className="features-grid">
            <div className="feature-card">
              <img src="images/hint.jpg" alt="Hints Icon" style={{ width: "100px" }} />
              <h4>Get Hints</h4>
              <p>
                Stuck on a question? Use hints to guide you closer to the solution without giving it away!
              </p>
            </div>
            <div className="feature-card">
              <img src="images/solution.png" alt="Solution Icon" style={{ width: "100px" }} />
              <h4>Show Solution</h4>
              <p>
                Unable to solve the question? Reveal the correct solution and learn something new!
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  };
  
  export default About;