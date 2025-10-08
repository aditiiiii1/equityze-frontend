import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-3 mt-md-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center text-md-start">
          <img 
            src={imageURL}
            alt={"Equityze trading platform dashboard"}
            className="img-fluid"
          />
        </div>

        <div className="col-12 col-md-6 p-3 p-md-5 mt-3 mt-md-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="d-flex flex-column flex-md-row gap-2 gap-md-5">
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore}>Learn More</a>
          </div>
          <div className="mt-3 d-flex flex-column flex-md-row gap-3 gap-md-5">
            <a href={googlePlay}>
              <img 
                src="media/images/googlePlayBadge.svg"
                alt="google play" 
                className="img-fluid"
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="app store"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;