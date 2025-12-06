import React from 'react';

function Education() {
    return (
        // <h1>Education</h1>
        <div className='containor mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/images/education.svg' style={{width:"90%"}}/>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='mb-5 fs-2'>Free and open market education</h1>
                    <p className='fs-5'>Varsity, the largest online stock market educationbook in the world covering everything from the basics advance trading</p>
                    <a href='' className='fs-5' style={{ textDecoration: "none" }}>Versity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='fs-5 mt-5'>TradingQ&A, the most active trading and investment community in india for all your market related queries.</p>
                    <a href='' className='fs-5' style={{ textDecoration: "none" }}>TradingQ&Q <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;