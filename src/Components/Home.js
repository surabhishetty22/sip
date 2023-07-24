import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="text-primary">Food Website</h1>
            <p className="text-secondary">Welcome to our website!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src="https://img1.wsimg.com/templates-vnext/food-example-18-thumb.jpg"  alt="Example"  width="1100" height="600" />
          </div>
          <div className="col-md-6">
            <hr>
            </hr>
            <p align="right">
            <h2 className="text-info">Services</h2>
            <ul className="list-unstyled">
              <li><i className="bi bi-check-circle-fill text-success"></i> Menu</li>
              <li><i className="bi bi-check-circle-fill text-success"></i> Your Order</li>
              <li><i className="bi bi-check-circle-fill text-success"></i> Tutorials</li>
            </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;