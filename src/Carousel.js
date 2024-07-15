import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faFootballBall, faChild, faTree, faHotel, faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import './Carousel.css';

function Carousel() {
  const [imageSrc, setImageSrc] = useState("commercial.jpg"); // Initial image source state

  const handleButtonClick = (newImageSrc) => {
    setImageSrc(newImageSrc);
  };

  return (
    <div className="container-fluid-new">
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center" style={{ backgroundColor: "white", padding: "20px" }}>
          <h2 style={{ color: "steelblue", fontWeight: "normal" }}>Discover Lifestyle</h2>
          <h1 style={{ color: "steelblue", marginTop: "-40px" }}>Amenities</h1>
          <h4 style={{ color: "steelblue" }}>Occupying a land area of 33,000 square meters, Makadi Heights' stunning clubhouse.</h4>
          <div className="button-group">
            <div className="d-flex">
              <button type="button" className="btncarousel" onClick={() => handleButtonClick("commercial.jpg")}>
                <FontAwesomeIcon icon={faShoppingCart} className="icon" />
                COMMERCIAL AREAS
              </button>
              <button type="button" className="btncarousel" onClick={() => handleButtonClick("sports.jpg")}>
                <FontAwesomeIcon icon={faFootballBall} className="icon" />
                SPORTS FACILITIES
              </button>
            </div>
            <div className="d-flex">
              <button type="button" className="btncarousel" onClick={() => handleButtonClick("kids.jpg")}>
                <FontAwesomeIcon icon={faChild} className="icon" />
                KIDS FRIENDLY AREAS
              </button>
              <button type="button" className="btncarousel" onClick={() => handleButtonClick("park.jpg")}>
                <FontAwesomeIcon icon={faTree} className="icon" />
                CENTRAL PARK
              </button>
            </div>
            <div className="d-flex">
              <button type="button" className="btncarousel" onClick={() => handleButtonClick("hotel.jpg")}>
                <FontAwesomeIcon icon={faHotel} className="icon" />
                HOTELS
              </button>
              <button type="button" className="btncarousel" onClick={() => handleButtonClick("hospital.jpg")}>
                <FontAwesomeIcon icon={faClinicMedical} className="icon" />
                MEDICAL FACILITIES
              </button>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <img
            src={imageSrc}
            className="rounded img-fluid"
            alt="carousel"
            style={{ objectFit: "cover", width: "100%", height: "60%", marginTop:"200px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
