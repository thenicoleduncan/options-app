import React, { Component } from "react";
import HomeImage from '../../components/HomeImage/HomeImage';
import HomeMission from '../../components/HomeMission/HomeMission';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeImage />
        <HomeMission />
      </div>
    );
  }
}

export default Home;