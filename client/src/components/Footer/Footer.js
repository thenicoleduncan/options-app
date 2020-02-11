import React from 'react';

import './Footer.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Footer() {
    return (
        <div>

            <MDBFooter className="font-small pt-4 mt-4">
                <MDBContainer fluid className="text-md-left">
                    <MDBRow>
                        <MDBCol md="5" className="noPaddingRight">
                                <h5 className="title"><strong>Tell us your success stories!</strong></h5>
                                <p>
                                    Email us at <a href="...">success@options.com</a>.
                                </p>
                        </MDBCol>
                        <MDBCol md="7" className="text-right">
                                <h5 className="title"><strong>Follow us on social</strong></h5>
                                    <a href="https://www.facebook.com"><img className="icon" src="/facebook.PNG" alt="facebook"></img></a>                                    
                                    
                                    <a href="https://www.instagram.com"><img className="icon" src="/instagram.PNG" alt="instagram"></img></a>
                                                                 
                            
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