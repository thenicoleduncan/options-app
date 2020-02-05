import React, { Component } from "react";
import ResourceTitle from '../../components/ResourceTitle/ResourceTitle';
import ResourceCard from '../../components/ResourceCard/ResourceCard';

class Resources extends Component {
  render() {
    return (
      <div className='container'>
        <ResourceTitle />

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