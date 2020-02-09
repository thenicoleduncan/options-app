import React, { Component } from 'react';
import './ResourceCard.css';
import axios from 'axios';

class ResourceCard extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      company: '',
      Description: '',
      link: '',
      posts: []
    };
  }
  
  componentDidMount = () => {
    this.getBlogPost();
  }

  getBlogPost = () => {
    axios.get('/api')
      .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been received!!');
        console.log(this.state.posts);
      })
      .catch(() => {
        alert('Error retrieving data!!');
      });
  }

  render() {

    return (
      <div>{
        this.state.posts.map(post => (

          <div className="card resource-card ml-5 mt-5 d-flex justify-content-center">
            <img className="card-img-top" src="img2.PNG" alt="Card image cap"></img>
            <div className="card-body">

              <div key={post.id}>
                <h5>{post.company}</h5>
                <p>{post.title}</p>
                <p>{post.description}</p>
                <a href={post.link} target="_blank" className="btn btn-primary">Check it out</a>
              </div>
              <h5 className="card-title"></h5>
              <p className="card-text"></p>

            </div>
          </div>
        ))};
      </div>
    );
  }
}






export default ResourceCard;
