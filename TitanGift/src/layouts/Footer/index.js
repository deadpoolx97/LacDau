import React, { Component } from "react";
import "./Footer.css";
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="grid wide">
          <div className="row">
            <div className="col l-2-4 m-4 c-6 footer__margin">
              <h3 className="footer__heading">Chăm sóc khách hàng</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="/#" className="footer-item__link">
                    Trung Tâm Trợ Giúp
                  </a>
                </li>
                <li className="footer-item">
                  <a href="/#" className="footer-item__link">
                    Hướng Dẫn Bán Hàng
                  </a>
                </li>
                <li className="footer-item">
                  <a href="/#" className="footer-item__link">
                    Hướng Dẫn Bán Hàng
                  </a>
                </li>
                <li className="footer-item">
                  <a href="/#" className="footer-item__link">
                    Thanh Toán
                  </a>
                </li>
                <li className="footer-item">
                  <a href="/#" className="footer-item__link">
                    Vận Chuyển
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l-2-4 m-4 c-6 footer__margin">
              <h3 className="footer__heading"> Giới thiệu </h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="/#" className="footer-item__link">
                    Giới thiệu
                  </a>
                </li>
                <li className="footer-item">
                  <a href="/#" className="footer-item__link">
                    Điều Khoản
                  </a>
                </li>
                <li className="footer-item">
                  <a href="/#" className="footer-item__link">
                    Chính Hãng
                  </a>
                </li>
                <li className="footer-item">
                  <a href="/#" className="footer-item__link">
                    Chính Sách Bảo Mật
                  </a>
                </li>
                <li className="footer-item">
                  <a href="/#" className="footer-item__link">
                    Liên Hệ Với Truyền Thông
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l-2-4 m-4 c-6 pay__m footer__margin">
              <ul className="footer-list">
                <img src="/" alt="" />
              </ul>
              <ul className="footer-list">
                <img src="https://storage.googleapis.com/cdn.nhanh.vn/store2/75104/store_1592241796_72.png" alt="" />
              </ul>
            </div>
            <div className="col l-2-4 m-4 c-6 footer__margin"></div>
            <div className="col l-2-4 m-4 c-6 footer__margin">
              <h3 className="footer__heading">Mạng xã hội</h3>
              <ul className="footer-list">
                <li className="footer-item">
                  <a href="/#" className="footer-item__link">
                    <i className="footer-item__icon fa fa-facebook" />
                    Facebook
                  </a>
                </li>
                <li className="footer-item">
                  <a href="/#" className="footer-item__link">
                    <i className="footer-item__icon fa fa-instagram" />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
