import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <div className="container-fluid">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="amir"
            // className="d-block w-100"
            src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Join Us Today</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <button type="button" class="btn btn-primary crousel_button">
              Signup Today
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="amir"
            src="https://i.picsum.photos/id/338/2000/1333.jpg?hmac=-sTSfHkgHcFg1Jdut1v8HTVl9S1cyeMQ0OY_8dj30fY"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Jackets For Mens</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button type="button" class="btn btn-primary crousel_button">
              View Jackets
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="amir"
            src="https://i.picsum.photos/id/858/800/400.jpg?hmac=7BTb3Mw-LM6Q0yAYEI9bOXxAaxgOSICR2FzDGOlXXDs"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Shoes For Mens</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button type="button" class="btn btn-primary crousel_button">
              Browse Gallery
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      // </div>
    );
  }
}

export default ImageSlider;
