import React from "react";

// Стили
import tabStyles from "./TabsHeader.module.css";
// Стили

const tabsData = [
  { title: "Обучение в Корее", id: "education" },
  { title: "Гранты/Учебные заведения", id: "univercities" },
  { title: "Полезное", id: "helpful" },
  { title: "Услуги", id: "" },
  { title: "Отзывы", id: "" },
  { title: "Контакты", id: "contacts" },
];

function TabsHeader(props) {
  function handleSwitchTab(e) {
    props.handleSwitchTab(e);
  }

  return (
    <section className={tabStyles.tabs}>
      <button
        className={`${tabStyles.tab} ${
          props.isEducation ? tabStyles.tab_active : tabStyles.tab
        }`}
        id="education"
        onClick={handleSwitchTab}
      >
        Обучение в Корее
      </button>
      <button
        className={`${tabStyles.tab} ${
          props.isUnivercities ? tabStyles.tab_active : tabStyles.tab
        }`}
        id="univercities"
        onClick={handleSwitchTab}
      >
        Гранты/Учебные заведения
      </button>
      <button className={tabStyles.tab} id="helpful" onClick={handleSwitchTab}>
        Полезное
      </button>
      <button className={tabStyles.tab} id="" onClick={handleSwitchTab}>
        Услуги
      </button>
      <button className={tabStyles.tab} id="" onClick={handleSwitchTab}>
        Отзывы
      </button>
      <button
        className={`${tabStyles.tab} ${
          props.isContacts ? tabStyles.tab_active : tabStyles.tab
        }`}
        id="contacts"
        onClick={handleSwitchTab}
      >
        Контакты
      </button>
    </section>
  );
}

export default TabsHeader;
