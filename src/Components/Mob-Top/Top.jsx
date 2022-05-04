import React from "react";
import "./top.css";

function Top() {
  return (
    <div className="top-container">
      <div className="time">08:34</div>
      <div className="network">
        <div className="rectangle-1"></div>
        <div className="rectangle-2"></div>
        <div className="rectangle-3"></div>
        <div className="rectangle-4"></div>
      </div>
      <div className="tower">4G</div>
      <div className="battery">
        <div className="battery-1"></div>
        <div className="battery-2"></div>
        <div className="battery-3"></div>
      </div>
    </div>
  );
}

export default Top;
