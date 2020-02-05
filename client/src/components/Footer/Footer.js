import React from 'react';

import './Footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Footer() {
    return (
        <div>

            <MDBFooter className="font-small pt-4 mt-4 bg-dark text-light">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <h5 className="title">Footer Content</h5>
                            <p>
                                Here you can use rows and columns here to organize your footer
                                content.
              </p>
                        </MDBCol>
                        <MDBCol md="6">
                            <h5 className="title">Follow us on social</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="#!">Facebook</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Instagram</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Twitter</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Youtube</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="/"> Options</a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </div>
    );
}

export default Footer;