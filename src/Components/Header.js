import React from "react";
// import Flickity from "react-flickity-component";
import header1 from "../Assets/header1.jpg";
import header2 from "../Assets/header2.jpg";
import header3 from "../Assets/header3.jpg";
import uni from "../Assets/uni.jpg";
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
      {/* {[...Array(4)].map((el) => {
        return ( */}
      <div>
        <img
          src={header1}
          style={{ width: "100vw", height: "70vh", objectFit: "cover" }}
        />
      </div>

      <div>
        {" "}
        <img
          src={header2}
          style={{ width: "100vw", height: "70vh", objectFit: "cover" }}
        />
      </div>

      <div>
        <img
          src={header3}
          style={{ width: "100vw", height: "70vh", objectFit: "cover" }}
        />
      </div>
      {/* );
      })} */}
    </Slider>
  );
}

export default Header;
