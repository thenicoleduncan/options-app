import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './HomeMission.css';

function HomeMission() {
    return (
        <Jumbotron>
            <Container>
                <h1 className="mission-title">Our Mission</h1>
                <hr className="my-4" width="50%" />
                <p>
                    Education comes in many forms.  With Options, you'll learn what those forms may look like, find resources, and be encouraged by the support of others like you. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </Container>
        </Jumbotron>
    );
}

export default HomeMission;