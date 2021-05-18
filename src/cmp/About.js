import React, { useState } from 'react';
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Footer from "./footer";
import { Redirect} from "react-router-dom";


function About() {
    const [expanded, setExpanded] = React.useState(false);
    const [loggedIn, setLoggedIn] = useState(true);
    const token = localStorage.getItem("accessToken") 

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    if(loggedIn === false){
        return <Redirect to='/' />;
      }
    
    return (
        <div className="About">
        {token== null?setLoggedIn(false):null}
            <div className="photo">
                <div className="centreText">
                    <h1 className="centreTextTop"><strong>About Us</strong></h1>
                    <h3 className="centreTextTopDesc">Welcome to Clothing Solutions</h3>
                </div>
            </div>
            <div className="AboutCard">
                <div className="AboutCardSize">
                    <h1 className="AboutCardSizeTitle"><strong>Who Are We</strong></h1><br />
                    <h4 className="AboutCardSizeContent">We are a team of young tailor, fashion designers, cloth printer dreaming of becoming the best in our field.</h4>
                </div>
                <div className="AboutCardSize">
                    <h1 className="AboutCardSizeTitle">Our Mission</h1><br />
                    <h4 className="AboutCardSizeContent">Our Mission is to provide best quality product with utmost satisfaction with cheap price</h4>
                </div>
                <div className="AboutCardSize">
                    <h1 className="AboutCardSizeTitle">What We Provide</h1><br />
                    <ul class="AboutCardList">
                        <li className="AboutCardSizeContent">High Quality Product</li>
                        <li className="AboutCardSizeContent">Best Service</li>
                        <li className="AboutCardSizeContent">Cheap Price</li>
                    </ul>
                </div>
            </div>
            <div className="ChooseUs">
                <div className="ChooseUsImage"></div>
                <div className="ChooseUsTitle">
                    <strong className="font_increase">Why Choose Us?</strong><br /><br /><br />
                    <Accordion className="accodionColor" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            Best Quality Designs
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
                    </Accordion>
                    <Accordion className="accodionColor" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            24x7 Live Support
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
                    </Accordion>
                    <Accordion className="accodionColor" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            Cheapest Product
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
                    </Accordion>
                    <Accordion className="accodionColor" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            Experienced Designer
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <div className="styleGrid">
                <div className="div1">
                    <div className="image" style={{ backgroundImage: "url(/image/Anirudh.jpg)" }}></div>
                    <div className="text">
                        <h2 className="styleGridDesc">Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. </h2><br /><br />
                        <h3 className="styleGridName">Anirudh Tiwari</h3>
                        <h5 className="styleGridJob">CEO, CLOTHING SOLUTIONS </h5>
                    </div>
                </div>
                <div className="div2">
                    <div className="image2"></div>
                    <div className="text">
                        <h2 className="styleGridDesc">Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. </h2><br /><br />
                        <h3 className="styleGridName">Sarah Jones</h3>
                        <h5 className="styleGridJob">Fashion Designer </h5>
                    </div>
                </div>
                <div className="div2">
                    <div className="image3"></div>
                    <div className="text">
                        <h2 className="styleGridDesc">Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. </h2><br /><br />
                        <h3 className="styleGridName">Sarah Jones</h3>
                        <h5 className="styleGridJob">Fashion Designer </h5>
                    </div>
                </div>
            </div>
            <div className="ServiceContact">
                <strong>Would you like to join our team?</strong>
                <button className="ServiceContactButton">+91-9910231951</button>
            </div>
            <div className="map">
                <div><iframe className="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3911402177378!2d77.2589089144084!3d28.67794398877647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc5e54e6b163%3A0x523ae20fe007eccc!2sDr.%20Akhilesh%20Das%20Gupta%20Institute%20of%20Technology%20%26%20Management!5e0!3m2!1sen!2sin!4v1619524376198!5m2!1sen!2sin" width="806" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe></div>
                <div className="mapTextdiv">
                    <i className="mapText" > Contact Us</i><br /><br />
                    <i class="fa fa-map-marker mapIcon" aria-hidden="true"><span className="mapIconTextLocation">Adgitm Shahdara, New Delhi </span><br /></i><br /><br />
                    <i class="fa fa-envelope mapIcon" aria-hidden="true"><span className="mapIconTextEnvolope">Support@clothingsolutions.com </span></i><br />< br />
                    <i class="fa fa-phone mapIcon" aria-hidden="true"><span className="mapIconTextPhone">+91 99102 31951 </span></i><br />< br />
                    <i class="fa fa-mobile mapIcon" aria-hidden="true"><span className="mapIconTextMobile">+91 83739 34787 </span></i><br />
                </div>
            </div><br /><br /><br /><br /><br /><br />

            <Footer />
        </div>
    )
}

export default About
