import React, { useEffect, useState } from "react";
import "./OurProducts.css";
import { Link } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FavoriteIcon from "@material-ui/icons/Favorite";
import api from "api";

const OurProducts = () => {
  const [listProducts, setListProducts] = useState([]);
  const retrieveApi = async () => {
    try {
      const response = await api.get("/keyChain", {
        params: {
          _limit: 8,
        },
      });
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const getListProducts = async () => {
      const ourProducts = await retrieveApi();
      if (ourProducts) setListProducts(ourProducts);
    };
    getListProducts();
  }, []);
  return (
    <div className="our-products">
      <div className="title_detail">
        <h2 className="our-product__title">SẢN PHẨM CỦA CHÚNG TÔI</h2>
      </div>
      <div className="new-product__list">
        {listProducts.map(product => (
          <div className="new-product__item col l-3 c-3">
            <div className="new-product__item-link">
              <Link to="/">
                <img src={product.imageUrl} className="new-product__img" />
                <div className="product-hover">
                  <div className="add-cart">Mua hàng</div>
                </div>
              </Link>
              <div className="product-hover__icon">
                <Link to="/">
                  <div className="quick-icon">
                    <VisibilityIcon />
                  </div>
                </Link>
                <Link to="/">
                  <div className="quick-icon">
                    <FavoriteIcon />
                  </div>
                </Link>
              </div>
            </div>

            <div className="new-product__item-detail">
              <h3 className="new-product__item-title">{product.name} </h3>
              <span>
                <StarBorderIcon />
              </span>
              <p className="new-product__item-price">{product.price} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
