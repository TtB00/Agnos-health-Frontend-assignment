import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import fingerPic from "../../assets/default-finger.png";
import dipHighlight from "../../assets/dip-highlight.png";
import dipCaption from "../../assets/dip-active.png";
import mcpHighlight from "../../assets/mcp-highlight.png";
import mcpCaption from "../../assets/mcp-active.png";
import pipHighlight from "../../assets/pip-highlight.png";
import pipCaption from "../../assets/pip-active.png";
import allHand from "../../assets/others-highlight.png";

function FingerArea() {
  const navigate = useNavigate();

  //navigate
  const nextPage = () => {
    navigate("/abdominal");
  };

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

  const [buttonAll, setButtonAll] = useState(true);

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
  const [highlightAll, setHighlightAll] = useState(false);

  //Caption
  const [captionDIP, setCaptionDIP] = useState(false);
  const [captionMCP, setCaptionMCP] = useState(false);
  const [captionPIP, setCaptionPIP] = useState(false);

  //check action
  const actionSelect = () => {
    return highlightDIP || highlightMCP || highlightPIP;
  };

  //check all highlight
  const checkHighlight = () => {
    if (highlightDIP || highlightMCP || highlightPIP) {
      setHighlightAll(false);
    }
  };

  //update caption
  useEffect(() => {
    const updateCaption = () => {
      const allHighlightsActive = highlightDIP && highlightMCP && highlightPIP;

      if (allHighlightsActive) {
        setCaptionDIP(false);
        setCaptionMCP(false);
        setCaptionPIP(false);
        setHighlightAll(true);
        setButtonAll(false);
      } else {
        setCaptionDIP(highlightDIP);
        setCaptionMCP(highlightMCP);
        setCaptionPIP(highlightPIP);
      }
    };
    updateCaption();
  });

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
  const showAll = () => {
    setButtonAll(false);
    setHighlightAll(true);

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
    setButtonAll(true);
    checkHighlight();
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
    setButtonAll(true);
    checkHighlight();
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
    setButtonAll(true);
    checkHighlight();
  };

  return (
    <div className="p-14 flex flex-col justify-center items-center">
      <div class="relative rounded-2xl border-2 border-white shadow-custom flex flex-col mb-4 pb-4 w-96 h-auto bg-white">
        <h1 class="text-zinc-600 text-xl font-kanit text-center mt-4">
          จุดไหนที่คุณปวดนิ้วมากที่สุด ?
        </h1>
        <div class="flex justify-center items-center h-full relative">
          <img src={fingerPic} alt="Finger" class="h-full object-cover" />

          {/* Button dip show highlight */}
          {buttonDIPmiddle && (
            <button
              type="button"
              onClick={showDIP}
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
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
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
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
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
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
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "22px",
                height: "19px",
                top: "107px",
                left: "78px",
                zIndex: 1,
              }}
            />
          )}

          {/* Button pip show highlight */}
          {buttonPIPmiddle && (
            <button
              type="button"
              onClick={showPIP}
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "28px",
                height: "17px",
                top: "90px",
                left: "166px",
                zIndex: 1,
              }}
            />
          )}
          {buttonPIPring && (
            <button
              type="button"
              onClick={showPIP}
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "27px",
                height: "17px",
                top: "106px",
                left: "126px",
                zIndex: 1,
              }}
            />
          )}
          {buttonPIPindex && (
            <button
              type="button"
              onClick={showPIP}
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "28px",
                height: "17px",
                top: "96px",
                left: "209px",
                zIndex: 1,
              }}
            />
          )}
          {buttonPIPlittle && (
            <button
              type="button"
              onClick={showPIP}
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "25px",
                height: "17px",
                top: "141px",
                left: "90px",
                zIndex: 1,
              }}
            />
          )}
          {buttonPIPthumb && (
            <button
              type="button"
              onClick={showPIP}
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "24px",
                height: "19px",
                top: "184px",
                left: "290px",
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
                width: "263px",
                height: "38px",
                top: "405px",
                left: "54px",
                zIndex: 1,
              }}
            />
          )}

          {/* Button mcp show highlight */}
          {buttonMCPmiddle && (
            <button
              type="button"
              onClick={showMCP}
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "32px",
                height: "19px",
                top: "158px",
                left: "169px",
                zIndex: 1,
              }}
            />
          )}
          {buttonMCPring && (
            <button
              type="button"
              onClick={showMCP}
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "32px",
                height: "19px",
                top: "168px",
                left: "135px",
                zIndex: 1,
              }}
            />
          )}
          {buttonMCPindex && (
            <button
              type="button"
              onClick={showMCP}
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "31px",
                height: "20px",
                top: "157px",
                left: "205px",
                zIndex: 1,
              }}
            />
          )}
          {buttonMCPlittle && (
            <button
              type="button"
              onClick={showMCP}
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "30px",
                height: "19px",
                top: "183px",
                left: "105px",
                zIndex: 1,
              }}
            />
          )}
          {buttonMCPthumb && (
            <button
              type="button"
              onClick={showMCP}
              // class="absolute bg-transparent border-2 border-dashed border-blue-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "25px",
                height: "24px",
                top: "234px",
                left: "260px",
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
              // class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
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
              // class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
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
              // class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
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
              // class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "22px",
                height: "19px",
                top: "107px",
                left: "78px",
                zIndex: 1,
              }}
            />
          )}

          {/* Select pip */}
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
              // class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "28px",
                height: "17px",
                top: "90px",
                left: "166px",
                zIndex: 1,
              }}
            />
          )}
          {buttonHidePIPring && (
            <button
              type="button"
              onClick={hidePIP}
              // class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "27px",
                height: "17px",
                top: "106px",
                left: "126px",
                zIndex: 1,
              }}
            />
          )}
          {buttonHidePIPindex && (
            <button
              type="button"
              onClick={hidePIP}
              // class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "28px",
                height: "17px",
                top: "96px",
                left: "209px",
                zIndex: 1,
              }}
            />
          )}
          {buttonHidePIPlittle && (
            <button
              type="button"
              onClick={hidePIP}
              // class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "25px",
                height: "17px",
                top: "141px",
                left: "90px",
                zIndex: 1,
              }}
            />
          )}
          {buttonHidePIPthumb && (
            <button
              type="button"
              onClick={hidePIP}
              // class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "24px",
                height: "19px",
                top: "184px",
                left: "290px",
                zIndex: 1,
              }}
            />
          )}

          {/* Select mcp */}
          {highlightMCP && (
            <img
              src={mcpHighlight}
              alt="mcp highlight"
              class="absolute top-4.5 left-7.5 w-88 object-cover"
            />
          )}
          {captionMCP && (
            <img
              src={mcpCaption}
              alt="mcp caption"
              class="absolute top-4.5 left-7.5 w-88 object-cover"
            />
          )}
          {buttonHideMCPmiddle && (
            <button
              type="button"
              onClick={hideMCP}
              // class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "32px",
                height: "19px",
                top: "158px",
                left: "169px",
                zIndex: 1,
              }}
            />
          )}
          {buttonHideMCPring && (
            <button
              type="button"
              onClick={hideMCP}
              // class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "32px",
                height: "19px",
                top: "168px",
                left: "135px",
                zIndex: 1,
              }}
            />
          )}
          {buttonHideMCPindex && (
            <button
              type="button"
              onClick={hideMCP}
              // class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "31px",
                height: "20px",
                top: "157px",
                left: "205px",
                zIndex: 1,
              }}
            />
          )}
          {buttonHideMCPlittle && (
            <button
              type="button"
              onClick={hideMCP}
              // class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "30px",
                height: "19px",
                top: "183px",
                left: "105px",
                zIndex: 1,
              }}
            />
          )}
          {buttonHideMCPthumb && (
            <button
              type="button"
              onClick={hideMCP}
              // class="absolute bg-transparent border-2 border-dashed border-red-500 focus:outline-none rounded-lg"
              class="absolute rounded-lg"
              style={{
                width: "25px",
                height: "24px",
                top: "234px",
                left: "260px",
                zIndex: 1,
              }}
            />
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={nextPage}
        disabled={!actionSelect()}
        class={`focus:outline-none font-kanit text-center text-xl w-96 ${
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

export default FingerArea;
