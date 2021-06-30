import React from "react";
import { Link } from "react-router-dom";

const MenuWrapper = () => {
  return (
    <>
      <div className="header-menu">
        <div className="grid wide header-menu__wrap ">
          <input type="checkbox" id="chk" />
          <div className="ok">
            <label htmlFor="chk" className="show-menu-btn">
              <i className="fas fa-bars" />
            </label>
          </div>
          <div className="row menu  ">
            <div className="col l-3 m-12 c-12 header-menu__list-item-menu-all  ">
              <a
                href="/#"
                className="header-menu__list-item-link header-menu__list-item-menu"
              >
                Danh mục sản phẩm
                <i className="fa fa-sort-down header-down" />
              </a>
              <ul className="header-menu__subnav">
                <li className="header-menu__subnav-item header-menu__subnav-item-all">
                  <Link to="/allItem" className="header-menu__subnav-item-link">
                    <img
                      src="./images/all-icon.png"
                      alt=""
                      className="header-menu__subnav-item-img"
                    />
                    TẤT CẢ SẢN PHẨM
                    <i className="fa fa-caret-right fas-right" />
                  </Link>
                  <ul className="header-menu__subnav-item-all-item">
                    <li className="header-menu__subnav-item-all-item-pro">
                      <div className="grid a">
                        <div className="l-9 all__item">
                          <ul className="all__item-list">
                            <li className="l-4 all__item-list-item">
                              <a href="/#">Tất Cả Vũ Trụ</a>
                            </li>
                            <li className="l-4 all__item-list-item">
                              <a href="/#"> Giáng Sinh - Decor</a>
                            </li>
                            <li className="l-4  all__item-list-item">
                              <a href="/#">Quà tặng Giáng Sinh</a>
                            </li>
                            <li className="l-4  all__item-list-item">
                              <a href="/#">Đèn - Space Light</a>
                            </li>
                            <li className="l-4  all__item-list-item">
                              <a href="/#">Móc chìa khoá</a>
                            </li>
                            <li className="l-4  all__item-list-item">
                              <a href="/#">Loa - Space Speaker</a>
                            </li>
                            <li className="l-4 all__item-list-item">
                              <a href="/#">Đồng Hồ</a>
                            </li>
                            <li className="l-4 all__item-list-item">
                              <a href="/#">Bình Nước</a>
                            </li>
                            <li className=" l-4 all__item-list-item">
                              <a href="/#">Black Friday</a>
                            </li>
                            <li className=" l-4 all__item-list-item">
                              <a href="/#">Space Gift Set</a>
                            </li>
                            <li className="l-4 all__item-list-item">
                              <a href="/#">Case AirPods</a>
                            </li>
                            <li className="l-4 all__item-list-item">
                              <a href="/#">Quà Tặng Cho Nam</a>
                            </li>
                            <li className="l-4 all__item-list-item">
                              <a href="/#">Quà Tặng Cho Nữ</a>
                            </li>
                            <li className="l-4 all__item-list-item">
                              <a href="/#">Quà Tặng Cặp Đôi</a>
                            </li>
                            <li className="l-4 all__item-list-item">
                              <a href="/#">Cốc</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col l-3 none">
                          <img
                            className="item-img"
                            src="https://theme.hstatic.net/1000384816/1000493587/14/vertical_menu_last_col_img_1.png?v=307"
                            alt=""
                          />
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="header-menu__subnav-item">
                  <Link to="/allItem" className="header-menu__subnav-item-link">
                    <img
                      src="./images/earth-icon.png"
                      alt=""
                      className="header-menu__subnav-item-img"
                    />
                    Sống xanh bảo vệ hành tinh
                  </Link>
                </li>
                <li className="header-menu__subnav-item">
                  <Link to="/allItem" className="header-menu__subnav-item-link">
                    <img
                      src="./images/gift-his-icon.png"
                      alt=""
                      className="header-menu__subnav-item-img"
                    />
                    Tặng gì cho người ta nhỉ ?
                  </Link>
                </li>
                <li className="header-menu__subnav-item">
                  <a href="/#" className="header-menu__subnav-item-link">
                    <img
                      src="./images/couple-icon.png"
                      alt=""
                      className="header-menu__subnav-item-img"
                    />
                    Lựa đồ có đôi có cặp
                  </a>
                </li>
                <li className="header-menu__subnav-item">
                  <Link to="/manages" className="header-menu__subnav-item-link">
                    <img
                      src="./images/go-icon.png"
                      alt=""
                      className="header-menu__subnav-item-img"
                    />
                    Đồ cần thiết cho 1 chuyến đi
                  </Link>
                </li>
              </ul>
            </div>
            <div className=" header-list ">
              <Link
                to="/manages"
                className="col l-3  m-12 c-12 header-menu__list-item-menu"
              >
                <div className="header-menu__list-item-link">
                  Du hành khắp nơi
                </div>
              </Link>
              <Link
                to="/products"
                className="col l-3  m-12 c-12 header-menu__list-item-menu"
              >
                <div className="header-menu__list-item-link">
                  Câu chuyện kẻ du hành
                </div>
              </Link>
              <Link
                to="/newYear"
                className="col l-3  m-12 c-12 header-menu__list-item-menu"
              >
                <div to="/newYear" className="header-menu__list-item-link">
                  Tết
                </div>
              </Link>
              <Link
                to="/map"
                className="col l-3  m-12 c-12 header-menu__list-item-menu hide"
              >
                <div className="header-menu__list-item-link">
                  Cửa hàng - liên hệ
                </div>
              </Link>
            </div>{" "}
            <label htmlFor="chk" className="hide-menu-btn">
              <i className="fas fa-times" />
            </label>
          </div>
        </div>
      </div>
      {/* <div className="ok">
        <input type="checkbox" id="chk" />
        <label htmlFor="chk" className="show-menu-btn">
          <i className="fas fa-bars" />
        </label>
        <ul className="menu">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Works</a>
          <a href="/">Contacts</a>
          <label htmlFor="chk" className="hide-menu-btn">
            <i className="fas fa-times" />
          </label>
        </ul>
      </div> */}
    </>
  );
};

export default MenuWrapper;
