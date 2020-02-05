import React from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import './ResourceButton.css';

import { useAuth0 } from '../../react-auth0-spa';

function ResourceButton() {
    const { loading } = useAuth0();

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            

        </div>
    );
}

export default ResourceButton;