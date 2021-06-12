import React from "react";
import "./Appointments.css";

function Appointments() {
  return(
    <div className="appointments">
      <h2 className="appointments__header">Мои записи</h2>
      <div className="appointments__container">
        <div className="appointments__block">
          <h3 className="appointments__service">Услуга</h3>
          <p className="appointments__master">Мастер</p>
          <p className="appointments__date">12.12.2021</p>
          <p className="appointments__time">12:00</p>
        </div>
        <div className="appointments__block">
          <h3 className="appointments__service">Услуга</h3>
          <p className="appointments__master">Мастер</p>
          <p className="appointments__date">12.12.2021</p>
          <p className="appointments__time">12:00</p>
        </div>
        <div className="appointments__block">
          <h3 className="appointments__service">Услуга</h3>
          <p className="appointments__master">Мастер</p>
          <p className="appointments__date">12.12.2021</p>
          <p className="appointments__time">12:00</p>
        </div>
      </div>
    </div>
  )
}

export default Appointments;