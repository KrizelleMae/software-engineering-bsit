import React from "react";
// import Flickity from "react-flickity-component";
import ccs from "../Assets/bsit.jpg";
// import "../Styles/Flickity.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const flickityOptions = {
  initialIndex: 2,
};

function Header(props) {
  const settings = {
    adaptiveHeight: true,
    dots: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {/* <div>
        <img
          src={ccs}
          style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
        />
      </div>
      <div>
        <img src={ccs} />
      </div>
      <div>
        <img src={ccs} />
      </div> */}
    </Slider>
  );
}

export default Header;
