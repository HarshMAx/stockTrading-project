import React from 'react';

function Universe() {
    return ( 
        // <h1>
        //     {/* Universe */}

        // </h1>
        <div className='container mt-5'>
            <div className='row text-center'>
                
                     <h1>The Zerodha Universe</h1>
                     <p>Extend your trading and investment experience even further with our partner platorms</p>
                     <div className='col-4 p-3 mt-4'>
                        <img src='media/images/smallcaseLogo.png'/>
                        <p className='text-small text-muted p-3'>Thematic investment platform</p>
                     </div>
                     <div className='col-4 p-3 mt-4'>
                        <img src='media/images/streakLogo.png' style={{height:"50px", width:"170px"}}/>
                        <p className='text-small text-muted p-3'>Algo & strategy platform</p>
                     </div>
                     <div className='col-4 p-3 mt-4'>
                        <img src='media/images/sensibullLogo.svg' style={{height:"50px", width:"170px"}}/>
                        <p className='text-small text-muted p-3'>Option trading platform</p>
                     </div>

                     <div className='col-4 p-3 mt-4'>
                        <img src='media/images/zerodhaFundhouse.png' style={{height:"50px", width:"170px"}}/>
                        <p className='text-small text-muted p-3'>Asset management</p>
                     </div>
                     <div className='col-4 p-3 mt-4'>
                        <img src='media/images/goldenpiLogo.png' style={{height:"50px", width:"170px"}}/>
                        <p className='text-small text-muted p-3'>Bonds trading platform</p>
                     </div>
                     <div className='col-4 p-3 mt-4'>
                        <img src='media/images/dittoLogo.png' style={{height:"50px", width:"150px"}}/>
                        <p className='text-small text-muted p-3'>Insurance</p>
                     </div>
                     <button className='p-2 btn btn-primary fs-5 mb-5 mt-5' style={{width:"20%" , margin:"0 auto"}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Universe;