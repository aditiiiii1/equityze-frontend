import React from 'react';
import { Link } from "react-router-dom";

function OpenAccount() {
    return ( 
        <div className='container p-3 p-md-5 mb-3 mb-md-5'>
            <div className='row text-center mb-3 mb-md-5'>
                <h1 className='mt-3 mt-md-5 mb-3'>Open an Equityze account</h1>
                <p className='mb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                
                <div className="d-flex justify-content-center">
                  <Link to="/signup" className="btn btn-custom p-3" style={{ width: "auto", minWidth: "140px" }}>
                    Sign up now
                  </Link>
                </div>
            </div>
        </div>
    );
}

export default OpenAccount;