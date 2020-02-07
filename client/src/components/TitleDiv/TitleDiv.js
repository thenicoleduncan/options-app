import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './TitleDiv.css';

function TitleDiv() {
    return (
        
        <Container className="mb-5">
            <h1 className="mission-title">Finding Alternative Forms of Education</h1>
            <hr className="my-4" width="50%" />
            <p>
                Education comes in many forms.
                </p>
        </Container>
        
    );
}

export default TitleDiv;