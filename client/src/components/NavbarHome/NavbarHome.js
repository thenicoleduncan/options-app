import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import './NavbarHome.css';

function NavbarHome() {
    return (
        <Navbar className="pt-5 navnav" variant="dark">
            <Nav className="mr-auto">
                <NavLink className="pr-2" to="/">home </NavLink>
                <NavLink className="pr-2" to="/Blog">blog </NavLink>
                <NavLink className="pr-2" to="/Resources">resources </NavLink>
                <NavLink className="pr-2" to="/FindOpportunities">find opportunities </NavLink>
                <NavLink className="pr-2" to="/Login">login </NavLink>
                <NavLink className="pr-2" to="/SignUp">signup</NavLink>
            </Nav>
        </Navbar>
    );
}

export default NavbarHome;