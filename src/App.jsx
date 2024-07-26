import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AbdominalArea from "./containers/Abdominal/index.jsx";
import FingerArea from "./containers/Finger/index.jsx";
import "./index.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="bg-auto bg-center bg-white">
      <BrowserRouter>
        <Routes>
          <Route index element={<AbdominalArea />} />
          <Route path="/abdominal" element={<AbdominalArea />} />

          <Route path="/finger" element={<FingerArea />} />
        </Routes>
      </BrowserRouter>
      {/* <h1 class="text-black">Abdominal</h1>
        <div>
          <img src={abdominal} alt="Abdominal" />
        </div> */}
    </div>
  );
}

// export default App;
