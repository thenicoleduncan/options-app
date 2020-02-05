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
                    <h1 className="mission-title right">Practical</h1>
                    <p className="right">Education comes in many forms. With Options, you'll learn what...</p>
                </div>
                <img className="col-lg-3" src="brain.PNG"></img>
            </Jumbotron>

            <Jumbotron className="row">
                <img className="col-lg-3" src="money.PNG"></img>
                <div className="col-lg-9">
                    <h1 className="mission-title left">Affordable</h1>
                    <p className="left">Education comes in many forms. With Options, you'll learn what...</p>
                </div>
            </Jumbotron>

            <Jumbotron className="row">
                <div className="col-lg-9">
                    <h1 className="mission-title right">Time Sensitive</h1>
                    <p className="right">Education comes in many forms. With Options, you'll learn what...</p>
                </div>
                <img className="col-lg-3" src="clock.PNG"></img>
            </Jumbotron>

        </div>
    );
}

export default HomeMission;