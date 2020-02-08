import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import './ResourceButton.css';
import { useAuth0 } from "../../react-auth0-spa";

function ResourceButton() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();



    return (
        // <div className="container">

            <div className="container">
                {!isAuthenticated && (
                    <button className="btn text-light" onClick={() => loginWithRedirect({})}>Log in</button>
                )}

                {isAuthenticated && <button className="btn text-light" onClick={() => logout()}>Log out</button>}
            </div>

        // </div>
    );
}

export default ResourceButton;