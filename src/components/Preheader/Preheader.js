import React from "react";
import "./Preheader.css";
//import { Link } from "react-router-dom";

function Preheader() {
  return(
    <div className="preheader">
      <div className="preheader__info">
        <div className="preheader__info-icon"></div>
        <p className="preheader__info-text">+7 (391) 214-65-00    |    Работаем 7 дней в неделю    |    9:00 — 21:00</p>
      </div>
      <div className="preheader__links">
        <div className="preheader__links-icon"></div>
        <p className="preheader__links-text">Войти    |    Регистрация</p>
      </div>
    </div>
  )
}

export default Preheader;