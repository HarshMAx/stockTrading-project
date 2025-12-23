import React from 'react';

function RightImage({ imageUrl, productName, productDescription, lernMore }) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        <div className="col-md-6">
          <h1>{productName}</h1>
          <p className="mt-3">{productDescription}</p>
          <a href={lernMore} className="text-decoration-none">
            Learn More <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>

        <div className="col-md-6">
          <img src={imageUrl} className="img-fluid" />
        </div>

      </div>
    </div>
  );
}


export default RightImage;