import React, { useState } from "react";
import "./Carousel.css";
import { Items } from "./CarouselPics";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <section className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${Items[currImg].image})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 ? setCurrImg(currImg - 1) : setCurrImg(2);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </div>
        <div className="center">
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < Items.length - 1 ? setCurrImg(currImg + 1) : setCurrImg(0);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </div>
      </div>
    </section>
  );
}

export default Carousel;