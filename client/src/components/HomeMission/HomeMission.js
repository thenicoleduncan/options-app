import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './HomeMission.css';

function HomeMission() {
    return (
        <div className="container mt-5 mb-5">
            <Jumbotron className="jumbobumbo">
                <Container>
                    <h1 className="mission-title big" id="bigMain">Our Mission</h1>
                    <hr className="my-4" width="50%" />
                    <p className="text-light"> 
                        Education comes in many forms. With Options, you'll learn what those forms may look like, find resources, and be encouraged by the support of others like you. Our mission is to help you recognize your potential in reaching your goals in lifeall the while informing you on the alternative forms of post high school education.  
                </p>
                </Container>
            </Jumbotron>
        </div>
    );
}

export default HomeMission;