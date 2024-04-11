import React, { useState } from "react";
import "./styles.css";

const GearItem = ({ gear, to }: { gear: any; to: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="home-gear-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3>{gear.name}</h3>
      <img src={gear.imgSrc} alt={gear.alt} />
      {isHovered && (
        <div className="detail-box">
          <button>
            <a href={to}>Explore</a>
          </button>
        </div>
      )}
    </div>
  );
};

export default GearItem;
