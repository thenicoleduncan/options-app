import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './InfoDiv.css';

function HomeMission() {
    return (

        <div className="container">
            <br />
            <br />
            <br />

            <Jumbotron className="row">
                <div className="col-lg-9">
                    <h1 className="mission-title right" id="thing">Practical</h1>
                    <p className="right">Get real life experience, with hands on triaining.</p>
                </div>
                <img className="col-lg-3" src="brain.PNG"></img>
            </Jumbotron>

            <Jumbotron className="row">
                <img className="col-lg-3" src="money.PNG"></img>
                <div className="col-lg-9">
                    <h1 className="mission-title left" id="thing">Affordable</h1>
                    <p className="left">Imagine spending only a couple thousand dollars, or even getting paid to learn!</p>
                </div>
            </Jumbotron>

            <Jumbotron className="row">
                <div className="col-lg-9">
                    <h1 className="mission-title right" id="thing">Time Sensitive</h1>
                    <p className="right">Instead of spending several years taking classes that have nothign to do with your degree, join a tradeschool, boot camp, or paid apprenticeship that gives you fast and direct experience in your industry.</p>
                </div>
                <img className="col-lg-3" src="clock.PNG"></img>
            </Jumbotron>

        </div>
    );
}

export default HomeMission;