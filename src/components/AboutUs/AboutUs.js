import React from "react";

// Стили
import aboutUsStyles from "./AboutUs.module.css";
// Стили

function AboutUs() {
  return (
    <section className={aboutUsStyles.about_us}>
      <div className={aboutUsStyles.box}>
        <h2 className={aboutUsStyles.title}>О нас</h2>
        <p className={aboutUsStyles.text}>
          Организация “mykorea” основана в 2021 году. Основной задачей нашей
          компании является – помощь выпускникам из стран СНГ в поступлении в
          университеты Южной Кореи, а также обустройство комфортной жизни в
          дальнейшем.{" "}
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
