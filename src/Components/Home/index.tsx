import React from "react";
import GearItem from "../Utils/Hovered/GearItem";
import "./styles.css";

const gearList = [
  { name: "Monitor", imgSrc: "/img/monitor.png", alt: "Monitor" },
  { name: "Keyboard", imgSrc: "/img/keyboard.png", alt: "Keyboard" },
  { name: "Mouse", imgSrc: "/img/mouse.png", alt: "Mouse" },
  { name: "Mouse pad", imgSrc: "/img/mousepad.png", alt: "Mouse pad" },
  { name: "Gamepad", imgSrc: "/img/gamepad.png", alt: "Gamepad" },
  { name: "Headset", imgSrc: "/img/headset.png", alt: "Headset" },
];

function Home() {
  return (
    <div className="home-container">
      <h2 className="home-title">Gaming Gear Benchmark</h2>
      <p className="home-description">
        Explore the performance of gaming gear and find the best fit for your
        needs.
      </p>
      <div className="home-gear-list">
        {gearList.map((gear, index) => (
          <GearItem
            key={gear.name}
            gear={gear}
            to={`/Categories/${gear.name}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
