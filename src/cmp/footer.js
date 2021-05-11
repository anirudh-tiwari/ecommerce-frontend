import React from 'react'

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footerText">
                    <h1 className="footerTitle"><strong>Get In Touch</strong></h1><br />
                    <h4 className="footerElements">V-32, Shadara</h4>
                    <h4 className="footerElements">New Delhi</h4>
                    <h4 className="footerElements">support@anirudh.com​</h4>
                    <h4 className="footerElements">+91 991-023-1951</h4>
                    {/* <h4 className="footerElements">+91 837-393-4787</h4> */}
                </div>
                <div className="footerText" >
                    <h1 className="footerTitle"><strong>Company</strong></h1><br />
                    <h4 className="footerElements">Home</h4>
                    <h4 className="footerElements">About</h4>
                    <h4 className="footerElements">Services</h4>
                    <h4 className="footerElements">Contact</h4>
                </div>
                <div className="footerText">
                    <h1 className="footerTitle"><strong>Business</strong></h1><br />
                    <h4 className="footerElements">Projects</h4>
                    <h4 className="footerElements">Our Team</h4>
                    <h4 className="footerElements">Facts</h4>
                    <h4 className="footerElements">Customer</h4>
                </div>
                <div className="footerText footerSocialmedia">
                    <a class="fa fa-instagram icon" href="https://www.instagram.com/tiwari_anirudh018/"></a>
                    <span><i class="fa fa-facebook-square icon"></i></span>
                    <span><i class="fa fa-twitter-square icon"></i></span>
                    <span><i class="fa fa-google icon"></i></span>
                    <span><i class="fa fa-linkedin icon"></i></span>
                </div>
            </div>
            <div className="copyright">
                <h3 className="copyrightText">Copyright © 2021 Developers Infotech | Powered by Developer Anirudh</h3>
            </div>
        </div>
    )
}

export default Footer
