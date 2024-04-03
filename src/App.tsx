import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./App/Navigation";
// import "./App/index.css"; // Assuming you have global styles you want to apply

function App() {
  return (
    <HashRouter>
      <div className="d-flex">
        <Navigation />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            {/* Define your main routes here */}
            {/* For example */}
            {/* <Route path="/login" element={<LoginComponent />} /> */}
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
