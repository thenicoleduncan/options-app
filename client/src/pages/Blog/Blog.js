import React, { Component } from "react";
import BlogTitle from "../../components/BlogTitle/BlogTitle";
import BlogPost from "../../components/BlogPost/BlogPost";


class Blog extends Component {
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <BlogTitle />
        <BlogPost />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Blog;