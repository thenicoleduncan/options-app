import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import './AddResourceBtn.css';
import { useAuth0 } from "../../react-auth0-spa";



function AddResourceBtn() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div className="container">
            {!isAuthenticated && (
                <p className="ml-3">Log in to Add a Resource</p>
            )}

            {isAuthenticated && <a href="/Form"><button className="btn text-light">Add a Resource</button></a>}

        </div>
    );
}

export default AddResourceBtn;