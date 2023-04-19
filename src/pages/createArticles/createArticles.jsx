import React from "react";
import "./createArticles.css";
import { articlesList } from "../../data/articles";

export const CreateArticles = () => {
  return (
    <div>
      <h1 className="page-title">Create article</h1>
      <div>
        <div>
          <div>
            <h2>title</h2>
            <input type="text" />
          </div>
          <div>
            <h2>picture url</h2>
            <input type="url" />
          </div>
          <h2>Article</h2>
          <input type="text" />
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};
