import React from "react";
import "./carousel.css";
import IMG1 from "../../assets/carousel-1.png";
import IMG2 from "../../assets/carousel-2.png";
import IMG3 from "../../assets/carousel-3.png";

function Carousel() {
  return (
    <div className="carousel">
      <main className="slides">
        <div className="slide_img" id="one">
          <img src={IMG1} alt="img1" className="img" />
        </div>
        <div className="slide_img" id="two">
          <img src={IMG2} alt="img2" className="img" />
        </div>
        <div className="slide_img" id="three">
          <img src={IMG3} alt="img3" className="img" />
        </div>
      </main>
      <div className="radio" id="radio">
        <input type="radio" id="i1" name="images" checked />
        <input type="radio" id="i2" name="images" />
        <input type="radio" id="i3" name="images" />
      </div>
      <div id="nav_slide">
        <label for="i1" class="dots" id="dot1"></label>
        <label for="i2" class="dots" id="dot2"></label>
        <label for="i3" class="dots" id="dot3"></label>
      </div>
    </div>
  );
}

export default Carousel;
