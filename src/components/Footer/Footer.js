import React from "react";

import { Link } from "react-router-dom";

// Стили
import footerStyles from "./Footer.module.css";
// Стили

// Картинки
import facebook from "../../images/facebook.svg";
import telegram from "../../images/telegram.svg";
import instagram from "../../images/instagram.svg";
import tikTok from "../../images/tik-tok.svg";
import youTube from "../../images/youtube.svg";
import whatsApp from "../../images/what.svg";
import phone from "../../images/phone.svg";
import email from "../../images/email.svg";
// Картинки

function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.shell}>
        <div className={footerStyles.socials_box}>
          <h2 className={footerStyles.title}>
            Подписывайтесь на нас в социальных сетях :
          </h2>
          <ul className={footerStyles.socials_list}>
            <li>
              <Link to="#">
                <img
                  src={facebook}
                  alt="Facebook"
                  className={footerStyles.socials_icon}
                />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img
                  src={telegram}
                  alt="Telegram"
                  className={footerStyles.socials_icon}
                />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img
                  src={instagram}
                  alt="Telegram"
                  className={footerStyles.socials_icon}
                />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img
                  src={tikTok}
                  alt="Tik-Tok"
                  className={footerStyles.socials_icon}
                />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img
                  src={youTube}
                  alt="YouTube"
                  className={footerStyles.socials_icon}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className={footerStyles.contacts}>
          <h2 className={footerStyles.title}>Контакты:</h2>
          <ul className={footerStyles.contacts_list}>
            <li className={footerStyles.contacts_li}>
              +7 700 769 66 88 (whats app) – Александр
              <Link to="#">
                <img
                  src={whatsApp}
                  alt="WhatsApp"
                  className={footerStyles.contacts_image}
                />
              </Link>
            </li>
            <li className={footerStyles.contacts_li}>
              +7 707 323 64 85 (whats app) – Дмитрий
              <Link to="#">
                <img
                  src={whatsApp}
                  alt="WhatsApp"
                  className={footerStyles.contacts_image}
                />
              </Link>
            </li>
            <li className={footerStyles.contacts_li}>
              +7 775 732 54 83 – Юрий
              <Link to="#">
                <img
                  src={phone}
                  alt="Phone"
                  className={footerStyles.contacts_image}
                />
              </Link>
            </li>
          </ul>
          <div className={footerStyles.email_box}>
            <h2 className={footerStyles.title}>Почта:</h2>
            <div className={footerStyles.contacts_email_box}>
              <img
                src={email}
                alt="email"
                className={footerStyles.contacts_image}
              />
              <p className={footerStyles.email}>test@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className={footerStyles.header}>
      &#169; MyKorea
      </p>
    </footer>
  );
}

export default Footer;
