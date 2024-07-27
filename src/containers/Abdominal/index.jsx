import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import abdominalPic from "../../assets/default-abs.png";
import epigastrium from "../../assets/epigastrium-highlight.png";

function AbdominalArea() {
  const navigate = useNavigate();
  const [showOverlayEpigastrium, setShowOverlayEpigastrium] = useState(false);

  const nextPage = () => {
    navigate("/finger");
  };

  const showEpigastrium = () => {
    setShowOverlayEpigastrium(true);
  };
  const hideEpigastrium = () => {
    setShowOverlayEpigastrium(false);
  };

  return (
    // <div className="p-14 flex flex-col justify-center items-center ">
    //   <div class="rounded-2xl border-white shadow-custom flex flex-col mb-4 pb-4 w-96 h-auto">
    //     <h1 class="text-black text-xl font-bold text-center mt-4">
    //       จุดไหนที่คุณปวดท้องมากที่สุด ?
    //     </h1>
    //     <div class="flex justify-center items-center h-full">
    //       <img src={abdominalPic} alt="Abdominal" class="h-full object-cover" />
    //     </div>
    //   </div>
    //   <button
    //     type="button"
    //     onClick={handleButtonClick}
    //     class="focus:outline-none text-white text-xl font-bold text-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-2xl px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-96"
    //   >
    //     ต่อไป
    //   </button>
    // </div>
    <div class="p-14 flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div class="relative rounded-2xl border-2 border-white shadow-custom flex flex-col mb-4 pb-4 w-96 h-auto bg-white">
        <h1 class="text-black text-xl font-bold text-center mt-4">
          จุดไหนที่คุณปวดท้องมากที่สุด ?
        </h1>
        <div class="flex justify-center items-center h-full relative">
          <img
            src={abdominalPic}
            alt="Abdominal"
            class="w-full h-auto object-cover"
          />
          {showOverlayEpigastrium && (
            <img
              src={epigastrium}
              alt="epigastrium"
              onClick={hideEpigastrium}
              class="absolute top-0 left-0 w-24 h-24 object-cover"
              // style={{ top: "50px", left: "50px" }}
            />
          )}
          <button
            type="button"
            onClick={showEpigastrium}
            class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none text-white text-lg font-bold rounded-lg"
            style={{
              width: "100px",
              height: "100px",
              top: "50px",
              left: "50px",
            }}
          />
        </div>
      </div>
      <button
        type="button"
        onClick={nextPage}
        class="focus:outline-none text-white text-xl font-bold text-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-2xl px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-96"
      >
        ต่อไป
      </button>
    </div>
  );
}

export default AbdominalArea;
