import FavoriteIcon from "@material-ui/icons/Favorite";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import api from "api";
import QuickViewDialog from "layouts/QuickView";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NewProducts.css";
const NewProducts = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const retrieveApi = async () => {
    try {
      let response = await api.get("/products", {
        params: {
          _limit: 8,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error, "Error");
    }
  };

  useEffect(() => {
    const getAllNewProducts = async () => {
      const newProducts = await retrieveApi();
      if (newProducts) setNewProducts(newProducts);
    };
    getAllNewProducts();
  }, []);

  return (
    <div className="new-product">
      <div className="title_detail">
        <h2 className="new-product__title">Sản phẩm mới</h2>
      </div>
      <div className="new-product__list">
        {newProducts.map(product => (
          <div key={product.id} className="new-product__item col l-3 c-6">
            <div className="new-product__item-link">
              <Link to={`/product/${product.id}`}>
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
                  <div className="quick-icon" onClick={() => setIsOpen(!isOpen)}>
                    <FavoriteIcon />
                  </div>
                </Link>
                {isOpen && <QuickViewDialog open={true} onClose={() => setIsOpen(false)} products={newProducts} />}
              </div>
            </div>

            <div className="new-product__item-detail">
              <h3 className="new-product__item-title">{product.name}</h3>
              <span>
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
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

export default NewProducts;
