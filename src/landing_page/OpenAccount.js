import React from 'react';
import { Link } from "react-router-dom";

function OpenAccount() {
    return ( 
       
        <div className='container p-5 mb-5'>
        <div className='row text-center mb-5'>
         <h1 className='mt-5 mb-3'> Open an Equityze account</h1>
          <p className='mb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>

          <Link to="/signup" className="p-3 btn btn-custom mt-3" style={{width:"15%", margin:"0 auto"}}>
  Sign up now
</Link>
          
       </div>
        </div>

     );
}

export default OpenAccount;