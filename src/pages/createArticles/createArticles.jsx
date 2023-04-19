import React from "react";
import "./createArticles.css";
import { articlesList } from "../../data/articles";

export const CreateArticles = () => {

  const submitArticle = () => {
  }

  return (
    <div>
      <h1 className="page-title">Create article</h1>
      <div className="create-article-center">
        <div>
          <div className="create-article-top-input">
            <div>
              <h2>Title</h2>
              <input type="text" className="create-article-input" />
            </div>
            <div>
              <h2>Picture URL</h2>
              <input type="url" className="create-article-input" />
            </div>
          </div>
          <h2>Article</h2>
          <textarea
            name="article content"
            rows="8"
            cols="100"
            className="create-article-text"
          />
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};
