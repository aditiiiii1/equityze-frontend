import React from 'react';

function Brokerage() {
    return ( 
        <div className="container mt-3 mt-md-5">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    
                    <h3 className="mb-3 mb-md-4">Charges for account opening</h3>
                    <div className="table-responsive">
                        <table className="table table-bordered mb-3 mb-md-4">
                            <thead>
                                <tr>
                                    <th scope="col" className="w-50">Type of account</th>
                                    <th scope="col" className="w-50">Charges</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Online account</td>
                                    <td>FREE</td>
                                </tr>
                                <tr>
                                    <td>Offline account</td>
                                    <td>FREE</td>
                                </tr>
                                <tr>
                                    <td>NRI account (offline only)</td>
                                    <td> ₹ 500</td>
                                </tr>
                                <tr>
                                    <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                                    <td> ₹ 500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mb-4 mb-md-5"></div>

                    <h3 className="mb-3 mb-md-4">Demat AMC (Annual Maintenance Charge)</h3>
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col" className="w-50">Value of holdings</th>
                                    <th scope="col" className="w-50">AMC</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Up to ₹ 4 lakh</td>
                                    <td>FREE</td>
                                </tr>
                                <tr>
                                    <td>₹ 4 lakh - ₹ 10 lakh</td>
                                    <td>₹ 100 per year, charged quarterly*</td>
                                </tr>
                                <tr>
                                    <td>Above ₹ 10 lakh</td>
                                    <td>₹ 300 per year, charged quarterly</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-muted small mt-3">
                        * Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). 
                        BSDA account holders cannot hold more than one demat account. To learn more about BSDA, <a href="#click-here">click here</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;