import React, { createContext, useState, ReactNode } from "react";
import { IArticle, IArticleCard, IArticleContext } from "./interfaces";

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
