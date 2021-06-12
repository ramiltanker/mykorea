import React from "react";

// Стили
import contactsStyles from "./Contacts.module.css";
// Стили

// Картинки
import whatsApp from "../../images/contacts_wp.svg";
import phone from "../../images/contacts_phone.svg";
import adress from "../../images/contacts_adress.svg";
import time from "../../images/contacts_time.svg";
// Картинки

function Contacts(props) {
  return (
    <section
      className={
        props.isContacts
          ? contactsStyles.contacts
          : contactsStyles.contacts_unactive
      }
      ref={props.contactsRef}
    >
      <div className={contactsStyles.container}>
        <h2 className={contactsStyles.header}>Контакты</h2>
        <div className={contactsStyles.box}>
          <h3 className={contactsStyles.title}>Телефоны:</h3>
          <ul className={contactsStyles.phones_list}>
            <li className={contactsStyles.li}>
              <img
                src={whatsApp}
                alt="whatsApp"
                className={contactsStyles.icon}
              />
              <p className={contactsStyles.text}>
                <a href="https://wa.me/77007696688">+7 700 769 66 88</a> (whats app) – Александр
              </p>
            </li>
            <li className={contactsStyles.li}>
              <img
                src={whatsApp}
                alt="whatsApp"
                className={contactsStyles.icon}
              />
              <p className={contactsStyles.text}>
                <a href="https://wa.me/77073236485">+7 707 323 64 85</a> (whats app) – Дмитрий
              </p>
            </li>
            <li className={contactsStyles.li}>
              <img src={phone} alt="phone" className={contactsStyles.icon} />
              <p className={contactsStyles.text}><a href="tel:+77757325483">+7 775 732 54 83</a> – Юрий</p>
            </li>
          </ul>
        </div>
        <div className={contactsStyles.box}>
          <h3 className={contactsStyles.title}>Наш адрес:</h3>
          <div className={contactsStyles.text_box}>
            <img src={adress} alt="adress" className={contactsStyles.icon} />
            <p className={contactsStyles.text}>
              г.Талдыкорган, ул.Алдабергенова 119 2 этаж, кабинет 9 3/4. Индекс
              - 040000
            </p>
          </div>
        </div>
        <div className={contactsStyles.box}>
          <h3 className={contactsStyles.title}>Режим работы:</h3>
          <div className={contactsStyles.text_box}>
            <img src={time} alt="time" className={contactsStyles.icon} />
            <p className={contactsStyles.text}>
              Понедельник-Суббота с 9:00 до 18:00
            </p>
          </div>
        </div>
      </div>
      <iframe
        title="map"
        className={contactsStyles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1965.7437115581595!2d78.35339815602867!3d45.016456933275286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x427efe3c7fff5257%3A0x29e81f8b8a613da6!2z0YPQu9C40YbQsCDQkNC70LTQsNCx0LXRgNCz0LXQvdC-0LLQsCAxMTksINCi0LDQu9C00YvQutC-0YDQs9Cw0L0gMDQwMDAw!5e0!3m2!1sru!2skz!4v1622701330808!5m2!1sru!2skz"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
}

export default Contacts;
