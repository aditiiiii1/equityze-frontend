import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-3 mt-md-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 p-3 p-md-5 order-2 order-md-1">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={learnMore}>Learn More</a>
        </div>

        <div className="col-12 col-md-6 order-1 order-md-2 text-center text-md-start">
          <img 
            src={imageURL}
            alt="image-url" 
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;