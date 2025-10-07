import React from 'react';

function Hero() {
    return ( 
      
        <section className='container-fluid' id="supportHero">
        <div className='p-5' id="supportWrapper">
            <h2>Support Portal</h2>
            <a href="">Track Tickets</a>
            </div> 

            <div className='row p-3 mt-2 mb-5'>
            <div className='col-8 p-3'> 
                <h4 className='mb-4'>Search for an answer or browse help topics to create a ticket</h4>
                <input placeholder= "Eg: How do I open my account, How do I activate F&O..." /> <br/> <br/>
                <a href= ""> Track account opening </a><br/>
                <a href= ""> Track segment activation </a><br/>
                <a href= ""> Intraday margins </a><br/>
                <a href= ""> Kite user manual </a>
            </div>
            
            </div>
        </section>
   
     );
}

export default Hero;