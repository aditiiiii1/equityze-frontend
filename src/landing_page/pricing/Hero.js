import React from 'react';

function Hero() {
    return ( 
        <div className="container ">
      

      <div className="row p-5 mt-3 border-bottom text-center">
        <h2>Charges</h2>
        <h4  className=' text-muted fs-5 mt-3'>List of all charges and taxes</h4> 
        </div>

        <div className="row p-3 mt-5 text-center">

        <div className="col-4 p-5">
         <img src= "media/images/pricingEquity.svg" style={{width: "80%"}}/>
         <h1 className='fs-3'>Free equity delivery</h1>
         <p className='text-muted mt-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4 p-5">
         <img src= "media/images/intradayTrades.svg" style={{width: "80%"}}/>
         <h1 className='fs-3'>Intraday and F&O trades</h1>
         <p className='text-muted mt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 p-5">
         <img src= "media/images/pricingEquity.svg" style={{width: "80%"}}/>
         <h1 className='fs-3'>Free direct MF</h1>
         <p className='text-muted mt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>

     );
}

export default Hero;