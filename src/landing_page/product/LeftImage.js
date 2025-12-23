import React from 'react';

function LeftImage({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  lernMore,
  googlePlay,
  appStore
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        
        <div className="col-md-6">
          <img src={imageUrl} className="img-fluid" />
        </div>

        <div className="col-md-6">
          <h1>{productName}</h1>
          <p className="mt-3">{productDescription}</p>

          <div className="mt-3">
            <a href={tryDemo} className="me-4 text-decoration-none">
              Try Demo <i className="fa fa-long-arrow-right"></i>
            </a>
            <a href={lernMore} className="text-decoration-none">
              Learn More <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>

          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} className="ms-4">
              <img src="media/images/appStoreBadge.svg" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}


export default LeftImage;