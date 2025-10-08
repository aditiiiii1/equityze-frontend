import React from 'react';

function Stats() {
    return (  
       <div className='container p-3'>
        <div className='row p-3 p-md-5'>
            <div className='col-12 col-md-6 p-3 p-md-5'>
                <h1 className='fs-2 mb-3 mb-md-5 mt-3 mt-md-5'>Trust with confidence</h1>

                <h2 className='fs-4'>Customer-first always</h2>
                <p className='text-muted'>That's why 1.6+ crore customers trust Equityze with ~ ₹6 lakh crores of equity investments, making us India's largest broker</p>

                <h2 className='fs-4'>No spam or gimmicks</h2>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. </p>

                <h2 className='fs-4'>The Equityze universe</h2>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                <h2 className='fs-4'>Do better with money</h2>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

            </div>

            <div className='col-12 col-md-6 p-3 p-md-5'>
                <img src='media/images/ecosystem.png'
                alt='ecosystem'
                 className="img-fluid w-100"/>

                <div className='d-flex flex-column flex-md-row justify-content-md-end gap-3 gap-md-4 mt-3'>
                    <a href='#explore-products' style={{textDecoration:"none"}}>Explore our Products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href='#kite-demo'style={{textDecoration:"none"}}>Try Kite demo <i class="fa fa-long-arrow-right" 
                    aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
       </div>
    );
}

export default Stats;