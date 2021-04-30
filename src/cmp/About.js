import React from 'react'
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Footer from "./footer";

function About() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className="About">
            <div className="photo">
                <div className="centreText">
                    <h1 className="centreTextTop"><strong>About Us</strong></h1>
                    <h3>Welcome to Clothing Solutions</h3>
                </div>
            </div>
            <div className="AboutCard">
                <div className="AboutCardSize">
                    <h1><strong>Who Are We</strong></h1><br />
                    <h4>We are a team of young tailor, fashion designers, cloth printer dreaming of becoming the best in our field.</h4>
                </div>
                <div className="AboutCardSize">
                    <h1>Our Mission</h1><br />
                    <h4>Our Mission is to provide best quality product with utmost satisfaction with cheap price</h4>
                </div>
                <div className="AboutCardSize">
                    <h1>What We Provide</h1><br />
                    <ul class="AboutCardList">
                        <li>High Quality Product</li>
                        <li>Best Service</li>
                        <li>Cheap Price</li>
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
                    <div className="image"></div>
                    <div className="text">
                        <h2>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. </h2><br /><br />
                        <h3>Sarah Jones</h3>
                        <h5>Fashion Designer </h5>
                    </div>
                </div>
                <div className="div2">
                    <div className="image2"></div>
                    <div className="text">
                        <h2>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. </h2><br /><br />
                        <h3>Anirudh Tiwari</h3>
                        <h5>CEO, CLOTHING SOLUTIONS </h5>
                    </div>
                </div>
                <div className="div2">
                    <div className="image3"></div>
                    <div className="text">
                        <h2>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non numquam eius modi tempora incidunt. </h2><br /><br />
                        <h3>Sarah Jones</h3>
                        <h5>Fashion Designer </h5>
                    </div>
                </div>
            </div>
            <div className="ServiceContact">
                <strong>Would you like to join our team?</strong>
                <button className="ServiceContactButton">+91-9910231951</button>
            </div>
            <div className="map">
                <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3911402177378!2d77.2589089144084!3d28.67794398877647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc5e54e6b163%3A0x523ae20fe007eccc!2sDr.%20Akhilesh%20Das%20Gupta%20Institute%20of%20Technology%20%26%20Management!5e0!3m2!1sen!2sin!4v1619524376198!5m2!1sen!2sin" width="806" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe></div>
                <div >
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
