import { React, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "@components/ScrollToTop/ScrollToTop";
import { Public } from "./pages/Public/Public";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<Public />} />
      </Routes>
    </>
  );
}

export default App;
