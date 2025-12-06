import React from 'react';

function OpenAccount() {
    return ( 
        // <h1>OpenAccount</h1>
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                {/* <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/> */}
                <h1 className='mb-4'>Open a Zerodha account</h1>
                <p className='fs-5 mb-4'>Modern platforms and apps, ₹0 investment, and flat ₹20 intraday and F&O trades.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%" , margin:"0 auto"}}>Signup Now</button>
            </div>

        </div>
     );
}

export default OpenAccount;