import React from 'react';
import './PictureDiv.css';

function PictureDiv() {
    return (
        <div className="container">
            <div className="row">
                <img className="col-lg-4" src="img1.PNG"></img>
                <img className="col-lg-4" src="img2.PNG"></img>
                <img className="col-lg-4" src="img3.PNG"></img>
            </div>

            <div className="row mt-4">
            <img className="col-lg-4" src="img4.PNG"></img>
            <img className="col-lg-4" src="img5.PNG"></img>
            <img className="col-lg-4" src="img6.PNG"></img>

            </div>

        </div>
    );
}

export default PictureDiv;