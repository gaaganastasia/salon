import React from "react";
import "./Online.css";

function Online() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return(
    <div className="online">
      <h2 className="online__header">Онлайн-запись</h2>
      <form className="online__form" method="get"
        action="index.html"
        name="search"
        onSubmit={handleSubmit}
        noValidate>
          <label className="online__label">
            <h3 className="online__title">Выбрать услугу:</h3>
            <select name="service" className="online__input">
              <option className="online__option" value="s1">Услуга 1</option>
              <option className="online__option" value="s2">Услуга 2</option>
              <option className="online__option" value="s3">Услуга 3</option>
              <option className="online__option" value="s4">Услуга 4</option>
            </select>
          </label>
          <label className="online__label">
            <h3 className="online__title">Выбрать мастера:</h3>
            <select name="master" className="online__input">
              <option className="online__option" value="m1">Мастер 1</option>
              <option className="online__option" value="m2">Мастер 2</option>
              <option className="online__option" value="m3">Мастер 3</option>
              <option className="online__option" value="m4">Мастер 4</option>
            </select>
          </label>
          <label className="online__label">
            <h3 className="online__title">Выбрать дату и время:</h3>
            <input type="date" name="date" className="online__input"></input>
          </label>
        <button type="submit" className="online__submit">Записаться</button>
      </form>
    </div>
  )
}

export default Online;