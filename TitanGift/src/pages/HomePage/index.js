import Slider from "pages/Slider";
import React from "react";
import News from "./components/LatesNews";
import NewProducts from "./components/NewProducts";
import OurProducts from "./components/OurProducts";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="app_container">
      <div className="grid wide">
        <Slider />
        <div className="row">
          <div className="thumb ">
            <img
              src={
                "https://storage.googleapis.com/cdn.nhanh.vn/store2/75104/bn/z2485697227889_b13de7c7c87adc923e9724a682e0cbbf.jpg"
              }
              className="img-thumb l-6 c-6"
            />

            <img
              src={
                "https://storage.googleapis.com/cdn.nhanh.vn/store2/75104/bn/z2484009234528_5ca25284e04977dcd7b77ce8318121fd.jpg"
              }
              className="img-thumb l-6 c-6"
            />
          </div>
          <NewProducts />
          <OurProducts />
          <News />
        </div>
      </div>
      <div className="background-maintain">
        <img
          className="background-maintain_img"
          src="https://www.xtrafondos.com/en/descargar.php?id=4011&resolucion=3840x2160"
        />
        <div className="infor">
          <img
            className="infor-img"
            src="https://product.hstatic.net/1000124630/product/197614310_1513160419030350_7483541533790665609_n_12f2f53db26840a5a8ea344568133f9c_large.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
