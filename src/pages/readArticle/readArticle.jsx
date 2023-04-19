import React from "react";
import { useParams } from "react-router-dom";
import "./readArticle.css";
import { articlesList } from "../../data/articles";

export const ReadArticle = () => {
  const { articleId } = useParams();
  const article = articlesList[articleId - 1]

  return (
    <div>
      <img src={article.imageUrl} alt="article" className="read-image" />
      <div className="read-content-container">
        <h1 className="read-title">{article.title}</h1>
        <p className="read-content">{article.content}</p>
      </div>
    
    </div>
  );
}