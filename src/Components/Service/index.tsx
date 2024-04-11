import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./Service.css";

function Service() {
  return (
    <div className="service-container">
      <h1 className="service-title">Welcome to Tech-Bench!</h1>
      <p className="service-description">
        Tech-Bench is a free service dedicated to providing accurate benchmarks
        for various computer peripherals, ensuring consumers make informed
        purchasing decisions based on real performance metrics rather than
        marketing hype.
      </p>
      <p>
        Our platform continuously updates with benchmarks from a wide range of
        devices, guaranteeing precise measurements for monitors, keyboards,
        mice, mousepads, mouse feet, gamepads, headsets, and headphones.
      </p>
      <p>
        Unlike marketing benchmarks provided by manufacturers, we pride
        ourselves on delivering transparent and unbiased performance data,
        empowering consumers with the knowledge they need to make wise
        purchasing choices.
      </p>
      <div>
        <p>
          <button className="service-cta">
            <Link to="/login">
              Join Tech-Bench today and navigate the world of computer
              peripherals confidently, armed with accurate benchmarks and the
              assurance of making informed decisions.
            </Link>
          </button>
        </p>
      </div>
    </div>
  );
}

export default Service;
