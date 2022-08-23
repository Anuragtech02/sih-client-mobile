import axios from "axios";
import React, { createContext, useState, ReactNode, useEffect } from "react";
import { IArticle, IArticleCard, IArticleContext } from "./interfaces";

const API_ARTICLE = axios.create({
  baseURL: `https://sih-server-staging.onrender.com/article`,
});

const ArticleContext = createContext<IArticleContext>({
  articles: [],
  getArticle: () => ({} as IArticle),
  updateViewsByOne: () => {},
  likeArticle: () => {},
  saveArticle: () => {},
});

interface IArticleContextContextProvider {
  children: ReactNode;
}

export const ArticleContextProvider: React.FC<
  IArticleContextContextProvider
> = ({ children }) => {
  const [articles, setArticles] = useState<Array<IArticleCard>>([]);

  useEffect(() => {
    async function fetchArticles() {
      const res = await API_ARTICLE.get("/all");
      setArticles(res.data);
      console.log({ res });
    }
    fetchArticles();
  }, []);

  function getArticle(id: string) {
    return {} as IArticle;
  }

  async function updateViewsByOne(id: string) {
    return await {};
  }

  async function likeArticle(id: string) {
    return await {};
  }

  async function saveArticle(id: string) {
    return await {};
  }

  return (
    <ArticleContext.Provider
      value={{
        articles,
        getArticle,
        updateViewsByOne,
        likeArticle,
        saveArticle,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticleContext;
