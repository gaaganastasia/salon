import React from "react";
import "./People.css";
import human from "../../images/human.jpg";

function People() {
  return(
    <div className="people" id="people">
      <h2 className="people__title">Мастера</h2>
      <div className="people__container">
        <div className="people__block">
          <img src={human} alt="портрет" className="people__img"></img>
          <h3 className="people__name">Lorem ipsum</h3>
          <p className="people__info">Lorem ipsum dolor</p>
        </div>
        <div className="people__block">
          <img src={human} alt="портрет" className="people__img"></img>
          <h3 className="people__name">Lorem ipsum</h3>
          <p className="people__info">Lorem ipsum dolor</p>
        </div>
        <div className="people__block">
          <img src={human} alt="портрет" className="people__img"></img>
          <h3 className="people__name">Lorem ipsum</h3>
          <p className="people__info">Lorem ipsum dolor</p>
        </div>
        <div className="people__block">
          <img src={human} alt="портрет" className="people__img"></img>
          <h3 className="people__name">Lorem ipsum</h3>
          <p className="people__info">Lorem ipsum dolor</p>
        </div>
        <div className="people__block">
          <img src={human} alt="портрет" className="people__img"></img>
          <h3 className="people__name">Lorem ipsum</h3>
          <p className="people__info">Lorem ipsum dolor</p>
        </div>
        <div className="people__block">
          <img src={human} alt="портрет" className="people__img"></img>
          <h3 className="people__name">Lorem ipsum</h3>
          <p className="people__info">Lorem ipsum dolor</p>
        </div>
        <div className="people__block">
          <img src={human} alt="портрет" className="people__img"></img>
          <h3 className="people__name">Lorem ipsum</h3>
          <p className="people__info">Lorem ipsum dolor</p>
        </div>
        <div className="people__block">
          <img src={human} alt="портрет" className="people__img"></img>
          <h3 className="people__name">Lorem ipsum</h3>
          <p className="people__info">Lorem ipsum dolor</p>
        </div>
      </div>
    </div>
  )
}

export default People;