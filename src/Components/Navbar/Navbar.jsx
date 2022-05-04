import React from "react";
import "./navbar.css";
import ICON1 from "../../assets/icons/home.png";
import ICON2 from "../../assets/icons/category.png";
import ICON3 from "../../assets/icons/cart.png";
import ICON4 from "../../assets/icons/profile.png";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-home">
        <img src={ICON1} alt="home" />
      </div>
      <div className="nav-category">
        <img src={ICON2} alt="category" />
      </div>
      <div className="nav-cart">
        <img src={ICON3} alt="cart" />
      </div>
      <div className="nav-profile">
        <img src={ICON4} alt="profile" />
      </div>
    </div>
  );
}
export default Navbar;
