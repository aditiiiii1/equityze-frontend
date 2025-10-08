import React from 'react';

function Team() {
    return (
      <div className="container">
        {/* Consistent padding for the top row */}
        <div className="row py-3 py-md-5 mt-3 mt-md-5 border-top">
          <h1 className="text-center">People</h1>
        </div>

        {/* Use consistent vertical alignment for the columns */}
        <div className="row py-3 text-muted align-items-center" style={{ lineHeight: "1.8", fontSize: "1.2em" }}>
          <div className="col-12 col-md-6 text-center">
            <img 
              src="media/images/aditiphoto.png"
              alt="Aditi, Founder and CEO of Equityze"
              className="img-fluid my-3"
              style={{
                borderRadius: "50%", 
                maxWidth: "300px",
                border: "2px solid #5e96a4"
              }}
            />
            <h5 className='mt-3 mt-md-5'>Aditi</h5>
            <h6>Founder, CEO</h6>
          </div>

          <div className="col-12 col-md-6 p-3">
            <div className="small-font-p">
              <p>Aditi developed <b>Equityze</b>, an online stock broking platform to provide an intuitive and seamless trading experience for modern users, much like the platforms that have revolutionized the Indian market.</p>
              <p>The work encompasses comprehensive expertise in frontend development, API integration, and the creation of an efficient and visually compelling user interface.</p>
              <p>Away from the keyboard, a passion for swimming provides her a clear mind and fresh perspective.</p>
              {/* Corrected anchor tags with valid placeholder links */}
              <p>Connect on <br/> 
                <a href='#homepage' style={{textDecoration: "none"}}>Homepage</a> /  
                <a href='#trading' style={{textDecoration: "none"}}>TradingQnA</a> /  
                <a href='#twitter' style={{textDecoration: "none"}}>Twitter</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Team;