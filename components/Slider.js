import Slider from "react-slick";
import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Blurb2 from "./cards/Blurb2";

import Image from 'next/image';
import { LoadingButton } from "@mui/lab";
import { Container, Divider, TextField , Stack, TextareaAutosize,  } from "@mui/material";
import { Box, Typography } from '@mui/material';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
          className={className}
          // style={{ ...style, display: "block", background: "green" }}
          onClick={onClick}
        >
          <Image width='100px' height='100px' src='/img/rightNav.svg' alt='movement'/>
          
          </div>
      );
    
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
          className={className}
          // style={{ ...style, display: "block", background: "red" }}
          onClick={onClick}
        >
          <Image width='100px' height='100px' src='/img/leftNav.svg' alt='movement'/>
        </div>
      );
  }
const SliderComp = () => {
    // regular slider settings
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };
    //   slide to view next slider settings
    // const settings = {
    //     className: "center",
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 5,
    //     swipeToSlide: true,
    //     afterChange: function(index) {
    //       console.log(
    //         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //       );
    //     }}
// custom arrow settings
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     nextArrow: <SampleNextArrow />,
    //     prevArrow: <SamplePrevArrow />
    //   };

    // swipe to slide settings
    // const settings = {
    //     className: "center",
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 3,

    //     nextArrow: <SampleNextArrow />,
    //     prevArrow: <SamplePrevArrow />,
    //     swipeToSlide: true,
    //     afterChange: function(index) {
    //       console.log(
    //         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //       );
    //     }
    //   };

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
  return (
    <div className="">
        <Slider {...settings} >
        <Blurb2
          title='“World renowned team of experts doing amazing things”' 
          name='Mr. Wale Ojo' 
          firm='Microsoft Nigeria1'
          />
        <Blurb2
          title='“World renowned team of experts doing amazing things”' 
          name='Mr. Wale Ojo' 
          firm='Microsoft Nigeria2'
          />
        <Blurb2
          title='“World renowned team of experts doing amazing things”' 
          name='Mr. Wale Ojo' 
          firm='Microsoft Nigeria3'
          />
        <Blurb2
          title='“World renowned team of experts doing amazing things”' 
          name='Mr. Wale Ojo' 
          firm='Microsoft Nigeria4'
          />
        <Blurb2
          title='“World renowned team of experts doing amazing things”' 
          name='Mr. Wale Ojo' 
          firm='Microsoft Nigeria5'
          />
        </Slider>
      </div>
  )
}

export default SliderComp;