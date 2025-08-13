import React from "react";
import "./index.css";
import Img from './Images/Img.png'
import Img1 from './Images/Img1.png'

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>
          A brand built on the love of craftsmanship,
          quality and outstanding customer service
        </h1>
        <button className="btn">View our products</button>
      </header>

      {/* First section */}
      <section className="section two-columns">
        <div className="text-box purple">
          <h2>It started with a small idea</h2>
          <p>
            A global brand with local beginnings, our story began in a small
            studio in South London in early 2014.
          </p>
          <button className="btn white">View collection</button>
        </div>
        <div className="image-box">
          <img
            src={Img}
            alt="Yellow chair"
          />
        </div>
      </section>

      {/* Second section */}
      <section className="section two-columns">
        <div className="image-box">
          <img
            src={Img1}
            alt="Living room"
          />
        </div>
        <div className="text-box white">
          <h2>
            Our service isn’t just personal, it’s actually hyper personally exquisite
          </h2>
          <p>
            When we started in 2014, we set out to make the most beautiful, handcrafted furniture and homeware.
            Every piece is crafted with love by our highly talented artisans.
          </p>
          <button className="btn">Get in touch</button>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature">
          <h3>Next day as standard</h3>
          <p>Order before 3pm and get your order the next day as standard.</p>
        </div>
        <div className="feature">
          <h3>Made by true artisans</h3>
          <p>Handmade crafted goods made with real passion and craftsmanship.</p>
        </div>
        <div className="feature">
          <h3>Unbeatable prices</h3>
          <p>For our level of quality, you won’t find better prices anywhere.</p>
        </div>
        <div className="feature">
          <h3>Recycled packaging</h3>
          <p>We use 100% recycled to ensure our footprint is more manageable.</p>
        </div>
      </section>

      {/* Footer sign-up */}
      <footer className="signup">
        <h2>Join the club and get the benefits</h2>
        <p>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more.</p>
        <div className="signup-form">
          <input type="email" placeholder="your@email.com" />
          <button className="btn">Sign up</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
