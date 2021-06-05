import React from "react";

// Стили
import imageSliderStyles from "./ImageSlider.module.css";
// Стили

import quotes from "../../images/quotes.svg";
import img from "../../images/img.png";

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      slidesArr: this.props.slides,
      direction: "",
    };
    this.items = this.generateItems();
  }

  generateItems = () => {
    let items = [];
    for (let i = this.state.active - 1; i < this.state.active + 2; i++) {
      let index = i;
      if (i < 0) {
        index = this.state.slidesArr.length + i;
      } else if (i >= this.state.slidesArr.length) {
        index = i % this.state.slidesArr.length;
      }
      items.push(
        <Item
          key={index}
          item={this.state.slidesArr[index]}
          active={this.state.active === index ? true : false}
        />
      );
    }
    return items;
  };

  moveLeft = () => {
    var newActive = this.state.active;
    newActive--;
    this.setState({
      active: newActive < 0 ? this.state.slidesArr.length - 1 : newActive,
      direction: "left",
    });
  };

  moveRight = () => {
    var newActive = this.state.active;
    this.setState({
      active: (newActive + 1) % this.state.slidesArr.length,
      direction: "right",
    });
  };

  render() {
    return (
      <>
        <div
          className={`${imageSliderStyles.slider} ${imageSliderStyles.slider_track}`}
        >
          {this.generateItems()}
        </div>
        <div className={imageSliderStyles.arrows}>
          <button
            className={imageSliderStyles.arrow}
            type="button"
            id="left"
            onClick={this.moveLeft}
          ></button>
          <button
            className={imageSliderStyles.arrow}
            type="button"
            id="right"
            onClick={this.moveRight}
          ></button>
        </div>
      </>
    );
  }
}

function Item(props) {
  return (
    <div
      className={`${imageSliderStyles.slide} ${
        props.active ? imageSliderStyles.active : ""
      }`}
      ref={props.slideRef}
    >
      <div className={imageSliderStyles.text_box}>
        <img className={imageSliderStyles.svg} src={quotes} alt="quotes" />
        <h3 className={imageSliderStyles.title}>
          {props.item.bestPhrase}
        </h3>
        <p className={imageSliderStyles.text}>«{props.item.review}»</p>
      </div>
      <div className={imageSliderStyles.human_box}>
        <img
          src={props.item.image}
          alt="test_img"
          className={imageSliderStyles.image}
        />
        <p className={imageSliderStyles.name}>{props.item.name}</p>
        <p className={imageSliderStyles.city}>{props.item.city}</p>
      </div>
    </div>
  );
}

export default ImageSlider;

// React.useEffect(() => {
//     let slideIndex = 0;
//     const slides = document.querySelectorAll(`.${slideRef.current.className}`);
//     const slideWidth = slides[0].offsetWidth;

//     let posInit = 0;
//     let posX1 = 0;
//     let posX2 = 0;
//     let posY1 = 0;
//     let posY2 = 0;
//     let posFinal = 0;
//     let posThreshold = slideWidth * 0.35;
//     let trfRegExp = /[-0-9.]+(?=px)/;

//     if (posInit > posX1) nextSlide();
//     else if (posInit < posX1) prevSlide();

//     const slide = function () {
//       sliderTrackRef.current.style.transition = "transform .5s";
//       sliderTrackRef.current.style.transform = `translate3d(-${
//         slideIndex * slideWidth
//       }px, 0px, 0px)`;
//     };

//     const getEvent = function (event) {
//       return event.type.search("touch") !== -1 ? event.touches[0] : event;
//     };

//     const swipeStart = function (event) {
//       let evt = getEvent(event);
//       sliderTrackRef.current.style.cursor = "grabbing";
//       // берем начальную позицию курсора по оси Х
//       posInit = posX1 = evt.clientX;

//       // убираем плавный переход, чтобы track двигался за курсором без задержки
//       // т.к. он будет включается в функции slide()
//       sliderTrackRef.current.style.transition = "";

//       // и сразу начинаем отслеживать другие события на документе
//       document.addEventListener("touchmove", swipeAction);
//       document.addEventListener("touchend", swipeEnd);
//       document.addEventListener("mousemove", swipeAction);
//       document.addEventListener("mouseup", swipeEnd);
//     };

//     const swipeAction = function (event) {
//       let evt = getEvent(event);
//       // для более красивой записи возьмем в переменную текущее свойство transform
//       let style = sliderTrackRef.current.style.transform;
//       // считываем трансформацию с помощью регулярного выражения и сразу превращаем в число
//       let transform = +style.match(trfRegExp);

//        posX2 = posX1 - evt.clientX;
//        posX1 = evt.clientX;

//        posY2 = posY1 - evt.clientY;
//        posY1 = evt.clientY;

//       sliderTrackRef.current.style.transform = `translate3d(${
//         transform - posX2
//       }px, 0px, 0px)`;
//       // можно было бы использовать метод строк .replace():
//       // sliderTrack.style.transform = style.replace(trfRegExp, match => match - posX2);
//       // но в дальнейшем нам нужна будет текущая трансформация в переменной
//     };

//     const swipeEnd = function () {
//       // финальная позиция курсора
//       posFinal = posInit - posX1;
//       sliderTrackRef.current.style.cursor = "grab";
//       document.removeEventListener("touchmove", swipeAction);
//       document.removeEventListener("mousemove", swipeAction);
//       document.removeEventListener("touchend", swipeEnd);
//       document.removeEventListener("mouseup", swipeEnd);

//       // убираем знак минус и сравниваем с порогом сдвига слайда
//       if (Math.abs(posFinal) > posThreshold) {
//         // если мы тянули вправо, то уменьшаем номер текущего слайда
//         if (posInit < posX1) {
//           slideIndex--;
//           // если мы тянули влево, то увеличиваем номер текущего слайда
//         } else if (posInit > posX1) {
//           slideIndex++;
//         }
//       }

//       // если курсор двигался, то запускаем функцию переключения слайдов
//       if (posInit !== posX1) {
//         slide();
//       }
//     };

//     sliderTrackRef.current.addEventListener("touchstart", swipeStart);
//     sliderTrackRef.current.addEventListener("mousedown", swipeStart);
//   });

// const [current, setCurrent] = React.useState(0);

// const length = props.slides.length;

// const sliderTrackRef = React.useRef(null);
// const slideRef = React.useRef(null);

// const nextSlide = () => {
//   setCurrent(current === length - 1 ? 0 : current + 1);
// };

// const prevSlide = () => {
//   setCurrent(current === 0 ? length - 1 : current - 1);
// };
