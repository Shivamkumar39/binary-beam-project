import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FormPage from "./page/FormPage";
import ResultPage from "./page/ResultPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}
