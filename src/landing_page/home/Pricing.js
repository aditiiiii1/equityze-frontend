import React from 'react';

function Pricing() {
    return ( 
        <div className='container my-5'>
        <div className='row justify-content-center'>
          
          <div style={{width: "85%"}}>
           
            <div className='mb-4'>
              <h1 className='mb-3'>Unbeatable pricing</h1>
              <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
              <a href='' style={{ textDecoration: "none" }}>See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
      
           
            <div className='d-flex text-center mb-5'>
              <div className='col p-3 border'>
                <h1>₹0</h1>
                <p>Free account opening</p>
              </div>
      
              <div className='col p-3 border'>
                <h1>₹20</h1>
                <p>Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}

export default Pricing;