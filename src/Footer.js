import React from 'react';

function Footer() {
    return (
        // <h1>Footer</h1>
        <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
            <div className='container border-top mt-5' >
                <div className='row mt-5'>
                    <div className='col-3'>
                        <img src='media/images/logo.svg' style={{ width: "50%" }} />
                        <p className='fs-5'>
                            &copy; 2010 - 2026, Not ZerodhaBroking Ltd. All rights reserved
                        </p>
                        <div style={{ display: "flex", gap: "18px", fontSize: "30px", marginTop: "15px" }}>
                            <i className="fa fa-twitter"></i>
                            <i className="fa fa-facebook-official"></i>
                            <i className="fa fa-instagram"></i>
                            <i className="fa fa-linkedin"></i>
                            <i className="fa fa-telegram"></i>
                        </div>

                    </div>
                    <div className='col-3 fs-5'>
                        <p>Company</p>
                        <a href='#'>About</a><br />
                        <a href='#'>Products</a><br />
                        <a href='#'>Pricing</a><br />
                        <a href='#'>Referral program</a><br />
                        <a href='#'>Carrers</a><br />
                        <a href='#'>Zerodha.tech</a><br />
                        <a href='#'>Press & media</a><br />
                        <a href='#'>Zerodha cars(CSR)</a><br />
                    </div>
                    <div className='col-3 fs-5'>
                        <p>Support</p>
                        <a href='#'>Contact</a><br />
                        <a href='#'>Support portal</a><br />
                        <a href='#'>Z-Connect blog</a><br />
                        <a href='#'>List of charges</a><br />
                        <a href='#'>Download & resources</a><br />
                    </div>
                    <div className='col-3 fs-5'>
                        <p>Account</p>
                        <a href='#'>Open an account</a><br />
                        <a href='#'>Fund transfer</a><br />
                        <a href='#'>60 day challenge</a><br />
                    </div>
                </div>
                <div className='mt-5 fs-6 text-muted'>
                    <p className='fs-6'>Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru – 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com
                        ; for DP-related issues write to dp@zerodha.com
                        . Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                    <p className='fs-6'>
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, Email ID, and complaints against which intermediary. Communication, speedy redressal of the grievances.
                    </p>
                    <p className='fs-6'>
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>
                    <p className='fs-6'>
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets – once KYC is done through a SEBI registered intermediary (broker, DP, mutual fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please update your bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non-allotment the funds will remain in your bank account. Investors are advised to beware of unsolicited messages and tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;