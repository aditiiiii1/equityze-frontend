import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          {/* Logo and Copyright Section */}
          <div className="col text-muted footer-logo-section">
            <Link to="/">
              <img src="media/images/equityzelogo.png"
               className="footer-logo"
               alt="Equityze Logo"
              style={{ width: "60%" }} />
            </Link>
            <p className="copyright-text">
              © 2010 - 2025, Equityze Broking Ltd.<br />
              All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div className="col footer-column">
            <p className="footer-heading">Company</p>
            <ul className="footer-links" >
              <li><Link to="/about">About</Link></li>
              <li><Link to="/philosophy">Philosophy</Link></li>
              <li><Link to="/press">Press & media</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/cares">Equityze Cares (CSR)</Link></li>
              <li><Link to="/tech">Equityze.tech</Link></li>
              <li><Link to="/open-source">Open source</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col footer-column">
            <p className="footer-heading">Support</p>
            <ul className="footer-links">
              <li><Link to="/contact">Contact us</Link></li>
              <li><Link to="/support-portal">Support portal</Link></li>
              <li><Link to="/file-complaint">How to file a complaint?</Link></li>
              <li><Link to="/complaints-status">Status of your complaints</Link></li>
              <li><Link to="/bulletin">Bulletin</Link></li>
              <li><Link to="/circular">Circular</Link></li>
              <li><Link to="/z-connect">Z-Connect blog</Link></li>
              <li><Link to="/downloads">Downloads</Link></li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="col footer-column">
            <p className="footer-heading">Account</p>
            <ul className="footer-links">
              <li><Link to="/open-demat">Open demat account</Link></li>
              <li><Link to="/minor-demat">Minor demat account</Link></li>
              <li><Link to="/nri-demat">NRI demat account</Link></li>
              <li><Link to="/commodity">Commodity</Link></li>
              <li><Link to="/dematerialisation">Dematerialisation</Link></li>
              <li><Link to="/fund-transfer">Fund transfer</Link></li>
              <li><Link to="/mtf">MTF</Link></li>
              <li><Link to="/referral">Referral program</Link></li>
            </ul>
          </div>
        </div>

        {/* Legal Text Section */}
        <div className="mt-5 text-muted" style={{fontSize: "12px"}}>
        <p>
          Equityze Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Equityze
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Equityze Commodities Pvt. Ltd. MCX: 46025; SEBI Registration
          no.: INZ000038238 Registered Address: Equityze Broking Ltd., #153/154,
          4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
          Phase, Bengaluru - 560078, Karnataka, India. For any complaints
          pertaining to securities broking please write to
          complaints@Equityze.com, for DP related to dp@Equityze.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>

        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>

        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>

        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>

        <p>
          India's largest broker based on networth as per NSE. NSE broker
          factsheet
        </p>

        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Equityze and offering such services, please
          create a ticket here.
        </p>
      </div>
      </div>
    </footer>
  );
}

export default Footer;