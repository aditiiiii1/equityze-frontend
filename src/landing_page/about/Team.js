import React from 'react';

function Team() {
    return (
      <div className="container">
        <div className="row p-3 p-md-5 mt-3 mt-md-5 border-top">
          <h1 className="text-center">People</h1>
        </div>

        <div className="row p-3 p-md-5 text-muted" style={{lineHeight: "1.8", fontSize: "1.1em"}}>
          <div className="col-12 col-md-6 p-3 p-md-5 text-center">
            <img 
              src="media/images/aditiphoto.png"
              alt="Founder's img"
              className="img-fluid"
              style={{
                borderRadius: "50%", 
                maxWidth: "300px",
                width: "100%", 
                height: "auto", 
                border: "2px solid #5e96a4"
              }}
            />
            <h5 className='mt-3 mt-md-5'>Aditi</h5>
            <h6>Founder, CEO</h6>
          </div>

          <div className="col-12 col-md-6 p-3 p-md-5">
            <p>Aditi developed <b>Equityze</b>, an online stock broking platform to provide an intuitive and seamless trading experience for modern users, much like the platforms that have revolutionized the Indian market.</p>
            <p>The work encompasses comprehensive expertise in frontend development, API integration, and the creation of an efficient and visually compelling user interface.</p>
            <p>Away from the keyboard, a passion for swimming provides her a clear mind and fresh perspective.</p>
            <p>Connect on <a href='#homepageplaceholder' style={{textDecoration: "none"}}>Homepage</a> / <a href='#tradingqaplaceholder' style={{textDecoration: "none"}}>TradingQnA</a> / <a href='#twitterplaceholder' style={{textDecoration: "none"}}>Twitter</a></p>
          </div>
        </div>
      </div>
    );
}

export default Team;