import React from 'react';

function Hero() {
    return ( 
        // <h1>
        //     Hero
        // </h1>
        <div className='container border-bottom mb-5'>
            <div className=' text-center mt-5 p-3'>
                <h1>Technology</h1>
            <h3 className='text-muted mt-3 fs-4'>Sleek, modern and  intuitive trading platforms</h3>
            <p className='mt-3 mb-4'>Check out our <a href='#' style={{textDecoration:"none"}}>investmentofferings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>.</p>
            </div>
            
        </div>
     );
}

export default Hero;