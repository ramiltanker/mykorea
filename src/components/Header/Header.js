import React from "react";

import { Link } from "react-router-dom";
// Стили
import headerStyles from "./Header.module.css";
// Стили

// Картинки
import logo from "../../images/logo.svg";
import logoMobile from "../../images/MY KOREA 5.svg";
// Картинки

// Компоненты
import TabsHeader from "../TabsHeader/TabsHeader.js";
// Компоненты

function Header(props) {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.container}>
        <div className={headerStyles.authorization_box}>
          <img src={props.screenWidth > 769 ? logo : logoMobile} alt="Лого" className={headerStyles.logo} />
          <div className={headerStyles.links}>
            <Link to="#" className={headerStyles.sign_in}>
              Войти
            </Link>
            <Link to="#" className={headerStyles.sign_up}>
              Регистрация
            </Link>
          </div>
        </div>
        <TabsHeader
          handleSwitchTab={props.handleSwitchTab}
          isUnivercities={props.isUnivercities}
          isEducation={props.isEducation}
          isContacts={props.isContacts}
        />
        {props.screenWidth > 769 && (
          <h1 className={headerStyles.title}>Обучение в Корее</h1>
        )}
      </div>
      <div className={headerStyles.form_container}>
        <form className={headerStyles.form}>
          <h2 className={headerStyles.form_title}>
            Получи бесплатную констультацию прямо сейчас
          </h2>
          <input
            type="text"
            placeholder="Имя"
            className={headerStyles.input}
            name="name"
          />
          <input
            type="number"
            placeholder="Номер телефона"
            className={headerStyles.input}
            name="phone"
          />
          <input
            type="email"
            placeholder="Электронная почта"
            className={headerStyles.input}
            name="email"
          />
          <button type="submit" className={headerStyles.form_button}>
            Получить
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
