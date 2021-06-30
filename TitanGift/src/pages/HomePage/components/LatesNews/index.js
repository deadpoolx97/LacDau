import React from "react";
import "./LatestNews.css";

const News = () => {
  return (
    <div className="news">
      <div className="title_detail">
        <h2 className="news__title">TIN TỨC MỚI NHẤT</h2>
      </div>
      <div className="news_list">
        <div className="news_prod l-4 c-4">
          <div className="news_prod-link">
            <img
              src="https://storage.googleapis.com/cdn.nhanh.vn/store2/75104/art/9c4101dbe44c1e12475d.jpg"
              className="news_img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
