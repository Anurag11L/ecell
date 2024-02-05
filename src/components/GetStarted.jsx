import React from 'react';

const GetStarted = () => {
  return (
    <div id="features">
      <div className="container text-md-center section-holder">
        <h1 className="blue-text">Get Started</h1>
        <div className="row">
          <div className="feature col-lg-4 purple">
            <span className="circle">
              <ion-icon name="school-outline"></ion-icon>
            </span>
            <h4>Mentorship</h4>
            <p style={{fontSize:"1.4em"}}>
              We have an able faculty that does a great job mentoring and
              supporting prospective entrepreneurs.asdfghj dfgfhj 
            </p>
          </div>
          <div className="feature col-lg-4 blue">
            <span className="circle">
              <ion-icon name="construct-outline"></ion-icon>
            </span>
            <h4>Technical Assistance</h4>
            <p style={{fontSize:"1.4em"}}>
              We help to format all the plans, precautions, pros and cons by
              assessing the ideas of the budding startups so that it works
              efficiently.
            </p>
          </div>
          <div className="feature col-lg-4 green">
            <span className="circle">
              <span className="iconify" data-icon="la:piggy-bank-solid" data-inline="false"></span>
            </span>
            <h4>VCs & Angel Network</h4>
            <p style={{fontSize:"1.4em"}}>
              We provide a good platform to connect with investors and help on
              how and whom to pitch regarding a particular investment.
            </p>
          </div>
          <div className="feature col-lg-4 yellow">
            <span className="circle">
              <ion-icon name="rocket-outline"></ion-icon>
            </span>
            <h4>Accelerators & Incubator</h4>
            <p style={{fontSize:"1.4em"}}>
              We help startups by connecting them to accelerators and
              incubators which help them grow succesfully and in a more guided
              way.
            </p>
          </div>
          <div className="feature col-lg-4 red">
            <span className="circle">
              <ion-icon name="trending-up-outline"></ion-icon>
            </span>
            <h4>Market Advisory</h4>
            <p style={{fontSize:"1.4em"}}>
              Our experienced mentors and faculty assist and guide you for the
              correct investments based on the current market which shall give
              you better returns in future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
