import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row d-flex align-items-center">
        <div className="col-6 p-5 mt-3">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <a href={learnMore}>Learn More</a>
        </div>

        <div className="col-6 ">
          <img src={imageURL}
          alt="image-url" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;


