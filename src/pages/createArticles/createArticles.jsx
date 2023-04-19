import React from "react";
import "./createArticles.css";
import { articlesList } from "../../data/articles";

export const CreateArticles = () => {

  const submitArticle = () => {
    const title = document.querySelector("input[name='title']").value;
    const imageUrl = document.querySelector("input[name='picture']").value;
    const content = document.querySelector("textarea[name='content']").value;

    const newArticle = {
      title,
      imageUrl,
      content,
      id: articlesList.length + 1,
    };

    articlesList.push(newArticle);
  }

  return (
    <div>
      <h1 className="page-title">Create article</h1>
      <div className="create-article-center">
        <div>
          <div className="create-article-top-input">
            <div>
              <h2>Title</h2>
              <input type="text" className="create-article-input" name="title" />
            </div>
            <div>
              <h2>Picture URL</h2>
              <input type="url" className="create-article-input" name="picture" />
            </div>
          </div>
          <h2>Article</h2>
          <textarea
            name="content"
            rows="8"
            cols="100"
            className="create-article-text"
          />
        </div>
        <button onClick={() => submitArticle()}>Submit</button>
      </div>
    </div>
  );
};
