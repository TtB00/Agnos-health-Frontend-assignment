import React from "react";
import fingerPic from "../../assets/default-finger.png";

function FingerArea() {
  return (
    <div>
      <h1 class="text-black">Finger</h1>
      <div>
        <img src={fingerPic} alt="Finger" />
      </div>
    </div>
  );
}

export default FingerArea;
