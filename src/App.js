import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import CartPage from "./page/CartPage";
import Header from "./component/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cartpage" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
