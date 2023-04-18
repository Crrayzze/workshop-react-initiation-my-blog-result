import React from "react";
import "./articleCard.css";

export const ArticleCard = ({ title, content, imageUrl }) => {
  const getHundredFirstCharacters = (text) => {
    return text.slice(0, 250) + "...";
  };

  return (
    <div className="article-card">
      <img src={imageUrl} alt="article" className="article-card-image" />
      <div className="article-card-title">{title}</div>
      <div className="article-card-text-wrapper">
        <div className="article-card-text">
          {getHundredFirstCharacters(content)}
        </div>
      </div>
    </div>
  );
};
