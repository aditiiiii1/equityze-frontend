import React from 'react';
function Education() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-6 text-center text-md-start'>
                    <img src="media/images/education.svg"
                    alt='education img'
                    className="img-fluid"
                    />
                </div>

                <div className='col-12 col-md-5 mt-3 mt-md-5'>
                    <h1 className='mb-3 mb-md-5'>Open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='#varsity-app'style={{textDecoration:"none"}}>Varsity <i class="fa fa-long-arrow-right" 
                    aria-hidden="true"></i></a>
                    <div className='mt-4'></div>
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='#tradingqa'style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right" 
                    aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;