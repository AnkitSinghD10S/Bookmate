import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const images = [
    "https://www.bookswagon.com/bannerimages/2_inr.jpg?v=3.8=Slide+1",
    "https://www.bookswagon.com/bannerimages/81_inr.jpg?v=3.8=Slide+2",
    "https://www.bookswagon.com/bannerimages/83_inr.jpg?v=3.8=Slide+3",
    "https://www.bookswagon.com/bannerimages/70_inr.jpg?v=3.8=Slide+4"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full px-6 py-4">
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index} className="flex justify-center h-auto">
            <img src={url} alt={`Slide ${index + 1}`} className="w-full object-cover rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;