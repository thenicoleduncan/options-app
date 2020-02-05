import React, { Component } from 'react';
import './ResourceCard.css';

class ResourceCard extends React.Component {
  render() {
    return (
      <div>

        <div className="card resource-card ml-5 mt-5">
          <img className="card-img-top" src="img2.PNG" alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">University of Arizona Coding Boot Camp</h5>
            <p className="card-text">Learn to code in 6 months! This boot camp is geared, not only to hel you learn, but get a job after you are finished.</p>
            <a href="#" class="btn btn-primary">Check it out</a>
          </div>
        </div>

      </div>
    );
  }
}

export default ResourceCard;