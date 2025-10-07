import React from 'react';
import { Link } from "react-router-dom";

function Universe() {
    return ( 
        <div className="container mt-5">
        <div className="row text-center">
          <h1>The Equityze Universe</h1>
          <p className='fs-5 text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
      
          <div className="col-4 p-5 mt-5 d-flex flex-column align-items-center">
            <img src="media/images/EquityzeFundhouse.png" style={{width: "160px", height: "55px", objectFit: "contain"}} alt="Equityze Fundhouse" />
            <p className='text-small text-muted mt-3 mb-0'>Asset management</p>
          </div>
          <div className="col-4 p-5 mt-5 d-flex flex-column align-items-center">
            <img src="media/images/sensibullLogo.svg" style={{width: "160px", height: "55px", objectFit: "contain"}} alt="Sensibull" />
            <p className='text-small text-muted mt-3 mb-0'>Options trading platform</p>
          </div>
          <div className="col-4 p-5 mt-5 d-flex flex-column align-items-center">
            <img src="media/images/smallcaseLogo.png" style={{width: "160px", height: "55px", objectFit: "contain"}} alt="Smallcase" />
            <p className='text-small text-muted mt-3 mb-0'>Thematic investment platform</p>
          </div>
          <div className="col-4 p-5 mt-5 d-flex flex-column align-items-center">
            <img src="media/images/dittoLogo.png" style={{width: "160px", height: "55px", objectFit: "contain"}} alt="Ditto" />
            <p className='text-small text-muted mt-3 mb-0'>Insurance</p>
          </div>
          <div className="col-4 p-5 mt-5 d-flex flex-column align-items-center">
            <img src="media/images/streakLogo.png" style={{width: "160px", height: "55px", objectFit: "contain"}} alt="Streak" />
            <p className='text-small text-muted mt-3 mb-0'>Algo & Strategy platform</p>
          </div>
          <div className="col-4 p-5 mt-5 d-flex flex-column align-items-center">
            <img src="media/images/goldenpiLogo.png" style={{width: "160px", height: "55px", objectFit: "contain"}} alt="GoldenPi" />
            <p className='text-small text-muted mt-3 mb-0'>Bonds trading platform</p>
          </div>
          <div >
            
          <Link to="/signup" className="p-3 btn btn-custom mt-3" style={{width:"15%", margin:"0 auto"}}>
  Sign up now
</Link>
          </div>
          
        </div>
      </div>
     );
}

export default Universe;