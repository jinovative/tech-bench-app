import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import Login from "./Components/Login";
import Search from "./Components/Search";
import Service from "./Components/Service";
import Review from "./Components/Review";
import Category from "./Categories";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid px-0">
        <div className="row flex-nowrap">
          <div className="col-3">
            <Navigation />
          </div>
          <div className="col">
            <Routes>
              <Route path="*" element={<h1>404</h1>} />
              <Route path="/" element={<Navigate replace to="/Home" />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Search" element={<Search />} />
              <Route path="/Service" element={<Service />} />
              <Route path="/Review" element={<Review />} />
              <Route path="/Categories/:name" element={<Category />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
