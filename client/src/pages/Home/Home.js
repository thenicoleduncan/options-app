import React, { Component } from "react";
import HomeImage from '../../components/HomeImage/HomeImage';
import HomeMission from '../../components/HomeMission/HomeMission';
import PictureDiv from "../../components/PictureDiv/PictureDiv";
import InfoDiv from '../../components/InfoDiv/InfoDiv';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeImage />
        <HomeMission />
        <PictureDiv />
        <InfoDiv />
      </div>
    );
  }
}

export default Home;