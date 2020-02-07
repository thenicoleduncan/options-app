import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class FormComp extends React.Component {
    render() {
      return (
        <div className="container mt-5 mb-5">
          <Form>
            <Form.Group as={Row} controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                Name, Company and Role
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="Name, Company and Role" />
              </Col>
            </Form.Group>

            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Title
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Title" />
              </Col>
            </Form.Group> 
            </fieldset>

            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Description
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="Description" />
              </Col>
            </Form.Group> 
            </fieldset>

            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Link to Website
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="URL" />
              </Col>
            </Form.Group> 
            </fieldset>

          </Form>
        </div>
      );
    }
  }

  export default FormComp;