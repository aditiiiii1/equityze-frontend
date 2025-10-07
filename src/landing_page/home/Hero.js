import React from "react";
import { Link } from "react-router-dom"; 
function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <div className="text-center">
          <img
            src="media/images/homeHero.png"
            style={{ width: "85%" }}
            alt="Invest in stocks, derivatives, mutual funds" 
            className="mb-4"
          />
        </div>
        <h1 className="mt-3 mb-3"> Invest in everything</h1>
        <p className="mb-5">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more.
        </p>
        <Link 
          to="/signup" 
          className="p-3 btn btn-custom"
          style={{ width: "15%", margin: "0 auto", display: 'inline-block', textDecoration: 'none' }}
        >
          Sign up Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;