import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import './NavbarHome.css';

function NavbarHome() {
    return (
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
                <NavLink className="pr-2" to="/SignUp">Sign Up</NavLink>
            </Nav>
        </Navbar>
    );
}

export default NavbarHome;