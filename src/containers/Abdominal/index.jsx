import React from "react";
import abdominalPic from "../../assets/default-abs.png";

function AbdominalArea() {
  return (
    <div className="p-24 flex justify-center items-center">
      <div>
        <div class="rounded-2xl border-2 border-white shadow-custom mb-4 w-96 h-auto">
          <h1 class="text-black text-xl font-bold text-center mt-4">
            จุดไหนที่คุณปวดท้องมากที่สุด ?
          </h1>
          <div class="flex justify-center items-center h-full">
            <img
              src={abdominalPic}
              alt="Abdominal"
              class="h-full object-cover"
            />
          </div>
        </div>
        <button
          type="button"
          class="focus:outline-none text-white text-xl font-bold text-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-96"
        >
          ต่อไป
        </button>
      </div>
    </div>
  );
}

export default AbdominalArea;
