import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';



class FormComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      title: '',
      description: '',
      link: ''
    }
  }
    render() {
      return (
        <div className="container mt-5 mb-5">
          <Form onSubmit={this.sumbit}>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                
                Name, Company and Role
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Name, Company and Role" name="company"  onChange={this.handleChange} value={this.state.company} />
              </Col>
            </Form.Group>

            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Title
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange}/>
                
              </Col>
            </Form.Group> 
            </fieldset>

            <fieldset>
              <Form.Group as={Row}>

                
                <Form.Label as="legend" column sm={2}>
                  Description
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange} 
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
                <Form.Control type="text" placeholder="URL" name="link" value={this.state.link} onChange={this.handleChange}/>
              </Col>
            </Form.Group> 
            </fieldset>
            <button>Submit</button>
          </Form>
        </div>
      );
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
          link: this.state.link,

          
          
        };
    
        axios({
          url:'/api/save',
          method: 'POST',
          data: payload
        })
          .then(() => {
            console.log('Data has been sent to the server');
            this.resetUserInputs();
            // this.getBlogPost();
    
          })
          .catch(() => {
            console.log('Internal server error');
    
          });;
    
      };
    
      resetUserInputs = () => {
        this.setState({
          company:'',
          title: '',
          description: '',
          link:'',
        });
      };
  }

  export default FormComp;