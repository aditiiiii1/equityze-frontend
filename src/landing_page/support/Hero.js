import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id="supportHero">
            <div className='p-3 p-md-5' id="supportWrapper">
                <h2>Support Portal</h2>
                <a href="#track" className="btn btn-outline-light mt-2"
                    style={{
                        borderColor: 'white',
                        color: 'white'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = 'white';
                        e.target.style.color = '#69696A';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = 'white';
                    }}>
                    Track Tickets
                </a>
            </div> 

            <div className='row p-3 mt-2 mb-3 mb-md-5'>
                <div className='col-12 col-md-7 p-3'> 
                    <h4 className='mb-3 mb-md-4'>Search for an answer or browse help topics to create a ticket</h4>
                    <input 
                        placeholder="Eg: How do I open my account, How do I activate F&O..." 
                        className="form-control w-75"
                    /> 
                </div>
                
                <div className='col-12 col-md-5 p-3 ps-md-5 mt-3 mt-md-0'>
                   
                    <ul className='list-unstyled'>
                        <li className='mb-2'>
                            <a href="#suggestions">Track account opening</a>
                        </li>
                        <li className='mb-2'>
                            <a href="#suggestions">Track segment activation</a>
                        </li>
                        <li className='mb-2'>
                            <a href="#suggestions">Intraday margins</a>
                        </li>
                        <li className='mb-2'>
                            <a href="#suggestions">Kite user manual</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
                );
}

export default Hero;