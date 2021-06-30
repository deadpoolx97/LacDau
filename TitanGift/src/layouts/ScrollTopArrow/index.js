import React, { useState } from "react";
import AdbIcon from "@material-ui/icons/Adb";
import "./ScrollTopArrow.css";
import { useEffect } from "react";
const ScrollTopArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll-arrow">
      <AdbIcon
        className="scrollTop"
        onClick={scrollTop}
        style={{ height: 40, width: "40px", display: showScroll ? "flex" : "none" }}
      />
    </div>
  );
};

export default ScrollTopArrow;
