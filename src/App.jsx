import React from "react";  
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import Shop from "./components/Shop.jsx";
import Forum from "./components/Forum.jsx";
import QA from "./components/QuestionAndAnswer.jsx";
import IngredientsDetails from "./components/IngredientsDetails.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/forum/qa" element={<QA />} />
      <Route path="/product/:id" element={<Forum />} />
      <Route path="/ingredient/:name" element={<IngredientsDetails />} />
    </Routes>
  );
}

export default App;
