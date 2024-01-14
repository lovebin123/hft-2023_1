import React from "react";
import "./Gallery.css";
import img2 from "../../assets/gallery/2.jpeg";
import img3 from "../../assets/gallery/3.jpeg";
import img4 from "../../assets/gallery/4.jpeg";
import img6 from "../../assets/gallery/6.jpeg";
import img7 from "../../assets/gallery/7.jpeg";
import img11 from "../../assets/gallery/11.JPG";
import img12 from "../../assets/gallery/12.JPG";
import Stars from "../Stars/Stars";
const Gallery = () => {
  return (
    <div className="section gallery">
    <Stars/>
      <h1 className="section__title" data-aos="fade-up" data-aos-duration="1000">
        Our Gallery
      </h1>
      <div className="img-container" data-aos="zoom-in" data-aos-duration="1500">
        <div className="box box-lh">
          <img src={img2} alt="" />
        </div>
        <div className="box">
          <img src={img12} alt="" />
        </div>
        <div className="box box-lw">
          <img src={img3} alt="" />
        </div>
        <div className="box box-lw">
          <img src={img4} alt="" />
        </div>
        <div className="box box-lh box-lwm">
          <img src={img7} alt="" />
        </div>
        <div className="box box-lw">
          <img src={img6} alt="" />
        </div>
        <div className="box">
          <img src={img11} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
