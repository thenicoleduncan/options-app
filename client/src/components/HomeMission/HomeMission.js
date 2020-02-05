import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './HomeMission.css';

function HomeMission() {
    return (
        <Jumbotron>
            <Container>
                <h1>Our Mission</h1>
                <hr className="my-4" width="50%"  />
                <p>
                    Education comes in many forms.  With Options, you'll
                    <br />
                    learn what those forms may look like, find resources,
                    <br />
                    and be encouraged by the support of others like you.
                </p>
            </Container>
        </Jumbotron>
    );
}

export default HomeMission;