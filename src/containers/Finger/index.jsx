import React from "react";
import fingerPic from "../../assets/default-finger.png";

function FingerArea() {
  return (
    <div className="p-14 flex flex-col justify-center items-center">
      <div class="rounded-2xl border-white shadow-custom flex flex-col mb-4 pb-4 w-96 h-auto">
        <h1 class="text-black text-xl font-bold text-center mt-4">
          จุดไหนที่คุณปวดนิ้วมากที่สุด ?
        </h1>
        <div class="flex justify-center items-center h-full">
          <img src={fingerPic} alt="Finger" class="h-full object-cover" />
        </div>
      </div>
      <button
        type="button"
        // onClick={handleButtonClick}
        class="focus:outline-none text-white text-xl font-bold text-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-2xl px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-96"
      >
        เสร็จสิ้น
      </button>
    </div>
  );
}

export default FingerArea;
