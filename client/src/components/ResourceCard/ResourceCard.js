import React, { Component } from 'react';
import './ResourceCard.css';

class ResourceCard extends React.Component {
  render() {
    return (
      <div>

        <div className="card resource-card ml-5 mt-5">
          <img className="card-img-top" src="resource-image.PNG" alt="Card image cap"></img>
          <div className="card-body">
            <h5 className="card-title">Resource</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>

      </div>
    );
  }
}

export default ResourceCard;