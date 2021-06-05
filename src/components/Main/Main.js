import React from "react";

// Компоненты
import Header from "../Header/Header.js";
import Education from "../Education/Education.js";
import Footer from "../Footer/Footer.js";
import Universities from "../Universities/Universities.js";
import AboutUs from "../AboutUs/AboutUs.js";
import Contacts from "../Contacts/Contacts.js";
import Reviews from "../Reviews/Reviews.js";
// Компоненты

function Main(props) {
  return (
    <>
      {/* <Header
        screenWidth={props.screenWidth}
        handleSwitchTab={props.handleSwitchTab}
        isUnivercities={props.isUnivercities}
        isEducation={props.isEducation}
        isContacts={props.isContacts}
      />
      <Education
        screenWidth={props.screenWidth}
        isEducation={props.isEducation}
        educationRef={props.educationRef}
      />
      <Universities
        isUnivercities={props.isUnivercities}
        univercitiesRef={props.univercitiesRef}
      /> */}
      {/* <AboutUs /> */}
      <Contacts contactsRef={props.contactsRef} isContacts={props.isContacts} />
      <Footer />
      <Reviews />
    </>
  );
}

export default Main;
