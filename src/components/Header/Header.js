import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return(
    <header className="header">
      <Link to="/salon" className="header__logo">Цирюльникъ</Link>
      <div className="header__nav">
        <a href="#about-us" className="header__link">О нас</a>
        <a href="#people" className="header__link">Мастера</a>
        <Link to="/salon/online-appointment" className="header__link">Онлайн-запись</Link>
        <Link to="/salon/my-appointments" className="header__link">Мои записи</Link>
        <Link to="/salon/profile" className="header__link">Личный кабинет</Link>
      </div>
    </header>
  )
}

export default Header;