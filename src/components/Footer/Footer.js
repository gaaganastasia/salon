import React from "react";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  
  return(
    <footer className="footer">
      <p className="footer__text">
      </p>
      <div className="footer__caption">
        <p className="footer__year">&copy; {year}</p>
        <div className="footer__links">
          <a
            href="https://vk.com/cirulnik24"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            ВКонтакте
          </a>
          <a
            href="https://www.instagram.com/cirulnik24/?utm_medium=copy_link"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;