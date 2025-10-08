import React from "react";
import { Link } from "react-router-dom"; 
function Hero() {
  return (
    <div className="container p-3 p-md-5 mb-3 mb-md-5">
      <div className="row text-center">
        <div className="text-center">
          <img
            src="media/images/homeHero.png"
            alt="Invest in stocks, derivatives, mutual funds" 
            className="mb-4 img-fluid w-75"
          />
        </div>
        <h1 className="mt-3 mb-3"> Invest in everything</h1>
        <p className="mb-5">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more.
        </p>
        <div className="d-flex justify-content-center">
          <Link 
            to="/signup" 
            className="btn btn-custom p-3"
            style={{ width: "auto", minWidth: "140px", textDecoration: 'none' }}
          >
            Sign up Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;