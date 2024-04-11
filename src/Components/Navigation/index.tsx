import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

const Navigation = () => {
  const location = useLocation();
  const links = [
    { label: "Home", path: "Home" },
    { label: "Log in", path: "Login" },
    { label: "Search Tech", path: "Search" },
    {
      label: "Categories",
      subLinks: [
        { label: "Monitor", path: "Monitor" },
        { label: "Keyboard", path: "Keyboard" },
        { label: "Mouse", path: "Mouse" },
        { label: "Headset", path: "Headset" },
        { label: "GamePad", path: "Gamepad" },
        { label: "MouseFeet", path: "MouseFeet" },
        { label: "MousePad", path: "MousePad" },
      ],
    },
    { label: "Our Service", path: "Service" },
    { label: "Tech-Reviews", path: "Review" },
  ];

  return (
    <div>
      <nav className="sidebar-navigation">
        <ul className="navigation-list">
          {links.map((link, index) => {
            const isActive = location.pathname === `/Pages/${link.path}`;
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
                            location.pathname === `/Pages${subLink.path}`
                              ? "active"
                              : ""
                          }
                        >
                          <Link
                            to={`/Categories/${subLink.path}`}
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
                    to={`/${link.path}`}
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
    </div>
  );
};

export default Navigation;
