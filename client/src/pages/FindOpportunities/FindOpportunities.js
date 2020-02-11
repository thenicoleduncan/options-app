import React, { Component } from "react";
import FindTitle from "../../components/FindTitle/FindTitle";
import FindHowTo from "../../components/FindHowTo/FindHowTo";
import './FindOpportunities.css';

class FindOpportunities extends Component {
  render() {
    return (
      <div className="container">
        <FindTitle />
        <img className="slide mb-5" src="slide.png"></img>

        <FindHowTo />
      </div>
    );
  }
}

export default FindOpportunities;