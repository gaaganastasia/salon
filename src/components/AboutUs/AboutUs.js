import React from "react";
import "../../css/main.css";
import firstPic from "../../img/photo-1.jpg";
import secondPic from "../../img/photo-2.jpg";

function AboutUs() {
  return(
    <div className="about-us" id="about-us">
      <div className="about-us__block">
        <div className="about-us__text-block">
          <h2 className="about-us__title">О нас</h2>
          <p className="about-us__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. 
          Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. 
          Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. 
          Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. 
          Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. </p>
        </div>
        <img alt="фото из салона" className="about-us__img" src={firstPic}></img>
      </div>
      <div className="about-us__block">
        <img alt="фото из салона" className="about-us__img" src={secondPic}></img>
        <div className="about-us__text-block">
          <h2 className="about-us__title">О нас</h2>
          <p className="about-us__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. 
          Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. 
          Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. 
          Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. 
          Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;