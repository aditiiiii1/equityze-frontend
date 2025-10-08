import React from "react";

function Hero() {
  return (
    <div className="container border-bottom p-3 p-md-5 mb-5" style={{marginBottom: "6rem" }}>
      <div className="text-center mt-3 mt-md-5 p-3">
        <h2>Equityze Products</h2>
        <h3 className="text-muted mt-3 fs-4">Sleek, modern, and intuitive trading platforms</h3>
        <p className="mt-3 mb-4">Check out our {" "} 
          <a href='#investment' style={{textDecoration:"none"}}>
            investment offerings <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a> 
        </p>
      </div>
    </div>
  );
}

export default Hero;