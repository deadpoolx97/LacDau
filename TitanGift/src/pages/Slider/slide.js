import React from "react";
import "./slide.css";

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
  };
  return <div className="slide" style={styles} />;
};

export default Slide;
