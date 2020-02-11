import React, { Component } from "react";
import ResourceTitle from '../../components/ResourceTitle/ResourceTitle';
import ResourceCard from '../../components/ResourceCard/ResourceCard';
import ResourceButton from '../../components/ResourceButton/ResourceButton';
import AddResourceBtn from "../../components/AddResourceBtn/AddResourceBtn";
import './Resources.css';

class Resources extends Component {
  render() {
    return (
      <div className='container'>
        <ResourceTitle />


        <div className="row text-left">

          <ResourceButton />
          <AddResourceBtn />

        </div>

        

        <ResourceCard />
        
        

        <br />
        <br />
        <br />

      </div>
    );
  };

  
}

export default Resources;