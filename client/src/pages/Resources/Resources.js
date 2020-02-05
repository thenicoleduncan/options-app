import React, { Component } from "react";
import ResourceTitle from '../../components/ResourceTitle/ResourceTitle';
import ResourceCard from '../../components/ResourceCard/ResourceCard';
import ResourceButton from '../../components/ResourceButton/ResourceButton';

class Resources extends Component {
  render() {
    return (
      <div className='container'>
        <ResourceTitle />
        <ResourceButton />

        <div className="row">
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        </div>

        <br />
        <br />
        <br />

      </div>
    );
  }
}

export default Resources;