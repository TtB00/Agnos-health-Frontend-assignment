import React, { useState } from "react";

import fingerPic from "../../assets/default-finger.png";
import dipHighlight from "../../assets/dip-highlight.png";
import dipCaption from "../../assets/dip-active.png";
import mcpHighlight from "../../assets/mcp-highlight.png";
import mcpCaption from "../../assets/mcp-active.png";
import pipHighlight from "../../assets/pip-highlight.png";
import pipCaption from "../../assets/pip-active.png";

function FingerArea() {
  //button on finger
  const [buttonDIPmiddle, setButtonDIPmiddle] = useState(true);
  const [buttonDIPindex, setButtonDIPindex] = useState(true);
  const [buttonDIPring, setButtonDIPring] = useState(true);
  const [buttonDIPlittle, setButtonDIPlittle] = useState(true);

  const [buttonMCPmiddle, setButtonMCPmiddle] = useState(true);
  const [buttonMCPindex, setButtonMCPindex] = useState(true);
  const [buttonMCPring, setButtonMCPring] = useState(true);
  const [buttonMCPlittle, setButtonMCPlittle] = useState(true);
  const [buttonMCPthumb, setButtonMCPthumb] = useState(true);

  const [buttonPIPmiddle, setButtonPIPmiddle] = useState(true);
  const [buttonPIPindex, setButtonPIPindex] = useState(true);
  const [buttonPIPring, setButtonPIPring] = useState(true);
  const [buttonPIPlittle, setButtonPIPlittle] = useState(true);
  const [buttonPIPthumb, setButtonPIPthumb] = useState(true);

  //button hide highlight
  const [buttonHideDIPmiddle, setButtonHideDIPmiddle] = useState(false);
  const [buttonHideDIPindex, setButtonHideDIPindex] = useState(false);
  const [buttonHideDIPring, setButtonHideDIPring] = useState(false);
  const [buttonHideDIPlittle, setButtonHideDIPlittle] = useState(false);

  const [buttonHideMCPmiddle, setButtonHideMCPmiddle] = useState(false);
  const [buttonHideMCPindex, setButtonHideMCPindex] = useState(false);
  const [buttonHideMCPring, setButtonHideMCPring] = useState(false);
  const [buttonHideMCPlittle, setButtonHideMCPlittle] = useState(false);
  const [buttonHideMCPthumb, setButtonHideMCPthumb] = useState(false);

  const [buttonHidePIPmiddle, setButtonHidePIPmiddle] = useState(false);
  const [buttonHidePIPindex, setButtonHidePIPindex] = useState(false);
  const [buttonHidePIPring, setButtonHidePIPring] = useState(false);
  const [buttonHidePIPlittle, setButtonHidePIPlittle] = useState(false);
  const [buttonHidePIPthumb, setButtonHidePIPthumb] = useState(false);

  //Highlight
  const [highlightDIP, setHighlightDIP] = useState(false);
  const [highlightMCP, setHighlightMCP] = useState(false);
  const [highlightPIP, setHighlightPIP] = useState(false);

  //Caption
  const [captionDIP, setCaptionDIP] = useState(false);
  const [captionMCP, setCaptionMCP] = useState(false);
  const [captionPIP, setCaptionPIP] = useState(false);

  //Show
  const showDIP = () => {
    setButtonDIPmiddle(false);
    setButtonDIPindex(false);
    setButtonDIPring(false);
    setButtonDIPlittle(false);
    setButtonHideDIPmiddle(true);
    setButtonHideDIPindex(true);
    setButtonHideDIPring(true);
    setButtonHideDIPlittle(true);
    setHighlightDIP(true);
    setCaptionDIP(true);
  };
  const showMCP = () => {
    setButtonMCPmiddle(false);
    setButtonMCPindex(false);
    setButtonMCPring(false);
    setButtonMCPlittle(false);
    setButtonMCPthumb(false);
    setButtonHideMCPmiddle(true);
    setButtonHideMCPindex(true);
    setButtonHideMCPring(true);
    setButtonHideMCPlittle(true);
    setButtonHideMCPthumb(true);
    setHighlightMCP(true);
    setCaptionMCP(true);
  };
  const showPIP = () => {
    setButtonPIPmiddle(false);
    setButtonPIPindex(false);
    setButtonPIPring(false);
    setButtonPIPlittle(false);
    setButtonPIPthumb(false);
    setButtonHidePIPmiddle(true);
    setButtonHidePIPindex(true);
    setButtonHidePIPring(true);
    setButtonHidePIPlittle(true);
    setButtonHidePIPthumb(true);
    setHighlightPIP(true);
    setCaptionPIP(true);
  };

  //Hide
  const hideDIP = () => {
    setButtonDIPmiddle(true);
    setButtonDIPindex(true);
    setButtonDIPring(true);
    setButtonDIPlittle(true);
    setButtonHideDIPmiddle(false);
    setButtonHideDIPindex(false);
    setButtonHideDIPring(false);
    setButtonHideDIPlittle(false);
    setHighlightDIP(false);
    setCaptionDIP(false);
  };
  const hideMCP = () => {
    setButtonMCPmiddle(true);
    setButtonMCPindex(true);
    setButtonMCPring(true);
    setButtonMCPlittle(true);
    setButtonMCPthumb(true);
    setButtonHideMCPmiddle(false);
    setButtonHideMCPindex(false);
    setButtonHideMCPring(false);
    setButtonHideMCPlittle(false);
    setButtonHideMCPthumb(false);
    setHighlightMCP(false);
    setCaptionMCP(false);
  };
  const hidePIP = () => {
    setButtonPIPmiddle(true);
    setButtonPIPindex(true);
    setButtonPIPring(true);
    setButtonPIPlittle(true);
    setButtonPIPthumb(true);
    setButtonHidePIPmiddle(false);
    setButtonHidePIPindex(false);
    setButtonHidePIPring(false);
    setButtonHidePIPlittle(false);
    setButtonHidePIPthumb(false);
    setHighlightPIP(false);
    setCaptionPIP(false);
  };

  return (
    <div className="p-14 flex flex-col justify-center items-center">
      <div class="relative rounded-2xl border-2 border-white shadow-custom flex flex-col mb-4 pb-4 w-96 h-auto bg-white">
        <h1 class="text-black text-xl font-bold text-center mt-4">
          จุดไหนที่คุณปวดนิ้วมากที่สุด ?
        </h1>
        <div class="flex justify-center items-center h-full relative">
          <img src={fingerPic} alt="Finger" class="h-full object-cover" />

          {/* Button dip show highlight */}
          {buttonDIPmiddle && (
            <button
              type="button"
              onClick={showDIP}
              class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              // class="absolute rounded-lg"
              style={{
                width: "25px",
                height: "15px",
                top: "40px",
                left: "165px",
                zIndex: 1,
              }}
            />
          )}
          {buttonDIPindex && (
            <button
              type="button"
              onClick={showDIP}
              class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              // class="absolute rounded-lg"
              style={{
                width: "25px",
                height: "15px",
                top: "52px",
                left: "210px",
                zIndex: 1,
              }}
            />
          )}
          {buttonDIPring && (
            <button
              type="button"
              onClick={showDIP}
              class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              // class="absolute rounded-lg"
              style={{
                width: "23px",
                height: "15px",
                top: "60px",
                left: "125px",
                zIndex: 1,
              }}
            />
          )}
          {buttonDIPlittle && (
            <button
              type="button"
              onClick={showDIP}
              class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              // class="absolute rounded-lg"
              style={{
                width: "22px",
                height: "19px",
                top: "107px",
                left: "78px",
                zIndex: 1,
              }}
            />
          )}

          {/* Button mcp show highlight */}
          {buttonPIPmiddle && (
            <button
              type="button"
              onClick={showPIP}
              class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              // class="absolute rounded-lg"
              style={{
                width: "28px",
                height: "17px",
                top: "90px",
                left: "166px",
                zIndex: 1,
              }}
            />
          )}

          {/* Select dip */}
          {highlightDIP && (
            <img
              src={dipHighlight}
              alt="dip highlight"
              class="absolute top-4.5 left-7.5 w-88 object-cover"
            />
          )}
          {captionDIP && (
            <img
              src={dipCaption}
              alt="dip caption"
              class="absolute top-4.5 left-7.5 w-88 object-cover"
            />
          )}
          {buttonHideDIPmiddle && (
            <button
              type="button"
              onClick={hideDIP}
              class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              // class="absolute rounded-lg"
              style={{
                width: "25px",
                height: "15px",
                top: "40px",
                left: "165px",
                zIndex: 1,
              }}
            />
          )}
          {buttonHideDIPindex && (
            <button
              type="button"
              onClick={hideDIP}
              class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              // class="absolute rounded-lg"
              style={{
                width: "25px",
                height: "15px",
                top: "52px",
                left: "210px",
                zIndex: 1,
              }}
            />
          )}
          {buttonHideDIPring && (
            <button
              type="button"
              onClick={hideDIP}
              class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              // class="absolute rounded-lg"
              style={{
                width: "23px",
                height: "15px",
                top: "60px",
                left: "125px",
                zIndex: 1,
              }}
            />
          )}
          {buttonHideDIPlittle && (
            <button
              type="button"
              onClick={hideDIP}
              class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              // class="absolute rounded-lg"
              style={{
                width: "22px",
                height: "19px",
                top: "107px",
                left: "78px",
                zIndex: 1,
              }}
            />
          )}

          {/* Select mcp */}
          {highlightPIP && (
            <img
              src={pipHighlight}
              alt="pip highlight"
              class="absolute top-4.5 left-7.5 w-88 object-cover"
            />
          )}
          {captionPIP && (
            <img
              src={pipCaption}
              alt="pip caption"
              class="absolute top-4.5 left-7.5 w-88 object-cover"
            />
          )}
          {buttonHidePIPmiddle && (
            <button
              type="button"
              onClick={hidePIP}
              class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              // class="absolute rounded-lg"
              style={{
                width: "28px",
                height: "17px",
                top: "90px",
                left: "166px",
                zIndex: 1,
              }}
            />
          )}
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
