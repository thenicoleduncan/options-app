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
                <Nav className="mr-auto">
                    <NavLink className="pr-2" to="/">home</NavLink>
                    <NavLink className="pr-2" to="/Blog">blog</NavLink>
                    <NavLink className="pr-2" to="/Resources">resources</NavLink>
                    <NavLink className="pr-2" to="/FindOpportunities">find opportunities</NavLink>
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