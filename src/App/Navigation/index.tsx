import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

const Navigation = () => {
  const location = useLocation();
  const links = [
    { label: "Log in", path: "login" },
    { label: "Search Tech", path: "search-bar" },
    {
      label: "Categories",
      subLinks: [
        { label: "Monitor", path: "monitor" },
        { label: "Keyboard", path: "keyboard" },
        { label: "Mouse", path: "mouse" },
        { label: "Headset", path: "headset" },
        { label: "GamePad", path: "gamepad" },
        { label: "MouseFeet", path: "mousefeet" },
        { label: "MousePad", path: "mousepad" },
      ],
    },
    { label: "Our Service", path: "service" },
    { label: "Tech-Reviews", path: "review" },
  ];

  return (
    <nav className="sidebar-navigation">
      <ul className="navigation-list">
        {links.map((link, index) => {
          const isActive = location.pathname === `/App/${link.path}`;
          return (
            <li key={index} className={isActive ? "active" : ""}>
              {link.subLinks ? (
                <>
                  <button className="navigation-button">
                    <span>{link.label}</span>
                  </button>
                  <ul className="sublink-list">
                    {link.subLinks.map((subLink, subIndex) => (
                      <li
                        key={subIndex}
                        className={
                          location.pathname === `/App/${subLink.path}`
                            ? "active"
                            : ""
                        }
                      >
                        <Link
                          to={`/App/${subLink.path}`}
                          className="navigation-link"
                        >
                          <span>{subLink.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  to={`/App/${link.path}`}
                  className={`navigation-link ${isActive ? "active" : ""}`}
                >
                  <span>{link.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
