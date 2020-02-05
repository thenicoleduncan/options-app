import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import './NavbarHome.css';
import { useAuth0 } from "../../react-auth0-spa";


function NavbarHome() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();



    return (
        <div>
          <Navbar className="pt-5 navnav" variant="dark">
            <div>
                <img class="logo" src="options-main-logo.PNG" alt="Options Logo"></img>
            </div>
            <Nav className="mr-auto">
                <NavLink className="pr-2" to="/">Home </NavLink>
                <NavLink className="pr-2" to="/Blog">Blog </NavLink>
                <NavLink className="pr-2" to="/Resources">Resources </NavLink>
                <NavLink className="pr-2" to="/FindOpportunities">Find Opportunities </NavLink>
                <NavLink className="pr-2" to="/Login">Login </NavLink>
            </Nav>
        </Navbar>
            
            <div>
                {!isAuthenticated && (
                    <button onClick={() => loginWithRedirect({})}>Log in</button>
                )}

                {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
            </div>
        </div>
    );
}

export default NavbarHome;