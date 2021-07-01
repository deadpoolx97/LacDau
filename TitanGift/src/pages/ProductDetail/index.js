import api from "api";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

import "./ProductDetail.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const [listProducts, setListProducts] = useState([]);
  const [count, setCount] = useState(1);

  const handleIncreaseClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleDecreaseClick = () => {
    setCount(count + 1);
  };

  const productsList = async () => {
    try {
      const response = await api.get("/products/");
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      const products = await productsList();
      if (products) setListProducts(products);
    };
    getProducts();
  }, []);
  const thisProduct = listProducts.find(product => product.id === productId);
  const price = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(thisProduct?.price);

  return (
    <div className="app_container">
      <div className="grid wide">
        <div className="row product-detail">
          <div className="col l-6">
            <img className=" product-detail_img" src={thisProduct?.imageUrl} />
          </div>
          <div className="col l-6">
            <div className="mt-10 product-detail_title">{thisProduct?.name}</div>
            <div className="mt-10 product-detail_price">{price}</div>
            <div
              className={
                thisProduct?.status === true ? "mt-10 product-detail_status-0" : "mt-10 product-detail_status-1"
              }
            >
              {thisProduct?.status === true ? "Còn hàng" : "Hết hàng"}
            </div>
            <hr />
            <div className="mt-10">
              <span>
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
                <StarBorderIcon />
              </span>
            </div>
            <div className="mt-10 product-detail_description">{thisProduct?.described}</div>

            <div className="product-detail_cre">
              <RemoveIcon className="product-detail_icon" onClick={handleIncreaseClick} />
              <div className="count">{count}</div>
              <AddIcon className="product-detail_icon" onClick={handleDecreaseClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
