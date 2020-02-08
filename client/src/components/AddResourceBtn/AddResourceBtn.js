import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import './AddResourceBtn.css';
import { useAuth0 } from "../../react-auth0-spa";



function AddResourceBtn() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <button onClick={() => loginWithRedirect({})}>Log in to add a resource</button>
            )}

            {isAuthenticated && <button>Add a Resource</button>}

        </div>
    );
}

export default AddResourceBtn;