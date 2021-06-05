import React, { useState, useEffect } from "react";

// Стили
import reviewsStyles from "./Reviews.module.css";
// Стили

// Компоненты
import ImageSlider from "../ImageSlider/ImageSlider.js";
// Компоненты

import slidersData from "./sliderData.js";

function Reviews() {

  return (
      <section className={reviewsStyles.reviews}>
          <h2 className={reviewsStyles.header}>Наши отзывы</h2>
          <ImageSlider slides={slidersData} />
      </section>
  );
}

export default Reviews;
