import React from "react";
import "../../css/main.css";
import photo from "../../img/human.jpg";

function Profile() {
  return(
    <div className="profile__section">
      <h2 className="profile__header">Личный кабинет</h2>
      <div className="profile">
      <img className="profile__img" src={photo} alt="Фото профиля"></img>
      <h2 className="profile__name">Андрей</h2>
      <p className="profile__email">loremipsum@mail.ru</p>
        <p className="profile__info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. 
          Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. 
          Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. 
        </p>
    </div>
    </div>
    
  )
}

export default Profile;