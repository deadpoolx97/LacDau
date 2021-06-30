import React from "react";
import "./NewProducts.css";
import { Link } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FavoriteIcon from "@material-ui/icons/Favorite";
const NewProducts = () => {
  return (
    <div className="new-product">
      <div className="title_detail">
        <h2 className="new-product__title">Sản phẩm mới</h2>
      </div>
      <div className="new-product__list">
        <div className="new-product__item col l-3 c-3">
          <div className="new-product__item-link">
            <Link to="/">
              <img
                src="https://storage.googleapis.com/cdn.nhanh.vn/store2/75104/ps/20210504/O1CN01a4Mj0o1sjMd19kn7P___971835802_0_cib.jpg"
                className="new-product__img"
              />
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
            <h3 className="new-product__item-title">quạt </h3>
            <span>
              <StarBorderIcon />
            </span>
            <p className="new-product__item-price">price </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
