import React from "react";
import { useParams } from "react-router-dom";
import Monitor from "./Monitor";
import Keyboard from "./Keyboard";
import Mouse from "./Mouse";
import MousePad from "./MousePad";
import Gamepad from "./GamePad";
import Headset from "./Headset";

const Category = () => {
  const { name } = useParams();

  switch (name) {
    case "Monitor":
      return <Monitor />;
    case "Keyboard":
      return <Keyboard />;
    case "Mouse":
      return <Mouse />;
    case "MousePad":
      return <MousePad />;
    case "Gamepad":
      return <Gamepad />;
    case "Headset":
      return <Headset />;
    default:
      return <h1>404</h1>;
  }
};

export default Category;
