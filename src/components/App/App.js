import React from "react";

import { animateScroll as scroll } from "react-scroll";

// Компоненты
import Main from "../Main/Main.js";
// Компоненты

function App() {
  const [screenWidth, setScreenWidth] = React.useState(0);
  const [isEducation, setIsEducation] = React.useState(true);
  const educationRef = React.useRef(null);
  const [isUnivercities, setIsUnivercities] = React.useState(false);
  const univercitiesRef = React.useRef(null);

  const [isContacts, setIsContacts] = React.useState(false);
  const contactsRef = React.useRef(null);

  // const scroolToBlock = (ref) => {
  //   scroll.scrollTo(ref.current.offsetTop, -70);
  // };

  function handleUpdateScreenWidth(width) {
    setScreenWidth(width);
  }

  React.useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      handleUpdateScreenWidth(window.innerWidth);
    });
  }, []);

  function handleSwitchTab(e) {
    const target = e.target;
    const id = target.id;
    if (id === "education") {
      setIsEducation(true);
      setIsUnivercities(false);
      setIsContacts(false);
    }
    if (id === "univercities") {
      setIsUnivercities(true);
      setIsEducation(false);
      setIsContacts(false);
    }
    if (id === "contacts") {
      setIsContacts(true);
      setIsEducation(false);
      setIsUnivercities(false);
    }
  }

  // React.useEffect(() => {
  //   if (isUnivercities && !isEducation && !isContacts) {
  //     scroolToBlock(univercitiesRef);
  //   }
  //   if (isEducation && !isUnivercities && !isContacts) {
  //     scroolToBlock(educationRef);
  //   }
  //   if (isContacts && !isUnivercities && !isEducation) {
  //     scroolToBlock(contactsRef);
  //   }
  // }, [isUnivercities, isEducation, isContacts]);

  return (
    <>
      <Main
        screenWidth={screenWidth}
        isUnivercities={isUnivercities}
        isEducation={isEducation}
        isContacts={isContacts}
        handleSwitchTab={handleSwitchTab}
        isEducation={isEducation}
        isUnivercities={isUnivercities}
        isContacts={isContacts}
        educationRef={educationRef}
        univercitiesRef={univercitiesRef}
        contactsRef={contactsRef}
      />
    </>
  );
}

export default App;
