import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './FindHowTo.css';

function FindHowTo() {
    return (
        <div className="container mb-5">
            <Jumbotron>
                <Container>
                    <h2 className="howToTitle">How To</h2>
                        <hr className="my-4" width="50%" />
            
                            <p>Finding the best education for yourself, can take time, effort, and a whole lot of research. This guide will help you know where to start and how to best approach those companies you may be interested in learning with.</p>
                            <h5 className="text-color">Step One</h5>
                            <p><strong>Figure out what you want to do.</strong></p>
                            <p>Do not rush into it. Do your research. Google searches and Youtube tutorials will be your best friends. Learn everything you can about the industries you are interested in. Find out what the day-to-day routine consists of, what kind of people you will be working with, the type of learning curve you will have to endure, etc.</p>
                            <h5 className="text-color">Step Two</h5>
                            <p><strong>Sign Up.</strong></p>
                            <p>Be confident in your decision and in yourself. Sign up and get started.</p>
                            <h5 className="text-color">Step Three</h5>
                            <p><strong>Give it your all.</strong></p>
                            <p>Work your very hardest. Apply yourself in everything that is asked of you.</p>
        
                </Container>
            </Jumbotron>
        </div>
    );
}

export default FindHowTo;