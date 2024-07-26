import React from "react";
import abdominalPic from "../../assets/default-abs.png";

function AbdominalArea() {
  return (
    <div className="p-24">
      {/* <div class="relative h-200 w-200 bg-green-300 p-8">
        <p>Relative parent</p>
        <div class="absolute h-50 w-50 bottom-5 left-20 bg-red-700 ">
          <p>Absolute child</p>
        </div>
      </div> */}
      {/* <h1 class="text-black">Abdominal</h1> */}
      <div>
        <div>
          <h1 class="text-black">จุดไหนที่คุณปวดท้องมากที่สุด</h1>
          <div></div>
        </div>
        <button
          type="button"
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          ต่อไป
        </button>
      </div>

      <div>
        <img src={abdominalPic} alt="Abdominal" />
      </div>
    </div>
  );
}

export default AbdominalArea;
