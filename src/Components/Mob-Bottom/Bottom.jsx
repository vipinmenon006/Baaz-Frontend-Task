import React from "react";
import "./bottom.css";
import IMG from "../../assets/bottom.png";

function Bottom() {
  return (
    <div className="bottom-container">
      <div className="bottom-rectangle">
        <img src={IMG} alt="rectangle" />
      </div>
    </div>
  );
}

export default Bottom;
