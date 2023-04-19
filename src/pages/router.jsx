import React from "react";
import { Home } from "./home/home";
import { AboutMe } from "./aboutMe/aboutMe";
import { Portfolio } from "./portfolio/portfolio";
import { CreateArticles } from "./createArticles/createArticles";
import { ReadArticle } from "./readArticle/readArticle";
import { Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutMe" element={<AboutMe />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/createArticles" element={<CreateArticles />} />
      <Route path="/articles/:articleId" element={<ReadArticle />} />
    </Routes>
  );
}
