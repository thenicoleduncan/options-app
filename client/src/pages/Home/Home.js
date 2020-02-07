import React, { Component } from "react";
import HomeImage from '../../components/HomeImage/HomeImage';
import HomeMission from '../../components/HomeMission/HomeMission';
import PictureDiv from "../../components/PictureDiv/PictureDiv";
import InfoDiv from '../../components/InfoDiv/InfoDiv';
import TitleDiv from "../../components/TitleDiv/TitleDiv";
import FormComp from '../../components/FormComp/FormComp';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeImage />
        <HomeMission />
        <br />
        <TitleDiv />
        <PictureDiv />
        <InfoDiv />
      </div>
    );
  }
}

export default Home;