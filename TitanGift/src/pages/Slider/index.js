import React, { useState } from "react";
import Slide from "./slide";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const Slider = () => {
  const sliderImg = [
    "https://www.adobe.com/express/create/media_1f78a60f54d4768f60186918e91c3a695f221f849.png?width=2000&format=webply&optimize=medium",
    "https://i.pinimg.com/564x/1f/a5/eb/1fa5eb16020bb5894ab19750a3192093.jpg",
    "https://i.pinimg.com/564x/78/c2/d6/78c2d63d3d653b3b738e1fa64ba2dcc9.jpg",
    "https://i.pinimg.com/564x/98/43/b5/9843b51978c1b450e6bcc67a10667285.jpg",
    "https://i.pinimg.com/236x/39/3b/df/393bdf9effec50d4951a67768cb0ea5c.jpg",
    "https://i.pinimg.com/236x/de/6c/e1/de6ce18ab3440830bd59ae4d79d19722.jpg",
    "https://i.pinimg.com/236x/35/b3/a7/35b3a777fd5db64dedf4ad5002952461.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);

  const prevSlide = () => {
    if (index === 0) {
      setTranslateValue(translateValue);
    } else {
      setIndex(index - 1);
      setTranslateValue(translateValue + slideWidth());
    }
  };

  const nextSlide = () => {
    if (index === sliderImg.length - 1) {
      setIndex(0);
      setTranslateValue(0);
    } else {
      setIndex(index + 1);
      setTranslateValue(translateValue + -slideWidth());
    }
  };

  const slideWidth = () => {
    return document.querySelector(".slide").clientWidth;
  };
  return (
    <div className="slider">
      <div
        className="slider-wrapper"
        style={{
          transform: `translateX(${translateValue}px)`,
          transition: "transform ease-out 0.45s",
        }}
      >
        {sliderImg.map((img, i) => (
          <Slide key={`${i}-${img}`} image={img} />
        ))}
      </div>
      <div className="left-arrow arrow" onClick={prevSlide}>
        <ChevronLeftIcon />
      </div>
      <div className="right-arrow arrow" onClick={nextSlide}>
        <ChevronRightIcon />
      </div>
    </div>
  );
};

export default Slider;
