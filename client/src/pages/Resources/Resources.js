import React, { Component } from "react";
import ResourceTitle from '../../components/ResourceTitle/ResourceTitle';
import ResourceCard from '../../components/ResourceCard/ResourceCard';
import ResourceButton from '../../components/ResourceButton/ResourceButton';
import AddResourceBtn from "../../components/AddResourceBtn/AddResourceBtn";

class Resources extends Component {
  render() {
    return (
      <div className='container'>
        <ResourceTitle />

        <div className="row text-left">

          <ResourceButton />
          <AddResourceBtn />

        </div>

        <div className="row">
        <ResourceCard />
       
      
    
        </div>
        

        <br />
        <br />
        <br />

      </div>
    );
  };

  
}

export default Resources;