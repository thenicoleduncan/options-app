import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import './NavbarHome.css';
import { useAuth0 } from "../../react-auth0-spa";


function NavbarHome() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();



    return (
        <div className="container">

            <div className="row">

                <div className="col-lg-4">
                    <a href="/"><img className="logo" src="/options-main-logo.PNG" alt="Options Logo"></img></a>
                </div>

                <div className="col-lg-8">
                    <Navbar className="pt-5 navnav" variant="dark">
                        <Nav className="mr-auto">
                            <NavLink className="p-3" to="/">Home </NavLink>
                            <NavLink className="p-3" to="/Blog">Blog </NavLink>
                            <NavLink className="p-3" to="/Resources">Resources </NavLink>
                            <NavLink className="p-3" to="/FindOpportunities">Finding Opportunities </NavLink>
                            <a href="https://www.facebook.com/"><img src="/facebook.PNG" className="icon" ></img></a>
                            <a href="https://www.instagram.com/"><img src="/instagram.PNG" className="icon"></img></a>
                        </Nav>
                    </Navbar>
                    {/* comment */}
                </div>

            </div>
        </div>
    );
}

export default NavbarHome;