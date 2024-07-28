import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import abdominalPic from "../../assets/default-abs.png";
import epigastriumHighlight from "../../assets/epigastrium-highlight.png";
import epigastriumCaption from "../../assets/epigastrium-active.png";
import luqHighlight from "../../assets/luq-highlight.png";
import luqCaption from "../../assets/luq-active.png";
import llqHighlight from "../../assets/llq-highlight.png";
import llqCaption from "../../assets/llq-active.png";
import ruqHighlight from "../../assets/ruq-highlight.png";
import ruqCaption from "../../assets/ruq-active.png";
import rlqHighlight from "../../assets/rlq-highlight.png";
import rlqCaption from "../../assets/rlq-active.png";
import suprapubicHighlight from "../../assets/suprapubic-highlight.png";
import suprapubicCaption from "../../assets/suprapubic-active.png";
import umbilicusHighlight from "../../assets/umbilicus-highlight.png";
import umbilicusCaption from "../../assets/umbilicus-active.png";
import allAbdominal from "../../assets/all-over-highlight.png";

function AbdominalArea() {
  const navigate = useNavigate();

  //navigate
  const nextPage = () => {
    navigate("/finger");
  };

  // button on abdominal
  const [buttonEpigastrium, setButtonEpigastrium] = useState(true);
  const [buttonLUQ, setButtonLUQ] = useState(true);
  const [buttonLLQ, setButtonLLQ] = useState(true);
  const [buttonRUQ, setButtonRUQ] = useState(true);
  const [buttonRLQ, setButtonRLQ] = useState(true);
  const [buttonSuprapubic, setButtonSuprapubic] = useState(true);
  const [buttonUmbilicus, setButtonUmbilicus] = useState(true);
  const [buttonAll, setButtonAll] = useState(true);

  //button hide highlight
  const [buttonHideEpigastrium, setButtonHideEpigastrium] = useState(false);
  const [buttonHideLUQ, setButtonHideLUQ] = useState(false);
  const [buttonHideLLQ, setButtonHideLLQ] = useState(false);
  const [buttonHideRUQ, setButtonHideRUQ] = useState(false);
  const [buttonHideRLQ, setButtonHideRLQ] = useState(false);
  const [buttonHideSuprapubic, setButtonHideSuprapubic] = useState(false);
  const [buttonHideUmbilicus, setButtonHideUmbilicus] = useState(false);

  //Highlight
  const [highlightEpigastrium, setHighlightEpigastrium] = useState(false);
  const [highlightLUQ, setHighlightLUQ] = useState(false);
  const [highlightLLQ, setHighlightLLQ] = useState(false);
  const [highlightRUQ, setHighlightRUQ] = useState(false);
  const [highlightRLQ, setHighlightRLQ] = useState(false);
  const [highlightSuprapubic, setHighlightSuprapubic] = useState(false);
  const [highlightUmbilicus, setHighlightUmbilicus] = useState(false);
  const [highlightAll, setHighlightAll] = useState(false);

  //Caption
  const [captionEpigastrium, setCaptionEpigastrium] = useState(false);
  const [captionLUQ, setCaptionLUQ] = useState(false);
  const [captionLLQ, setCaptionLLQ] = useState(false);
  const [captionRUQ, setCaptionRUQ] = useState(false);
  const [captionRLQ, setCaptionRLQ] = useState(false);
  const [captionSuprapubic, setCaptionSuprapubic] = useState(false);
  const [captionUmbilicus, setCaptionUmbilicus] = useState(false);

  //check action
  const actionSelect = () => {
    return (
      highlightEpigastrium ||
      highlightLUQ ||
      highlightLLQ ||
      highlightRUQ ||
      highlightRLQ ||
      highlightSuprapubic ||
      highlightUmbilicus
    );
  };

  //check all highlight
  const checkHighlight = () => {
    if (
      highlightEpigastrium ||
      highlightLUQ ||
      highlightLLQ ||
      highlightRUQ ||
      highlightRLQ ||
      highlightSuprapubic ||
      highlightUmbilicus
    ) {
      setHighlightAll(false);
    }
  };

  //update caption
  useEffect(() => {
    const updateCaption = () => {
      const allHighlightsActive =
        highlightEpigastrium &&
        highlightLUQ &&
        highlightLLQ &&
        highlightRUQ &&
        highlightRLQ &&
        highlightSuprapubic &&
        highlightUmbilicus;

      if (allHighlightsActive) {
        setCaptionEpigastrium(false);
        setCaptionLUQ(false);
        setCaptionLLQ(false);
        setCaptionRUQ(false);
        setCaptionRLQ(false);
        setCaptionSuprapubic(false);
        setCaptionUmbilicus(false);
        setHighlightAll(true);
        setButtonAll(false);
      } else {
        setCaptionEpigastrium(highlightEpigastrium);
        setCaptionLUQ(highlightLUQ);
        setCaptionLLQ(highlightLLQ);
        setCaptionRUQ(highlightRUQ);
        setCaptionRLQ(highlightRLQ);
        setCaptionSuprapubic(highlightSuprapubic);
        setCaptionUmbilicus(highlightUmbilicus);
      }
    };
    updateCaption();
  });

  //Show
  const showEpigastrium = () => {
    setButtonEpigastrium(false);
    setButtonHideEpigastrium(true);
    setHighlightEpigastrium(true);
    setCaptionEpigastrium(true);
  };
  const showLUQ = () => {
    setButtonLUQ(false);
    setButtonHideLUQ(true);
    setHighlightLUQ(true);
    setCaptionLUQ(true);
  };
  const showLLQ = () => {
    setButtonLLQ(false);
    setButtonHideLLQ(true);
    setHighlightLLQ(true);
    setCaptionLLQ(true);
  };
  const showRUQ = () => {
    setButtonRUQ(false);
    setButtonHideRUQ(true);
    setHighlightRUQ(true);
    setCaptionRUQ(true);
  };
  const showRLQ = () => {
    setButtonRLQ(false);
    setButtonHideRLQ(true);
    setHighlightRLQ(true);
    setCaptionRLQ(true);
  };
  const showSuprapubic = () => {
    setButtonSuprapubic(false);
    setButtonHideSuprapubic(true);
    setHighlightSuprapubic(true);
    setCaptionSuprapubic(true);
  };
  const showUmbilicus = () => {
    setButtonUmbilicus(false);
    setButtonHideUmbilicus(true);
    setHighlightUmbilicus(true);
    setCaptionUmbilicus(true);
  };
  const showAll = () => {
    setButtonAll(false);
    setHighlightAll(true);

    setButtonEpigastrium(false);
    setButtonHideEpigastrium(true);
    setHighlightEpigastrium(true);
    setCaptionEpigastrium(true);

    setButtonLUQ(false);
    setButtonHideLUQ(true);
    setHighlightLUQ(true);
    setCaptionLUQ(true);

    setButtonLLQ(false);
    setButtonHideLLQ(true);
    setHighlightLLQ(true);
    setCaptionLLQ(true);

    setButtonRUQ(false);
    setButtonHideRUQ(true);
    setHighlightRUQ(true);
    setCaptionRUQ(true);

    setButtonRLQ(false);
    setButtonHideRLQ(true);
    setHighlightRLQ(true);
    setCaptionRLQ(true);

    setButtonSuprapubic(false);
    setButtonHideSuprapubic(true);
    setHighlightSuprapubic(true);
    setCaptionSuprapubic(true);

    setButtonUmbilicus(false);
    setButtonHideUmbilicus(true);
    setHighlightUmbilicus(true);
    setCaptionUmbilicus(true);
  };

  //Hide
  const hideEpigastrium = () => {
    setButtonEpigastrium(true);
    setButtonHideEpigastrium(false);
    setHighlightEpigastrium(false);
    setCaptionEpigastrium(false);
    setButtonAll(true);
    checkHighlight();
  };
  const hideLUQ = () => {
    setButtonLUQ(true);
    setButtonHideLUQ(false);
    setHighlightLUQ(false);
    setCaptionLUQ(false);
    setButtonAll(true);
    checkHighlight();
  };
  const hideLLQ = () => {
    setButtonLLQ(true);
    setButtonHideLLQ(false);
    setHighlightLLQ(false);
    setCaptionLLQ(false);
    setButtonAll(true);
    checkHighlight();
  };
  const hideRUQ = () => {
    setButtonRUQ(true);
    setButtonHideRUQ(false);
    setHighlightRUQ(false);
    setCaptionRUQ(false);
    setButtonAll(true);
    checkHighlight();
  };
  const hideRLQ = () => {
    setButtonRLQ(true);
    setButtonHideRLQ(false);
    setHighlightRLQ(false);
    setCaptionRLQ(false);
    setButtonAll(true);
    checkHighlight();
  };
  const hideSuprapubic = () => {
    setButtonSuprapubic(true);
    setButtonHideSuprapubic(false);
    setHighlightSuprapubic(false);
    setCaptionSuprapubic(false);
    setButtonAll(true);
    checkHighlight();
  };
  const hideUmbilicus = () => {
    setButtonUmbilicus(true);
    setButtonHideUmbilicus(false);
    setHighlightUmbilicus(false);
    setCaptionUmbilicus(false);
    setButtonAll(true);
    checkHighlight();
  };

  return (
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

          {/* Button show highlight */}
          {buttonEpigastrium && (
            <button
              type="button"
              onClick={showEpigastrium}
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "40px",
                height: "40px",
                top: "160px",
                left: "165px",
                zIndex: 1,
              }}
            />
          )}
          {buttonLUQ && (
            <button
              type="button"
              onClick={showLUQ}
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "35px",
                height: "45px",
                top: "190px",
                left: "205px",
                zIndex: 1,
              }}
            />
          )}
          {buttonLLQ && (
            <button
              type="button"
              onClick={showLLQ}
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "33px",
                height: "43px",
                top: "240px",
                left: "207px",
                zIndex: 1,
              }}
            />
          )}
          {buttonRUQ && (
            <button
              type="button"
              onClick={showRUQ}
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "36px",
                height: "43px",
                top: "190px",
                left: "127px",
                zIndex: 1,
              }}
            />
          )}
          {buttonRLQ && (
            <button
              type="button"
              onClick={showRLQ}
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "36px",
                height: "43px",
                top: "240px",
                left: "127px",
                zIndex: 1,
              }}
            />
          )}
          {buttonSuprapubic && (
            <button
              type="button"
              onClick={showSuprapubic}
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              class="absolute rounded-full"
              style={{
                width: "40px",
                height: "32px",
                top: "270px",
                left: "165px",
                zIndex: 1,
              }}
            />
          )}
          {buttonUmbilicus && (
            <button
              type="button"
              onClick={showUmbilicus}
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-full"
              class="absolute rounded-full"
              style={{
                width: "39px",
                height: "36px",
                top: "220px",
                left: "165px",
                zIndex: 1,
              }}
            />
          )}
          {buttonAll && (
            <button
              type="button"
              onClick={showAll}
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-full"
              class="absolute rounded-full"
              style={{
                width: "121px",
                height: "38px",
                top: "393px",
                left: "122px",
                zIndex: 1,
              }}
            />
          )}

          {/* Select Epigastrium */}
          {highlightEpigastrium && (
            <img
              src={epigastriumHighlight}
              alt="epigastrium highlight"
              class="absolute top-4.5 left-7.5 w-88 object-cover"
            />
          )}
          {captionEpigastrium && (
            <img
              src={epigastriumCaption}
              alt="epigastrium caption"
              class="absolute top-4.5 left-7.5 w-88 object-cover"
            />
          )}
          {buttonHideEpigastrium && (
            <button
              type="button"
              onClick={hideEpigastrium}
              // class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "40px",
                height: "40px",
                top: "160px",
                left: "165px",
                zIndex: 1,
              }}
            />
          )}

          {/* Select luq */}
          {highlightLUQ && (
            <img
              src={luqHighlight}
              alt="luq highlight"
              class="absolute top-4.5 left-7.5 w-88 object-cover"
            />
          )}
          {captionLUQ && (
            <img
              src={luqCaption}
              alt="luq caption"
              class="absolute top-4.5 left-7.5 w-88 object-cover"
            />
          )}
          {buttonHideLUQ && (
            <button
              type="button"
              onClick={hideLUQ}
              // class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "35px",
                height: "45px",
                top: "190px",
                left: "205px",
                zIndex: 1,
              }}
            />
          )}

          {/* Select llq */}
          {highlightLLQ && (
            <img
              src={llqHighlight}
              alt="llq highlight"
              class="absolute top-4.5 left-7.5 w-88 object-cover"
            />
          )}
          {captionLLQ && (
            <img
              src={llqCaption}
              alt="llq caption"
              class="absolute top-4.5 left-7.5 w-88 object-cover"
            />
          )}
          {buttonHideLLQ && (
            <button
              type="button"
              onClick={hideLLQ}
              // class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "33px",
                height: "43px",
                top: "240px",
                left: "207px",
                zIndex: 1,
              }}
            />
          )}

          {/* Select ruq */}
          {highlightRUQ && (
            <img
              src={ruqHighlight}
              alt="ruq highlight"
              class="absolute top-4.5 left-7.5 w-88 object-cover"
            />
          )}
          {captionRUQ && (
            <img
              src={ruqCaption}
              alt="ruq caption"
              class="absolute top-8 left-7.5 w-88 object-cover"
            />
          )}
          {buttonHideRUQ && (
            <button
              type="button"
              onClick={hideRUQ}
              // class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "36px",
                height: "43px",
                top: "190px",
                left: "127px",
                zIndex: 1,
              }}
            />
          )}

          {/* Select rlq */}
          {highlightRLQ && (
            <img
              src={rlqHighlight}
              alt="rlq highlight"
              class="absolute top-4.5 left-7.5 w-88 object-cover"
            />
          )}
          {captionRLQ && (
            <img
              src={rlqCaption}
              alt="ruq caption"
              class="absolute bottom-3 left-7.5 w-88 object-cover"
            />
          )}
          {buttonHideRLQ && (
            <button
              type="button"
              onClick={hideRLQ}
              // class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "36px",
                height: "43px",
                top: "240px",
                left: "127px",
                zIndex: 1,
              }}
            />
          )}

          {/* Select Suprapubic */}
          {highlightSuprapubic && (
            <img
              src={suprapubicHighlight}
              alt="rlq highlight"
              class="absolute top-4.5 left-7.5 w-88 object-cover"
            />
          )}
          {captionSuprapubic && (
            <img
              src={suprapubicCaption}
              alt="ruq caption"
              class="absolute top-5 left-7.5 w-88 object-cover"
            />
          )}
          {buttonHideSuprapubic && (
            <button
              type="button"
              onClick={hideSuprapubic}
              // class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "40px",
                height: "32px",
                top: "270px",
                left: "165px",
                zIndex: 1,
              }}
            />
          )}

          {/* Select Umbilicus */}
          {highlightUmbilicus && (
            <img
              src={umbilicusHighlight}
              alt="umbilicus highlight"
              class="absolute top-4.5 left-7.5 w-88 object-cover"
            />
          )}
          {captionUmbilicus && (
            <img
              src={umbilicusCaption}
              alt="umbilicus caption"
              class="absolute top-4.5 left-7.5 w-88 object-cover"
            />
          )}
          {buttonHideUmbilicus && (
            <button
              type="button"
              onClick={hideUmbilicus}
              // class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-full"
              class="absolute rounded-full"
              style={{
                width: "39px",
                height: "36px",
                top: "220px",
                left: "165px",
                zIndex: 1,
              }}
            />
          )}

          {/* Select All */}
          {highlightAll && (
            <img
              src={allAbdominal}
              alt="highlight all abdominal"
              class="absolute top-4.5 left-7.5 w-88 object-cover"
            />
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={nextPage}
        disabled={!actionSelect()}
        class={`focus:outline-none text-center text-xl w-96 ${
          !actionSelect()
            ? "rounded-2xl px-5 py-2.5 mb-2 text-zinc-400 bg-zinc-200 opacity-50 cursor-not-allowed"
            : "text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-2xl px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        }`}
      >
        ต่อไป
      </button>
    </div>
  );
}

export default AbdominalArea;
