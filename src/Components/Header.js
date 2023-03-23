import React from "react";
// import Flickity from "react-flickity-component";
import campus from "../Assets/campus.jpg";
import ccs1 from "../Assets/ccs.png";
import pic from "../Assets/pic.jpg";
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
          src={uni}
          style={{ width: "100vw", height: "70vh", objectFit: "cover" }}
        />
      </div>

      <div>
        {" "}
        <img
          src={pic}
          style={{ width: "100vw", height: "70vh", objectFit: "cover" }}
        />
      </div>

      <div>
        <img
          src={campus}
          style={{ width: "100vw", height: "70vh", objectFit: "cover" }}
        />
      </div>
      {/* );
      })} */}
    </Slider>
  );
}

export default Header;
