import { HeaderWrapper, MenuWrapper } from "./components";
import "./Header.css";
import React, { useState } from "react";
import LoginDialog from "./components/LoginDialog";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-fixed">
        <nav className="header-navbar">
          <ul className="grid wide header-navbar-list">
            <li className="header-navbar-list__item">
              <div className="phone-number">
                <i className="fa fa-phone header-icon" />
                <a className="phone-number__link" href="/#">
                  0347955937
                </a>
              </div>
              <div className="email">
                <i className="fa fa-envelope header-icon" />
                <a className="email__link " href="/#">
                  lenam.khmt@gmail.com
                </a>
              </div>
            </li>
            <li className="header-navbar-list__item header-navbar-user">
              <button className="btn" style={{ height: 34 }} onClick={() => setIsOpen(!isOpen)}>
                <span className="header-navbar-user__name">
                  <i className="fa fa-user header-icon" />
                  Nam lê
                </span>
              </button>
              {isOpen && <LoginDialog open={true} onClose={() => setIsOpen(false)} />}
            </li>
          </ul>
        </nav>
        <HeaderWrapper />
      </div>
      <MenuWrapper />
    </header>
  );
};

export default Header;
