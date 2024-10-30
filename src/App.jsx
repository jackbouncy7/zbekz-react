import { React, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Public } from "./pages/Public/Public";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Public />} />
      </Routes>
    </>
  );
}

export default App;
