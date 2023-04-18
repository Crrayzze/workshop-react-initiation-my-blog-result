import React from "react";
import "./navigationBar.css";
import { useLocation, useNavigate } from "react-router-dom";

export const NavigationBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (destination) => {
    console.log(destination);
    if (location.pathname !== destination) {
      navigate(destination);
    }
  };

  return (
    <nav className="navigation-bar">
      <div
        className="navigation-website-title"
        onClick={() => handleClick("/")}
      >
        My name
      </div>
      <div className="navigation-right">
        <div className="navigation-element" onClick={() => handleClick("/")}>
          Articles
        </div>
        <div
          className="navigation-element"
          onClick={() => handleClick("/portfolio")}
        >
          Portfolio
        </div>
        <div
          className="navigation-element"
          onClick={() => handleClick("/aboutMe")}
        >
          About Me
        </div>
        <button
          className="create-button"
          onClick={() => handleClick("/createArticles")}
        >
          Create article
        </button>
      </div>
    </nav>
  );
};
