import React from 'react';
function Awards() {
    return ( 
        <div className='container mt-3 mt-md-5'>
            <div className='row'>
                <div className='col-12 col-md-6 p-3 p-md-5 mt-4 text-center text-md-start'>
                    <img src='media/images/largestBroker.svg'
                    alt='largest broker'
                    className="img-fluid"
                    />
                </div>

                <div className='col-12 col-md-6 p-3 p-md-5 mt-3'>
                    <h1>Largest stock broker in India.</h1>
                    <p className='mb-3 mb-md-5 mt-3'>2+ million Equityze clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-12 col-md-6 p-2'>
                            <ul>
                        <li><p>Futures and Options</p></li>
                        <li><p>Commodity derivatives</p></li>
                        <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>

                        <div className='col-12 col-md-6 p-2'>
                            <ul>
                        <li><p>Stocks and IPOs</p></li>
                        <li><p>Direct mutual funds</p></li>
                        <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png'
                        alt='press logos'
                     className="mt-5 img-fluid w-100 w-md-90"/>
                </div>
            </div>
        </div>
     );
}

export default Awards;