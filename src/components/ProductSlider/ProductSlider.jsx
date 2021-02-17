
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () =>  {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const style = {
        margin:"20px",
        height: 300,
        color: "#fff",

    };
    return (
      <Slider {...settings}>

      </Slider>
    );
  }

  export default SimpleSlider;
