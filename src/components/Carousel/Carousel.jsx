import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Carousel.css";
import { useScreenWidth } from "../../hooks/useScreenWidth";

const Carousel = ({ data, interval = 5000 }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [screenWidth] = useScreenWidth();
  const autoMoveTimer = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getSlidesPerPage = useCallback(() => {
    if (screenWidth >= 1300) {
      return 3;
    } else if (screenWidth >= 1100) {
      return 3;
    } else if (screenWidth < 600) {
      return 2;
    } else {
      return 1;
    }
  }, [screenWidth]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleNextSlide = useCallback(() => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % getSlidesPerPage());
  }, [getSlidesPerPage]);

  // const handlePrevSlide = () => {
  //   setActiveSlide((prevSlide) =>
  //     prevSlide === 0 ? getSlidesPerPage() - 1 : prevSlide - 1
  //   );
  // };

  useEffect(() => {
    const slidePerPage = getSlidesPerPage();
    const maxSlides = Math.ceil(data.length / slidePerPage);
    setActiveSlide((prevSlide) => Math.min(prevSlide, maxSlides - 1));
  }, [screenWidth, data, getSlidesPerPage]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const startAutoMove = useCallback(() => {
    if (data.length <= getSlidesPerPage()) return;
    autoMoveTimer.current = setInterval(() => {
      handleNextSlide();
    }, interval);
  }, [data.length, getSlidesPerPage, handleNextSlide, interval]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const stopAutoMove = useCallback(() => {
    clearInterval(autoMoveTimer.current);
  }, []);

  useEffect(() => {
    startAutoMove();
    return stopAutoMove;
  }, [startAutoMove, stopAutoMove]);

  const handleClickDot = (index) => {
    setActiveSlide(index);
  };

  const renderItems = () => {
    const slidePerPage = getSlidesPerPage();
    const start = activeSlide * slidePerPage;
    const end = start + slidePerPage;
    const currentItems = data.slice(start, end);

    return currentItems.map((item, index) => (
      <div
        key={index}
        className={`carousel__item ${
          index === Math.floor(slidePerPage / 2) ? "active" : ""
        }`}
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
    <div
      className="carousel__container"
      onMouseEnter={stopAutoMove}
      onMouseLeave={startAutoMove}
    >
      <div className="carousel__content">{renderItems()}</div>
      <div className="carousel__dots">
        {Array.from(
          { length: Math.ceil(data.length / getSlidesPerPage()) },
          (_, index) => (
            <div
              key={index}
              className={`carousel__dot ${
                index === activeSlide ? "active" : ""
              }`}
              onClick={() => handleClickDot(index)}
            ></div>
          )
        )}
      </div>
    </div>
  );
};

export default Carousel;
