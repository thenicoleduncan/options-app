import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

class FormComp extends React.Component {
    render() {
      return (
        <div className="container mt-5 mb-5">
          <Form onSubmit={this.sumbit}>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                
                Name, Company and Role
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Name, Company and Role" name="company"  onChange={this.handleChange}  />
              </Col>
            </Form.Group>

            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Title
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" name="title" placeholder="Title"  onChange={this.handleChange}/>
                
              </Col>
            </Form.Group> 
            </fieldset>

            <fieldset>
              <Form.Group as={Row}>

                
                <Form.Label as="legend" column sm={2}>
                  Description
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Description" name="description" onChange={this.handleChange} 
                  />
              </Col>
            </Form.Group> 
            </fieldset>

            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Link to Website
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="URL" name="link"  onChange={this.handleChange}/>
              </Col>
            </Form.Group> 
            </fieldset>
            <button>Submit</button>
          </Form>
        </div>
      );
    }





    state = {
      title: '',
      company:'',
      Description: '',
      link:'',
      posts: []
    };
    
    componentDidMount = () => {
      this.getBlogPost();
    }
    
    getBlogPost = () => {
      axios.get('/api')
      .then((response) => {
        const data = response.data;
        this.setState({posts: data});
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!');
      });
    }
    
    handleChange = (event) => {
      const target = event.target;
      const name = target.name;
      const value = target.value;
    
      this.setState({
        [name]: value
      });
    };
    
      sumbit = (event) => {
        event.preventDefault();
    
        const payload = {
          company: this.state.company,
          title: this.state.title,
          description: this.state.description,
          link: this.state.company
        };
    
        axios({
          url:'/api/save',
          method: 'POST',
          data: payload
        })
          .then(() => {
            console.log('Data has been sent to the server');
            this.resetUserInputs();
            this.getBlogPost();
    
          })
          .catch(() => {
            console.log('Internal server error');
    
          });;
    
    
    
      };
    
      resetUserInputs = () => {
        this.setState({
          title: '',
          body: ''
        });
      };
    
      displayBlogPost = (posts) => {
        if (!posts.length) return null;
    
        return posts.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ));
    
      };
    
      
    
      // render() {
    
      //   console.log('State', this.state);
      //   //JSX
      //   return(
      //     <div>
      //       <h2>Welcome</h2>
      //       <form onSubmit={this.sumbit}>
      //         <div className="form-input">
      //           <input 
      //           type="text"
      //           name="title"
      //           placeholder="Title"
      //           value={this.state.title}
      //           onChange={this.handleChange} 
      //           />
      //         </div>
      //         <div className="form-input">
      //           <textarea
      //            placeholder="Body"
      //             name="body"
      //              cols="30"
      //               rows="10"
      //                value={this.state.body}
      //                 onChange={this.handleChange}
      //                 >
    
      //                 </textarea>
      //         </div>
    
      //         <button>Submit</button>
      //       </form>
    
      //       <div className="blog-post">
      //         {this.displayBlogPost(this.state.posts)}
      //       </div>
      //     </div>
      //   );
      // }



  }

  export default FormComp;