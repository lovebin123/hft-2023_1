import React, { useState } from "react";
import "./Carousel.css";

const Carousel = ({ data }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % Math.ceil(data.length / 3));
  };

  const handlePrevSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? Math.ceil(data.length / 3) - 1 : prevSlide - 1
    );
  };

  const handleClickDot = (index) => {
    setActiveSlide(index);
  };

  const renderItems = () => {
    const start = activeSlide * 3;
    const end = start + 3;
    const currentItems = data.slice(start, end);

    return currentItems.map((item, index) => (
      <div
        key={index}
        className={`carousel__item ${index === 1 ? "active" : ""}`}
      >
        <div className="carousel__head">
          
          <div className="carousel__icon">{item.icon}</div>
          <h2 className="carousel__heading">{item.heading}</h2>
        </div>
        <div className="carousel__details_box">
          <ul className="carousel__details_list">
            {item.details.map((detail, detailIndex) => (
              <li key={detailIndex} className="carousel__details_item">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ));
  };

  return (
    <div className="carousel__container">
      <div className="carousel__content">{renderItems()}</div>
      <div className="carousel__dots">
        {Array.from({ length: Math.ceil(data.length / 3) }, (_, index) => (
          <div
            key={index}
            className={`carousel__dot ${index === activeSlide ? "active" : ""}`}
            onClick={() => handleClickDot(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
