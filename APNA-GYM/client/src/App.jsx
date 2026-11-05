
import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const programs = [
    {
      icon: '🏋️',
      title: 'Strength Training',
      description: 'Build strength, power and confidence with expert guidance.'
    },
    {
      icon: '🔥',
      title: 'Weight Loss',
      description: 'Achieve your fitness goals with personalized workouts.'
    },
    {
      icon: '💪',
      title: 'Muscle Building',
      description: 'Build muscle with professional training programs.'
    }
  ];

  return (
    <div className="website">

      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="logo">
          APNA <span>GYM</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={menuOpen ? 'nav-links active' : 'nav-links'}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <a href="#contact" className="nav-btn">Join Now</a>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="tagline">WELCOME TO APNA GYM</p>

          <h1>
            BUILD YOUR <span>BODY</span>
            <br />
            TRANSFORM YOUR LIFE
          </h1>

          <p className="hero-description">
            Your fitness journey starts here. Train harder, become stronger
            and achieve the body you always dreamed of.
          </p>

          <a href="#contact" className="primary-btn">
            JOIN OUR GYM →
          </a>
        </div>
      </section>

      {/* About */}
      <section className="about section" id="about">
        <div className="section-heading">
          <p>WHO WE ARE</p>
          <h2>ABOUT <span>APNA GYM</span></h2>
        </div>

        <div className="about-content">
          <div>
            <h3>Stronger Every Day</h3>
            <p>
              APNA GYM is your fitness destination. We help people build
              healthy habits, improve strength and reach their fitness goals.
            </p>
            <p>
              Whether you are a beginner or an experienced athlete,
              we have a place for you.
            </p>
            <a href="#programs" className="primary-btn">Explore Programs</a>
          </div>

          <div className="about-box">
            <h3>YOUR FITNESS</h3>
            <h2>YOUR RULES</h2>
            <p>NO EXCUSES. JUST RESULTS.</p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="programs section" id="programs">
        <div className="section-heading">
          <p>WHAT WE OFFER</p>
          <h2>OUR <span>PROGRAMS</span></h2>
        </div>

        <div className="program-grid">
          {programs.map((program, index) => (
            <div className="program-card" key={index}>
              <div className="program-icon">{program.icon}</div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <a href="#contact">Learn More →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>READY TO GET STRONGER?</h2>
        <p>Your transformation starts with one decision.</p>
        <a href="#contact" className="primary-btn">START TODAY</a>
      </section>

      {/* Contact */}
      <section className="contact section" id="contact">
        <div className="section-heading">
          <p>GET IN TOUCH</p>
          <h2>JOIN <span>APNA GYM</span></h2>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you! Please contact the gym to confirm your membership.');
          }}
        >
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone Number" required />
          <textarea placeholder="Your Message" rows="5" />
          <button type="submit" className="primary-btn">
            SUBMIT
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <h2>APNA <span>GYM</span></h2>
        <p>Train Hard. Stay Strong. Never Give Up.</p>
        <p>© 2026 APNA GYM. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;
